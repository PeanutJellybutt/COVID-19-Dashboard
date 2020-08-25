
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export {withStyles, createMuiTheme, MuiThemeProvider, AppBar, Toolbar,
	Typography, CssBaseline, Container, Paper, Grid}

export const styles = theme => ({
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

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
