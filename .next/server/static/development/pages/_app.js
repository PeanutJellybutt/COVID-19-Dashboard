module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\_app.js": 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
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
/* harmony import */ var _public_jquery_jvectormap_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/jquery-jvectormap.css */ "./public/jquery-jvectormap.css");
/* harmony import */ var _public_jquery_jvectormap_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_jquery_jvectormap_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\Vava\\Desktop\\covid-19-dashboard\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const VectorMap = next_dynamic__WEBPACK_IMPORTED_MODULE_14___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-jvectormap */ "react-jvectormap", 7)).then(m => m.VectorMap), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-jvectormap */ "react-jvectormap")],
    modules: ["react-jvectormap"]
  }
});

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
const cBlue = '#20A0E0';
const cOrange = '#F7B860';
const cRed = '#E04040';
const cGreen = '#80D080';
const cDRed = '#BB0A1E';

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
      showGraph: false,
      selectCategory: 'Hospitalized',
      rankSelect: -1,
      rankTopTen: [],
      mapGlobalData: null
    };
    this.referenceDate = new Date();
    this.referenceDate.setDate(this.referenceDate.getDate() - 1);
    const CancelToken = axios__WEBPACK_IMPORTED_MODULE_11___default.a.CancelToken;
    this.cancelSource = CancelToken.source();

    const {
      getCode,
      getName,
      getData
    } = __webpack_require__(/*! country-list */ "country-list");

    this.getCountryCode = getCode;
    this.getCountryName = getName;
    this.getCountryData = getData;
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
      this.clearAxiosCalls();
      this.fetchData(this.referenceDate);
    }

    if (prevState.selectCategory != this.state.selectCategory) this.globalRanking(this.state.selectCategory);
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
        let confirmed = values[conIndex] == '' ? 0 : parseInt(values[conIndex]);
        let hospitalized = values[10] == '' ? 0 : parseInt(values[10]);
        let deaths = values[deathIndex] == '' ? 0 : parseInt(values[deathIndex]);
        let recovered = values[recIndex] == '' ? 0 : parseInt(values[recIndex]);

        if (data[country] != undefined) {
          confirmed += data[country]["Confirmed"];
          hospitalized += data[country]["Hospitalized"];
          deaths += data[country]["Deaths"];
          recovered += data[country]["Recovered"];
        } else {
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
        data[country].RecoveryRate = (recovered / confirmed * 100).toFixed(2);
        data[country].MortalityRate = (deaths / confirmed * 100).toFixed(2);

        if (city != '') {
          data[country].Cities[citiesN] = city;
          data[country].CitiesN = citiesN + 1;
        }
      } //console.log(data);


      const mapGlobalData = this.processMapGlobalData(countries, data);
      this.setState({
        countries: countries,
        globalData: data,
        mapGlobalData: mapGlobalData
      });
    }

    this.globalRanking(this.state.selectCategory);
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
      markDate.setDate(markDate.getDate() - 1); //console.log(sourceDate);

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
      const confirmed = thisData["Confirmed"] + (values[7] == '' ? 0 : parseInt(values[7]));
      const deaths = thisData["Deaths"] + (values[8] == '' ? 0 : parseInt(values[8]));
      const recovered = thisData["Recovered"] + (values[9] == '' ? 0 : parseInt(values[9]));
      thisData.Confirmed = confirmed;
      thisData.Hospitalized = thisData["Hospitalized"] + (values[10] == '' ? 0 : parseInt(values[10]));
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
      thisData.NewRecovered = thisData.Recovered - prevData.Recovered; //console.log(data);

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
      data = response.data['Data'];
    } catch (err) {
      console.log(err);
      return undefined;
    }

    if (data.length > 0) this.processData(source, data);
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

  countryCompare(category) {
    return function innerSort(a, b) {
      let valA = a[category];
      let valB = b[category];

      if (typeof valA == "string") {
        valA = parseInt(valA);
        valB = parseInt(valB);
      }

      if (valA > valB) return -1;else if (valA < valB) return 1;else return 0;
    };
  }

  globalRankSelect(ranking, country) {
    return ranking.findIndex(x => x.Country == country);
  }

  globalRankTopTen(ranking) {
    return ranking.slice(0, 10);
  }

  globalRanking(category) {
    const countries = Object.values(this.state.globalData);
    countries.sort(this.countryCompare(category)); //console.log(countries);

    this.setState({
      rankSelect: this.globalRankSelect(countries, this.state.selectCountry),
      rankTopTen: this.globalRankTopTen(countries)
    });
  }

  globalRankingHeading(category) {
    if (category == 'Confirmed') return "Confirmed Cases Count";else if (category == 'Hospitalized') return "Active Cases Count";else if (category == 'Deaths') return "Deceased Cases Count";else if (category == 'Recovered') return "Recovered Cases Count";else if (category == 'RecoveryRate') return "Recovery Rate";else if (category == 'MortalityRate') return "Mortality Rate";
  }

  countryEncodeAssist(country, countriesName) {
    if (!countriesName.includes(country)) {
      if (country == "Bolivia") country = "Bolivia, Plurinational State of";else if (country == "Brunei") country = "Brunei Darussalam";else if (country == "Burma") country = "Myanmar";else if (country == "Congo (Brazzaville)") country = "Congo";else if (country == "Congo (Kinshasa)") country = "Congo, Democratic Republic of the";else if (country == "Cote d'Ivoire") country = "Côte d'Ivoire";else if (country == "Iran") country = "Iran, Islamic Republic of";else if (country == "Kosovo") country = "Serbia";else if (country == "Laos") country = "Lao People's Democratic Republic";else if (country == "Moldova") country = "Moldova, Republic of";else if (country == "Russia") country = "Russian Federation";else if (country == "Syria") country = "Syrian Arab Republic";else if (country == "Taiwan*") country = "Taiwan, Province of China";else if (country == "Tanzania") country = "Tanzania, United Republic of";else if (country == "US") country = "United States of America";else if (country == "United Kingdom") country = "United Kingdom of Great Britain and Northern Ireland";else if (country == "Venezuela") country = "Venezuela, Bolivarian Republic of";else if (country == "Vietnam") country = "Viet Nam";else if (country == "West Bank and Gaza") country = "Palestine, State of";else return undefined;
    }

    const {
      getCode
    } = __webpack_require__(/*! country-list */ "country-list");

    return getCode(country);
  }

  countryDecodeAssist(code) {
    const {
      getName,
      getNames
    } = __webpack_require__(/*! country-list */ "country-list");

    const countriesName = getNames();
    let country = getName(code);
    if (country == "Bolivia, Plurinational State of") country = "Bolivia";else if (country == "Brunei Darussalam") country = "Brunei";else if (country == "Myanmar") country = "Burma";else if (country == "Congo") country = "Congo (Brazzaville)";else if (country == "Congo, Democratic Republic of the") country = "Congo (Kinshasa)";else if (country == "Côte d'Ivoire") country = "Cote d'Ivoire";else if (country == "Iran, Islamic Republic of") country = "Iran";else if (country == "Serbia") country = "Kosovo";else if (country == "Lao People's Democratic Republic") country = "Laos";else if (country == "Moldova, Republic of") country = "Moldova";else if (country == "Russian Federation") country = "Russia";else if (country == "Syrian Arab Republic") country = "Syria";else if (country == "Taiwan") country = "Taiwan*";else if (country == "Tanzania, United Republic of") country = "Tanzania";else if (country == "United States of America") country = "US";else if (country == "United Kingdom of Great Britain and Northern Ireland") country = "United Kingdom";else if (country == "Venezuela, Bolivarian Republic of") country = "Venezuela";else if (country == "Viet Nam") country = "Vietnam";else if (country == "Palestine, State of") country = "West Bank and Gaza";
    return country;
  }

  processMapGlobalData(countries, globalData) {
    const {
      getCode,
      getNames
    } = __webpack_require__(/*! country-list */ "country-list");

    const countriesName = getNames();
    const mapGlobalData = {
      Confirmed: {},
      Hospitalized: {},
      Deaths: {},
      Recovered: {},
      RecoveryRate: {},
      MortalityRate: {}
    };

    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      const data = globalData[country];
      const code = this.countryEncodeAssist(country, countriesName);
      if (code == undefined) continue;
      mapGlobalData['Confirmed'][code] = data['Confirmed'];
      mapGlobalData['Hospitalized'][code] = data['Hospitalized'];
      mapGlobalData['Deaths'][code] = data['Deaths'];
      mapGlobalData['Recovered'][code] = data['Recovered'];
      mapGlobalData['RecoveryRate'][code] = parseFloat(data['RecoveryRate']);
      mapGlobalData['MortalityRate'][code] = parseFloat(data['MortalityRate']);
    } //console.log(mapGlobalData);


    return mapGlobalData;
  }

  renderMap(category) {
    const handleClick = (e, code) => {
      const country = this.countryDecodeAssist(code);
      if (this.state.countries.includes(country)) this.setState({
        selectCountry: country,
        selectCity: 'Overall'
      });
    };

    const data = this.state.mapGlobalData;
    const mapData = data[category]; //console.log(mapData);

    let minColor = "#FFFFFF";
    let maxColor = cRed;
    if (category == "Recovered" || category == "RecoveryRate") maxColor = cBlue;
    let normFunction = "polynomial";
    if (category == "RecoveryRate" || category == "MortalityRate") normFunction = "linear";
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 764,
        columnNumber: 4
      }
    }, __jsx(VectorMap, {
      map: "world_mill",
      backgroundColor: "#000000" //"transparent" //change it to ocean blue: #0077be
      ,
      zoomOnScroll: false,
      containerStyle: {
        width: "100%",
        height: "520px"
      },
      onRegionClick: handleClick,
      containerClassName: "map",
      regionStyle: {
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
      },
      regionsSelectable: false,
      series: {
        regions: [{
          values: mapData,
          //this is your data
          scale: [minColor, maxColor],
          //your color game's here
          normalizeFunction: normFunction
        }]
      },
      onRegionTipShow: (event, label, code) => {
        label.html('<b><i>' + label.html() + '</i></b></br>' + 'Confirmed: ' + data['Confirmed'][code] + '</br>' + 'Hospitalized: ' + data['Hospitalized'][code] + '</br>' + 'Deaths: ' + data['Deaths'][code] + '</br>' + 'Recovered: ' + data['Recovered'][code] + '</br>' + 'Recovery rate: ' + data['RecoveryRate'][code] + '%' + '</br>' + 'Mortality rate: ' + data['MortalityRate'][code] + '%');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 765,
        columnNumber: 5
      }
    }));
  }

  render() {
    const {
      classes
    } = this.props;
    const {
      selectCountry,
      selectCity,
      fastMode,
      dataTimeline,
      dataTimeline15,
      data_text,
      data_pie,
      selectCategory
    } = this.state;
    const selectedCountryData = this.state.globalData[selectCountry];
    let cityChoice = ["Overall"];

    if (selectedCountryData != undefined && selectedCountryData.CitiesN != 0) {
      cityChoice = selectedCountryData.Cities.slice(0);
      cityChoice.splice(0, 0, "Overall");
    }

    const categoryChoice = ['Confirmed', 'Hospitalized', 'Deaths', 'Recovered', 'RecoveryRate', 'MortalityRate'];
    let rankSuffix = " cases";

    if (selectCategory == 'RecoveryRate' || selectCategory == 'MortalityRate') {
      rankSuffix = "%";
    }

    return __jsx("div", {
      className: classes.root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 838,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 839,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        background: cDRed
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 840,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 841,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h4",
      className: classes.title,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 842,
        columnNumber: 7
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 843,
        columnNumber: 8
      }
    }, "Simple COVID-19 Dashboard")))), __jsx("div", {
      className: classes.appBarSpacer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 847,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 848,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      container: true,
      spacing: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 850,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["MuiThemeProvider"], {
      theme: darkTheme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 855,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      align: "left",
      color: "textPrimary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 856,
        columnNumber: 9
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 857,
        columnNumber: 10
      }
    }), "Last updated: ", data_text.updatedDate), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "subtitle2",
      align: "left",
      color: "textPrimary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 860,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: data_text.source,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 861,
        columnNumber: 10
      }
    }, " ", data_text.source)))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 874,
        columnNumber: 7
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875,
        columnNumber: 8
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875,
        columnNumber: 13
      }
    }), __jsx("button", {
      style: {
        height: '32px',
        width: '128px',
        float: 'right',
        color: fastMode ? cDRed : 'blue'
      },
      onClick: () => this.setState({
        fastMode: !fastMode
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 876,
        columnNumber: 8
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 885,
        columnNumber: 9
      }
    }, fastMode ? "FAST MODE" : "FULL MODE"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 888,
        columnNumber: 7
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 889,
        columnNumber: 8
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 889,
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
        lineNumber: 890,
        columnNumber: 8
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 894,
        columnNumber: 7
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 895,
        columnNumber: 8
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 895,
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
        lineNumber: 896,
        columnNumber: 8
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 6,
      sm: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 903,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 904,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: 'steelblue'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 905,
        columnNumber: 9
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 905,
        columnNumber: 52
      }
    }, "Confirmed")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: cBlue
      },
      variant: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 906,
        columnNumber: 9
      }
    }, data_text.confirmed.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: 'steelblue'
      },
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 907,
        columnNumber: 9
      }
    }, "+ ", data_text.newConfirmed.toLocaleString()))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 6,
      sm: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 910,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 911,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: 'goldenrod'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 912,
        columnNumber: 9
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 912,
        columnNumber: 52
      }
    }, "Hospitalized")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: cOrange
      },
      variant: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 913,
        columnNumber: 9
      }
    }, data_text.hospitalized.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: 'goldenrod'
      },
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 914,
        columnNumber: 9
      }
    }, data_text.newHospitalized >= 0 ? '+' : '-', " ", Math.abs(data_text.newHospitalized).toLocaleString()))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 6,
      sm: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 919,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 920,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: 'fireBrick'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 921,
        columnNumber: 9
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 921,
        columnNumber: 52
      }
    }, "Deaths")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: cRed
      },
      variant: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 922,
        columnNumber: 9
      }
    }, data_text.deaths.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: 'fireBrick'
      },
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 923,
        columnNumber: 9
      }
    }, "+ ", data_text.newDeaths.toLocaleString()))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 6,
      sm: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 926,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 927,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: 'green'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 928,
        columnNumber: 9
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 928,
        columnNumber: 48
      }
    }, "Recovered")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: cGreen
      },
      variant: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 929,
        columnNumber: 9
      }
    }, data_text.recovered.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        color: 'green'
      },
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 930,
        columnNumber: 9
      }
    }, "+ ", data_text.newRecovered.toLocaleString()))), this.state.hasTimeline && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 938,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 939,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 940,
        columnNumber: 10
      }
    }, "Last confirmed: ", this.state.lastConfirmed, " (", this.state.noConfirmedStreak, " days ago)"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 943,
        columnNumber: 10
      }
    }, "Last death: ", this.state.lastDeath, " (", this.state.noDeathStreak, " days ago)")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: this.state.hasTimeline ? 6 : 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 953,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 954,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      style: {
        color: 'green'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 955,
        columnNumber: 9
      }
    }, "Recovery Rate: ", this.state.rateRecovery), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      style: {
        color: cDRed
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 958,
        columnNumber: 9
      }
    }, "Mortality Rate: ", this.state.rateDeath)))), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 969,
        columnNumber: 6
      }
    }), this.state.hasTimeline && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
      style: {
        height: '32px',
        width: '144px',
        float: 'right',
        color: this.state.showGraph ? 'grey' : 'steelblue'
      },
      onClick: () => this.setState({
        showGraph: !this.state.showGraph
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 972,
        columnNumber: 7
      }
    }, "Show/Hide Graphs"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 983,
        columnNumber: 7
      }
    })), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 986,
        columnNumber: 6
      }
    }), this.state.showGraph && //Whether or not to display graphs
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      container: true,
      spacing: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 990,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 12,
      sm: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 992,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 993,
        columnNumber: 8
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["ResponsiveContainer"], {
      width: "100%",
      height: 300,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 994,
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
        lineNumber: 995,
        columnNumber: 10
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
      strokeDasharray: "3 3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1001,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["XAxis"], {
      dataKey: "Date",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1002,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1003,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1004,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Legend"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1005,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Bar"], {
      dataKey: "NewConfirmed",
      fill: cBlue,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1006,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Bar"], {
      dataKey: "NewDeaths",
      fill: cRed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1007,
        columnNumber: 11
      }
    }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 12,
      sm: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1014,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1015,
        columnNumber: 8
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["ResponsiveContainer"], {
      width: "100%",
      height: 300,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1016,
        columnNumber: 9
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["PieChart"], {
      width: 400,
      height: 400,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1017,
        columnNumber: 10
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Legend"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1018,
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
        lineNumber: 1019,
        columnNumber: 11
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Cell"], {
      fill: cOrange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1020,
        columnNumber: 12
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Cell"], {
      fill: cRed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1021,
        columnNumber: 12
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Cell"], {
      fill: cGreen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1022,
        columnNumber: 12
      }
    })), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1024,
        columnNumber: 11
      }
    }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1031,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1032,
        columnNumber: 8
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["ResponsiveContainer"], {
      width: "100%",
      height: 500,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1033,
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
        lineNumber: 1034,
        columnNumber: 10
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
      strokeDasharray: "3 3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1038,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["XAxis"], {
      dataKey: "Date",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1039,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1040,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1041,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Legend"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1042,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
      type: "monotone",
      strokeWidth: 2,
      dataKey: "Confirmed",
      stroke: cBlue,
      dot: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1043,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
      type: "monotone",
      strokeWidth: 2,
      dataKey: "Hospitalized",
      stroke: cOrange,
      dot: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1044,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
      type: "monotone",
      strokeWidth: 2,
      dataKey: "Deaths",
      stroke: cRed,
      dot: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1045,
        columnNumber: 11
      }
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
      type: "monotone",
      strokeWidth: 2,
      dataKey: "Recovered",
      stroke: cGreen,
      dot: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1046,
        columnNumber: 11
      }
    })))))), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1053,
        columnNumber: 6
      }
    }), __jsx("button", {
      style: {
        height: '32px',
        width: '144px',
        float: 'right',
        color: 'grey'
      },
      onClick: () => this.setState({
        showGraph: !this.state.showGraph
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1054,
        columnNumber: 6
      }
    }, "Hide Graphs"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1060,
        columnNumber: 6
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1060,
        columnNumber: 11
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      container: true,
      spacing: 2,
      justify: "space-between",
      alignItems: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1067,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1068,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h5",
      style: {
        color: cRed
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1069,
        columnNumber: 10
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1070,
        columnNumber: 11
      }
    }, "Global Ranking based on:")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h5",
      style: {
        color: cDRed
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1072,
        columnNumber: 10
      }
    }, this.globalRankingHeading(selectCategory))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1076,
        columnNumber: 9
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1077,
        columnNumber: 10
      }
    }), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
      options: categoryChoice,
      value: 'Hospitalized',
      onChange: select => this.setState({
        selectCategory: select.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1078,
        columnNumber: 10
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      container: true,
      spacing: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1084,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1086,
        columnNumber: 7
      }
    }, this.state.rankSelect >= 0 && __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      container: true,
      spacing: 2,
      direction: "column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1088,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1089,
        columnNumber: 10
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1090,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1091,
        columnNumber: 12
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1092,
        columnNumber: 13
      }
    }, "Rank ", this.state.rankSelect, ". ", selectCountry, " - ", this.state.globalData[selectCountry][selectCategory], rankSuffix), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1093,
        columnNumber: 13
      }
    }), "out of ", this.state.countries.length, " countries"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1097,
        columnNumber: 10
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1098,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1099,
        columnNumber: 12
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1100,
        columnNumber: 13
      }
    }, "Top 10 Countries"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1100,
        columnNumber: 36
      }
    })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1102,
        columnNumber: 12
      }
    }, this.state.rankTopTen.map((c, i) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1104,
        columnNumber: 15
      }
    }, i + 1, "."), " ", c.Country, " - ", c[selectCategory], rankSuffix, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1104,
        columnNumber: 74
      }
    })))))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
      item: true,
      xs: 9,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1115,
        columnNumber: 7
      }
    }, this.state.mapGlobalData != null && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.renderMap(selectCategory))))), __jsx("footer", {
      className: classes.footer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1129,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.paperFoot,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1130,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1131,
        columnNumber: 7
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1132,
        columnNumber: 8
      }
    }, "Simple Covid-19 Dashboard for Tencent Thailand's Internship Project")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      component: "p",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1134,
        columnNumber: 7
      }
    }, "By Thanjira S. and Woottipat H."))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(App));

/***/ }),

/***/ "./public/jquery-jvectormap.css":
/*!**************************************!*\
  !*** ./public/jquery-jvectormap.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "country-list":
/*!*******************************!*\
  !*** external "country-list" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("country-list");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ "react-jvectormap":
/*!***********************************!*\
  !*** external "react-jvectormap" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-jvectormap");

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