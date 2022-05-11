
class Dispositivo {

	#id = '';
	#nombre = '';
	#encendido = false;
	#consumo = 0;
	#esResto = false;

	constructor(datos) {
		this.#id = datos.id;
		this.#nombre = datos.nombre;
		this.#encendido = datos.encendido;
		this.#consumo = datos.consumo;
		this.#esResto = Boolean(datos.esResto);
	}

	get id() {
		return this.#id;
	}
	get nombre() {
		return this.#nombre;
	}
	get encendido() {
		return this.#encendido;
	}
	get consumo() {
		return this.#consumo;
	}
	get esResto() {
		return this.#esResto;
	}

	toString() {
		return `${this.#id}, ${this.#encendido}, ${this.#consumo}`
	}
}

class EstadoConsumos {
	
	#consumoTotal = 0;
	#dispositivos = {};
	#dispositivoResto = null;

	constructor(consumo) {
		this.#consumoTotal = consumo;
		this.#dispositivoResto = this.#generaDisposivitoResto(consumo)
	}

	get dispositivos() {
		return [...Object.values(this.#dispositivos).sort(), this.#dispositivoResto];
	}

	lecturaConsumo(consumo) {
		this.#consumoTotal = consumo;
		this.#actualizaDispositivoResto();
	}

	lecturaDispositivo(datos) {
		let dispositivo = new Dispositivo(datos);
		this.#dispositivos[dispositivo.id] = dispositivo;
		this.#actualizaDispositivoResto();
	}

	#generaDisposivitoResto(consumo) {
		return new Dispositivo({
			id: '__RESTO__',
			nombre: 'Resto de consumos',
			encendido: Boolean(consumo > 0),
			consumo: consumo,
			esResto: true
		})
	}

	#calculaConsumoDispositivos() {
		let consumoDispositivos = 0;
		for (let id in this.#dispositivos) {
			consumoDispositivos += this.#dispositivos[id].consumo;
		}
		return consumoDispositivos;
	}

	#actualizaDispositivoResto() {
		let consumoDispositivos = this.#calculaConsumoDispositivos();
		let consumoResto = this.#consumoTotal - consumoDispositivos;
		this.#dispositivoResto = this.#generaDisposivitoResto(consumoResto);
	}



}


export default EstadoConsumos;
