import React from 'react';
import { Handle } from 'react-flow-renderer';

//MUI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue, red, green } from '@mui/material/colors';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


export default React.memo(({ data: estado }) => {

	let valor = Math.max(estado.red.potenciaImportada, estado.red.potenciaExportada)
	let sentido = estado.red.potenciaImportada ? 1 : -1;
	let icono = estado.red.potenciaImportada > 0 ?
		<ArrowBackIosNewRoundedIcon sx={{ bgcolor: red[300], width: 12, height: 12 }} /> :
		<ArrowForwardIosRoundedIcon sx={{ bgcolor: green[300], width: 12, height: 12 }} />;

	return (
		<>
			<Card variant="outlined" sx={{ px: 1, py: 0, minWidth: 135 }}>
				<CardHeader sx={{ p: 1, pt: 2 }}
					avatar={<Avatar sx={{ bgcolor: blue[300], width: 30, height: 30 }} >
						<ElectricMeterIcon sx={{ width: 18 }} />
					</Avatar>}
					title={<Typography variant="h6" component="div">Meter</Typography>}
				/>
				<CardContent sx={{ p: 1, py: 0 }}>
					<Typography variant="body1" component="div" color="text.primary">
						{icono} {valor * sentido} W
					</Typography>
					<Typography variant="body2" component="div" color="text.secondary">
						{estado.red.voltaje} V • {estado.red.frecuencia} Hz
					</Typography>
				</CardContent>
				<CardContent sx={{ p: 1, pt: 0 }}>
					<Typography variant="caption" component="div" color="text.secondary">
						{Math.round(estado.red.potenciaReactiva * 100) / 100} KVAr ({estado.red.factorPotencia})
					</Typography>
				</CardContent>
				<CardContent sx={{ display: 'none' }} />
			</Card>
			<Handle
				type="target"
				position="left"
				id="hExportacionGrid"
				style={{ top: '40px' }}
			/>
			<Handle
				type="source"
				position="left"
				id="hImportacionGrid"
				style={{ top: '70px' }}
			/>
		</>
	);
});
