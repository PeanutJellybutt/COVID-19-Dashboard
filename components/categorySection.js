
//MUI
import {Typography, Paper, Grid} from '../styles/mui_styles.js';

//DROPDOWN
import Dropdown from 'react-dropdown';
import '../styles/style_dropdown.module.css';
	
//RANKING
import {globalRankingHeading} from '../utils/data_rank.js';

function RankingHeader({colors, category}) {
	return (
		<Grid item xs={6}>
			<Typography variant='h5' style={{ color: colors.cRed }}>
				<b>Global Ranking based on:</b>
			</Typography>
			<Typography variant='h5' style={{ color: colors.cDRed }}>
				{globalRankingHeading(category)}
			</Typography>
		</Grid>
	);
}

function CategoryDropdown({onChange}) {
	const categoryChoice = ['Confirmed', 'Hospitalized', 'Deaths', 'Recovered', 'RecoveryRate', 'MortalityRate'];
	return (
		<Grid item xs={2}>
			<br/>
			<Dropdown options={categoryChoice} value={'Hospitalized'}
				onChange={onChange}
			/>
		</Grid>
	);
}

function CategorySection({colors, category, onChange}) {
	return (
		<Grid container spacing={2} justify="space-between" alignItems="center">
			<RankingHeader colors={colors} category={category}/>
			<CategoryDropdown onChange={onChange}/>
		</Grid>
	);
}

export default CategorySection;