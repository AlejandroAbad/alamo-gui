import { ESTADOS_INVERSOR, ALARMAS_INVERSOR, FLAGS_INVERSOR } from './constantesInversor';



class EstadoConsumos {
	#potenciaConsumida = 0;
	#intensidadConsumida = 0;

	constructor(datos) {
		if (!datos) return;
		this.#potenciaConsumida = datos.potenciaConsumida;
		this.#intensidadConsumida = datos.intensidadConsumida;
	}

	get potenciaConsumida() {
		return this.#potenciaConsumida;
	}
	get intensidadConsumida() {
		return this.#intensidadConsumida;
	}
}

class EstadoRed {
	#voltaje = 0;
	#frecuencia = 0;
	#factorPotencia = 0;
	#potenciaReactiva = 0;
	#potenciaImportada = 0;
	#potenciaExportada = 0;
	#intensidadImportada = 0;
	#intensidadExportada = 0;
	#meterOnline = false;

	constructor(datos) {
		if (!datos) return;
		this.#voltaje = datos.meterVoltaje;
		this.#frecuencia = datos.meterFrecuencia;
		this.#factorPotencia = datos.meterFactorPotencia;
		this.#potenciaReactiva = datos.meterPotenciaReactiva;
		this.#potenciaImportada = datos.potenciaImportada;
		this.#potenciaExportada = datos.potenciaExportada;
		this.#intensidadImportada = datos.intensidadImportada;
		this.#intensidadExportada = datos.intensidadExportada;
		this.#meterOnline = datos.meterOnline;
	}

	get voltaje() {
		return this.#voltaje;
	}
	get frecuencia() {
		return this.#frecuencia;
	}
	get factorPotencia() {
		return this.#factorPotencia;
	}
	get potenciaReactiva() {
		return this.#potenciaReactiva;
	}
	get potenciaImportada() {
		return this.#potenciaImportada;
	}
	get potenciaExportada() {
		return this.#potenciaExportada;
	}
	get intensidadImportada() {
		return this.#intensidadImportada;
	}
	get intensidadExportada() {
		return this.#intensidadExportada;
	}
	get meterOnline() {
		return this.#meterOnline;
	}


	estaImportando() {
		return this.#potenciaImportada > 0;
	}
	estaExportando() {
		return this.#potenciaExportada > 0;
	}
}

class EstadoMppt {
	#voltaje = 0;
	#intensidad = 0;
	#potencia = 0;

	constructor(v, i) {
		this.#voltaje = v;
		this.#intensidad = i;
		this.#potencia = v * i;
	}

	get voltaje() {
		return this.#voltaje;
	}
	get intensidad() {
		return this.#intensidad;
	}
	get potencia() {
		return this.#potencia;
	}
}

class EstadoInversor {
	// ESTADO DE LAS PLACAS
	#mppts = [];
	#potenciaPlacas = 0;

	// ESTADO DE CONEXION A LA RED
	#voltaje = 0;
	#frecuencia = 0;
	#factorPotencia = 0;
	#potenciaReactiva = 0;
	#potenciaGenerada = 0;
	#intensidadGenerada = 0;

	// ESTADO INTERNO DEL INVERSOR
	#temperatura = 0;
	#codigoEstado = ESTADOS_INVERSOR['desconocido'];
	#bitmapAlarmas = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
	#bitmapEstados = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

	constructor(datos) {
		if (!datos) return;
		this.#mppts.push(new EstadoMppt(datos['ac1.v'], datos['ac1.a']))
		this.#mppts.push(new EstadoMppt(datos['ac2.v'], datos['ac2.a']))
		this.#potenciaPlacas = datos.potenciaPlacas;
		this.#voltaje = datos.voltaje;
		this.#frecuencia = datos.frecuencia;
		this.#factorPotencia = datos.factorPotencia;
		this.#potenciaReactiva = datos.potenciaReactiva;
		this.#potenciaGenerada = datos.potenciaGenerada;
		this.#intensidadGenerada = datos.intensidadGenerada;

		this.#temperatura = datos.temperaturaInversor;
		this.#codigoEstado = ESTADOS_INVERSOR[datos.codigoEstadoInversor] || ESTADOS_INVERSOR['desconocido'];

		// BitmapAlarmas
		if (datos.bitmapAlarmasInversor) {
			let arrayAlarmas = JSON.parse(datos.bitmapAlarmasInversor);
			this.#bitmapAlarmas = arrayAlarmas.map(decimal => {
				return ('0000000000000000' + decimal.toString(2)).slice(-16).split('').reverse().map(b => parseInt(b));
			})
		}

		// BitmapEstados
		if (datos.bitmapEstadoInversor) {
			let arrayEstados = JSON.parse(datos.bitmapEstadoInversor);
			this.#bitmapEstados = arrayEstados.map(decimal => {
				return ('0000000000000000' + decimal.toString(2)).slice(-16).split('').reverse().map(b => parseInt(b));
			})
		}

		this.#bitmapAlarmas.forEach((registro, i) => {
			registro.forEach((bit, j) => {
				if (bit) console.log(`${new Date()} ALARMA REGISTRO ${i + 1} BIT ${j}`, ALARMAS_INVERSOR[i + 1][j]);
			})
		})

		this.#bitmapEstados.forEach((registro, i) => {
			registro.forEach((bit, j) => {
				if (bit && !bit /*PA QUE NO DE PORCULO*/) console.log(`FLAG ESTADO ${i + 1} BIT ${j}`, FLAGS_INVERSOR[i + 1][j]);
			})
		})

	}

	get voltaje() {
		return this.#voltaje;
	}
	get frecuencia() {
		return this.#frecuencia;
	}
	get factorPotencia() {
		return this.#factorPotencia;
	}
	get potenciaReactiva() {
		return this.#potenciaReactiva;
	}
	get potenciaGenerada() {
		return this.#potenciaGenerada;
	}
	get potenciaPlacas() {
		return this.#potenciaPlacas;
	}
	get intensidadGenerada() {
		return this.#intensidadGenerada;
	}
	mppt(i) {
		return this.#mppts[i - 1];
	}
	get temperatura() {
		return this.#temperatura;
	}
	get textoEstado() {
		return this.#codigoEstado.texto;
	}
	get colorEstado() {
		return this.#codigoEstado.color;
	}
	get alarmas() {
		return this.#bitmapAlarmas;
	}
	get estados() {
		return this.#bitmapEstados;
	}


	tienePlacasActivas() {
		return this.#potenciaPlacas > 0;
	}
	estaGenerando() {
		return this.#potenciaGenerada > 0;
	}

}


class EstadoInstalacion {
	#consumos;
	#inversor;
	#red;

	constructor(datos) {
		this.#consumos = new EstadoConsumos(datos);
		this.#red = new EstadoRed(datos);
		this.#inversor = new EstadoInversor(datos);
	}

	get consumos() {
		return this.#consumos;
	}
	get inversor() {
		return this.#inversor;
	}
	get red() {
		return this.#red;
	}

}

export default EstadoInstalacion;
