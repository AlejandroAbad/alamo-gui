import React from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
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
	const [estadoInstalacion, setEstadoInstalacion] = React.useState(new EstadoInstalacion({}));
	const { lastMessage, readyState } = useWebSocket('ws://alamo.local:1880/solar');

	React.useEffect(() => {
		if (lastMessage !== null) {
			try {
				let json = JSON.parse(lastMessage.data)
				setEstadoInstalacion(new EstadoInstalacion(json));
			} catch (e) {
				console.log(e)
			}
		}
	}, [lastMessage, setEstadoInstalacion]);

	if (!estadoInstalacion) return null;
	return <OverviewFlow estadoInstalacion={estadoInstalacion} estadoWebSocket={connectionStatus[readyState]} />
}

export default App;