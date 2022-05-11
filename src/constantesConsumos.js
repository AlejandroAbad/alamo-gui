import { cyan, orange, grey, teal } from '@mui/material/colors';

import ShowerIcon from '@mui/icons-material/Shower';
import PoolIcon from '@mui/icons-material/Pool';
import PowerIcon from '@mui/icons-material/Power';


const ESTILOS_DISPOSITIVOS = {
	__COLOR_APAGADO: grey[300],
	__COLOR_DEFECTO: teal[300],
	__ICONO_DEFECTO: PowerIcon,
	'CALENTADOR': {
		icono: ShowerIcon,
		color: orange[400]
	},
	'BOMBA_PISCINA': {
		icono: PoolIcon,
		color: cyan[300]
	},
	'__RESTO__': {
		icono: PowerIcon,
		color: orange[200]
	}
}


export { ESTILOS_DISPOSITIVOS }