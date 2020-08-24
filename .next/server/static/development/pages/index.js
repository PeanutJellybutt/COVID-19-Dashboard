module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app */ "./pages/_app.js");
var _jsxFileName = "C:\\Users\\Vava\\Desktop\\covid-19-dashboard\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  return __jsx(_app__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./public/jquery-jvectormap.css":
/*!**************************************!*\
  !*** ./public/jquery-jvectormap.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vava\Desktop\covid-19-dashboard\pages\index.js */"./pages/index.js");


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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map