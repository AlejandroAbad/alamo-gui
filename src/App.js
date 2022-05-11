import React from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import EstadoConsumos from './EstadoConsumos';
import EstadoInstalacion from './EstadoInstalacion';

import OverviewFlow from './Flow';

const connectionStatus = {
	[ReadyState.CONNECTING]: 'Iniciando conexión',
	[ReadyState.OPEN]: 'Conectado',
	[ReadyState.CLOSING]: 'Cerrando conexión',
	[ReadyState.CLOSED]: 'Conexión cerrada',
	[ReadyState.UNINSTANTIATED]: 'Sin inicializar',
};

const App = () => {

	const [estadoInstalacion, setEstadoInstalacionSolar] = React.useState(new EstadoInstalacion({}));
	const estadoConsumos = React.useRef(new EstadoConsumos(0));

	const { lastMessage: datosSolar, readyState: estadoWsSolar } = useWebSocket('ws://alamo.local:1880/solar');
	const { lastMessage: datosConsumos, readyState: estadoWsConsumos } = useWebSocket('ws://alamo.local:1880/consumos');

	React.useEffect(() => {
		if (datosSolar !== null) {
			try {
				let json = JSON.parse(datosSolar.data)
				let estadoInstalacion = new EstadoInstalacion(json);
				estadoConsumos.current.lecturaConsumo(estadoInstalacion.consumos.potenciaConsumida)
				setEstadoInstalacionSolar(estadoInstalacion);
			} catch (e) {
				console.log(e)
			}
		}
	}, [estadoConsumos, datosSolar, setEstadoInstalacionSolar]);

	React.useEffect(() => {
		if (datosConsumos !== null) {
			try {
				let json = JSON.parse(datosConsumos.data)
				estadoConsumos.current.lecturaDispositivo(json);
			} catch (e) {
				console.log(e)
			}
		}
	}, [datosConsumos, estadoConsumos]);

	if (!estadoInstalacion) return null;
	return <OverviewFlow 
		estadoInstalacion={estadoInstalacion}  
		estadoConsumos={estadoConsumos.current}
		estadoWebSocket={{
			solar: connectionStatus[estadoWsSolar],
			consumos: connectionStatus[estadoWsConsumos]
		}}
	/>
}

export default App;