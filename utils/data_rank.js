
export function countryCompare(category) {
	return function innerSort(a,b) {
		let valA = a[category];
		let valB = b[category];
		if (typeof valA == "string") {
			valA = parseInt(valA);
			valB = parseInt(valB);
		}
		
		if (valA > valB)
			return -1;
		else if (valA < valB)
			return 1;
		else return 0;
	};
}

export function globalRankSelect(ranking, country) {
	return ranking.findIndex(x => x.Country == country) + 1;
}

export function globalRankTopTen(ranking) {
	return ranking.slice(0,10);
}

export function globalRanking(category) {
	const countries = Object.values(this.state.globalData);
	countries.sort(this.countryCompare(category));
	//console.log(countries);
	this.setState({
		rankSelect: this.globalRankSelect(countries, this.state.selectCountry),
		rankTopTen: this.globalRankTopTen(countries),
	});
}

export function globalRankingHeading(category) {
	if (category == 'Confirmed')
		return "Confirmed Cases Count";
	else if (category == 'Hospitalized')
		return "Active Cases Count";
	else if (category == 'Deaths')
		return "Deceased Cases Count";
	else if (category == 'Recovered')
		return "Recovered Cases Count";
	else if (category == 'RecoveryRate')
		return "Recovery Rate";
	else if (category == 'MortalityRate')
		return "Mortality Rate";
}
