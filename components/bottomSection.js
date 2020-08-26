
//MUI
import {Typography, Paper, Grid} from '../styles/mui_styles.js';

//JVECTORMAP
import {countryDecodeAssist} from '../utils/data_map.js';
import dynamic from 'next/dynamic'
export const VectorMap = dynamic(
  () => import("react-jvectormap").then((m) => m.VectorMap),
  { ssr: false, }
);

function Ranking({paperClass,rankSelect,selectCountry,selectCategory,countries,globalData,rankTopTen}) {
	if (rankSelect < 0)
		return null;
	
	let rankSuffix = " cases";
	if ((selectCategory == 'RecoveryRate') || (selectCategory == 'MortalityRate'))
		rankSuffix = "%";
	
	const value = globalData[selectCountry][selectCategory];
	
	return (
		<Grid item xs={3}>
			<Grid container spacing={2} direction='column'>
				<Grid item xs={12}>
					<Paper className={paperClass}>
						<Typography align='center'>
							<b>Rank {rankSelect}. {selectCountry} - {value}{rankSuffix}</b>
							<br/>out of {countries.length} countries
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={paperClass}>
						<Typography variant='h6'>
							<b>Top 10 Countries</b><br/>
						</Typography>
						<Typography>
							{rankTopTen.map((c, i) => (
								<><b>{i+1}.</b> {c.Country} - {c[selectCategory]}{rankSuffix}<br/></>
							))}
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Grid>
	);
}

function Map({colors,data,countries,category,handleClick}) {
	if (data == null)
		return null;

	const mapData = data[category];
	//console.log(mapData);

	let minColor = "#FFFFFF";
	let maxColor = colors.cRed;
	if (category == "Recovered" || category == "RecoveryRate")
		maxColor = colors.cBlue;

	let normFunction = "polynomial";
	if (category == "RecoveryRate" || category == "MortalityRate")
		normFunction = "linear";

	return (
		<Grid item xs={9}>
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
		</Grid>
	);
}

function BottomSection({paperClass, colors, state, regionClick}) {
	return (
		<Grid container spacing={2}>
			<Ranking
				paperClass={paperClass} rankSelect={state.rankSelect}
				selectCountry={state.selectCountry} selectCategory={state.selectCategory}
				countries={state.countries} globalData={state.globalData}
				rankTopTen={state.rankTopTen}
			/>
			<Map
				colors={colors} data={state.mapGlobalData}
				countries={state.countries}
				category={state.selectCategory}
				handleClick={regionClick}
			/>
		</Grid>
	);
}

export default BottomSection;