import React from 'react';
import { Handle } from 'react-flow-renderer';
//MUI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';

export default React.memo(({ data }) => {
	return (
		<>
			<Card variant="outlined" sx={{ px: 1, py: 0, minWidth: 105 }}>
				<CardHeader sx={{ p: 1, pt: 2 }}
					avatar={<Avatar sx={{ bgcolor: orange[600], width: 30, height: 30 }} >
						<ElectricMeterIcon sx={{ width: 20 }} />
					</Avatar>}
					title={<Typography variant="h6" component="div">Red</Typography>}
				/>
				<CardContent sx={{ p: 1, pt: 0 }}>
					<Typography variant="body1" component="div" color="text.primary">
						-
					</Typography>
					<Typography variant="body2" component="div" color="text.secondary">
						-
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
