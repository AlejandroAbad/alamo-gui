import React from 'react';
import ReactFlow from 'react-flow-renderer';

import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';

import { generarNodos, generarAristas } from './definicionNodos';

import NodoInversor from './NodoInversor';
import NodoMedidor from './NodoMedidor';
import NodoConsumos from './NodoConsumos';
import NodoGrid from './NodoGrid';
import NodoSolar from './NodoSolar';
import NodoDispositivoConsumo from './NodoDispositivoConsumo';

const tiposDeNodo = {
	inversor: NodoInversor,
	medidor: NodoMedidor,
	consumos: NodoConsumos,
	grid: NodoGrid,
	solar: NodoSolar,
	dispositivoConsumo: NodoDispositivoConsumo
}

const opcionesFlow = {
	nodesDraggable: false,
	nodesConnectable: false,
	elementsSelectable: false,
	panOnDrag: false,
	zoomOnScroll: false,
	zoomOnDoubleClick: false,
	selectNodesOnDrag: false,
	connectOnClick: false
}


const OverviewFlow = ({ estadoInstalacion, estadoConsumos, estadoWebSocket }) => {

	let nodos = React.useMemo(() => generarNodos({ estadoInstalacion, estadoConsumos }), [estadoInstalacion, estadoConsumos]);
	let aristas = React.useMemo(() => generarAristas({ estadoInstalacion, estadoConsumos }), [estadoInstalacion, estadoConsumos]);

	return (
		<div style={{ width: 1000, height: 730 }}>
			<ReactFlow
				defaultNodes={nodos}
				defaultEdges={aristas}
				nodeTypes={tiposDeNodo}
				{...opcionesFlow}
			/>
		</div>
	);
};



export default OverviewFlow;