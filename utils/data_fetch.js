
import axios from 'axios';

export function fetchData(refDate) {
	if (this.state.selectCountry == 'Thailand')
		this.callAPIThailand();
	else if (this.state.fastMode)
		this.callAPIGlobal(this.state.selectCity,this.state.selectCountry,new Date(refDate.getTime()));
	else this.callAPIGlobalTimeline(this.state.selectCity,this.state.selectCountry);
}

	//For ranking and map functionalities
	//Only data from one day/file is processed
export async function callAPIGlobalAll(markDate) {
		
		markDate = new Date(markDate.getTime());
		
		let countries = [];
		let countriesN = 0;
		
		let data = new Object();
		
		const sourceRef = 'https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports';
		const sourcePrefix = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
		const formatChange = (new Date(2020,2,22)).getTime();
		
		let cityIndex = 0;
		let countryIndex = 1;
		let conIndex = 3;
		let deathIndex = 4;
		let recIndex = 5;
		let quoteLimit = 0;
		//Workaround for source's formatting inconsistencies
		if (cityIndex == 0 && markDate.getTime() >= formatChange) {
			cityIndex = 2;
			countryIndex = 3;
			conIndex = 7;
			deathIndex = 8;
			recIndex = 9;
			quoteLimit = 2;
		}
		
		let lines = '';
		const markDateStr = markDate.toISOString();
		const sourceDate = markDateStr.slice(5,8) + markDateStr.slice(8,10) + '-' + markDate.getFullYear();
		//console.log(sourceDate);

		try {
			const cancelToken = this.cancelSource.token;
			const response = await axios.get(sourcePrefix + sourceDate + '.csv', {
				headers: { 'Content-Type': 'text/csv' },
				cancelToken: cancelToken,
			});
			lines = response.data.split(/\r?\n/);
		} catch(err) {
			console.log(err);
			return undefined;
		}
		
		if (lines != '') {		
			for (let i=1; i<lines.length; i++) {
				if (lines[i] == '' || ((lines[i].match(/"/g) || []).length > quoteLimit))
					continue;
				
				const values = lines[i].split(',');
				const country = values[countryIndex];
				const city = values[cityIndex];
				let confirmed = values[conIndex] == '' ? 0 : parseInt(values[conIndex]);
				let hospitalized = values[10] == '' ? 0 : parseInt(values[10]);
				let deaths = values[deathIndex] == '' ? 0 : parseInt(values[deathIndex]);
				let recovered = values[recIndex] == '' ? 0 : parseInt(values[recIndex]);
				if (data[country] != undefined) {
					confirmed += data[country]["Confirmed"];
					hospitalized += data[country]["Hospitalized"];
					deaths += data[country]["Deaths"];
					recovered += data[country]["Recovered"];
				}
				else
				{
					data[country] = new Object();
					data[country].Country = country;
					data[country].Cities = [];
					data[country].CitiesN = 0;
					countries[countriesN] = country;
					countriesN++;
				}
				
				const citiesN = data[country].CitiesN;
				data[country].Confirmed = confirmed;
				data[country].Hospitalized = hospitalized;
				data[country].Deaths = deaths;
				data[country].Recovered = recovered;
				data[country].RecoveryRate = ((recovered/confirmed) * 100).toFixed(2);
				data[country].MortalityRate = ((deaths/confirmed) * 100).toFixed(2);
				if (city != '') {
					data[country].Cities[citiesN] = city;
					data[country].CitiesN = citiesN + 1;
				}
			}
			//console.log(data);
			
			const mapGlobalData = this.processMapGlobalData(countries, data);
			
			this.setState({
				countries: countries,
				globalData: data,
				mapGlobalData: mapGlobalData,
			});
		}
		
		this.globalRanking(this.state.selectCategory);
	}
	
	//When foreign country is selected
	//Provides retrospective data and graph functionalities
	//Taxing, over 200 days/files must be processed
	//Somehow sometimes fast, sometimes slow. Cause still unknown.
export async function callAPIGlobalTimeline(city, country) {
		
		if (city == 'Overall') {
			city = '';
		}
		
		let data = [{}];
		let dataN = 0;
		
		let prevConfirmed = 0;
		let prevHospitalized = 0;
		let prevDeaths = 0;
		let prevRecovered = 0;
		
		const sourceRef = 'https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports';
		const sourcePrefix = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
		let markDate = new Date(2020,0,23);
		const tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate()+1);
		const now = tomorrow.getTime();
		
		let cityIndex = 0;
		let countryIndex = 1;
		let conIndex = 3;
		let deathIndex = 4;
		let recIndex = 5;
		
		let lastIndex = 1;
		const formatChange = (new Date(2020,2,22)).getTime();
		
		while (markDate.getTime() < now) {
			let lines = '';
			const markDateStr = markDate.toISOString();
			const sourceDate = markDateStr.slice(5,8) + markDateStr.slice(8,10) + '-' + markDate.getFullYear();
			console.log(sourceDate);
			//console.log(lastIndex);
			
			//Workaround for source's formatting inconsistencies
			if (cityIndex == 0 && markDate.getTime() >= formatChange) {
				cityIndex = 2;
				countryIndex = 3;
				conIndex = 7;
				deathIndex = 8;
				recIndex = 9;
			}
			
			try {
				const cancelToken = this.cancelSource.token;
				const response = await axios.get(sourcePrefix + sourceDate + '.csv', {
					headers: { 'Content-Type': 'text/csv' },
					cancelToken: cancelToken,
				});
				lines = response.data.split(/\r?\n/);
			} catch(err) {
				console.log(err);
				return undefined;
			}
			
			markDate.setDate(markDate.getDate()+1);
			
			if (lines == '')
					continue;
			
			console.log(lastIndex);
			const date = sourceDate.replace('-','\/').replace('-','\/');
			let values = undefined;
			if (lines[lastIndex])
				values = lines[lastIndex].split(',');
			else lastIndex = 1;
			
			if (values == undefined || (city != '' && city != values[cityIndex]) || (country != '' && country != values[countryIndex]))
			{
				for (let i=lastIndex+1; i<lines.length; i++) {
					values = lines[i].split(',');
					if ((city != '' && city != values[cityIndex]) || (country != '' && country != values[countryIndex])) {
						values = undefined;
						continue;
					}
					lastIndex = i;
					break;
				}
				if (values == undefined) {
					for (let i=1; i<lastIndex; i++) {
						values = lines[i].split(',');
						if ((city != '' && city != values[cityIndex]) || (country != '' && country != values[countryIndex])) {
							values = undefined;
							continue;
						}
						lastIndex = i;
						break;
					}
				}
			}
			
			if (values != undefined) {
				const confirmed = values[conIndex] == '' ? 0 : parseInt(values[conIndex]);
				const hospitalized = values[10] == '' ? 0 : parseInt(values[10]);
				const deaths = values[deathIndex] == '' ? 0 : parseInt(values[deathIndex]);
				const recovered = values[recIndex] == '' ? 0 : parseInt(values[recIndex]);
				
				data[dataN] = {
					Date: date,
					Confirmed: confirmed,
					Hospitalized: hospitalized,
					Deaths: deaths,
					Recovered: recovered,
					NewConfirmed: confirmed - prevConfirmed,
					NewHospitalized: hospitalized - prevHospitalized,
					NewDeaths: deaths - prevDeaths,
					NewRecovered: recovered - prevRecovered,
				}
				prevConfirmed = confirmed;
				prevHospitalized = hospitalized;
				prevDeaths = deaths;
				prevRecovered = recovered;
				dataN++;
			}
		}
		console.log(data);
		
		this.processData(sourceRef, data);
	}
	
	//When foreign country is selected
	//No streak data or timeline functionality
	//Only data from two days/files is processed
export async function	callAPIGlobal(city, country, markDate, process = true) {
		
		if (city == 'Overall') {
			city = '';
		}
		
		let data = [{}];
		data[0] = {
			Date: '',
			Confirmed: 0,
			Hospitalized: 0,
			Deaths: 0,
			Recovered: 0,
			RecoveryRate: 0,
			MortalityRate: 0,
			NewConfirmed: 0,
			NewHospitalized: 0,
			NewDeaths: 0,
			NewRecovered: 0,
		};
		const thisData = data[0];
		
		const sourceRef = 'https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports';
		const sourcePrefix = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
		
		let lines = '';
		while (lines == '') {
			const markDateStr = markDate.toISOString();
			const sourceDate = markDateStr.slice(5,8) + markDateStr.slice(8,10) + '-' + markDate.getFullYear();
			markDate.setDate(markDate.getDate()-1);
			//console.log(sourceDate);
		
			try {
				const cancelToken = this.cancelSource.token;
				const response = await axios.get(sourcePrefix + sourceDate + '.csv', {
					headers: { 'Content-Type': 'text/csv' },
					cancelToken: cancelToken,
				});
				lines = response.data.split(/\r?\n/);
				thisData.Date = sourceDate.replace('-','\/').replace('-','\/');
			} catch(err) {
				console.log(err);
				return undefined;
			}
		}
		
		for (let i=1; i<lines.length; i++) {
			if ((lines[i].match(/"/g) || []).length > 2)
				continue;
			
			const values = lines[i].split(',');
			if ((city != '' && city != values[2]) || (country != '' && country != values[3]))
				continue;
			
			const confirmed = thisData["Confirmed"] + (values[7] == '' ? 0 : parseInt(values[7]));
			const deaths = thisData["Deaths"] + (values[8] == '' ? 0 : parseInt(values[8]));
			const recovered = thisData["Recovered"] + (values[9] == '' ? 0 : parseInt(values[9]));
			thisData.Confirmed = confirmed;
			thisData.Hospitalized = thisData["Hospitalized"] + (values[10] == '' ? 0 : parseInt(values[10]));
			thisData.Deaths = deaths;
			thisData.Recovered = recovered;
			thisData.RecoveryRate = (recovered/confirmed) * 100;
			thisData.MortalityRate = (deaths/confirmed) * 100;
		}
		
		if (process) {
			const prevData = await this.callAPIGlobal(city, country, markDate, false);
			thisData.NewConfirmed = thisData.Confirmed - prevData.Confirmed;
			thisData.NewHospitalized = thisData.Hospitalized - prevData.Hospitalized;
			thisData.NewDeaths = thisData.Deaths - prevData.Deaths;
			thisData.NewRecovered = thisData.Recovered - prevData.Recovered;
			
			//console.log(data);
			this.processData(sourceRef, data, false);
			
		}
		return thisData;
	}
	
	//For when Thailand is selected
	//Provides retrospective data and graph functionalities
	//Local scoped source, data from over 200 days are stored within only one file
export async function	callAPIThailand() {
		
		const source = 'https://covid19.th-stat.com/api/open/timeline';
		let data = [];
		
		try {
			const cancelToken = this.cancelSource.token;
			const response = await axios.get(source, {
				cancelToken: cancelToken,
			});
			data = response.data['Data'];
		} catch(err) {
			console.log(err);
			return undefined;
		}
		
		if (data != undefined) {
			//console.log(data);
			this.processData(source, data);
		}
	}
	
export function clearAxiosCalls() {
		this.cancelSource.cancel('Axios operations cleared');
		
		const CancelToken = axios.CancelToken;
		this.cancelSource = CancelToken.source();
	}

export function getLastDate(type, data) {
	for (let i=data.length-1; i>=0; i--) {
		if (data[i][type] != 0)
			return data[i]['Date'];
	}
}

export function getDateDiff(date) {
	let now = (new Date()).getTime();
	return Math.floor((now - (new Date(date)).getTime())/86400000);
}

export function processData(source, data, hasTimeline = true) {
	if (data.length <= 0)
		return;
	
	const lastData = data.slice(-1)[0];
	const dataReformatted = data.slice().map(d => {
		return (
			Object.assign({},d,{
				Date: d.Date.slice(3,6) + d.Date.slice(0,2)
			})
		);
	});
	
	const lastUpdated = lastData['Date'];
	let lastConfirmedFormatted = 0;
	let lastDeathFormatted = 0;
	let noConfirmedStreak = 0;
	let noDeathStreak = 0;

	if (hasTimeline) {
		const lastConfirmed = this.getLastDate('NewConfirmed',data);
		const lastDeath = this.getLastDate('NewDeaths',data);
		lastConfirmedFormatted = lastConfirmed.slice(3,6) + lastConfirmed.slice(0,3) + lastConfirmed.slice(6);
		lastDeathFormatted = lastDeath.slice(3,6) + lastDeath.slice(0,3) + lastDeath.slice(6);
		noConfirmedStreak = this.getDateDiff(lastConfirmed);
		noDeathStreak = this.getDateDiff(lastDeath);
	}
	
	this.setState({
		hasData: true,
		hasTimeline: hasTimeline,
		dataTimeline: dataReformatted,
		dataTimeline15: dataReformatted.slice(1).slice(-15),
		data_text: {
			source: source,
			updatedDate: lastUpdated.slice(3,6) + lastUpdated.slice(0,3) + lastUpdated.slice(6),
			confirmed: lastData['Confirmed'],
			hospitalized: lastData['Hospitalized'],
			deaths: lastData['Deaths'],
			recovered: lastData['Recovered'],
			newConfirmed: lastData['NewConfirmed'],
			newHospitalized: lastData['NewHospitalized'],
			newDeaths: lastData['NewDeaths'],
			newRecovered: lastData['NewRecovered'],
		},
		data_pie: [
			{ name: 'Hospitalized', value: lastData['Hospitalized'] },
			{ name: 'Deaths', value: lastData['Deaths'] },
			{ name: 'Recovered', value: lastData['Recovered'] },
		],
		lastConfirmed: lastConfirmedFormatted,
		lastDeath: lastDeathFormatted,
		noConfirmedStreak: noConfirmedStreak,
		noDeathStreak: noDeathStreak,
		rateRecovery: (100*lastData['Recovered']/lastData['Confirmed']).toFixed(2) + '%',
		rateDeath: (100*lastData['Deaths']/lastData['Confirmed']).toFixed(2) + '%',
	});
}
	
