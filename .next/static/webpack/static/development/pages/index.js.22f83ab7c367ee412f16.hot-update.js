webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/App.js":
/*!**********************!*\
  !*** ./pages/App.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");





var _jsxFileName = "C:\\Users\\Herabat\\react-js\\covid-19-dashboard\\pages\\App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

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
      marginTop: theme.spacing.unit * 2
    },
    root: {
      backgroundColor: "#000000"
    }
  };
};

var darkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createMuiTheme"])({
  palette: {
    type: "dark"
  }
});

var App = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = _super.call(this, props);
    _this.state = {
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
      data_pie: [{}]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.callAPI();
    }
  }, {
    key: "callAPI",
    value: function callAPI() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_14___default.a.get('https://covid19.th-stat.com/api/open/timeline').then(function (response) {
        console.log(response.data);
        var data = response.data['Data'];
        var lastData = data.slice(-1)[0];
        var dataDateShorten = data.slice().map(function (d) {
          return Object.assign({}, d, {
            Date: d.Date.slice(0, 5)
          });
        });

        _this2.setState({
          dataTimeline: dataDateShorten,
          dataTimeline15: dataDateShorten.slice(1).slice(-15),
          data_text: {
            source: response.data['Source'],
            updatedDate: lastData['Date'],
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
            name: 'hospitalized',
            value: lastData['Hospitalized']
          }, {
            name: 'deaths',
            value: lastData['Deaths']
          }, {
            name: 'recovered',
            value: lastData['Recovered']
          }]
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var graphBlue = '#20A0E0';
      var graphYellow = '#FFC060';
      var graphRed = '#E04040';
      var graphGreen = '#80E080';
      var classes = this.props.classes;
      var _this$state = this.state,
          dataTimeline = _this$state.dataTimeline,
          dataTimeline15 = _this$state.dataTimeline15,
          data_text = _this$state.data_text,
          data_pie = _this$state.data_pie;
      return __jsx("div", {
        className: classes.root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 4
        }
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 5
        }
      }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: {
          background: '#BB0A1E'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 5
        }
      }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 6
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h4",
        className: classes.title,
        align: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 7
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 8
        }
      }, "Simple COVID-19 Dashboard")))), __jsx("div", {
        className: classes.appBarSpacer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 5
        }
      }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 5
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        container: true,
        spacing: 2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 6
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
        theme: darkTheme,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        align: "right",
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 9
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 10
        }
      }), "Last updated: ", data_text.updatedDate)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "subtitle2",
        align: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 9
        }
      }, __jsx("a", {
        href: data_text.source,
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 10
        }
      }, " ", data_text.source))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        item: true,
        xs: 6,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 9
        }
      }, "Confirmed"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 9
        }
      }, data_text.confirmed.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 9
        }
      }, "(", data_text.newConfirmed.toLocaleString(), ")"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        item: true,
        xs: 6,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 9
        }
      }, "Hospitalized"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 9
        }
      }, data_text.hospitalized.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 9
        }
      }, "(", data_text.newHospitalized.toLocaleString(), ")"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        item: true,
        xs: 6,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 9
        }
      }, "Deaths"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 9
        }
      }, data_text.deaths.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 9
        }
      }, "(", data_text.newDeaths.toLocaleString(), ")"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        item: true,
        xs: 6,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 9
        }
      }, "Recovered"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }
      }, data_text.recovered.toLocaleString()), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 9
        }
      }, "(", data_text.newRecovered.toLocaleString(), ")"))),  true && //Whether or not to display graphs
      __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        item: true,
        xs: 12,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 9
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["ResponsiveContainer"], {
        width: "100%",
        height: 300,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 10
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["BarChart"], {
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
          lineNumber: 199,
          columnNumber: 11
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["XAxis"], {
        dataKey: "Date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["YAxis"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Legend"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Bar"], {
        dataKey: "NewConfirmed",
        fill: graphBlue,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Bar"], {
        dataKey: "NewDeaths",
        fill: graphRed,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 12
        }
      }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        item: true,
        xs: 12,
        sm: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 9
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["ResponsiveContainer"], {
        width: "100%",
        height: 300,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 10
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["PieChart"], {
        width: 400,
        height: 400,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Legend"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Pie"], {
        dataKey: "value",
        isAnimationActive: false,
        data: data_pie,
        outerRadius: 100,
        label: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 12
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Cell"], {
        fill: graphYellow,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Cell"], {
        fill: graphRed,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 13
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Cell"], {
        fill: graphGreen,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 13
        }
      })), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 12
        }
      }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.paper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 9
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["ResponsiveContainer"], {
        width: "100%",
        height: 500,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 10
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["LineChart"], {
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
          lineNumber: 238,
          columnNumber: 11
        }
      }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["XAxis"], {
        dataKey: "Date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["YAxis"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Tooltip"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Legend"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Line"], {
        type: "monotone",
        dataKey: "Confirmed",
        stroke: graphBlue,
        dot: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Line"], {
        type: "monotone",
        dataKey: "Hospitalized",
        stroke: graphYellow,
        dot: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Line"], {
        type: "monotone",
        dataKey: "Deaths",
        stroke: graphRed,
        dot: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 12
        }
      }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_15__["Line"], {
        type: "monotone",
        dataKey: "Recovered",
        stroke: graphGreen,
        dot: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 12
        }
      })))))))), __jsx("footer", {
        className: classes.footer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 5
        }
      }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.paperFoot,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 6
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 7
        }
      }, "Simple Covid-19 Dashboard for Tencent Thailand's Internship Project"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        component: "p",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 7
        }
      }, "By Thanjira S. and Woottipat H."))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(App));

/***/ })

})
//# sourceMappingURL=index.js.22f83ab7c367ee412f16.hot-update.js.map