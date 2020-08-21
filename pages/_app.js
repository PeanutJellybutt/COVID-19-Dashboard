
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
		};
		
		this.referenceDate = new Date(2020,7,20);
		
		const CancelToken = axios.CancelToken;
		this.cancelSource = CancelToken.source();
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
			if (!prevState.fastMode && this.state.fastMode)
				this.clearAxiosCalls();
			
			this.fetchData(this.referenceDate);
		}
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
				let confirmed = parseInt(values[conIndex]);
				let hospitalized = parseInt(values[10]);
				let deaths = parseInt(values[deathIndex]);
				let recovered = parseInt(values[recIndex]);
				if (data[country] != undefined) {
					confirmed += data[country]["Confirmed"];
					hospitalized += data[country]["Hospitalized"];
					deaths += data[country]["Deaths"];
					recovered += data[country]["Recovered"];
				}
				else
				{
					data[country] = new Object();
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
				data[country].RecoveryRate = (recovered/confirmed) * 100;
				data[country].MortalityRate = (deaths/confirmed) * 100;
				if (city != '') {
					data[country].Cities[citiesN] = city;
					data[country].CitiesN = citiesN + 1;
				}
			}
			//console.log(data);
			
			this.setState({
				countries: countries,
				globalData: data,
			});
			//console.log(this.state.countries);
		}
		
		
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
				const confirmed = parseInt(values[conIndex]);
				const hospitalized = parseInt(values[10]);
				const deaths = parseInt(values[deathIndex]);
				const recovered = parseInt(values[recIndex]);
				
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
			console.log(sourceDate);
		
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
			
			const confirmed = thisData["Confirmed"] + parseInt(values[7]);
			const deaths = thisData["Deaths"] + parseInt(values[8]);
			const recovered = thisData["Recovered"] + parseInt(values[9]);
			thisData.Confirmed = confirmed;
			thisData.Hospitalized = thisData["Hospitalized"] + parseInt(values[10]);
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
			
			console.log(data);
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
			console.log(response);
			data = response.data['Data'];
		} catch(err) {
			console.log(err);
			return undefined;
		}
		
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
	
	render() {
		const graphBlue = '#20A0E0';
		const graphYellow = '#FFC060';
		const graphRed = '#E04040';
		const graphGreen = '#80E080';
		
		const { classes } = this.props;
		const { selectCountry, selectCity, dataTimeline, dataTimeline15, data_text, data_pie } = this.state;
		
		const selectedCountryData = this.state.globalData[selectCountry];
		let cityChoice = ["Overall"];
		if (selectedCountryData != undefined && selectedCountryData.CitiesN != 0) {
			cityChoice = selectedCountryData.Cities.slice(0);
			cityChoice.splice(0,0,"Overall");
		}
		
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar style={{background:'#BB0A1E'}}>
					<Toolbar>
						<Typography variant="h4" className={classes.title} align="center">
							<b>Simple COVID-19 Dashboard</b>
							{/*this.state.selectCity*/}
						</Typography>
					</Toolbar>
				</AppBar>
				<div className={classes.appBarSpacer}/>
				<Container>
					<Grid container spacing={2}>
						<Grid item xs={5}>
							<MuiThemeProvider theme={darkTheme}>
								<Typography align="left" color="textPrimary">
									<br/>
									Last updated: {data_text.updatedDate}
								</Typography>
								<Typography variant="subtitle2" align="left">
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
						<Grid item xs={1}>
							<br/>
							<br/>
							<button onClick={() => this.setState({ fastMode: !this.state.fastMode })}>
								{this.state.fastMode ? "FAST MODE" : "FULL MODE"}
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
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<Typography>Confirmed</Typography>
								<Typography variant="h3">{data_text.confirmed.toLocaleString()}</Typography>
								<Typography variant="h5">({data_text.newConfirmed.toLocaleString()})</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<Typography>Hospitalized</Typography>
								<Typography variant="h3">{data_text.hospitalized.toLocaleString()}</Typography>
								<Typography variant="h5">({data_text.newHospitalized.toLocaleString()})</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<Typography>Deaths</Typography>
								<Typography variant="h3">{data_text.deaths.toLocaleString()}</Typography>
								<Typography variant="h5">({data_text.newDeaths.toLocaleString()})</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<Typography>Recovered</Typography>
								<Typography variant="h3">{data_text.recovered.toLocaleString()}</Typography>
								<Typography variant="h5">({data_text.newRecovered.toLocaleString()})</Typography>
							</Paper>
						</Grid>
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
						<Grid item xs={ this.state.hasTimeline ? 6 : 12}>
							<Paper className={classes.paper}>
								<Typography variant='h6'>
									Recovery Rate: {this.state.rateRecovery}
								</Typography>
								<Typography variant='h6' >
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
						<button onClick={() => this.setState({ showGraph: !this.state.showGraph })}>
							Show/Hide Graph
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
										<YAxis />
										<Tooltip />
										<Legend />
										<Bar dataKey="NewConfirmed" fill={graphBlue} />
										<Bar dataKey="NewDeaths" fill={graphRed} />
									</BarChart>
								</ResponsiveContainer>
							</Paper>
						</Grid>
						
						{/*Pie, in total*/}
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper}>
								<ResponsiveContainer width="100%" height={300}>
									<PieChart width={400}	height={400}>
										<Legend />
										<Pie dataKey="value" isAnimationActive={false} data={data_pie} outerRadius={100} label>
											<Cell fill={graphYellow} />
											<Cell fill={graphRed} />
											<Cell fill={graphGreen} />
										</Pie>
										<Tooltip />
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
										<YAxis />
										<Tooltip />
										<Legend />
										<Line type="monotone" strokeWidth={2} dataKey="Confirmed" stroke={graphBlue} dot={false} />
										<Line type="monotone" strokeWidth={2} dataKey="Hospitalized" stroke={graphYellow} dot={false} />
										<Line type="monotone" strokeWidth={2} dataKey="Deaths" stroke={graphRed} dot={false} />
										<Line type="monotone" strokeWidth={2} dataKey="Recovered" stroke={graphGreen} dot={false} />
									</LineChart>
								</ResponsiveContainer>
							</Paper>
						</Grid>
					</Grid>
					</>
					)}
				</Container>
				<footer className={classes.footer}>
					<Paper className={classes.paperFoot}>
						<Typography variant="h6">
							Simple Covid-19 Dashboard for Tencent Thailand's Internship Project
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
