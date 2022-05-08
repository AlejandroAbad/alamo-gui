import React from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import OverviewFlow from './Flow';

const connectionStatus = {
	[ReadyState.CONNECTING]: 'Iniciando conexión',
	[ReadyState.OPEN]: 'Conectado',
	[ReadyState.CLOSING]: 'Cerrando conexión',
	[ReadyState.CLOSED]: 'Conexión cerrada',
	[ReadyState.UNINSTANTIATED]: 'Sin inicializar',
};

const App = () => {
	const [lectura, setLectura] = React.useState({});
	const { lastMessage, readyState } = useWebSocket('ws://192.168.0.10:1880/solar');

	React.useEffect(() => {
		if (lastMessage !== null) {
			try {
				let json = JSON.parse(lastMessage.data)
				setLectura(json)
			} catch (e) {
				console.lor(e)
			}
		}
	}, [lastMessage, setLectura]);

	return <OverviewFlow datos={lectura} estadoWebSocket={connectionStatus[readyState]} />
}

export default App;