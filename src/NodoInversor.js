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





export default React.memo(({ data: estado }) => {

	if (!estado?.inversor) return null;
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
					avatar={<Avatar sx={{ bgcolor: estado.inversor.colorEstado, width: 30, height: 30 }} >
						<ElectricBoltIcon sx={{ width: 20 }} />
					</Avatar>}
					title={<Typography variant="h6" component="div">Inversor</Typography>}
				/>
				<CardContent sx={{ p: 1, py: 0 }}>
					<Typography variant="body1" component="div" color="text.primary">
						{estado.inversor.potenciaGenerada} W
					</Typography>
					<Typography variant="body2" component="div" color="text.secondary">
						{estado.inversor.intensidadGenerada} A • {estado.inversor.voltaje} V<br />
					</Typography>
				</CardContent>
				<CardContent sx={{ p: 1, py: 0 }}>
					<Typography variant="caption" component="div" color="text.secondary">
						{estado.inversor.temperatura}ºC | {estado.inversor.textoEstado}
					</Typography>
				</CardContent>
				<CardContent sx={{ p: 1, pt: 0 }}>
					<Typography variant="caption" component="div" color="text.secondary">
						{estado.inversor.potenciaReactiva} kVAr ({estado.inversor.factorPotencia})
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
