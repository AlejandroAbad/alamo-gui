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
const nodeTypes = {
	inversor: NodoInversor,
	medidor: NodoMedidor,
	consumos: NodoConsumos,
	grid: NodoGrid,
	solar: NodoSolar
}



const OverviewFlow = ({ datos, estadoConexion }) => {

	let nodos = React.useMemo(() => generarNodos({ datos }), [datos]);
	let aristas = React.useMemo(() => generarAristas({ datos }), [datos]);


	return (
		<div style={{ width: 1000, height: 730 }}>
			<ReactFlow
				defaultNodes={nodos}
				defaultEdges={aristas}
				nodeTypes={nodeTypes}
			>
			</ReactFlow>
		</div>
	);
};



export default OverviewFlow;