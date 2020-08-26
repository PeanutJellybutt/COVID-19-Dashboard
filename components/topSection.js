
//MUI
import {MuiThemeProvider, Typography, Container,
	Paper, Grid, darkTheme} from '../styles/mui_styles.js';
	
//DROPDOWN
import Dropdown from 'react-dropdown';
import '../styles/style_dropdown.module.css';

function SourceInfo({data_text}) {
	return (
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
	);
}

function FastModeButton({fastMode, onClick, colorA, colorB}) {
	return (
		<Grid item xs={2}>
			<br/><br/>
			<button
				style={{
					height: '32px',
					width : '128px',
					float: 'right',
					color: (fastMode ? colorA : colorB)
				}}
				onClick={onClick}
			>
				<b>{fastMode ? "FAST MODE" : "FULL MODE"}</b>
			</button>
		</Grid>
	);
}

function CountryDropdown({countries, selectCountry, onChange}) {
	return (
		<Grid item xs={3}>
			<br/><br/>
			<Dropdown options={countries} value={selectCountry}
				onChange={onChange}
			/>
		</Grid>
	);
}

function CityDropdown({countryData, selectCity, onChange}) {
	let cityChoice = ["Overall"];
	if (countryData != undefined && countryData.CitiesN != 0) {
		cityChoice = countryData.Cities.slice(0);
		cityChoice.splice(0,0,"Overall");
	}
	return (
		<Grid item xs={3}>
			<br/><br/>
			<Dropdown options={cityChoice} value={selectCity}
				onChange={onChange}
			/>
		</Grid>
	);
}

function NumbersCard({label,paperClass,colorA,colorB,number,newNumber}) {
	return (
		<Grid item xs={6} sm={3}>
			<Paper className={paperClass}>
				<Typography style={{ color: colorA }}><b>{label}</b></Typography>
				<Typography style={{ color: colorB }} variant="h3">{number}</Typography>
				<Typography style={{ color: colorA }} variant="h5">{newNumber}</Typography>
			</Paper>
		</Grid>
	);
}

function StreaksCard({paperClass,lastConfirmed,lastDeath,noConfirmedStreak,noDeathStreak}) {
	return (
		<Grid item xs={6}>
			<Paper className={paperClass}>
				<Typography variant='h6'>
					Last confirmed: {lastConfirmed} ({noConfirmedStreak} days ago)
				</Typography>
				<Typography variant='h6'>
					Last death: {lastDeath} ({noDeathStreak} days ago)
				</Typography>
			</Paper>
		</Grid>
	);
}

function RatesCard({gridSize,paperClass,colorA,colorB,rateRecovery,rateDeath}) {
	return (
		<Grid item xs={gridSize}>
			<Paper className={paperClass}>
				<Typography variant='h6' style={{ color: colorA }}>
					Recovery Rate: {rateRecovery}
				</Typography>
				<Typography variant='h6' style={{ color: colorB }}>
					Mortality Rate: {rateDeath}
				</Typography>
			</Paper>
		</Grid>
	);
}


function TopSection({state, colors, paperClass, buttonClick, countrySelect, citySelect}) {
	return (
		<Grid container spacing={2}>

			<SourceInfo data_text={state.data_text}/>

			{/* ******************************** Fetch Controls ******************************** */}
			<FastModeButton
				fastMode={state.fastMode} 
				onClick={buttonClick}
				colorA={colors.cRed} colorB='blue'
			/>
			<CountryDropdown
				countries={state.countries}
				selectCountry={state.selectCountry}
				onChange={countrySelect}
			/>
			<CityDropdown
				countryData={state.globalData[state.selectCountry]}
				selectCity={state.selectCity}
				onChange={citySelect}
			/>
			
			{/* ******************************** Numbers ******************************** */}
			<NumbersCard
				paperClass={paperClass} colorA='steelblue' colorB={colors.cBlue} label='Confirmed'
				number={state.data_text.confirmed.toLocaleString()}
				newNumber={'+ ' + state.data_text.newConfirmed.toLocaleString()}
			/>
			<NumbersCard
				paperClass={paperClass} colorA='goldenrod' colorB={colors.cOrange} label='Hospitalized'
				number={state.data_text.hospitalized.toLocaleString()}
				newNumber={
					(state.data_text.newHospitalized >= 0 ? '+' : '-') + ' ' +
					(Math.abs(state.data_text.newHospitalized).toLocaleString())
				}
			/>
			<NumbersCard
				paperClass={paperClass} colorA='firebrick' colorB={colors.cRed} label='Deaths'
				number={state.data_text.deaths.toLocaleString()}
				newNumber={'+ ' + state.data_text.newDeaths.toLocaleString()}
			/>
			<NumbersCard
				paperClass={paperClass} colorA='green' colorB={colors.cGreen} label='Recovered'
				number={state.data_text.recovered.toLocaleString()}
				newNumber={'+ ' + state.data_text.newRecovered.toLocaleString()}
			/>
			
			{/* ******************************** Additonal Numbers ******************************** */}
			{ state.hasTimeline && (
				<StreaksCard
					paperClass={paperClass}
					lastConfirmed={state.lastConfirmed}
					lastDeath={state.lastDeath}
					noConfirmedStreak={state.noConfirmedStreak}
					noDeathStreak={state.noDeathStreak}
				/>
			)}
			<RatesCard
				gridSize={state.hasTimeline ? 6 : 12} paperClass={paperClass}
				colorA='green' colorB={colors.cDRed}
				rateRecovery={state.rateRecovery}
				rateDeath={state.rateDeath}
			/>
			
		</Grid>
	);
}

export default TopSection;