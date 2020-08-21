module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-dropdown/style.css":
/*!***********************************************!*\
  !*** ./node_modules/react-dropdown/style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dropdown */ "react-dropdown");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\Herabat\\react-js\\covid-19-dashboard\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  title: {
    flexGrow: 1
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFEFE"
  },
  paperFoot: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#777070"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2)
  },
  root: {
    backgroundColor: "#000000"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});

const darkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  palette: {
    type: "dark"
  }
});

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
        newRecovered: ''
      },
      data_pie: [{}],
      lastConfirmed: 0,
      lastDeath: 0,
      noConfirmedStreak: 0,
      noDeathStreak: 0,
      rateRecovery: 0,
      rateDeath: 0,
      showGraph: false
    };
    this.referenceDate = new Date(2020, 7, 20);
    const CancelToken = axios__WEBPACK_IMPORTED_MODULE_11___default.a.CancelToken;
    this.cancelSource = CancelToken.source();
  }

  componentDidMount() {
    this.callAPIGlobalAll(this.referenceDate);
    this.fetchData(this.referenceDate);
  }

  fetchData(refDate) {
    if (this.state.selectCountry == 'Thailand') this.callAPIThailand();else if (this.state.fastMode) this.callAPIGlobal(this.state.selectCity, this.state.selectCountry, new Date(refDate.getTime()));else this.callAPIGlobalTimeline(this.state.selectCity, this.state.selectCountry);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectCountry != this.state.selectCountry || prevState.selectCity != this.state.selectCity || prevState.fastMode != this.state.fastMode) {
      if (!prevState.fastMode && this.state.fastMode) this.clearAxiosCalls();
      this.fetchData(this.referenceDate);
    }
  }

  clearAxiosCalls() {
    this.cancelSource.cancel('Axios operations cleared');
    const CancelToken = axios__WEBPACK_IMPORTED_MODULE_11___default.a.CancelToken;
    this.cancelSource = CancelToken.source();
  } //For ranking and map functionalities
  //Only data from one day/file is processed


  async callAPIGlobalAll(markDate) {
    markDate = new Date(markDate.getTime());
    let countries = [];
    let countriesN = 0;
    let data = new Object();
    const sourceRef = 'https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports';
    const sourcePrefix = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
    const formatChange = new Date(2020, 2, 22).getTime();
    let cityIndex = 0;
    let countryIndex = 1;
    let conIndex = 3;
    let deathIndex = 4;
    let recIndex = 5;
    let quoteLimit = 0; //Workaround for source's formatting inconsistencies

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
    const sourceDate = markDateStr.slice(5, 8) + markDateStr.slice(8, 10) + '-' + markDate.getFullYear(); //console.log(sourceDate);

    try {
      const cancelToken = this.cancelSource.token;
      const response = await axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(sourcePrefix + sourceDate + '.csv', {
        headers: {
          'Content-Type': 'text/csv'
        },
        cancelToken: cancelToken
      });
      lines = response.data.split(/\r?\n/);
    } catch (err) {
      console.log(err);
      return undefined;
    }

    if (lines != '') {
      for (let i = 1; i < lines.length; i++) {
        if (lines[i] == '' || (lines[i].match(/"/g) || []).length > quoteLimit) continue;
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
        } else {
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
        data[country].RecoveryRate = recovered / confirmed * 100;
        data[country].MortalityRate = deaths / confirmed * 100;

        if (city != '') {
          data[country].Cities[citiesN] = city;
          data[country].CitiesN = citiesN + 1;
        }
      } //console.log(data);


      this.setState({
        countries: countries,
        globalData: data
      }); //console.log(this.state.countries);
    }
  } //When foreign country is selected
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
    let markDate = new Date(2020, 0, 23);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const now = tomorrow.getTime();
    let cityIndex = 0;
    let countryIndex = 1;
    let conIndex = 3;
    let deathIndex = 4;
    let recIndex = 5;
    let lastIndex = 1;
    const formatChange = new Date(2020, 2, 22).getTime();

    while (markDate.getTime() < now) {
      let lines = '';
      const markDateStr = markDate.toISOString();
      const sourceDate = markDateStr.slice(5, 8) + markDateStr.slice(8, 10) + '-' + markDate.getFullYear();
      console.log(sourceDate); //console.log(lastIndex);
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
        const response = await axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(sourcePrefix + sourceDate + '.csv', {
          headers: {
            'Content-Type': 'text/csv'
          },
          cancelToken: cancelToken
        });
        lines = response.data.split(/\r?\n/);
      } catch (err) {
        console.log(err);
        return undefined;
      }

      markDate.setDate(markDate.getDate() + 1);
      if (lines == '') continue;
      console.log(lastIndex);
      const date = sourceDate.replace('-', '\/').replace('-', '\/');
      let values = undefined;
      if (lines[lastIndex]) values = lines[lastIndex].split(',');else lastIndex = 1;

      if (values == undefined || city != '' && city != values[cityIndex] || country != '' && country != values[countryIndex]) {
        for (let i = lastIndex + 1; i < lines.length; i++) {
          values = lines[i].split(',');

          if (city != '' && city != values[cityIndex] || country != '' && country != values[countryIndex]) {
            values = undefined;
            continue;
          }

          lastIndex = i;
          break;
        }

        if (values == undefined) {
          for (let i = 1; i < lastIndex; i++) {
            values = lines[i].split(',');

            if (city != '' && city != values[cityIndex] || country != '' && country != values[countryIndex]) {
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
          NewRecovered: recovered - prevRecovered
        };
        prevConfirmed = confirmed;
        prevHospitalized = hospitalized;
        prevDeaths = deaths;
        prevRecovered = recovered;
        dataN++;
      }
    }

    console.log(data);
    this.processData(sourceRef, data);
  } //When foreign country is selected
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
      NewRecovered: 0
    };
    const thisData = data[0];
    const sourceRef = 'https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports';
    const sourcePrefix = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
    let lines = '';

    while (lines == '') {
      const markDateStr = markDate.toISOString();
      const sourceDate = markDateStr.slice(5, 8) + markDateStr.slice(8, 10) + '-' + markDate.getFullYear();
      markDate.setDate(markDate.getDate() - 1);
      console.log(sourceDate);

      try {
        const cancelToken = this.cancelSource.token;
        const response = await axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(sourcePrefix + sourceDate + '.csv', {
          headers: {
            'Content-Type': 'text/csv'
          },
          cancelToken: cancelToken
        });
        lines = response.data.split(/\r?\n/);
        thisData.Date = sourceDate.replace('-', '\/').replace('-', '\/');
      } catch (err) {
        console.log(err);
        return undefined;
      }
    }

    for (let i = 1; i < lines.length; i++) {
      if ((lines[i].match(/"/g) || []).length > 2) continue;
      const values = lines[i].split(',');
      if (city != '' && city != values[2] || country != '' && country != values[3]) continue;
      const confirmed = thisData["Confirmed"] + parseInt(values[7]);
      const deaths = thisData["Deaths"] + parseInt(values[8]);
      const recovered = thisData["Recovered"] + parseInt(values[9]);
      thisData.Confirmed = confirmed;
      thisData.Hospitalized = thisData["Hospitalized"] + parseInt(values[10]);
      thisData.Deaths = deaths;
      thisData.Recovered = recovered;
      thisData.RecoveryRate = recovered / confirmed * 100;
      thisData.MortalityRate = deaths / confirmed * 100;
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
  } //For when Thailand is selected
  //Provides retrospective data and graph functionalities
  //Local scoped source, data from over 200 days are stored within only one file


  async callAPIThailand() {
    const source = 'https://covid19.th-stat.com/api/open/timeline';
    let data = [];

    try {
      const cancelToken = this.cancelSource.token;
      const response = await axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(source, {
        cancelToken: cancelToken
      });
      console.log(response);
      data = response.data['Data'];
    } catch (err) {
      console.log(err);
      return undefined;
    }

    this.processData(source, data);
  }

  getLastDate(type, data) {
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i][type] != 0) return data[i]['Date'];
    }
  }

  getDateDiff(date) {
    let now = new Date().getTime();
    return Math.floor((now - new Date(date).getTime()) / 86400000);
  }

  processData(source, data, hasTimeline = true) {
    if (data.length <= 0) return;
    const lastData = data.slice(-1)[0];
    const dataReformatted = data.slice().map(d => {
      return Object.assign({}, d, {
        Date: d.Date.slice(3, 6) + d.Date.slice(0, 2)
      });
    });
    const lastUpdated = lastData['Date'];
    let lastConfirmedFormatted = 0;
    let lastDeathFormatted = 0;
    let noConfirmedStreak = 0;
    let noDeathStreak = 0;

    if (hasTimeline) {
      const lastConfirmed = this.getLastDate('NewConfirmed', data);
      const lastDeath = this.getLastDate('NewDeaths', data);
      lastConfirmedFormatted = lastConfirmed.slice(3, 6) + lastConfirmed.slice(0, 3) + lastConfirmed.slice(6);
      lastDeathFormatted = lastDeath.slice(3, 6) + lastDeath.slice(0, 3) + lastDeath.slice(6);
      noConfirmedStreak = this.getDateDiff(lastConfirmed);
      noDeathStreak = this.getDateDiff(lastDeath);
    }

    this.setState({
      hasTimeline: hasTimeline,
      dataTimeline: dataReformatted,
      dataTimeline15: dataReformatted.slice(1).slice(-15),
      data_text: {
        source: source,
        updatedDate: lastUpdated.slice(3, 6) + lastUpdated.slice(0, 3) + lastUpdated.slice(6),
        confirmed: lastData['Confirmed'],
        hospitalized: lastData['Hospitalized'],
        deaths: lastData['Deaths'],
        recovered: lastData['Recovered'],
        newConfirmed: lastData['NewConfirmed'],
        newHospitalized: lastData['NewHospitalized'],
        newDeaths: lastData['NewDeaths'],
        newRecovered: lastData['NewRecovered']
      },
      data_pie: [{
        name: 'Hospitalized',
        value: lastData['Hospitalized']
      }, {
        name: 'Deaths',
        value: lastData['Deaths']
      }, {
        name: 'Recovered',
        value: lastData['Recovered']
      }],
      lastConfirmed: lastConfirmedFormatted,
      lastDeath: lastDeathFormatted,
      noConfirmedStreak: noConfirmedStreak,
      noDeathStreak: noDeathStreak,
      rateRecovery: (100 * lastData['Recovered'] / lastData['Confirmed']).toFixed(2) + '%',
      rateDeath: (100 * lastData['Deaths'] / lastData['Confirmed']).toFixed(2) + '%'
    });
  }

  render() {
    const graphBlue = '#20A0E0';
    const graphYellow = '#FFC060';
    const graphRed = '#E04040';
    const graphGreen = '#80E080';
    const {
      classes
    } = this.props;
    const {
      selectCountry,
      selectCity,
      dataTimeline,
      dataTimeline15,
      data_text,
      data_pie
    } = this.state;
    const selectedCountryData = this.state.globalData[selectCountry];
    let cityChoice = ["Overall"];

    if (selectedCountryData != undefined && selectedCountryData.CitiesN != 0) {
      cityChoice = selectedCountryData.Cities.slice(0);
      cityChoice.splice(0, 0, "Overall");
    }

    return __jsx("div", {
      className: classes.root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        background: '#BB0A1E'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h4",
      className: classes.title,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562,
        columnNumber: 7
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563,
        columnNumber: 8
      }
    }, "Simple COVID-19 Dashboard")))), __jsx("div", {
      className: classes.appBarSpacer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 568,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 569,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      container: true,
      spacing: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 570,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 571,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["MuiThemeProvider"], {
      theme: darkTheme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 572,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      align: "left",
      color: "textPrimary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573,
        columnNumber: 9
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 574,
        columnNumber: 10
      }
    }), "Last updated: ", data_text.updatedDate), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "subtitle2",
      align: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: data_text.source,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 10
      }
    }, " ", data_text.source)))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 7
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 8
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 8
      }
    }), __jsx("button", {
      onClick: () => this.setState({
        fastMode: !this.state.fastMode
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 591,
        columnNumber: 8
      }
    }, this.state.fastMode ? "FAST MODE" : "FULL MODE")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 595,
        columnNumber: 7
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 8
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 13
      }
    }), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
      options: this.state.countries,
      value: selectCountry,
      onChange: select => this.setState({
        selectCountry: select.value,
        selectCity: 'Overall'
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 8
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 601,
        columnNumber: 7
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602,
        columnNumber: 8
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602,
        columnNumber: 13
      }
    }), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
      options: cityChoice,
      value: selectCity,
      onChange: select => this.setState({
        selectCity: select.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603,
        columnNumber: 8
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      container: true,
      spacing: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 6,
      sm: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 610,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611,
        columnNumber: 9
      }
    }, "Confirmed"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612,
        columnNumber: 9
      }
    }, data_text.confirmed.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613,
        columnNumber: 9
      }
    }, "(", data_text.newConfirmed.toLocaleString(), ")"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 6,
      sm: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 616,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 9
      }
    }, "Hospitalized"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 9
      }
    }, data_text.hospitalized.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 9
      }
    }, "(", data_text.newHospitalized.toLocaleString(), ")"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 6,
      sm: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625,
        columnNumber: 9
      }
    }, "Deaths"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626,
        columnNumber: 9
      }
    }, data_text.deaths.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 627,
        columnNumber: 9
      }
    }, "(", data_text.newDeaths.toLocaleString(), ")"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 6,
      sm: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 9
      }
    }, "Recovered"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633,
        columnNumber: 9
      }
    }, data_text.recovered.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634,
        columnNumber: 9
      }
    }, "(", data_text.newRecovered.toLocaleString(), ")"))), this.state.hasTimeline && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 640,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 641,
        columnNumber: 10
      }
    }, "Last confirmed: ", this.state.lastConfirmed, " (", this.state.noConfirmedStreak, " days ago)"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 644,
        columnNumber: 10
      }
    }, "Last death: ", this.state.lastDeath, " (", this.state.noDeathStreak, " days ago)")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: this.state.hasTimeline ? 6 : 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 651,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653,
        columnNumber: 9
      }
    }, "Recovery Rate: ", this.state.rateRecovery), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 656,
        columnNumber: 9
      }
    }, "Mortality Rate: ", this.state.rateDeath)))), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 666,
        columnNumber: 6
      }
    }), this.state.hasTimeline && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
      onClick: () => this.setState({
        showGraph: !this.state.showGraph
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 669,
        columnNumber: 7
      }
    }, "Show/Hide Graph"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672,
        columnNumber: 7
      }
    })), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 6
      }
    }), this.state.showGraph && //Whether or not to display graphs
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      container: true,
      spacing: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 12,
      sm: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 682,
        columnNumber: 8
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["ResponsiveContainer"], {
      width: "100%",
      height: 300,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 9
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["BarChart"], {
      width: 500,
      height: 300,
      data: dataTimeline15,
      margin: {
        top: 5,
        right: 5,
        left: 0,
        bottom: 5
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 684,
        columnNumber: 10
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
      strokeDasharray: "3 3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 690,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["XAxis"], {
      dataKey: "Date",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 691,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 692,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 693,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Legend"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Bar"], {
      dataKey: "NewConfirmed",
      fill: graphBlue,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Bar"], {
      dataKey: "NewDeaths",
      fill: graphRed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 696,
        columnNumber: 11
      }
    }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 12,
      sm: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 704,
        columnNumber: 8
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["ResponsiveContainer"], {
      width: "100%",
      height: 300,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 705,
        columnNumber: 9
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["PieChart"], {
      width: 400,
      height: 400,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 706,
        columnNumber: 10
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Legend"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 707,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Pie"], {
      dataKey: "value",
      isAnimationActive: false,
      data: data_pie,
      outerRadius: 100,
      label: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 708,
        columnNumber: 11
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Cell"], {
      fill: graphYellow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 709,
        columnNumber: 12
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Cell"], {
      fill: graphRed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 710,
        columnNumber: 12
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Cell"], {
      fill: graphGreen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 711,
        columnNumber: 12
      }
    })), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713,
        columnNumber: 11
      }
    }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 720,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721,
        columnNumber: 8
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["ResponsiveContainer"], {
      width: "100%",
      height: 500,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722,
        columnNumber: 9
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["LineChart"], {
      data: dataTimeline,
      margin: {
        top: 5,
        right: 5,
        left: 0,
        bottom: 5
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723,
        columnNumber: 10
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
      strokeDasharray: "3 3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["XAxis"], {
      dataKey: "Date",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 729,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 730,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Legend"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 731,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
      type: "monotone",
      strokeWidth: 2,
      dataKey: "Confirmed",
      stroke: graphBlue,
      dot: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 732,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
      type: "monotone",
      strokeWidth: 2,
      dataKey: "Hospitalized",
      stroke: graphYellow,
      dot: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 733,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
      type: "monotone",
      strokeWidth: 2,
      dataKey: "Deaths",
      stroke: graphRed,
      dot: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
      type: "monotone",
      strokeWidth: 2,
      dataKey: "Recovered",
      stroke: graphGreen,
      dot: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735,
        columnNumber: 11
      }
    })))))))), __jsx("footer", {
      className: classes.footer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 744,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paperFoot,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 745,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 746,
        columnNumber: 7
      }
    }, "Simple Covid-19 Dashboard for Tencent Thailand's Internship Project"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      component: "p",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749,
        columnNumber: 7
      }
    }, "By Thanjira S. and Woottipat H."))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(App));

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dropdown":
/*!*********************************!*\
  !*** external "react-dropdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map