import { grey, blue, red, yellow, green, orange } from '@mui/material/colors';

const ESTADOS_INVERSOR = {
	'desconocido': { texto: "Desconocido", color: red[200] },
	0x0000: { texto: "Iniciando", color: blue[200] },
	0x0001: { texto: "Detectando IR", color: blue[200] },
	0x0002: { texto: "Buscando radiación", color: blue[200] },
	0x0003: { texto: "Esperando red", color: blue[200] },
	0x0100: { texto: "Arrancando", color: blue[200] },
	0x0200: { texto: "En línea", color: green[600] },
	0x0201: { texto: "En línea: Limitado", color: green[600] },
	0x0202: { texto: "En línea: Derating", color: green[600] },
	0x0203: { texto: "Modo isla", color: yellow[200] },
	0x0300: { texto: "Apagado: Error", color: red[600] },
	0x0301: { texto: "Apagado: Ordenado", color: red[200] },
	0x0302: { texto: "Apagado: OVGR", color: red[200] },
	0x0303: { texto: "Apagado: Sin comunicación", color: red[200] },
	0x0304: { texto: "Apagado: Límite", color: red[200] },
}

const ALARMAS_INVERSOR = [null, [], [], []];
ALARMAS_INVERSOR[1][0] = { texto: "High String Input Voltage", codigo: 2001, color: red[200] }
ALARMAS_INVERSOR[1][1] = { texto: "DC Arc Fault", codigo: 2002, color: red[200] };
ALARMAS_INVERSOR[1][2] = { texto: "String Reverse Connection", codigo: 2011, color: red[200] };
ALARMAS_INVERSOR[1][3] = { texto: "String Current Backfeed", codigo: 2012, color: orange[200] };
ALARMAS_INVERSOR[1][4] = { texto: "Abnormal String Power", codigo: 2013, color: orange[200] };
ALARMAS_INVERSOR[1][5] = { texto: "AFCI Self-Check Fail", codigo: 2021, color: red[200] };
ALARMAS_INVERSOR[1][6] = { texto: "Phase Wire Short-Circuited to PE", codigo: 2031, color: red[200] };
ALARMAS_INVERSOR[1][7] = { texto: "Grid Loss", codigo: 2032, color: red[200] };
ALARMAS_INVERSOR[1][8] = { texto: "Grid Undervoltage", codigo: 2033, color: red[200] };
ALARMAS_INVERSOR[1][9] = { texto: "Grid Overvoltage", codigo: 2034, color: red[200] };
ALARMAS_INVERSOR[1][10] = { texto: "Grid Volt. Imbalance", codigo: 2035, color: red[200] };
ALARMAS_INVERSOR[1][11] = { texto: "Grid Overfrequency", codigo: 2036, color: red[200] };
ALARMAS_INVERSOR[1][12] = { texto: "Grid Underfrequency", codigo: 2037, color: red[200] };
ALARMAS_INVERSOR[1][13] = { texto: "Unstable Grid Frequency", codigo: 2038, color: red[200] };
ALARMAS_INVERSOR[1][14] = { texto: "Output Overcurrent", codigo: 2039, color: red[200] };
ALARMAS_INVERSOR[1][15] = { texto: "Output DC Component Overhigh", codigo: 2040, color: red[200] };
ALARMAS_INVERSOR[2][0] = { texto: "Abnormal Residual Current", codigo: 2051, color: red[200] };
ALARMAS_INVERSOR[2][1] = { texto: "Abnormal Grounding", codigo: 2061, color: red[200] };
ALARMAS_INVERSOR[2][2] = { texto: "Low Insulation Resistance", codigo: 2062, color: red[200] };
ALARMAS_INVERSOR[2][3] = { texto: "Overtemperature", codigo: 2063, color: yellow[200] };
ALARMAS_INVERSOR[2][4] = { texto: "Device Fault", codigo: 2064, color: red[200] };
ALARMAS_INVERSOR[2][5] = { texto: "Upgrade Failed or Version Mismatch", codigo: 2065, color: yellow[200] };
ALARMAS_INVERSOR[2][6] = { texto: "License Expired", codigo: 2066, color: orange[200] };
ALARMAS_INVERSOR[2][7] = { texto: "Faulty Monitoring Unit", codigo: 61440, color: yellow[200] };
ALARMAS_INVERSOR[2][8] = { texto: "Faulty Power Meter", codigo: 2067, color: red[200] };
ALARMAS_INVERSOR[2][9] = { texto: "Battery abnormal", codigo: 2068, color: yellow[200] };
ALARMAS_INVERSOR[2][10] = { texto: "Active Islanding", codigo: 2070, color: red[200] };
ALARMAS_INVERSOR[2][11] = { texto: "Passive Islanding", codigo: 2071, color: red[200] };
ALARMAS_INVERSOR[2][12] = { texto: "Transient AC Overvoltage", codigo: 2072, color: red[200] };
ALARMAS_INVERSOR[2][13] = { texto: "Peripheral port short circuit", codigo: 2075, color: orange[200] };
ALARMAS_INVERSOR[2][14] = { texto: "Churn output overload", codigo: 2077, color: red[200] };
ALARMAS_INVERSOR[2][15] = { texto: "Abnormal PV module configuration", codigo: 2080, color: red[200] };
ALARMAS_INVERSOR[3][0] = { texto: "Optimizer fault[5]", codigo: 2081, color: orange[200] };
ALARMAS_INVERSOR[3][1] = { texto: "Built-in PID operation abnormal", codigo: 2085, color: yellow[200] };
ALARMAS_INVERSOR[3][2] = { texto: "High input string voltage to ground", codigo: 2014, color: red[200] };
ALARMAS_INVERSOR[3][3] = { texto: "External Fan Abnormal", codigo: 2086, color: red[200] };
ALARMAS_INVERSOR[3][4] = { texto: "Battery Reverse Connection", codigo: 2069, color: red[200] };
ALARMAS_INVERSOR[3][5] = { texto: "On-grid/Off-grid controller abnormal", codigo: 2082, color: red[200] };
ALARMAS_INVERSOR[3][6] = { texto: "PV String Loss", codigo: 2015, color: orange[200] };
ALARMAS_INVERSOR[3][7] = { texto: "Internal Fan Abnormal", codigo: 2087, color: red[200] };
ALARMAS_INVERSOR[3][8] = { texto: "DC Protection Unit Abnormal", codigo: 2088, color: red[200] };
ALARMAS_INVERSOR[3][9] = { texto: "EL Unit Abnormal", codigo: 2089, color: yellow[200] };
ALARMAS_INVERSOR[3][10] = { texto: "Active Adjustment Instruction Abnormal", codigo: 2090, color: red[200] };
ALARMAS_INVERSOR[3][11] = { texto: "Reactive Adjustment Instruction Abnormal", codigo: 2091, color: red[200] };
ALARMAS_INVERSOR[3][12] = { texto: "CT Wiring Abnormal", codigo: 2092, color: red[200] };
ALARMAS_INVERSOR[3][13] = { texto: "DC Arc Fault(ADMC to be clear manually)", codigo: 2003, color: red[200] };

