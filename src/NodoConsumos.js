import React from 'react';
import { Handle } from 'react-flow-renderer';
//MUI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

export default React.memo(({ data: estado }) => {
	return (
		<>
			<Card variant="outlined" sx={{ px: 1, py: 0, minWidth: 175 }}>
				<CardHeader sx={{ p: 1, pt: 2 }}
					avatar={<Avatar sx={{ bgcolor: blue[300], width: 30, height: 30 }} >
						<ElectricalServicesIcon sx={{ width: 24, height: 24 }} />
					</Avatar>}
					title={<Typography variant="h6" component="div">Consumos</Typography>}
				/>
				<CardContent sx={{ p: 1, pt: 0 }}>
					<Typography variant="body1" component="div" color="text.primary">
						{estado.consumos.potenciaConsumida} W
					</Typography>
				</CardContent>
				<CardContent sx={{ display: 'none' }} />
			</Card>
			<Handle
				type="target"
				position="top"
				id="hAutoconsumoConsumos"
				style={{ left: '43%' }}
			/>
			<Handle
				type="target"
				position="top"
				id="hImportacionConsumos"
				style={{ left: '57%' }}
			/>
			<Handle
				type="source"
				position="right"
				id="hConsumoDispositivos"
				style={{ top: '50%' }}
			/>
		</>
	);
});
