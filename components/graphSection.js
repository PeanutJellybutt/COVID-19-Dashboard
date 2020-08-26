
//MUI
import {Paper, Grid} from '../styles/mui_styles.js';
	
//RECHARTS
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, LineChart, Line, BarChart, Bar, PieChart, 
  Pie, Cell, } from 'recharts';

function GraphButton({showGraph, onClick}) {
	return (
		<>
		<button
			style={{
				height: '32px',
				width : '144px',
				float: 'right',
				color: (showGraph ? 'grey' : 'steelblue')
			}}
			onClick={onClick}
		>
			Show/Hide Graphs
		</button>
		<br/>
		</>
	);
}

function Graphs({paperClass, colors, dataTimeline, dataTimeline15, data_pie, onClick}) {
	return (
		<>
		<Grid container spacing={2}>
		
			{/*Bar, last 14 days*/}
			<Grid item xs={12} sm={6}>
				<Paper className={paperClass}>
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
							<Bar dataKey="NewConfirmed" fill={colors.cBlue}/>
							<Bar dataKey="NewDeaths" fill={colors.cRed}/>
						</BarChart>
					</ResponsiveContainer>
				</Paper>
			</Grid>
			
			{/*Pie, in total*/}
			<Grid item xs={12} sm={6}>
				<Paper className={paperClass}>
					<ResponsiveContainer width="100%" height={300}>
						<PieChart width={400}	height={400}>
							<Legend/>
							<Pie dataKey="value" isAnimationActive={false} data={data_pie} outerRadius={100} label>
								<Cell fill={colors.cOrange} />
								<Cell fill={colors.cRed} />
								<Cell fill={colors.cGreen} />
							</Pie>
							<Tooltip/>
						</PieChart>
					</ResponsiveContainer>
				</Paper>
			</Grid>
			
			{/*Bar, in total*/}
			<Grid item xs={12}>
				<Paper className={paperClass}>
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
							<Line type="monotone" strokeWidth={2} dataKey="Confirmed" stroke={colors.cBlue} dot={false} />
							<Line type="monotone" strokeWidth={2} dataKey="Hospitalized" stroke={colors.cOrange} dot={false} />
							<Line type="monotone" strokeWidth={2} dataKey="Deaths" stroke={colors.cRed} dot={false} />
							<Line type="monotone" strokeWidth={2} dataKey="Recovered" stroke={colors.cGreen} dot={false} />
						</LineChart>
					</ResponsiveContainer>
				</Paper>
			</Grid>
		</Grid>

		{/*Hide Graph Button*/}
		<br/>
		<button
			style={{ height: '32px', width : '144px', float: 'right', color: 'grey' }}
			onClick={onClick}
		>
			Hide Graphs
		</button>
		<br/><br/>
		
		</>
	);
}

class GraphSection extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			showGraph: false
		};
	}
	
	buttonClick = () => {
		this.setState({showGraph: !this.state.showGraph});
	}
	
	render() {
		return (
			<>
			<br/>
			{ this.props.state.hasTimeline && (
				<GraphButton
					showGraph={this.state.showGraph}
					onClick={this.buttonClick}
				/>
			)}
			<br/>
			{ this.state.showGraph && (
				<Graphs
					paperClass={this.props.paperClass} colors={this.props.colors}
					dataTimeline={this.props.state.dataTimeline}
					dataTimeline15={this.props.state.dataTimeline15}
					data_pie={this.props.state.data_pie}
					onClick={this.buttonClick}
				/>
			)}
			</>
		);
	}
}

export default GraphSection;