const FLAGS_INVERSOR = [null,[],[],[]];
FLAGS_INVERSOR[1][0] = { texto: "standby" };
FLAGS_INVERSOR[1][1] = { texto: "grid connected" };
FLAGS_INVERSOR[1][2] = { texto: "grid connected normally" };
FLAGS_INVERSOR[1][3] = { texto: "grid connection with derating due to power rationing" };
FLAGS_INVERSOR[1][4] = { texto: "grid connection with derating due to internal causes of the solar inverter" };
FLAGS_INVERSOR[1][5] = { texto: "normal stop" };
FLAGS_INVERSOR[1][6] = { texto: "stop due to faults" };
FLAGS_INVERSOR[1][7] = { texto: "stop due to power rationing" };
FLAGS_INVERSOR[1][8] = { texto: "shutdown" };
FLAGS_INVERSOR[1][9] = { texto: "spot check" };
FLAGS_INVERSOR[2][0] = { texto: "Unlocked" }
FLAGS_INVERSOR[2][1] = { texto: "PV connected" }
FLAGS_INVERSOR[2][2] = { texto: "DSP data collection" }
FLAGS_INVERSOR[3][0] = { texto: "off-grid" }
FLAGS_INVERSOR[3][1] = { texto: "off-grid switch" }

export { ESTADOS_INVERSOR, ALARMAS_INVERSOR, FLAGS_INVERSOR }