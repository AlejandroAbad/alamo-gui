import { cyan, orange, grey, teal } from '@mui/material/colors';

import ShowerIcon from '@mui/icons-material/Shower';
import PoolIcon from '@mui/icons-material/Pool';
import PowerIcon from '@mui/icons-material/Power';
import AirIcon from '@mui/icons-material/Air';


const ESTILOS_DISPOSITIVOS = {
	__COLOR_APAGADO: grey[300],
	__COLOR_DEFECTO: teal[300],
	__ICONO_DEFECTO: PowerIcon,
	'CALENTADOR': {
		icono: ShowerIcon,
		color: orange[400]
	},
	'1000c5c555': { // Bomba piscina
		icono: PoolIcon,
		color: cyan[300]
	},
	'10006f955e': { // Power meter
		icono: AirIcon,
		color: cyan[800]
	},
	'__RESTO__': {
		icono: PowerIcon,
		color: orange[200]
	}
}


export { ESTILOS_DISPOSITIVOS }