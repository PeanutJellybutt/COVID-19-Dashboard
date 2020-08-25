
import React from 'react';

//MUI
import {withStyles, createMuiTheme, MuiThemeProvider, AppBar, Toolbar,
	Typography, CssBaseline, Container, Paper, Grid,
	styles, darkTheme} from '../components/muiComponents.js';

//DROPDOWN
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

//RECHARTS
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, LineChart, Line, BarChart, Bar, PieChart, 
  Pie, Cell, } from 'recharts';
	
//AXIOS DATA
import axios from 'axios';
import {fetchData, callAPIGlobalAll, callAPIGlobalTimeline,
	callAPIGlobal, callAPIThailand, clearAxiosCalls,
	getLastDate, getDateDiff, processData} from '../components/dataFetch.js';
	
//RANKING
import {countryCompare, globalRankSelect, globalRankTopTen,
	globalRanking, globalRankingHeading} from '../components/dataRank.js';
	
//JVECTORMAP
import {countryEncodeAssist, countryDecodeAssist, processMapGlobalData} from '../components/dataMap.js';
import '../public/jquery-jvectormap.css'
import dynamic from 'next/dynamic'
export const VectorMap = dynamic(
  () => import("react-jvectormap").then((m) => m.VectorMap),
  { ssr: false, }
);
	
//----------------------------------------------------------------

const cBlue = '#20A0E0';
const cOrange = '#F7B860';
const cRed = '#E04040';
const cGreen = '#80D080';
const cDRed = '#BB0A1E';

class App extends React.Component {
	
