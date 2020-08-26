
import React from 'react';

//MUI
import {withStyles, createMuiTheme, MuiThemeProvider, AppBar, Toolbar,
	Typography, CssBaseline, Container, Paper, Grid,
	styles, darkTheme} from '../styles/mui_styles.js';

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
	getLastDate, getDateDiff, processData} from '../utils/data_fetch.js';
	
//RANKING
import {countryCompare, globalRankSelect, globalRankTopTen,
	globalRanking, globalRankingHeading} from '../utils/data_rank.js';
	
//JVECTORMAP
import {countryEncodeAssist, countryDecodeAssist, processMapGlobalData} from '../utils/data_map.js';
import '../styles/jquery-jvectormap.css'

import TopSection from '../components/topSection.js';
import GraphSection from '../components/graphSection.js';
import CategorySection from '../components/categorySection.js';
import BottomSection from '../components/bottomSection.js';
	
//----------------------------------------------------------------

const cBlue = '#20A0E0';
const cOrange = '#F7B860';
const cRed = '#E04040';
const cGreen = '#80D080';
const cDRed = '#BB0A1E';
const customColors = {
	cRed:cRed,
	cDRed:cDRed,
	cGreen:cGreen,
	cBlue:cBlue,
	cOrange:cOrange
};

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
				
				{/* ******************************** Main ******************************** */}
				<Container>
				
					<TopSection
						state={this.state} colors={customColors} paperClass={classes.paper}
						buttonClick={() => this.setState({ fastMode: !this.state.fastMode })}
						countrySelect={(select) => this.setState({ selectCountry: select.value, selectCity: 'Overall' })}
						citySelect={(select) => this.setState({ selectCity:select.value })}
					/>

					<GraphSection state={this.state} colors={customColors} paperClass={classes.paper} />
					
					<CategorySection
						colors={customColors} category={this.state.selectCategory}
						onChange={(select) => this.setState({ selectCategory: select.value})}
					/>

					<BottomSection
						paperClass={classes.paper} colors={customColors} state={this.state}
						regionClick={(e, code) => {
							const country = this.countryDecodeAssist(code);
							if (this.state.countries.includes(country))
								this.setState({ selectCountry: country, selectCity: 'Overall'});
						}}
					/>
				
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