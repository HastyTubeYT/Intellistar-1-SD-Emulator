//  Fisher-Yates shuffle
function shuffle (array) {
	var i = 0,
	    j = 0,
	    temp = null;

	for (i = array.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1));
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}


function getNextHighestIndex(arr, value) {
    var i = arr.length;
    while (arr[--i] > value);
    return ++i;
}


function getUrlParameter(e) {
	return decodeURI((new RegExp(e + "=(.+?)(&|$)").exec(location.search) || [, null])[1])
}



// convert celsius to farenheight
function C2F(c){
	return Math.round( c * 9 / 5 + 32 );
}


// meters per second to mph
function mps2mph(meters) {
	return Math.round(  parseFloat(meters) * 2.23694 );
}


// array swap
Array.prototype.swap = function(a,b){ var tmp=this[a];this[a]=this[b];this[b]=tmp;};


function degToCompass(deg){
    val = Math.round((deg/22.5)+.5);
    arr=["N","NE","E","SE","S","SW","W","NW"];
    return arr[(val % 8)];
}



function distance(lat1, lon1, lat2, lon2) {
	var radlat1 = Math.PI * lat1/180,
		radlat2 = Math.PI * lat2/180,
		theta = lon1-lon2,
		radtheta = Math.PI * theta/180,
		dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist);
	dist = dist * 180/Math.PI;
	dist = dist * 60 * 1.1515;
	return dist;
}


function dewPoint(tem, r){
    tem = -1.0*(tem-32)*5/9	;
    es = 6.112*Math.exp(-1.0*17.67*tem/(243.5 - tem));
    ed = r/100.0*es;
    eln = Math.log(ed/6.112);
    td = -243.5*eln/(eln - 17.67 );
    return Math.round( (td*9/5)+32 );
}

function heatIndex(T, R) { // T = temp, R = relative humidity
	var T2 = T*T, R2= R*R,
		c1 = -42.379, c2 = 2.04901523, c3 = 10.14333127,
		c4 = -0.22475541, c5 = -6.83783*Math.pow(10,-3), c6 = -5.481717*Math.pow(10,-2),
		c7 = 1.22874*Math.pow(10,-3), c8 = 8.5282*Math.pow(10,-4), c9 = -1.99*Math.pow(10,-6);

	return Math.round(c1 + c2*T + c3 *R + c4*T*R + c5*T2 + c6*R2 + c7*T2*R + c8*T*R2 + c9*T2*R2);
}


