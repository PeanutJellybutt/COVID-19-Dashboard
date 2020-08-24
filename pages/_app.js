
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, LineChart, Line, BarChart, Bar, PieChart, 
  Pie, Cell, } from 'recharts';
import '../public/jquery-jvectormap.css'

import dynamic from 'next/dynamic'
const VectorMap = dynamic(
  () => import("react-jvectormap").then((m) => m.VectorMap),
  { ssr: false, }
);
  
const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
		backgroundColor: "#FFFEFE",
  },
	paperFoot: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
		backgroundColor: "#777070",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
  },
	root: {
    backgroundColor: "#000000",
  },
	formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const cBlue = '#20A0E0';
const cOrange = '#F7B860';
const cRed = '#E04040';
const cGreen = '#80D080';
const cDRed = '#BB0A1E';

class App extends React.Component {
	
  constructor(props) {
		super(props);
		this.state = {
			selectCountry: 'Thailand',
			selectCity: 'Overall',
			countries: [],
			globalData: [],
			fastMode: true,
			hasTimeline: true,
			dataTimeline: [],
			dataTimeline15: [],
			data_text: {
				updatedDate: '',
				confirmed: '',
				hospitalized: '',
				deaths: '',
				recovered: '',
				newConfirmed: '',
				newHospitalized: '',
				newDeaths: '',
				newRecovered: '',
			},
			data_pie: [{}],
			lastConfirmed: 0,
			lastDeath: 0,
			noConfirmedStreak: 0,
			noDeathStreak: 0,
			rateRecovery: 0,
			rateDeath: 0,
			showGraph: false,
			selectCategory: 'Hospitalized',
			rankSelect: -1,
			rankTopTen: [],
			mapGlobalData: null,
		};
		
		this.referenceDate = new Date();
		this.referenceDate.setDate(this.referenceDate.getDate()-1);
		
		const CancelToken = axios.CancelToken;
		this.cancelSource = CancelToken.source();
		
		const { getCode, getName, getData } = require("country-list");
		this.getCountryCode = getCode;
		this.getCountryName = getName;
		this.getCountryData = getData;
  }
  
  componentDidMount() {
		this.callAPIGlobalAll(this.referenceDate);
		this.fetchData(this.referenceDate);
  }
	
	fetchData(refDate) {
		if (this.state.selectCountry == 'Thailand')
			this.callAPIThailand();
		else if (this.state.fastMode)
			this.callAPIGlobal(this.state.selectCity,this.state.selectCountry,new Date(refDate.getTime()));
		else this.callAPIGlobalTimeline(this.state.selectCity,this.state.selectCountry);
	}
	
	componentDidUpdate(prevProps, prevState) {
		if ((prevState.selectCountry != this.state.selectCountry) ||
     		(prevState.selectCity != this.state.selectCity) ||
				(prevState.fastMode != this.state.fastMode))
		{
			this.clearAxiosCalls();
			this.fetchData(this.referenceDate);
		}
		
		if (prevState.selectCategory != this.state.selectCategory)
			this.globalRanking(this.state.selectCategory);
	}
	
	clearAxiosCalls() {
		this.cancelSource.cancel('Axios operations cleared');
		
		const CancelToken = axios.CancelToken;
		this.cancelSource = CancelToken.source();
	}
	
