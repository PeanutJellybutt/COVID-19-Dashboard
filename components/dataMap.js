
export function countryEncodeAssist(country, countriesName) {
	if (!countriesName.includes(country)) {
		if (country == "Bolivia")
			country = "Bolivia, Plurinational State of";
		else if (country == "Brunei")
			country = "Brunei Darussalam";
		else if (country == "Burma")
			country = "Myanmar";
		else if (country == "Congo (Brazzaville)")
			country = "Congo";
		else if (country == "Congo (Kinshasa)")
			country = "Congo, Democratic Republic of the";
		else if (country == "Cote d'Ivoire")
			country = "Côte d'Ivoire";
		else if (country == "Iran")
			country = "Iran, Islamic Republic of";
		else if (country == "Kosovo")
			country = "Serbia";
		else if (country == "Laos")
			country = "Lao People's Democratic Republic";
		else if (country == "Moldova")
			country = "Moldova, Republic of";
		else if (country == "Russia")
			country = "Russian Federation";
		else if (country == "Syria")
			country = "Syrian Arab Republic";
		else if (country == "Taiwan*")
			country = "Taiwan, Province of China";
		else if (country == "Tanzania")
			country = "Tanzania, United Republic of";
		else if (country == "US")
			country = "United States of America";
		else if (country == "United Kingdom")
			country = "United Kingdom of Great Britain and Northern Ireland";
		else if (country == "Venezuela")
			country = "Venezuela, Bolivarian Republic of";
		else if (country == "Vietnam")
			country = "Viet Nam";
		else if (country == "West Bank and Gaza")
			country = "Palestine, State of";
		else return undefined;
	}
	
	const { getCode } = require('country-list');
	return getCode(country);
}

export function countryDecodeAssist(code) {
	const { getName, getNames } = require('country-list');
	const countriesName = getNames();
	let country = getName(code);
	
	if (country == "Bolivia, Plurinational State of")
		country = "Bolivia";
	else if (country == "Brunei Darussalam")
		country = "Brunei";
	else if (country == "Myanmar")
		country = "Burma";
	else if (country == "Congo")
		country = "Congo (Brazzaville)";
	else if (country == "Congo, Democratic Republic of the")
		country = "Congo (Kinshasa)";
	else if (country == "Côte d'Ivoire")
		country = "Cote d'Ivoire";
	else if (country == "Iran, Islamic Republic of")
		country = "Iran";
	else if (country == "Serbia")
		country = "Kosovo";
	else if (country == "Lao People's Democratic Republic")
		country = "Laos";
	else if (country == "Moldova, Republic of")
		country = "Moldova";
	else if (country == "Russian Federation")
		country = "Russia";
	else if (country == "Syrian Arab Republic")
		country = "Syria";
	else if (country == "Taiwan")
		country = "Taiwan*";
	else if (country == "Tanzania, United Republic of")
		country = "Tanzania";
	else if (country == "United States of America")
		country = "US";
	else if (country == "United Kingdom of Great Britain and Northern Ireland")
		country = "United Kingdom";
	else if (country == "Venezuela, Bolivarian Republic of")
		country = "Venezuela";
	else if (country == "Viet Nam")
		country = "Vietnam";
	else if (country == "Palestine, State of")
		country = "West Bank and Gaza";

	return country;
}

export function processMapGlobalData(countries, globalData) {
	const { getCode, getNames } = require('country-list');
	const countriesName = getNames();
	const mapGlobalData = {
		Confirmed: {},
		Hospitalized: {},
		Deaths: {},
		Recovered: {},
		RecoveryRate: {},
		MortalityRate: {},
	};

	for (let i=0; i<countries.length; i++) {
		const country = countries[i];
		const data = globalData[country];
		
		const code = this.countryEncodeAssist(country,countriesName);
		if (code == undefined)
			continue;
		
		mapGlobalData['Confirmed'][code] = data['Confirmed'];
		mapGlobalData['Hospitalized'][code] = data['Hospitalized'];
		mapGlobalData['Deaths'][code] = data['Deaths'];
		mapGlobalData['Recovered'][code] = data['Recovered'];
		mapGlobalData['RecoveryRate'][code] = parseFloat(data['RecoveryRate']);
		mapGlobalData['MortalityRate'][code] = parseFloat(data['MortalityRate']);
	}
	//console.log(mapGlobalData);
	return mapGlobalData;
}