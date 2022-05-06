import React from 'react';
import { Handle } from 'react-flow-renderer';
//MUI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const analizarEstado = (estado) => {
	return {
		standby							: estado & 0b1000000000000000,
		gridConnected					: estado & 0b0100000000000000,
		gridConnectedNormally			: estado & 0b0010000000000000,
		gridConnectedDeratingRationing	: estado & 0b0001000000000000,
		gridConnectedDeratingError		: estado & 0b0000100000000000,
		stopNormal						: estado & 0b0000010000000000,
		stopFault						: estado & 0b0000001000000000,
		stopRationing					: estado & 0b0000000100000000,
		shutdown						: estado & 0b0000000010000000,
		spotCheck						: estado & 0b0000000001000000,
	}
}

const analizarAlarmas = (alarma) => {
	try {
		if (!alarma) return {}
		let alarmas = JSON.parse(alarma);
		return {
			a0: alarmas[0] & 0b1000000000000000,
			a1: alarmas[0] & 0b0100000000000000,
			a2: alarmas[0] & 0b0010000000000000,
			a3: alarmas[0] & 0b0001000000000000,
			a4: alarmas[0] & 0b0000100000000000,
			a5: alarmas[0] & 0b0000010000000000,
			a6: alarmas[0] & 0b0000001000000000,
			a7: alarmas[0] & 0b0000000100000000,
			a8: alarmas[0] & 0b0000000010000000,
			a9: alarmas[0] & 0b0000000001000000,
			aA: alarmas[0] & 0b0000000000100000,
			aB: alarmas[0] & 0b0000000000010000,
			aC: alarmas[0] & 0b0000000000001000,
			aD: alarmas[0] & 0b0000000000000100,
			aE: alarmas[0] & 0b0000000000000010,
			aF: alarmas[0] & 0b0000000000000001,
			b0: alarmas[1] & 0b1000000000000000,
			b1: alarmas[1] & 0b0100000000000000,
			b2: alarmas[1] & 0b0010000000000000,
			b3: alarmas[1] & 0b0001000000000000,
			b4: alarmas[1] & 0b0000100000000000,
			b5: alarmas[1] & 0b0000010000000000,
			b6: alarmas[1] & 0b0000001000000000,
			b7: alarmas[1] & 0b0000000100000000,
			b8: alarmas[1] & 0b0000000010000000,
			b9: alarmas[1] & 0b0000000001000000,
			bA: alarmas[1] & 0b0000000000100000,
			bB: alarmas[1] & 0b0000000000010000,
			bC: alarmas[1] & 0b0000000000001000,
			bD: alarmas[1] & 0b0000000000000100,
			bE: alarmas[1] & 0b0000000000000010,
			bF: alarmas[1] & 0b0000000000000001,
			c0: alarmas[2] & 0b1000000000000000,
			c1: alarmas[2] & 0b0100000000000000,
			c2: alarmas[2] & 0b0010000000000000,
			c3: alarmas[2] & 0b0001000000000000,
			c4: alarmas[2] & 0b0000100000000000,
			c5: alarmas[2] & 0b0000010000000000,
			c6: alarmas[2] & 0b0000001000000000,
			c7: alarmas[2] & 0b0000000100000000,
			c8: alarmas[2] & 0b0000000010000000,
			c9: alarmas[2] & 0b0000000001000000,
			cA: alarmas[2] & 0b0000000000100000,
			cB: alarmas[2] & 0b0000000000010000,
			cC: alarmas[2] & 0b0000000000001000,
			cD: alarmas[2] & 0b0000000000000100,
			cE: alarmas[2] & 0b0000000000000010,
			cF: alarmas[2] & 0b0000000000000001,
		}
	} catch (e) {
		console.error('ALARMA', alarma, e)
	}
	
}

export default React.memo(({ data }) => {

	//let estado = analizarEstado(data.estado);
	let alarmas = analizarAlarmas(data.alarma);

	// console.log(data.estado);
	// console.log(alarmas);
	
	return (
		<>
			<Handle
				type="target"
				position="left"
				id="hGeneracionInversor"
				style={{}}
			/>
			<Card variant="outlined" sx={{ px: 1, py: 0, minWidth: 175 }}>
				<CardHeader sx={{ p: 1, pt: 2 }}
					avatar={<Avatar sx={{ bgcolor: green[300], width: 30, height: 30 }} >
						<ElectricBoltIcon sx={{ width: 20 }} />
					</Avatar>}
					title={<Typography variant="h6" component="div">Inversor</Typography>}
				/>
				<CardContent sx={{ p: 1, py: 0 }}>
					<Typography variant="body1" component="div" color="text.primary">
						{data['potenciaGenerada']} W
					</Typography>
					<Typography variant="body2" component="div" color="text.secondary">
						{data['intensidadGenerada']} A • {data['voltage']} V<br />
					</Typography>
				</CardContent>
				<CardContent sx={{ p: 1, py: 0 }}>
					<Typography variant="caption" component="div" color="text.secondary">
						{Math.round(data['potenciaReactiva'] * 100) / 100} KVAr ({Math.round(data['factorPotencia'] * 100) / 100})
					</Typography>
				</CardContent>
				<CardContent sx={{ display: 'none' }} />
			</Card>
			<Handle
				type="source"
				position="right"
				id="hExportacionInversor"
				style={{ top: '40px' }}
			/>
			<Handle
				type="source"
				position="right"
				id="hAutoconsumoInversor"
				style={{ top: '70px' }}
			/>
		</>
	);
});
