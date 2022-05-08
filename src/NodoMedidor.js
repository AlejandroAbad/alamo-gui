import React from 'react';

//MUI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue, red, green } from '@mui/material/colors';
import SpeedIcon from '@mui/icons-material/Speed';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export default React.memo(({ data }) => {

	let valor = Math.max(data['potenciaImportada'], data['potenciaExportada'])
	let sentido = data['potenciaImportada'] ? 1 : -1;
	let icono = data['potenciaImportada'] > 0 ?
		<ArrowBackIosNewRoundedIcon sx={{ bgcolor: red[300], width: 12, height: 12 }} /> :
		<ArrowForwardIosRoundedIcon sx={{ bgcolor: green[300], width: 12, height: 12 }} />;

	return (
		<>

			<Card variant="outlined" sx={{ px: 1, py: 0, minWidth: 135 }}>
				<CardHeader sx={{ p: 1, pt: 2 }}
					avatar={<Avatar sx={{ bgcolor: blue[300], width: 30, height: 30 }} >
						<SpeedIcon sx={{ width: 18 }} />
					</Avatar>}
					title={<Typography variant="h6" component="div">Meter</Typography>}
				/>
				<CardContent sx={{ p: 1, py: 0 }}>
					<Typography variant="body1" component="div" color="text.primary">
						{icono} {valor * sentido} W
					</Typography>
					<Typography variant="body2" component="div" color="text.secondary">
						{data['meterVoltaje']} V • {data['meterFrecuencia']} Hz
					</Typography>
				</CardContent>
				<CardContent sx={{ p: 1, py: 0 }}>
					<Typography variant="caption" component="div" color="text.secondary">
						{Math.round(data['meterPotenciaReactiva'] * 100) / 100} KVAr ({Math.round(data['meterFactorPotencia'] * 100) / 100})
					</Typography>
				</CardContent>
				<CardContent sx={{ display: 'none' }} />
			</Card>

		</>
	);
});