	//For ranking and map functionalities
	//Only data from one day/file is processed
	async callAPIGlobalAll(markDate) {
		
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
	async callAPIGlobalTimeline(city, country) {
		
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
	async callAPIGlobal(city, country, markDate, process = true) {
		
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
	async callAPIThailand() {
		
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
		
		if (data.length > 0)
			this.processData(source, data);
	}
	
	getLastDate(type, data) {
		for (let i=data.length-1; i>=0; i--) {
			if (data[i][type] != 0)
				return data[i]['Date'];
		}
	}
	
	getDateDiff(date) {
		let now = (new Date()).getTime();
		return Math.floor((now - (new Date(date)).getTime())/86400000);
	}
	
	processData(source, data, hasTimeline = true) {
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
	
	countryCompare(category) {
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
	
	globalRankSelect(ranking, country) {
		return ranking.findIndex(x => x.Country == country);
	}
	
	globalRankTopTen(ranking) {
		return ranking.slice(0,10);
	}
	
	globalRanking(category) {
		const countries = Object.values(this.state.globalData);
		countries.sort(this.countryCompare(category));
		//console.log(countries);
		this.setState({
			rankSelect: this.globalRankSelect(countries, this.state.selectCountry),
			rankTopTen: this.globalRankTopTen(countries),
		});
	}
	
	globalRankingHeading(category) {
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
	
	countryEncodeAssist(country, countriesName) {
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
	
	countryDecodeAssist(code) {
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
	
	processMapGlobalData(countries, globalData) {
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
	
	renderMap(category) {
		const handleClick = (e, code) => {
			const country = this.countryDecodeAssist(code);
			if (this.state.countries.includes(country))
				this.setState({ selectCountry: country, selectCity: 'Overall'});
		};
		
		const data = this.state.mapGlobalData;
		const mapData = data[category];
		//console.log(mapData);
		
		let minColor = "#FFFFFF";
		let maxColor = cRed;
		if (category == "Recovered" || category == "RecoveryRate")
			maxColor = cBlue;
		
		let normFunction = "polynomial";
		if (category == "RecoveryRate" || category == "MortalityRate")
			normFunction = "linear";
		
		return (
			<div>
				<VectorMap
					map={"world_mill"}
					backgroundColor="#000000"//"transparent" //change it to ocean blue: #0077be
					zoomOnScroll={false}
					containerStyle={{
						width: "100%",
						height: "520px"
					}}
					onRegionClick={handleClick}
					containerClassName="map"
					regionStyle={{
						initial: {
							fill: "#C0C0C0",
							"fill-opacity": 1,
							stroke: "white",
							"stroke-width": 0.2,
							"stroke-opacity": 1
						},
						hover: {
							"fill-opacity": 0.75,
							cursor: "pointer"
						},
						selected: {},
						selectedHover: {}
					}}
					regionsSelectable={false}
					series={{
						regions: [
							{
								values: mapData, //this is your data
								scale: [minColor, maxColor], //your color game's here
								normalizeFunction: normFunction
							}
						]
					}}
					onRegionTipShow={(event, label, code) => {
						label.html(
							'<b><i>'+label.html()+'</i></b></br>'+
							'Confirmed: '+data['Confirmed'][code]+'</br>'+
							'Hospitalized: '+data['Hospitalized'][code]+'</br>'+
							'Deaths: '+data['Deaths'][code]+'</br>'+
							'Recovered: '+data['Recovered'][code]+'</br>'+
							'Recovery rate: '+data['RecoveryRate'][code]+'%'+'</br>'+
							'Mortality rate: '+data['MortalityRate'][code]+'%'
						);
					}}
				/>
			</div>
		);
	}
	
	render() {
		const { classes } = this.props;
		const {
			selectCountry, selectCity, fastMode, 
			dataTimeline, dataTimeline15, data_text, data_pie,
			selectCategory
		} = this.state;
		
		const selectedCountryData = this.state.globalData[selectCountry];
		let cityChoice = ["Overall"];
		if (selectedCountryData != undefined && selectedCountryData.CitiesN != 0) {
			cityChoice = selectedCountryData.Cities.slice(0);
			cityChoice.splice(0,0,"Overall");
		}
		
		const categoryChoice = ['Confirmed', 'Hospitalized', 'Deaths', 'Recovered', 'RecoveryRate', 'MortalityRate'];
		let rankSuffix = " cases";
		if ((selectCategory == 'RecoveryRate') || (selectCategory == 'MortalityRate')) {
			rankSuffix = "%";
		}
		
		return (
			<div className={classes.root}>
				<CssBaseline/>
				<AppBar style={{background: cDRed}}>
					<Toolbar>
						<Typography variant="h4" className={classes.title} align="center">
							<b>Simple COVID-19 Dashboard</b>
						</Typography>
					</Toolbar>
				</AppBar>
				<div className={classes.appBarSpacer}/>
				<Container>
				
					<Grid container spacing={2}>

						{/*-------------------------------- Source Info --------------------------------*/}
				
						<Grid item xs={4}>
							<MuiThemeProvider theme={darkTheme}>
								<Typography align="left" color="textPrimary">
									<br/>
									Last updated: {data_text.updatedDate}
								</Typography>
								<Typography variant="subtitle2" align="left" color="textPrimary">
									<a
									href={data_text.source}
									target="_blank"
									rel="noopener noreferrer"> {
										data_text.source
									}
									</a>
								</Typography>
							</MuiThemeProvider>
						</Grid>
						
						{/*-------------------------------- Fetch Control --------------------------------*/}
						
						<Grid item xs={2}>
							<br/><br/>
							<button
								style={{
									height: '32px',
									width : '128px',
									float: 'right',
									color: (fastMode ? cDRed : 'blue')
								}}
								onClick={() => this.setState({ fastMode: !fastMode })}
							>
								<b>{fastMode ? "FAST MODE" : "FULL MODE"}</b>
							</button>
						</Grid>
						<Grid item xs={3}>
							<br/><br/>
							<Dropdown options={this.state.countries} value={selectCountry}
								onChange={(select) => this.setState({ selectCountry: select.value, selectCity: 'Overall' })}
							/>
						</Grid>
						<Grid item xs={3}>
							<br/><br/>
							<Dropdown options={cityChoice} value={selectCity}
								onChange={(select) => this.setState({ selectCity:select.value })}
							/>
						</Grid>
					
						{/*-------------------------------- Numbers --------------------------------*/}
					
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<Typography style={{ color: 'steelblue' }}><b>Confirmed</b></Typography>
								<Typography style={{ color: cBlue }} variant="h3">{data_text.confirmed.toLocaleString()}</Typography>
								<Typography style={{ color: 'steelblue' }} variant="h5">+ {data_text.newConfirmed.toLocaleString()}</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<Typography style={{ color: 'goldenrod' }}><b>Hospitalized</b></Typography>
								<Typography style={{ color: cOrange }} variant="h3">{data_text.hospitalized.toLocaleString()}</Typography>
								<Typography style={{ color: 'goldenrod' }} variant="h5">
									{(data_text.newHospitalized >= 0) ? '+' : '-'} {Math.abs(data_text.newHospitalized).toLocaleString()}
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<Typography style={{ color: 'fireBrick' }}><b>Deaths</b></Typography>
								<Typography style={{ color: cRed }} variant="h3">{data_text.deaths.toLocaleString()}</Typography>
								<Typography style={{ color: 'fireBrick' }} variant="h5">+ {data_text.newDeaths.toLocaleString()}</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<Typography style={{ color: 'green' }}><b>Recovered</b></Typography>
								<Typography style={{ color: cGreen }} variant="h3">{data_text.recovered.toLocaleString()}</Typography>
								<Typography style={{ color: 'green' }} variant="h5">+ {data_text.newRecovered.toLocaleString()}</Typography>
							</Paper>
						</Grid>
						
						{/*-------------------------------- Streaks --------------------------------*/}
							
						{ this.state.hasTimeline && (
							<>
							<Grid item xs={6}>
								<Paper className={classes.paper}>
									<Typography variant='h6'>
										Last confirmed: {this.state.lastConfirmed} ({this.state.noConfirmedStreak} days ago)
									</Typography>
									<Typography variant='h6'>
										Last death: {this.state.lastDeath} ({this.state.noDeathStreak} days ago)
									</Typography>
								</Paper>
							</Grid>
							</>
						)}
						
						{/*-------------------------------- Rates --------------------------------*/}
						
						<Grid item xs={ this.state.hasTimeline ? 6 : 12}>
							<Paper className={classes.paper}>
								<Typography variant='h6' style={{ color: 'green' }}>
									Recovery Rate: {this.state.rateRecovery}
								</Typography>
								<Typography variant='h6' style={{ color: cDRed }}>
									Mortality Rate: {this.state.rateDeath}
								</Typography>
							</Paper>
						</Grid>
						
					</Grid>
						
					{/*-------------------------------- Graphs --------------------------------*/}
				
					{/*Button to toggle graph display*/}
					<br/>
					{ this.state.hasTimeline && (
						<>
						<button
							style={{
								height: '32px',
								width : '144px',
								float: 'right',
								color: (this.state.showGraph ? 'grey' : 'steelblue')
							}}
							onClick={() => this.setState({ showGraph: !this.state.showGraph })}
						>
							Show/Hide Graphs
						</button>
						<br/>
						</>
					)}
					<br/>
					
					{ this.state.showGraph && (	//Whether or not to display graphs
					<>
					<Grid container spacing={2}>
						{/*Bar, last 14 days*/}
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper}>
								<ResponsiveContainer width="100%" height={300}>
									<BarChart
										width={500}
										height={300}
										data={dataTimeline15}
										margin={{top: 5, right: 5, left: 0, bottom: 5}}
									>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="Date"/>
										<YAxis/>
										<Tooltip/>
										<Legend/>
										<Bar dataKey="NewConfirmed" fill={cBlue}/>
										<Bar dataKey="NewDeaths" fill={cRed}/>
									</BarChart>
								</ResponsiveContainer>
							</Paper>
						</Grid>
						
						{/*Pie, in total*/}
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper}>
								<ResponsiveContainer width="100%" height={300}>
									<PieChart width={400}	height={400}>
										<Legend/>
										<Pie dataKey="value" isAnimationActive={false} data={data_pie} outerRadius={100} label>
											<Cell fill={cOrange} />
											<Cell fill={cRed} />
											<Cell fill={cGreen} />
										</Pie>
										<Tooltip/>
									</PieChart>
								</ResponsiveContainer>
							</Paper>
						</Grid>
						
						{/*Bar, in total*/}
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<ResponsiveContainer width="100%" height={500}>
									<LineChart
										data={dataTimeline}
										margin={{top: 5, right: 5, left: 0, bottom: 5 }}
									>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="Date" />
										<YAxis/>
										<Tooltip/>
										<Legend/>
										<Line type="monotone" strokeWidth={2} dataKey="Confirmed" stroke={cBlue} dot={false} />
										<Line type="monotone" strokeWidth={2} dataKey="Hospitalized" stroke={cOrange} dot={false} />
										<Line type="monotone" strokeWidth={2} dataKey="Deaths" stroke={cRed} dot={false} />
										<Line type="monotone" strokeWidth={2} dataKey="Recovered" stroke={cGreen} dot={false} />
									</LineChart>
								</ResponsiveContainer>
							</Paper>
						</Grid>
					</Grid>

					<br/>
					<button
						style={{ height: '32px', width : '144px', float: 'right', color: 'grey' }}
						onClick={() => this.setState({ showGraph: !this.state.showGraph })}
					>
						Hide Graphs
					</button>
					<br/><br/>
					
					</>
					)}
					
						{/*-------------------------------- Rankings --------------------------------*/}
										
							<Grid container spacing={2} justify="space-between" alignItems="center">
								<Grid item xs={6}>
									<Typography variant='h5' style={{ color: cRed }}>
										<b>Global Ranking based on:</b>
									</Typography>
									<Typography variant='h5' style={{ color: cDRed }}>
										{this.globalRankingHeading(selectCategory)}
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<br/>
									<Dropdown options={categoryChoice} value={'Hospitalized'}
										onChange={(select) => this.setState({ selectCategory: select.value})}
									/>
								</Grid>
							</Grid>
							
					<Grid container spacing={2}>
					
						<Grid item xs={3}>
							{ (this.state.rankSelect >= 0) && (
								<Grid container spacing={2} direction='column'>
									<Grid item xs={12}>
										<Paper className={classes.paper}>
											<Typography align='center'>
												<b>Rank {this.state.rankSelect}. {selectCountry} - {this.state.globalData[selectCountry][selectCategory]}{rankSuffix}</b>
												<br/>out of {this.state.countries.length} countries
											</Typography>
										</Paper>
									</Grid>
									<Grid item xs={12}>
										<Paper className={classes.paper}>
											<Typography variant='h6'>
												<b>Top 10 Countries</b><br/>
											</Typography>
											<Typography>
												{this.state.rankTopTen.map((c, i) => (
												<><b>{i+1}.</b> {c.Country} - {c[selectCategory]}{rankSuffix}<br/></>
												))}
											</Typography>
										</Paper>
									</Grid>
								</Grid>
							)}
						</Grid>
						
						{/*-------------------------------- Map --------------------------------*/}
						
						<Grid item xs={9}>
							{ (this.state.mapGlobalData != null) && (
								<>
								{this.renderMap(selectCategory)}
								</>
							)}
						</Grid>
						
					</Grid>
				
				</Container>
				
				{/*-------------------------------- Footer --------------------------------*/}
				
				<footer className={classes.footer}>
					<Paper className={classes.paperFoot}>
						<Typography variant="h6">
							<b>Simple Covid-19 Dashboard for Tencent Thailand's Internship Project</b>
						</Typography>
						<Typography component="p">
							By Thanjira S. and Woottipat H.
            </Typography>
          </Paper>
        </footer>
			</div>
		);
	}
}

export default withStyles(styles)(App);
