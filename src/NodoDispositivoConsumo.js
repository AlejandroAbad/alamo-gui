import React from 'react';
import { Handle } from 'react-flow-renderer';
//MUI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { ESTILOS_DISPOSITIVOS } from './constantesConsumos';

export default React.memo(({ data: dispositivo }) => {

	let color = dispositivo.encendido ?
		ESTILOS_DISPOSITIVOS[dispositivo.id]?.color ?
			ESTILOS_DISPOSITIVOS[dispositivo.id].color :
			ESTILOS_DISPOSITIVOS.__COLOR_DEFECTO
		: ESTILOS_DISPOSITIVOS.__COLOR_APAGADO;
	let estiloTexto = {
		fontWeight: dispositivo.encendido ? 'bold' : 'normal',
		color: dispositivo.encendido ? 'text.primary' : 'text.secondary'
	}

	let icono = ESTILOS_DISPOSITIVOS[dispositivo.id]?.icono ?
		ESTILOS_DISPOSITIVOS[dispositivo.id].icono
		: ESTILOS_DISPOSITIVOS.__ICONO_DEFECTO;

	let elementoIcono = React.createElement(icono, {
		sx: { width: 14, height: 14 }
	})
	

	return (
		<>
			<Card variant="outlined" sx={{ px: 1, py: 0, minWidth: 200, minHeight: 45 }}>
				<CardHeader sx={{ p: 1, pt: 1, pb: 0 }}
					avatar={<Avatar sx={{ bgcolor: color, width: 18, height: 18 }} >
						{elementoIcono}
					</Avatar>}
					title={<Typography variant="body2" component="div" sx={estiloTexto}>{dispositivo.nombre}</Typography>}
				/>
				{dispositivo.consumo > 0 && <CardContent sx={{ p: 1, py: 0 }}>
					<Typography variant="caption" component="div" color="text.primary">
						{dispositivo.consumo} W
					</Typography>
				</CardContent>}
				<CardContent sx={{ display: 'none' }} />
			</Card>
			<Handle
				type="target"
				position="left"
				id="hConsumo"
				style={{ top: '50%' }}
			/>
		</>
	);
});
