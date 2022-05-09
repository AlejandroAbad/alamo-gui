import { grey, red, green, blue, yellow } from '@mui/material/colors';



export const generarNodos = ({ estadoInstalacion }) => {

	return [
		{
			id: 'solar',
			type: 'solar',
			data: estadoInstalacion,
			position: { x: 10, y: 10 },
		},
		{
			id: 'inversor',
			type: 'inversor',
			data: estadoInstalacion,
			position: { x: 140, y: 160 }
		},
		{
			id: 'consumos',
			type: 'consumos',
			data: estadoInstalacion,
			position: { x: 340, y: 400 },
		},

		{
			id: 'medidor',
			type: 'medidor',
			data: estadoInstalacion,
			position: { x: 530, y: 160 },
		},
		{
			id: 'grid',
			type: 'grid',
			data: estadoInstalacion,
			position: { x: 750, y: 160 },
		},
	];
}

const ESTILO_ARISTA_INACTIVA = { stroke: grey[200], strokeWidth: '2' };
export const generarAristas = ({ estadoInstalacion }) => {
	
	let placasActivas = estadoInstalacion.inversor.tienePlacasActivas();
	let inversorGenerando = estadoInstalacion.inversor.estaGenerando();
	let estaExportando = estadoInstalacion.red.estaExportando();
	let estaImportando = estadoInstalacion.red.estaImportando();

	return [
		{
			id: 'eGeneracion',
			source: 'solar',
			target: 'inversor',
			sourceHandle: 'hGeneracionSolar',
			targetHandle: 'hGeneracionInversor',
			type: 'smoothstep',
			animated: placasActivas,
			style: placasActivas ?
				{ stroke: yellow[800], strokeWidth: '4' } :
				ESTILO_ARISTA_INACTIVA,
		},
		{
			id: 'eAutoconsumo',
			source: 'inversor',
			target: 'consumos',
			sourceHandle: 'hAutoconsumoInversor',
			targetHandle: 'hAutoconsumoConsumos',
			type: 'smoothstep',
			animated: inversorGenerando,
			style: inversorGenerando ?
				{ stroke: blue[300], strokeWidth: '4' } :
				ESTILO_ARISTA_INACTIVA,
		},
		{
			id: 'eExportacion',
			source: 'inversor',
			target: 'grid',
			sourceHandle: 'hExportacionInversor',
			targetHandle: 'hExportacionGrid',
			type: 'smoothstep',
			animated: estaExportando,
			style: estaExportando ?
				{ stroke: green[300], strokeWidth: '4' } :
				ESTILO_ARISTA_INACTIVA,
		},
		{
			id: 'eImportacion',
			source: 'grid',
			target: 'consumos',
			sourceHandle: 'hImportacionGrid',
			targetHandle: 'hImportacionConsumos',
			type: 'smoothstep',
			animated: estaImportando,
			style: estaImportando ?
				{ stroke: red[300], strokeWidth: '4' } :
				ESTILO_ARISTA_INACTIVA,
		}
	]
}


