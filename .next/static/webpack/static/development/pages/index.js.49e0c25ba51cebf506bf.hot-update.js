webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-dropdown */ "./node_modules/react-dropdown/dist/index.js");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");






var _jsxFileName = "C:\\Users\\Vava\\Desktop\\covid-19-dashboard\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
















var styles = function styles(theme) {
  return {
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
  };
};

var darkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["createMuiTheme"])({
  palette: {
    type: "dark"
  }
});

var App = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = _super.call(this, props);
    _this.state = {
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
    _this.referenceDate = new Date(2020, 7, 20);
    var CancelToken = axios__WEBPACK_IMPORTED_MODULE_17___default.a.CancelToken;
    _this.cancelSource = CancelToken.source();
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.callAPIGlobalAll(this.referenceDate);
      this.fetchData(this.referenceDate);
    }
  }, {
    key: "fetchData",
    value: function fetchData(refDate) {
      if (this.state.selectCountry == 'Thailand') this.callAPIThailand();else if (this.state.fastMode) this.callAPIGlobal(this.state.selectCity, this.state.selectCountry, new Date(refDate.getTime()));else this.callAPIGlobalTimeline(this.state.selectCity, this.state.selectCountry);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.selectCountry != this.state.selectCountry || prevState.selectCity != this.state.selectCity || prevState.fastMode != this.state.fastMode) {
        this.clearAxiosCalls();
        this.fetchData(this.referenceDate);
      }
    }
  }, {
    key: "clearAxiosCalls",
    value: function clearAxiosCalls() {
      this.cancelSource.cancel('Axios operations cleared');
      var CancelToken = axios__WEBPACK_IMPORTED_MODULE_17___default.a.CancelToken;
      this.cancelSource = CancelToken.source();
    } //For ranking and map functionalities
    //Only data from one day/file is processed

  }, {
    key: "callAPIGlobalAll",
    value: function callAPIGlobalAll(markDate) {
      var countries, countriesN, data, sourceRef, sourcePrefix, formatChange, cityIndex, countryIndex, conIndex, deathIndex, recIndex, quoteLimit, lines, markDateStr, sourceDate, cancelToken, response, i, values, country, city, confirmed, hospitalized, deaths, recovered, citiesN;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function callAPIGlobalAll$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              markDate = new Date(markDate.getTime());
              countries = [];
              countriesN = 0;
              data = new Object();
              sourceRef = 'https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports';
              sourcePrefix = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
              formatChange = new Date(2020, 2, 22).getTime();
              cityIndex = 0;
              countryIndex = 1;
              conIndex = 3;
              deathIndex = 4;
              recIndex = 5;
              quoteLimit = 0; //Workaround for source's formatting inconsistencies

              if (cityIndex == 0 && markDate.getTime() >= formatChange) {
                cityIndex = 2;
                countryIndex = 3;
                conIndex = 7;
                deathIndex = 8;
                recIndex = 9;
                quoteLimit = 2;
              }

              lines = '';
              markDateStr = markDate.toISOString();
              sourceDate = markDateStr.slice(5, 8) + markDateStr.slice(8, 10) + '-' + markDate.getFullYear(); //console.log(sourceDate);

              _context.prev = 17;
              cancelToken = this.cancelSource.token;
              _context.next = 21;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_17___default.a.get(sourcePrefix + sourceDate + '.csv', {
                headers: {
                  'Content-Type': 'text/csv'
                },
                cancelToken: cancelToken
              }));

            case 21:
              response = _context.sent;
              lines = response.data.split(/\r?\n/);
              _context.next = 29;
              break;

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](17);
              console.log(_context.t0);
              return _context.abrupt("return", undefined);

            case 29:
              if (!(lines != '')) {
                _context.next = 54;
                break;
              }

              i = 1;

            case 31:
              if (!(i < lines.length)) {
                _context.next = 53;
                break;
              }

              if (!(lines[i] == '' || (lines[i].match(/"/g) || []).length > quoteLimit)) {
                _context.next = 34;
                break;
              }

              return _context.abrupt("continue", 50);

            case 34:
              values = lines[i].split(',');
              country = values[countryIndex];
              city = values[cityIndex];
              confirmed = parseInt(values[conIndex]);
              hospitalized = parseInt(values[10]);
              deaths = parseInt(values[deathIndex]);
              recovered = parseInt(values[recIndex]);

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

              citiesN = data[country].CitiesN;
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

            case 50:
              i++;
              _context.next = 31;
              break;

            case 53:
              //console.log(data);
              this.setState({
                countries: countries,
                globalData: data
              }); //console.log(this.state.countries);

            case 54:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[17, 25]], Promise);
    } //When foreign country is selected
    //Provides retrospective data and graph functionalities
    //Taxing, over 200 days/files must be processed
    //Somehow sometimes fast, sometimes slow. Cause still unknown.

  }, {
    key: "callAPIGlobalTimeline",
    value: function callAPIGlobalTimeline(city, country) {
      var data, dataN, prevConfirmed, prevHospitalized, prevDeaths, prevRecovered, sourceRef, sourcePrefix, markDate, tomorrow, now, cityIndex, countryIndex, conIndex, deathIndex, recIndex, lastIndex, formatChange, lines, markDateStr, sourceDate, cancelToken, response, date, values, i, _i, confirmed, hospitalized, deaths, recovered;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function callAPIGlobalTimeline$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (city == 'Overall') {
                city = '';
              }

              data = [{}];
              dataN = 0;
              prevConfirmed = 0;
              prevHospitalized = 0;
              prevDeaths = 0;
              prevRecovered = 0;
              sourceRef = 'https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports';
              sourcePrefix = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
              markDate = new Date(2020, 0, 23);
              tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              now = tomorrow.getTime();
              cityIndex = 0;
              countryIndex = 1;
              conIndex = 3;
              deathIndex = 4;
              recIndex = 5;
              lastIndex = 1;
              formatChange = new Date(2020, 2, 22).getTime();

            case 20:
              if (!(markDate.getTime() < now)) {
                _context2.next = 72;
                break;
              }

              lines = '';
              markDateStr = markDate.toISOString();
              sourceDate = markDateStr.slice(5, 8) + markDateStr.slice(8, 10) + '-' + markDate.getFullYear();
              console.log(sourceDate); //console.log(lastIndex);
              //Workaround for source's formatting inconsistencies

              if (cityIndex == 0 && markDate.getTime() >= formatChange) {
                cityIndex = 2;
                countryIndex = 3;
                conIndex = 7;
                deathIndex = 8;
                recIndex = 9;
              }

              _context2.prev = 26;
              cancelToken = this.cancelSource.token;
              _context2.next = 30;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_17___default.a.get(sourcePrefix + sourceDate + '.csv', {
                headers: {
                  'Content-Type': 'text/csv'
                },
                cancelToken: cancelToken
              }));

            case 30:
              response = _context2.sent;
              lines = response.data.split(/\r?\n/);
              _context2.next = 38;
              break;

            case 34:
              _context2.prev = 34;
              _context2.t0 = _context2["catch"](26);
              console.log(_context2.t0);
              return _context2.abrupt("return", undefined);

            case 38:
              markDate.setDate(markDate.getDate() + 1);

              if (!(lines == '')) {
                _context2.next = 41;
                break;
              }

              return _context2.abrupt("continue", 20);

            case 41:
              console.log(lastIndex);
              date = sourceDate.replace('-', '\/').replace('-', '\/');
              values = undefined;
              if (lines[lastIndex]) values = lines[lastIndex].split(',');else lastIndex = 1;

              if (!(values == undefined || city != '' && city != values[cityIndex] || country != '' && country != values[countryIndex])) {
                _context2.next = 69;
                break;
              }

              i = lastIndex + 1;

            case 47:
              if (!(i < lines.length)) {
                _context2.next = 57;
                break;
              }

              values = lines[i].split(',');

              if (!(city != '' && city != values[cityIndex] || country != '' && country != values[countryIndex])) {
                _context2.next = 52;
                break;
              }

              values = undefined;
              return _context2.abrupt("continue", 54);

            case 52:
              lastIndex = i;
              return _context2.abrupt("break", 57);

            case 54:
              i++;
              _context2.next = 47;
              break;

            case 57:
              if (!(values == undefined)) {
                _context2.next = 69;
                break;
              }

              _i = 1;

            case 59:
              if (!(_i < lastIndex)) {
                _context2.next = 69;
                break;
              }

              values = lines[_i].split(',');

              if (!(city != '' && city != values[cityIndex] || country != '' && country != values[countryIndex])) {
                _context2.next = 64;
                break;
              }

              values = undefined;
              return _context2.abrupt("continue", 66);

            case 64:
              lastIndex = _i;
              return _context2.abrupt("break", 69);

            case 66:
              _i++;
              _context2.next = 59;
              break;

            case 69:
              if (values != undefined) {
                confirmed = parseInt(values[conIndex]);
                hospitalized = parseInt(values[10]);
                deaths = parseInt(values[deathIndex]);
                recovered = parseInt(values[recIndex]);
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

              _context2.next = 20;
              break;

            case 72:
              console.log(data);
              this.processData(sourceRef, data);

            case 74:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[26, 34]], Promise);
    } //When foreign country is selected
    //No streak data or timeline functionality
    //Only data from two days/files is processed

  }, {
    key: "callAPIGlobal",
    value: function callAPIGlobal(city, country, markDate) {
      var process,
          data,
          thisData,
          sourceRef,
          sourcePrefix,
          lines,
          markDateStr,
          sourceDate,
          cancelToken,
          response,
          i,
          values,
          confirmed,
          deaths,
          recovered,
          prevData,
          _args3 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function callAPIGlobal$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              process = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : true;

              if (city == 'Overall') {
                city = '';
              }

              data = [{}];
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
              thisData = data[0];
              sourceRef = 'https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports';
              sourcePrefix = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
              lines = '';

            case 8:
              if (!(lines == '')) {
                _context3.next = 28;
                break;
              }

              markDateStr = markDate.toISOString();
              sourceDate = markDateStr.slice(5, 8) + markDateStr.slice(8, 10) + '-' + markDate.getFullYear();
              markDate.setDate(markDate.getDate() - 1);
              console.log(sourceDate);
              _context3.prev = 13;
              cancelToken = this.cancelSource.token;
              _context3.next = 17;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_17___default.a.get(sourcePrefix + sourceDate + '.csv', {
                headers: {
                  'Content-Type': 'text/csv'
                },
                cancelToken: cancelToken
              }));

            case 17:
              response = _context3.sent;
              lines = response.data.split(/\r?\n/);
              thisData.Date = sourceDate.replace('-', '\/').replace('-', '\/');
              _context3.next = 26;
              break;

            case 22:
              _context3.prev = 22;
              _context3.t0 = _context3["catch"](13);
              console.log(_context3.t0);
              return _context3.abrupt("return", undefined);

            case 26:
              _context3.next = 8;
              break;

            case 28:
              i = 1;

            case 29:
              if (!(i < lines.length)) {
                _context3.next = 47;
                break;
              }

              if (!((lines[i].match(/"/g) || []).length > 2)) {
                _context3.next = 32;
                break;
              }

              return _context3.abrupt("continue", 44);

            case 32:
              values = lines[i].split(',');

              if (!(city != '' && city != values[2] || country != '' && country != values[3])) {
                _context3.next = 35;
                break;
              }

              return _context3.abrupt("continue", 44);

            case 35:
              confirmed = thisData["Confirmed"] + parseInt(values[7]);
              deaths = thisData["Deaths"] + parseInt(values[8]);
              recovered = thisData["Recovered"] + parseInt(values[9]);
              thisData.Confirmed = confirmed;
              thisData.Hospitalized = thisData["Hospitalized"] + parseInt(values[10]);
              thisData.Deaths = deaths;
              thisData.Recovered = recovered;
              thisData.RecoveryRate = recovered / confirmed * 100;
              thisData.MortalityRate = deaths / confirmed * 100;

            case 44:
              i++;
              _context3.next = 29;
              break;

            case 47:
              if (!process) {
                _context3.next = 57;
                break;
              }

              _context3.next = 50;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.callAPIGlobal(city, country, markDate, false));

            case 50:
              prevData = _context3.sent;
              thisData.NewConfirmed = thisData.Confirmed - prevData.Confirmed;
              thisData.NewHospitalized = thisData.Hospitalized - prevData.Hospitalized;
              thisData.NewDeaths = thisData.Deaths - prevData.Deaths;
              thisData.NewRecovered = thisData.Recovered - prevData.Recovered;
              console.log(data);
              this.processData(sourceRef, data, false);

            case 57:
              return _context3.abrupt("return", thisData);

            case 58:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[13, 22]], Promise);
    } //For when Thailand is selected
    //Provides retrospective data and graph functionalities
    //Local scoped source, data from over 200 days are stored within only one file

  }, {
    key: "callAPIThailand",
    value: function callAPIThailand() {
      var source, data, cancelToken, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function callAPIThailand$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              source = 'https://covid19.th-stat.com/api/open/timeline';
              data = [];
              _context4.prev = 2;
              cancelToken = this.cancelSource.token;
              _context4.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_17___default.a.get(source, {
                cancelToken: cancelToken
              }));

            case 6:
              response = _context4.sent;
              console.log(response);
              data = response.data['Data'];
              _context4.next = 15;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](2);
              console.log(_context4.t0);
              return _context4.abrupt("return", undefined);

            case 15:
              this.processData(source, data);

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, [[2, 11]], Promise);
    }
  }, {
    key: "getLastDate",
    value: function getLastDate(type, data) {
      for (var i = data.length - 1; i >= 0; i--) {
        if (data[i][type] != 0) return data[i]['Date'];
      }
    }
  }, {
    key: "getDateDiff",
    value: function getDateDiff(date) {
      var now = new Date().getTime();
      return Math.floor((now - new Date(date).getTime()) / 86400000);
    }
  }, {
    key: "processData",
    value: function processData(source, data) {
      var hasTimeline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (data.length <= 0) return;
      var lastData = data.slice(-1)[0];
      var dataReformatted = data.slice().map(function (d) {
        return Object.assign({}, d, {
          Date: d.Date.slice(3, 6) + d.Date.slice(0, 2)
        });
      });
      var lastUpdated = lastData['Date'];
      var lastConfirmedFormatted = 0;
      var lastDeathFormatted = 0;
      var noConfirmedStreak = 0;
      var noDeathStreak = 0;

      if (hasTimeline) {
        var lastConfirmed = this.getLastDate('NewConfirmed', data);
        var lastDeath = this.getLastDate('NewDeaths', data);
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
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var graphBlue = '#20A0E0';
      var graphYellow = '#FFC060';
      var graphRed = '#E04040';
      var graphGreen = '#80E080';
      var classes = this.props.classes;
      var _this$state = this.state,
          selectCountry = _this$state.selectCountry,
          selectCity = _this$state.selectCity,
          dataTimeline = _this$state.dataTimeline,
          dataTimeline15 = _this$state.dataTimeline15,
          data_text = _this$state.data_text,
          data_pie = _this$state.data_pie;
      var selectedCountryData = this.state.globalData[selectCountry];
      var cityChoice = ["Overall"];

      if (selectedCountryData != undefined && selectedCountryData.CitiesN != 0) {
        cityChoice = selectedCountryData.Cities.slice(0);
        cityChoice.splice(0, 0, "Overall");
      }

      return __jsx("div", {
        className: classes.root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 4
        }
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555,
          columnNumber: 5
        }
      }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        style: {
          background: '#BB0A1E'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 5
        }
      }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557,
          columnNumber: 6
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h4",
        className: classes.title,
        align: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558,
          columnNumber: 7
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559,
          columnNumber: 8
        }
      }, "Simple COVID-19 Dashboard")))), __jsx("div", {
        className: classes.appBarSpacer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
          columnNumber: 5
        }
      }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564,
          columnNumber: 5
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        container: true,
        spacing: 2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565,
          columnNumber: 6
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: 5,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["MuiThemeProvider"], {
        theme: darkTheme,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "left",
        color: "textPrimary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568,
          columnNumber: 9
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569,
          columnNumber: 10
        }
      }), "Last updated: ", data_text.updatedDate), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "subtitle2",
        align: "left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572,
          columnNumber: 9
        }
      }, __jsx("a", {
        href: data_text.source,
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573,
          columnNumber: 10
        }
      }, " ", data_text.source)))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583,
          columnNumber: 7
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 8
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 8
        }
      }), __jsx("button", {
        onClick: function onClick() {
          return _this2.setState({
            fastMode: !_this2.state.fastMode
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 8
        }
      }, this.state.fastMode ? "FAST MODE" : "FULL MODE")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590,
          columnNumber: 7
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 8
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 13
        }
      }), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_15___default.a, {
        options: this.state.countries,
        value: selectCountry,
        onChange: function onChange(select) {
          return _this2.setState({
            selectCountry: select.value,
            selectCity: 'Overall'
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 8
        }
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596,
          columnNumber: 7
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 8
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 13
        }
      }), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_15___default.a, {
        options: cityChoice,
        value: selectCity,
        onChange: function onChange(select) {
          return _this2.setState({
            selectCity: select.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 8
        }
      }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        container: true,
        spacing: 2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 6
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: 6,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 9
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 21
        }
      }, "Confirmed")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 9
        }
      }, data_text.confirmed.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608,
          columnNumber: 9
        }
      }, "+ ", data_text.newConfirmed.toLocaleString()))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: 6,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 9
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 21
        }
      }, "Hospitalized")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 9
        }
      }, data_text.hospitalized.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 9
        }
      }, data_text.newHospitalized >= 0 ? '+' : '-', " ", Math.abs(data_text.newHospitalized).toLocaleString()))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: 6,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 9
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 21
        }
      }, "Deaths")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623,
          columnNumber: 9
        }
      }, data_text.deaths.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624,
          columnNumber: 9
        }
      }, "+ ", data_text.newDeaths.toLocaleString()))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: 6,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629,
          columnNumber: 9
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629,
          columnNumber: 21
        }
      }, "Recovered")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630,
          columnNumber: 9
        }
      }, data_text.recovered.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 631,
          columnNumber: 9
        }
      }, "+ ", data_text.newRecovered.toLocaleString()))), this.state.hasTimeline && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638,
          columnNumber: 10
        }
      }, "Last confirmed: ", this.state.lastConfirmed, " (", this.state.noConfirmedStreak, " days ago)"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641,
          columnNumber: 10
        }
      }, "Last death: ", this.state.lastDeath, " (", this.state.noDeathStreak, " days ago)")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: this.state.hasTimeline ? 6 : 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650,
          columnNumber: 9
        }
      }, "Recovery Rate: ", this.state.rateRecovery), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653,
          columnNumber: 9
        }
      }, "Mortality Rate: ", this.state.rateDeath)))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663,
          columnNumber: 6
        }
      }), this.state.hasTimeline && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("button", {
        onClick: function onClick() {
          return _this2.setState({
            showGraph: !_this2.state.showGraph
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666,
          columnNumber: 7
        }
      }, "Show/Hide Graph"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669,
          columnNumber: 7
        }
      })), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672,
          columnNumber: 6
        }
      }), this.state.showGraph && //Whether or not to display graphs
      __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        container: true,
        spacing: 2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 676,
          columnNumber: 6
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: 12,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679,
          columnNumber: 8
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["ResponsiveContainer"], {
        width: "100%",
        height: 300,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680,
          columnNumber: 9
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["BarChart"], {
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
          lineNumber: 681,
          columnNumber: 10
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 687,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["XAxis"], {
        dataKey: "Date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 688,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["YAxis"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 690,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Legend"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Bar"], {
        dataKey: "NewConfirmed",
        fill: graphBlue,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Bar"], {
        dataKey: "NewDeaths",
        fill: graphRed,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693,
          columnNumber: 11
        }
      }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: 12,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 700,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 701,
          columnNumber: 8
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["ResponsiveContainer"], {
        width: "100%",
        height: 300,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 702,
          columnNumber: 9
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["PieChart"], {
        width: 400,
        height: 400,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703,
          columnNumber: 10
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Legend"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Pie"], {
        dataKey: "value",
        isAnimationActive: false,
        data: data_pie,
        outerRadius: 100,
        label: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 705,
          columnNumber: 11
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Cell"], {
        fill: graphYellow,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 706,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Cell"], {
        fill: graphRed,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Cell"], {
        fill: graphGreen,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 708,
          columnNumber: 12
        }
      })), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710,
          columnNumber: 11
        }
      }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718,
          columnNumber: 8
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["ResponsiveContainer"], {
        width: "100%",
        height: 500,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 719,
          columnNumber: 9
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["LineChart"], {
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
          lineNumber: 720,
          columnNumber: 10
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["XAxis"], {
        dataKey: "Date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["YAxis"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 726,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 727,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Legend"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 728,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Line"], {
        type: "monotone",
        strokeWidth: 2,
        dataKey: "Confirmed",
        stroke: graphBlue,
        dot: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 729,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Line"], {
        type: "monotone",
        strokeWidth: 2,
        dataKey: "Hospitalized",
        stroke: graphYellow,
        dot: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 730,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Line"], {
        type: "monotone",
        strokeWidth: 2,
        dataKey: "Deaths",
        stroke: graphRed,
        dot: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 731,
          columnNumber: 11
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_18__["Line"], {
        type: "monotone",
        strokeWidth: 2,
        dataKey: "Recovered",
        stroke: graphGreen,
        dot: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 732,
          columnNumber: 11
        }
      })))))))), __jsx("footer", {
        className: classes.footer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 741,
          columnNumber: 5
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.paperFoot,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742,
          columnNumber: 6
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743,
          columnNumber: 7
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 744,
          columnNumber: 8
        }
      }, "Simple Covid-19 Dashboard for Tencent Thailand's Internship Project")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        component: "p",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746,
          columnNumber: 7
        }
      }, "By Thanjira S. and Woottipat H."))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(App));

/***/ })

})
//# sourceMappingURL=index.js.49e0c25ba51cebf506bf.hot-update.js.map