  constructor(props) {
		super(props);
		this.state = {
			hasData: false,
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
		
		//Binding dataFetch functions
		this.fetchData = fetchData.bind(this);
		this.callAPIGlobalAll = callAPIGlobalAll.bind(this);
		this.callAPIGlobalTimeline = callAPIGlobalTimeline.bind(this);
		this.callAPIGlobal = callAPIGlobal.bind(this);
		this.callAPIThailand = callAPIThailand.bind(this);
		this.clearAxiosCalls = clearAxiosCalls.bind(this);
		this.getLastDate = getLastDate.bind(this);
		this.getDateDiff = getDateDiff.bind(this);
		this.processData = processData.bind(this);
		//Binding dataRank functions
		this.countryCompare = countryCompare.bind(this);
		this.globalRankSelect = globalRankSelect.bind(this);
		this.globalRankTopTen = globalRankTopTen.bind(this);
		this.globalRanking = globalRanking.bind(this);
		this.globalRankingHeading = globalRankingHeading.bind(this);
		//Binding dataRank functions
		this.countryEncodeAssist = countryEncodeAssist.bind(this);
		this.countryDecodeAssist = countryDecodeAssist.bind(this);
		this.processMapGlobalData = processMapGlobalData.bind(this);
  }
  
  componentDidMount() {
		this.callAPIGlobalAll(this.referenceDate);
		this.fetchData(this.referenceDate);
  }
	
	componentDidUpdate(prevProps, prevState) {
		if ((prevState.selectCountry != this.state.selectCountry) ||
     		(prevState.selectCity != this.state.selectCity) ||
				(prevState.fastMode != this.state.fastMode))
		{
			this.clearAxiosCalls();
			this.fetchData(this.referenceDate);
		}
		
		if (prevState.selectCategory != this.state.selectCategory || prevState.selectCountry != this.state.selectCountry)
			this.globalRanking(this.state.selectCategory);
	}
	
	renderSourceInfo() {
		const {data_text} = this.state;
		return (
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
		);
	}
	
	renderFetchControls(which) {
		if (which == 0) {	//Button Fast/Full Mode Select
			const {fastMode} = this.state;
			return (
				<>
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
				</>
			);
		}
		else if (which == 1) {	//Dropdown Country Select
			const {countries, selectCountry} = this.state;
			return (
				<>
				<br/><br/>
				<Dropdown options={countries} value={selectCountry}
					onChange={(select) => this.setState({ selectCountry: select.value, selectCity: 'Overall' })}
				/>
				</>
			);
		}
		else {	//Dropdown City Select
			const {selectCountry, selectCity} = this.state;
			const selectedCountryData = this.state.globalData[selectCountry];
			let cityChoice = ["Overall"];
			if (selectedCountryData != undefined && selectedCountryData.CitiesN != 0) {
				cityChoice = selectedCountryData.Cities.slice(0);
				cityChoice.splice(0,0,"Overall");
			}
			return (
				<>
				<br/><br/>
				<Dropdown options={cityChoice} value={selectCity}
					onChange={(select) => this.setState({ selectCity:select.value })}
				/>
				</>
			);
		}
	}
	
	renderNumbers(which) {
		const {data_text} = this.state;
		const {classes} = this.props;
		if (which == 0) {
			return (
				<Paper className={classes.paper}>
					<Typography style={{ color: 'steelblue' }}><b>Confirmed</b></Typography>
					<Typography style={{ color: cBlue }} variant="h3">{data_text.confirmed.toLocaleString()}</Typography>
					<Typography style={{ color: 'steelblue' }} variant="h5">+ {data_text.newConfirmed.toLocaleString()}</Typography>
				</Paper>
			);
		}
		else if (which == 1) {
			return (
				<Paper className={classes.paper}>
					<Typography style={{ color: 'goldenrod' }}><b>Hospitalized</b></Typography>
					<Typography style={{ color: cOrange }} variant="h3">{data_text.hospitalized.toLocaleString()}</Typography>
					<Typography style={{ color: 'goldenrod' }} variant="h5">
						{(data_text.newHospitalized >= 0) ? '+' : '-'} {Math.abs(data_text.newHospitalized).toLocaleString()}
					</Typography>
				</Paper>
			);
		}
		else if (which == 2) {
			return (
				<Paper className={classes.paper}>
					<Typography style={{ color: 'fireBrick' }}><b>Deaths</b></Typography>
					<Typography style={{ color: cRed }} variant="h3">{data_text.deaths.toLocaleString()}</Typography>
					<Typography style={{ color: 'fireBrick' }} variant="h5">+ {data_text.newDeaths.toLocaleString()}</Typography>
				</Paper>
			);
		}
		else {
			return (
				<Paper className={classes.paper}>
					<Typography style={{ color: 'green' }}><b>Recovered</b></Typography>
					<Typography style={{ color: cGreen }} variant="h3">{data_text.recovered.toLocaleString()}</Typography>
					<Typography style={{ color: 'green' }} variant="h5">+ {data_text.newRecovered.toLocaleString()}</Typography>
				</Paper>
			);
		}
	}
	
	renderStreaks() {
		const {classes} = this.props;
		return (
			<Paper className={classes.paper}>
				<Typography variant='h6'>
					Last confirmed: {this.state.lastConfirmed} ({this.state.noConfirmedStreak} days ago)
				</Typography>
				<Typography variant='h6'>
					Last death: {this.state.lastDeath} ({this.state.noDeathStreak} days ago)
				</Typography>
			</Paper>
		);
	}
	
	renderRates() {
		const {classes} = this.props;
		return (
			<Paper className={classes.paper}>
				<Typography variant='h6' style={{ color: 'green' }}>
					Recovery Rate: {this.state.rateRecovery}
				</Typography>
				<Typography variant='h6' style={{ color: cDRed }}>
					Mortality Rate: {this.state.rateDeath}
				</Typography>
			</Paper>
		);
	}
	
	renderGraphButton() {
		const {classes} = this.props;
		return (
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
		);
	}
	
	renderGraphs() {
		const {classes} = this.props;
		const {dataTimeline, dataTimeline15, data_pie} = this.state;
		return (
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

			{/*Hide Graph Button*/}
			<br/>
			<button
				style={{ height: '32px', width : '144px', float: 'right', color: 'grey' }}
				onClick={() => this.setState({ showGraph: !this.state.showGraph })}
			>
				Hide Graphs
			</button>
			<br/><br/>
			
			</>
		);
	}
	
	renderRankingHeader() {
		return (
			<>
			<Typography variant='h5' style={{ color: cRed }}>
				<b>Global Ranking based on:</b>
			</Typography>
			<Typography variant='h5' style={{ color: cDRed }}>
				{this.globalRankingHeading(this.state.selectCategory)}
			</Typography>
			</>
		);
	}
	
	renderCategoryDropdown() {
		const categoryChoice = ['Confirmed', 'Hospitalized', 'Deaths', 'Recovered', 'RecoveryRate', 'MortalityRate'];
		return (
			<>
			<br/>
			<Dropdown options={categoryChoice} value={'Hospitalized'}
				onChange={(select) => this.setState({ selectCategory: select.value})}
			/>
			</>
		);
	}
	
	renderRanking() {
		if (this.state.rankSelect < 0)
			return null;
		
		const {classes} = this.props;
		const {selectCountry, selectCategory} = this.state;
		let rankSuffix = " cases";
		if ((selectCategory == 'RecoveryRate') || (selectCategory == 'MortalityRate'))
			rankSuffix = "%";
		
		return (
			<Grid item xs={3}>
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
			</Grid>
		);
	}
	
	renderMap() {
		if (this.state.mapGlobalData == null)
			return null;
		
		const handleClick = (e, code) => {
			const country = this.countryDecodeAssist(code);
			if (this.state.countries.includes(country))
				this.setState({ selectCountry: country, selectCity: 'Overall'});
		};

		const category = this.state.selectCategory;
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
							fill: "#A0A0A0",
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
		if (!this.state.hasData)
			return "ERROR: Cannot fetch data";

		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<CssBaseline/>
				
				{/* ******************************** Title Bar ******************************** */}
				<AppBar style={{background: cDRed}}>
					<Toolbar>
						<Typography variant="h4" className={classes.title} align="center">
							<b>COVID-19 Dashboard</b>
						</Typography>
					</Toolbar>
				</AppBar>
				<div className={classes.appBarSpacer}/>
				
				<Container>
				
					{/* ******************************** Top Section ******************************** */}
					<Grid container spacing={2}>
						{/* -- Source Info -- */}
						<Grid item xs={4}>{this.renderSourceInfo()}</Grid>
						{/* -- Data Fetch Controls -- */}
						<Grid item xs={2}>{this.renderFetchControls(0)}</Grid> {/* Fast/Full Button */}
						<Grid item xs={3}>{this.renderFetchControls(1)}</Grid> {/* Country Dropdown */}
						<Grid item xs={3}>{this.renderFetchControls(2)}</Grid> {/* City Dropdown */}
						{/* -- Basic Numbers -- */}
						<Grid item xs={6} sm={3}>{this.renderNumbers(0)}</Grid> {/* Confirmed */}
						<Grid item xs={6} sm={3}>{this.renderNumbers(1)}</Grid> {/* Hospitalized */}
						<Grid item xs={6} sm={3}>{this.renderNumbers(2)}</Grid> {/* Deaths */}
						<Grid item xs={6} sm={3}>{this.renderNumbers(3)}</Grid> {/* Recovered */}
						{/* -- Additional Numbers -- */}
						{ (this.state.hasTimeline) && (<Grid item xs={6}>{this.renderStreaks()}</Grid>) } {/* Streaks */}
						<Grid item xs={ this.state.hasTimeline ? 6 : 12}>{this.renderRates()}</Grid> {/* Rates */}
					</Grid>
			

					{/* ******************************** Graphs Section ******************************** */}
					<br/>{ (this.state.hasTimeline) && (this.renderGraphButton())} {/* Show/Hide Graph Button */}
					<br/>{ (this.state.showGraph) && (this.renderGraphs())} {/* Graphs */}
					
					
					{/* ******************************** Upper Bottom Section ******************************** */}
					<Grid container spacing={2} justify="space-between" alignItems="center">
						<Grid item xs={6}>{this.renderRankingHeader()}</Grid> {/* Ranking Header */}
						<Grid item xs={2}>{this.renderCategoryDropdown()}</Grid> {/* Category Dropdown */}
					</Grid>
							
							
					{/* ******************************** Bottom Section ******************************** */}
					<Grid container spacing={2}>
						{this.renderRanking()} {/* Rankings */}
						<Grid item xs={9}>{this.renderMap()}</Grid> {/* Map */}
					</Grid>
				
				</Container>
				
				{/* ******************************** Footer ******************************** */}
				<footer className={classes.footer}>
					<Paper className={classes.paper} style={{background: "#8F8080"}}>
						<Typography variant="h6">
							<b>COVID-19 Dashboard for Tencent Thailand's Internship Project</b>
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