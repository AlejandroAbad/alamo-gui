import React from 'react';
import { Handle } from 'react-flow-renderer';
//MUI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { grey, yellow } from '@mui/material/colors';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import ModeNightIcon from '@mui/icons-material/ModeNight';

export default React.memo(({ data: estado }) => {

	let mppt = estado.inversor.mppt(1);

	let avatar = (mppt.intensidad > 0) ?
		< Avatar sx={{ bgcolor: yellow[800], width: 30, height: 30 }} >
			< SolarPowerIcon sx={{ width: 18}} />
		</Avatar > :
		< Avatar sx={{ bgcolor: grey[800], width: 30, height: 30 }} >
			< ModeNightIcon sx={{ width: 18 }} />
		</Avatar >
		;

	return (
		<>
			<Card variant="outlined" sx={{ px: 1, py: 0, minWidth: 125 }}>
				<CardHeader sx={{ p: 1, pt: 2 }}
					avatar={avatar}
					title={<Typography variant="h6" component="div">Placas</Typography>}
				/>
				<CardContent sx={{ p: 1, pt: 0 }}>
					<Typography variant="body1" component="div" color="text.primary">
						{estado.inversor.potenciaPlacas} W
					</Typography>
					<Typography variant="body2" component="div" color="text.secondary">
						{mppt.intensidad} A • {mppt.voltaje} V<br />
					</Typography>
				</CardContent>
				<CardContent sx={{ display: 'none' }} />
			</Card>
			<Handle
				type="source"
				position="bottom"
				id="hGeneracionSolar"
				style={{}}
			/>
		</>
	);
});