// maps current condition code to icon
function getCCicon(ccCode, windData){
	var icon = "images/icons/" + ( "0" +  {"0":0,"1":0,"2":0,"3":47,"4":01,"5":02,"6":38,"7":03,"8":04,"9":05,"10":06,"11":08,"12":08,"13":09,"14":12,"15":11,"16":12,"17":48,"18":48,"19":16,"20":49,"21":16,"22":14,"23":0,"24":50,"25":34,"26":20,"27":21,"28":22,"29":23,"30":24,"31":25,"32":26,"33":27,"34":28,"35":13,"36":41,"37":29,"38":29,"39":30,"40":31,"41":32,"42":33,"43":34,"44":19,"45":35,"46":36,"47":37}[ccCode]).slice(-2) + ".png";
	if (parseInt(windData) >= 20) {
		if (icon === "images/icons/12.png" || icon ===  "images/icons/10.png" || icon ===  "images/icons/09.png") {
			icon = "images/icons/34.png"
		} else if (icon === "images/icons/31" || icon === "images/icons/08" || icon === "images/icons/07.png") {
			icon = "images/icons/45.png"
		}
	}
	return icon
}
function getWarningPosition(warning) {
var warnpos = { "Tsunami Warning":	1,
"Tornado Warning":	2,
"Extreme Wind Warning":	3,
"Severe Thunderstorm Warning":	4,
"Flash Flood Warning":	5,
"Flash Flood Statement":	6,
"Severe Weather Statement":	7,
"Fire Warning":	14,
"Storm Surge Warning":	17,
"Hurricane Force Wind Warning":	18,
"Hurricane Warning":	19,
"Typhoon Warning":	20,
"Special Marine Warning":	21,
"Blizzard Warning":	22,
"Snow Squall Warning":	23,
"Ice Storm Warning":	24,
"Winter Storm Warning":	25,
"High Wind Warning":	26,
"Tropical Storm Warning":	27,
"Storm Warning":	28,
"Tsunami Advisory":	29,
"Tsunami Watch":	30,
"Avalanche Warning":	31,
"Earthquake Warning":	32,
"Volcano Warning":	33,
"Ashfall Warning":	34,
"Coastal Flood Warning":	35,
"Lakeshore Flood Warning":	36,
"Flood Warning":	37,
"River Flood Warning":	37.5,
"High Surf Warning":	38,
"Dust Storm Warning":	39,
"Blowing Dust Warning":	40,
"Lake Effect Snow Warning":	41,
"Excessive Heat Warning":	42,
"Tornado Watch":	43,
"Severe Thunderstorm Watch":	44,
"Flash Flood Watch":	45,
"Gale Warning":	46,
"Flood Statement":	47,
"Wind Chill Warning":	48,
"Extreme Cold Warning":	49,
"Hard Freeze Warning":	50,
"Freeze Warning":	51,
"Red Flag Warning":	52,
"Storm Surge Watch":	53,
"Hurricane Watch":	54,
"Hurricane Force Wind Watch":	55,
"Typhoon Watch":	56,
"Tropical Storm Watch":	57,
"Storm Watch":	58,
"Hurricane Local Statement":	59,
"Typhoon Local Statement":	60,
"Tropical Storm Local Statement":	61,
"Tropical Depression Local Statement":	62,
"Avalanche Advisory":	63,
"Winter Weather Advisory":	64,
"Wind Chill Advisory":	65,
"Heat Advisory":	66,
"Urban and Small Stream Flood Advisory":	67,
"Small Stream Flood Advisory":	68,
"Arroyo and Small Stream Flood Advisory":	69,
"Flood Advisory":	70,
"Hydrologic Advisory":	71,
"Lakeshore Flood Advisory":	72,
"Coastal Flood Advisory":	73,
"High Surf Advisory":	74,
"Heavy Freezing Spray Warning":	75,
"Dense Fog Advisory":	76,
"Dense Smoke Advisory":	77,
"Small Craft Advisory For Hazardous Seas":	78,
"Small Craft Advisory for Rough Bar":	79,
"Small Craft Advisory for Winds":	80,
"Small Craft Advisory":	81,
"Brisk Wind Advisory":	82,
"Hazardous Seas Warning":	83,
"Dust Advisory":	84,
"Blowing Dust Advisory":	85,
"Lake Wind Advisory":	86,
"Wind Advisory":	87,
"Frost Advisory":	88,
"Ashfall Advisory":	89,
"Freezing Fog Advisory":	90,
"Freezing Spray Advisory":	91,
"Low Water Advisory":	92,
"Avalanche Watch":	94,
"Blizzard Watch":	95,
"Rip Current Statement":	96,
"Beach Hazards Statement":	97,
"Gale Watch":	98,
"Winter Storm Watch":	99,
"Hazardous Seas Watch":	100,
"Heavy Freezing Spray Watch":	101,
"Coastal Flood Watch":	102,
"Lakeshore Flood Watch":	103,
"Flood Watch":	104,
"High Wind Watch":	105,
"Excessive Heat Watch":	106,
"Extreme Cold Watch":	107,
"Wind Chill Watch":	108,
"Lake Effect Snow Watch":	109,
"Hard Freeze Watch":	110,
"Freeze Watch":	111,
"Fire Weather Watch":	112,
"Extreme Fire Danger":	113,
"Coastal Flood Statement":	115,
"Lakeshore Flood Statement":	116,
"Special Weather Statement":	117,
"Marine Weather Statement":	118,
"Air Quality Alert":	119,
"Air Stagnation Advisory":	120,
"Hazardous Weather Outlook":	121,
}[warning]
	if (warnpos !== undefined) {
		return warnpos;
	} else {
		return 140;
	}
}// https://date-fns.org/docs/Getting-Started
