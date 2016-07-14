(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("ReactRedux"), require("Redux"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM", "ReactRedux", "Redux"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("ReactDOM"), require("ReactRedux"), require("Redux")) : factory(root["React"], root["ReactDOM"], root["ReactRedux"], root["Redux"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactRedux = __webpack_require__(3);

	var _redux = __webpack_require__(4);

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _App = __webpack_require__(50);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import CouponList from './components/CouponList/CouponList.js';

	var store = (0, _redux.createStore)(_index2.default, (0, _redux.compose)(window.devToolsExtension ? window.devToolsExtension() : function (f) {
	  return f;
	}));

	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_App2.default, null)
	  )
	), document.getElementById('app'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _OrderReducer = __webpack_require__(6);

	var _OrderReducer2 = _interopRequireDefault(_OrderReducer);

	var _DishReducer = __webpack_require__(45);

	var _DishReducer2 = _interopRequireDefault(_DishReducer);

	var _CouponReduce = __webpack_require__(47);

	var _CouponReduce2 = _interopRequireDefault(_CouponReduce);

	var _redux = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppReducer = (0, _redux.combineReducers)({
	  OrderReducer: _OrderReducer2.default,
	  DishReducer: _DishReducer2.default,
	  CouponReducer: _CouponReduce2.default
	});

	exports.default = AppReducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _addOrder = __webpack_require__(7);

	// add Object.assign() polyfilee
	__webpack_require__(8);

	var OrderList = function OrderList() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _addOrder.ADD_ORDER:
	      {
	        var nextState = null;
	        var id = action.id;
	        nextState = Object.assign({}, state);
	        if (!state[id]) {
	          nextState[id] = action.num > 0 ? action.num : 0;
	        } else {
	          var preOrderNum = state[id];
	          var finalNum = preOrderNum + action.num;
	          nextState[id] = finalNum > 0 ? finalNum : 0;
	        }
	        return nextState;
	      }
	    default:
	      return state;
	  }
	};

	exports.default = OrderList;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "OrderReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ADD_ORDER = exports.ADD_ORDER = 'ADD_ORDER';

	var addOrder = exports.addOrder = function addOrder(id, num) {
	  return {
	    type: ADD_ORDER,
	    id: id,
	    num: num
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "addOrder.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	module.exports = __webpack_require__(12).Object.assign;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(10);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(28)});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(12)
	  , hide      = __webpack_require__(13)
	  , redefine  = __webpack_require__(23)
	  , ctx       = __webpack_require__(26)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 11 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(14)
	  , createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(18) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(15)
	  , IE8_DOM_DEFINE = __webpack_require__(17)
	  , toPrimitive    = __webpack_require__(21)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(18) && !__webpack_require__(19)(function(){
	  return Object.defineProperty(__webpack_require__(20)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16)
	  , document = __webpack_require__(11).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , hide      = __webpack_require__(13)
	  , has       = __webpack_require__(24)
	  , SRC       = __webpack_require__(25)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(12).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(27);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(29)
	  , gOPS     = __webpack_require__(42)
	  , pIE      = __webpack_require__(43)
	  , toObject = __webpack_require__(44)
	  , IObject  = __webpack_require__(32)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(19)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(30)
	  , enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(24)
	  , toIObject    = __webpack_require__(31)
	  , arrayIndexOf = __webpack_require__(35)(false)
	  , IE_PROTO     = __webpack_require__(39)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(32)
	  , defined = __webpack_require__(34);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(33);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(31)
	  , toLength  = __webpack_require__(36)
	  , toIndex   = __webpack_require__(38);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(37)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(37)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(40)('keys')
	  , uid    = __webpack_require__(25);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(34);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DishInitialState = __webpack_require__(46);

	var _DishInitialState2 = _interopRequireDefault(_DishInitialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DishList = function DishList() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _DishInitialState2.default : arguments[0];
	  return state;
	};
	exports.default = DishList;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "DishReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initialState = [{
	  id: 1,
	  name: 'apple',
	  price: 10
	}, {
	  id: 2,
	  name: 'peach',
	  price: 11
	}, {
	  id: 3,
	  name: 'gg',
	  price: 123
	}, {
	  id: 4,
	  name: 'gsdf',
	  price: 1234
	}, {
	  id: 5,
	  name: '123131',
	  price: 123
	}, {
	  id: 6,
	  name: '1123123',
	  price: 23
	}];

	exports.default = initialState;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "DishInitialState.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _triggerCoupon = __webpack_require__(48);

	var _CouponTestData = __webpack_require__(49);

	__webpack_require__(8);

	var CouponReducer = function CouponReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _CouponTestData.CouponInitialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _triggerCoupon.TRIGGER_COUPON:
	      {
	        var id = action.id;
	        var nextState = state.slice();
	        var couponIds = state.map(function (val) {
	          return val.id;
	        });
	        var indexOfTriggerId = couponIds.indexOf(id);
	        // cannot find 'id';
	        if (indexOfTriggerId === -1) {
	          return nextState;
	        }
	        nextState[indexOfTriggerId].isValid = !nextState[indexOfTriggerId].isValid;
	        return nextState;
	      }
	    default:
	      return state;
	  }
	};

	exports.default = CouponReducer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CouponReduce.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TRIGGER_COUPON = exports.TRIGGER_COUPON = 'TRIGGER_COUPON';

	var triggerCoupon = exports.triggerCoupon = function triggerCoupon(id) {
	  return {
	    type: TRIGGER_COUPON,
	    id: id
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "triggerCoupon.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CouponInitialState = exports.CouponInitialState = [{
	  id: 10,
	  discount: 10
	}, {
	  id: 11,
	  discount: 8
	}, {
	  id: 13,
	  discount: 6
	}];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CouponTestData.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _DishList = __webpack_require__(51);

	var _DishList2 = _interopRequireDefault(_DishList);

	var _CategoryBar = __webpack_require__(61);

	var _CategoryBar2 = _interopRequireDefault(_CategoryBar);

	var _addOrder = __webpack_require__(7);

	var _reactRedux = __webpack_require__(3);

	var _Cart = __webpack_require__(65);

	var _Cart2 = _interopRequireDefault(_Cart);

	var _triggerCoupon = __webpack_require__(48);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(73);
	// add Object.assign() polyfilee
	__webpack_require__(8);

	var cat = ['lunch', 'tea', 'hot-drinks', '1', '2', '3', '4', '5', '6'];
	var App = function App(props) {
	  var dishArray = [];
	  if (props.dishArrayWithOrderNum.length > 0) {
	    dishArray = props.dishArrayWithOrderNum;
	  }
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_CategoryBar2.default, {
	      categories: cat,
	      currentCategory: 'lunch'
	    }),
	    _react2.default.createElement(
	      'div',
	      { className: 'order-view-container' },
	      _react2.default.createElement(_DishList2.default, {
	        dishList: dishArray,
	        clickAdd: props.addOrderBy1,
	        clickMinus: props.minusOrderBy1,
	        dishCategory: 'lunch'
	      })
	    ),
	    _react2.default.createElement(_Cart2.default, {
	      orderArray: props.dishArrayWithOrderNum,
	      couponArray: props.couponArray,
	      clickAdd: props.addOrderBy1,
	      clickMinus: props.minusOrderBy1,
	      triggerCouponWithId: props.triggerCouponWithId
	    })
	  );
	};

	App.propTypes = {
	  addOrderBy1: _react.PropTypes.func.isRequired,
	  minusOrderBy1: _react.PropTypes.func.isRequired,
	  dishArrayWithOrderNum: _react.PropTypes.array.isRequired,
	  couponArray: _react.PropTypes.array.isRequired,
	  triggerCouponWithId: _react.PropTypes.func.isRequired
	};

	var getDishWithOrderNum = function getDishWithOrderNum(dishArr, orders) {
	  var dishArrWithOrderNum = dishArr.map(function (val) {
	    var orderNum = 0;
	    if (orders[val.name]) {
	      orderNum = orders[val.name];
	    }
	    var tmpVal = Object.assign({}, val);
	    tmpVal.number = orderNum;
	    return tmpVal;
	  });
	  return dishArrWithOrderNum;
	};

	var getCoupon = function getCoupon(arr) {
	  return arr;
	};
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    couponArray: getCoupon(state.CouponReducer),
	    dishArrayWithOrderNum: getDishWithOrderNum(state.DishReducer, state.OrderReducer)
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    addOrderBy1: function addOrderBy1(id) {
	      return dispatch((0, _addOrder.addOrder)(id, 1));
	    },
	    minusOrderBy1: function minusOrderBy1(id) {
	      return dispatch((0, _addOrder.addOrder)(id, -1));
	    },
	    triggerCouponWithId: function triggerCouponWithId(id) {
	      return dispatch((0, _triggerCoupon.triggerCoupon)(id));
	    }
	  };
	};

	var VisibleDash = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

	exports.default = VisibleDash;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Dish = __webpack_require__(52);

	var _Dish2 = _interopRequireDefault(_Dish);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(59);

	var DishList = function DishList(props) {
	  var dishList = props.dishList;
	  var dishListDOM = dishList.map(function (val) {
	    return _react2.default.createElement(_Dish2.default, {
	      price: val.price,
	      imgSrc: val.hasOwnProperty('src') ? val.src : null,
	      description: val.description,
	      name: val.name,
	      number: val.number,
	      clickAdd: function clickAdd() {
	        return props.clickAdd(val.name);
	      },
	      clickMinus: function clickMinus() {
	        return props.clickMinus(val.name);
	      },
	      key: val.name,
	      isDirectionRow: false
	    });
	  });
	  return _react2.default.createElement(
	    'div',
	    { className: 'dish-list' },
	    _react2.default.createElement(
	      'div',
	      { className: 'dish-category' },
	      _react2.default.createElement(
	        'a',
	        { href: '#' + props.dishCategory },
	        props.dishCategory
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      dishListDOM
	    )
	  );
	};
	DishList.propTypes = {
	  dishList: _react.PropTypes.array.isRequired,
	  clickAdd: _react.PropTypes.func.isRequired,
	  clickMinus: _react.PropTypes.func.isRequired,
	  dishCategory: _react.PropTypes.string.isRequired
	};

	exports.default = DishList;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "DishList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(53);

	var Dish = function Dish(props) {
	  var price = props.price;
	  var imgSrc = props.imgSrc;
	  var description = props.description;
	  var name = props.name;
	  var number = props.number;
	  var clickAdd = props.clickAdd;
	  var clickMinus = props.clickMinus;
	  var isDirectionRow = props.isDirectionRow;

	  var dishTextDirection = 'dish-text-column';
	  if (isDirectionRow) {
	    dishTextDirection = 'dish-text-row';
	  }
	  return _react2.default.createElement(
	    'div',
	    { className: 'dish' },
	    imgSrc ? _react2.default.createElement(
	      'div',
	      { className: 'dish-img' },
	      _react2.default.createElement('img', { src: imgSrc, role: 'presentation', width: '100', height: '100' })
	    ) : null,
	    _react2.default.createElement(
	      'div',
	      { className: dishTextDirection },
	      _react2.default.createElement(
	        'div',
	        { className: 'dish-name' },
	        name
	      ),
	      description ? _react2.default.createElement(
	        'div',
	        { className: 'dish-description', display: 'none' },
	        description
	      ) : null,
	      _react2.default.createElement(
	        'div',
	        { className: 'dish-price' },
	        _react2.default.createElement(
	          'strong',
	          null,
	          _react2.default.createElement(
	            'span',
	            { className: 'price-text' },
	            '￥',
	            price
	          )
	        ),
	        '/份'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'dish-button' },
	        number > 0 ? _react2.default.createElement('div', { className: 'dish-button-minus', onClick: clickMinus }) : null,
	        number > 0 ? _react2.default.createElement(
	          'div',
	          { className: 'order-num' },
	          number
	        ) : null,
	        _react2.default.createElement('div', { className: 'dish-button-add', onClick: clickAdd })
	      )
	    )
	  );
	};

	Dish.propTypes = {
	  name: _react.PropTypes.string.isRequired,
	  price: _react.PropTypes.number.isRequired,
	  imgSrc: _react.PropTypes.string,
	  description: _react.PropTypes.string,
	  number: _react.PropTypes.number.isRequired,
	  clickAdd: _react.PropTypes.func.isRequired,
	  clickMinus: _react.PropTypes.func.isRequired,
	  isDirectionRow: _react.PropTypes.bool
	};

	exports.default = Dish;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Dish.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(58)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./dish.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./dish.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	// imports


	// module
	exports.push([module.id, ".dish {\n  display: flex;\n  padding: 0.4rem;\n  border: 1px solid #dedde4;\n  border-radius: 3px;\n  align-items: space-between;\n  margin: 0rem 0 0.5rem;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  background-color: white; }\n  .dish .dish-img {\n    margin: 0.2rem;\n    transition: transform 1s;\n    transform: rotate(360); }\n  .dish .dish-text-column {\n    flex-grow: 1;\n    padding: 0.5rem;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between; }\n    .dish .dish-text-column .dish-price .price-text {\n      color: red; }\n  .dish .dish-text-row {\n    flex-grow: 1;\n    padding: 0.5rem;\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    justify-content: space-between; }\n    .dish .dish-text-row .dish-price .price-text {\n      color: red; }\n  .dish:hover {\n    box-shadow: 2px 2px 4px 4px #777572; }\n  .dish .dish-button {\n    display: flex; }\n    .dish .dish-button .dish-button-add {\n      background-image: url(" + __webpack_require__(56) + ");\n      background-size: 1.5rem;\n      width: 1.5rem;\n      height: 1.5rem;\n      transition: transform 0.2s; }\n      .dish .dish-button .dish-button-add:active {\n        background-size: 1.5rem;\n        width: 1.5rem;\n        height: 1.5rem;\n        transform: scale(1.3); }\n    .dish .dish-button .order-num {\n      align-self: center;\n      padding: 0 0.5rem; }\n    .dish .dish-button .dish-button-minus {\n      background-image: url(" + __webpack_require__(57) + ");\n      background-size: 1.5rem;\n      width: 1.5rem;\n      height: 1.5rem; }\n\n@media only screen and (max-width: 700px) {\n  .category-current {\n    font-size: 1rem; }\n  .category {\n    font-size: 1rem; } }\n", ""]);

	// exports


/***/ },
/* 55 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(58)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./dishList.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./dishList.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	// imports


	// module
	exports.push([module.id, ".dish-list {\n  flex-grow: 3;\n  background-color: rgba(18, 167, 113, 0.75); }\n  .dish-list .dish-category {\n    padding: 0.2rem 0.2rem 0.2rem 0.4rem;\n    border-radius: 0.3rem; }\n    .dish-list .dish-category a {\n      color: black;\n      text-decoration: none; }\n", ""]);

	// exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CaterogyBlock = __webpack_require__(62);

	var _CaterogyBlock2 = _interopRequireDefault(_CaterogyBlock);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(63);

	var CategoryBar = function CategoryBar(props) {
	  var categoriesArr = props.categories;
	  var currentCategory = props.currentCategory;
	  var categoryDOMArr = categoriesArr.map(function (val) {
	    return _react2.default.createElement(_CaterogyBlock2.default, {
	      category: val,
	      focus: currentCategory === val,
	      key: val
	    });
	  });
	  return _react2.default.createElement(
	    'div',
	    { className: 'category-container' },
	    categoryDOMArr
	  );
	};

	CategoryBar.propTypes = {
	  categories: _react.PropTypes.array.isRequired,
	  currentCategory: _react.PropTypes.string
	};

	exports.default = CategoryBar;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CategoryBar.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CategoryBlock = function CategoryBlock(props) {
	  return _react2.default.createElement(
	    'div',
	    {
	      className: props.focus ? 'category-current' : 'category',
	      key: props.category
	    },
	    _react2.default.createElement(
	      'a',
	      { href: '#' + props.category },
	      props.category
	    )
	  );
	};
	CategoryBlock.propTypes = {
	  category: _react.PropTypes.string.isRequired,
	  focus: _react.PropTypes.bool
	};

	exports.default = CategoryBlock;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CaterogyBlock.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(58)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./cateroryBar.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./cateroryBar.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	// imports


	// module
	exports.push([module.id, ".category-container {\n  display: flex;\n  box-shadow: 2px 2px 2px 2px rgba(123, 125, 119, 0.95); }\n  .category-container .category {\n    display: flex;\n    padding: 0.5rem;\n    flex-grow: 1;\n    justify-content: center;\n    align-items: center;\n    border-style: dashed;\n    background-color: rgba(69, 187, 102, 0.74);\n    border-color: #f7f4f9; }\n    .category-container .category a {\n      text-decoration: none;\n      color: black;\n      font-size: 1.2rem; }\n  .category-container .category-current {\n    display: flex;\n    padding: 0.5rem;\n    flex-grow: 1;\n    justify-content: center;\n    align-items: center;\n    border-style: dashed;\n    background-color: rgba(69, 187, 102, 0.74);\n    border-color: #f7f4f9; }\n    .category-container .category-current a {\n      text-decoration: none;\n      color: black;\n      font-size: 1.2rem; }\n\n@media only screen and (max-width: 700px) {\n  .category-container {\n    position: fixed;\n    width: 4rem;\n    overflow: auto;\n    flex-direction: column;\n    padding-bottom: 5rem;\n    margin-right: 2rem;\n    top: 0;\n    bottom: 0; }\n    .category-container .category {\n      border-width: 0 0 1px 0;\n      flex-shrink: 0; }\n    .category-container .category-current {\n      border-width: 0 0 1px 0;\n      flex-shrink: 0;\n      background-color: rgba(19, 228, 147, 0.82);\n      border-color: #1c1b1b; } }\n\n@media only screen and (min-width: 700px) {\n  .category-container {\n    width: 100%;\n    flex-direction: row;\n    margin-bottom: 0.5rem; }\n    .category-container .category {\n      border-width: 0 1px 0 0; }\n    .category-container .category-current {\n      background-color: rgba(19, 228, 147, 0.82);\n      border-width: 0 1px 0 0;\n      border-color: #1c1b1b; } }\n", ""]);

	// exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Dish = __webpack_require__(52);

	var _Dish2 = _interopRequireDefault(_Dish);

	var _CouponList = __webpack_require__(66);

	var _CouponList2 = _interopRequireDefault(_CouponList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(70);

	var Cart = function (_React$Component) {
	  _inherits(Cart, _React$Component);

	  function Cart(props) {
	    _classCallCheck(this, Cart);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cart).call(this, props));

	    _this.getDOMArray = _this.getOrderDOMArray.bind(_this);
	    _this.getTotalPrice = _this.getTotalPrice.bind(_this);
	    _this.getTotalNumber = _this.getTotalNumber.bind(_this);
	    _this.getFiltedArrayByKeyName = _this.getFiltedArrayByKeyName.bind(_this);
	    _this.triggerShade = _this.triggerShade.bind(_this);
	    _this.setDisplay = _this.setDisplay.bind(_this);
	    _this.state = {
	      enableShade: false
	    };
	    return _this;
	  }

	  _createClass(Cart, [{
	    key: 'getOrderDOMArray',
	    value: function getOrderDOMArray(arr, keyName) {
	      var _this2 = this;

	      return this.getFiltedArrayByKeyName(arr, keyName).map(function (val) {
	        return _react2.default.createElement(_Dish2.default, {
	          price: val.price,
	          imgSrc: null,
	          description: null,
	          name: val.name,
	          number: val.number
	          // need to prevent bubble
	          , clickAdd: function clickAdd(e) {
	            _this2.props.clickAdd(val.name);
	            e.stopPropagation();
	          },
	          clickMinus: function clickMinus(e) {
	            _this2.props.clickMinus(val.name);
	            e.stopPropagation();
	          },
	          key: val.name,
	          isDirectionRow: true
	        });
	      });
	    }
	  }, {
	    key: 'getFiltedArrayByKeyName',
	    value: function getFiltedArrayByKeyName(arr, keyName) {
	      if (arr.length === 0) {
	        return [];
	      }
	      return arr.filter(function (val) {
	        return val[keyName] > 0;
	      });
	    }
	  }, {
	    key: 'getTotalNumber',
	    value: function getTotalNumber(arr, keyName) {
	      return this.getFiltedArrayByKeyName(arr, keyName).length;
	    }
	  }, {
	    key: 'getTotalPrice',
	    value: function getTotalPrice(arr, keyName) {
	      return this.getFiltedArrayByKeyName(arr, keyName).reduce(function (pre, curr) {
	        return pre + curr[keyName] * curr.price;
	      }, 0);
	    }
	  }, {
	    key: 'setDisplay',
	    value: function setDisplay(val) {
	      this.setState({
	        enableShade: true,
	        currentDisplay: val
	      });
	    }
	  }, {
	    key: 'hideShade',
	    value: function hideShade() {
	      this.setState({
	        enableShade: false,
	        currentDisplay: this.state.currentDisplay
	      });
	    }
	  }, {
	    key: 'triggerShade',
	    value: function triggerShade(val) {
	      var nextShadeState = false;
	      var preShadeState = this.state.enableShade;
	      // 如果之前为为显示或者点击不同的标签，则切换为显示
	      if (preShadeState === false || val !== this.state.currentDisplay) {
	        nextShadeState = true;
	      } else if (val === undefined || val === this.state.currentDisplay) {
	        // 如果val为空（说明是点击背景）或者点击相同的标签，则不显示
	        nextShadeState = false;
	      }
	      this.setState({
	        enableShade: nextShadeState,
	        // currentDisplay: this.state.currentDisplay,
	        currentDisplay: val
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var price = this.getTotalPrice(this.props.orderArray, 'number');
	      var orderNumber = this.getTotalNumber(this.props.orderArray, 'number');
	      var minViewDropDown = this.getOrderDOMArray(this.props.orderArray, 'number');
	      var couponClickWithId = function couponClickWithId(id) {
	        _this3.props.triggerCouponWithId(id);
	      };
	      var couponDropDown = _react2.default.createElement(_CouponList2.default, {
	        couponArray: this.props.couponArray,
	        couponClickWithId: couponClickWithId
	      });
	      var currentDisplay = null;
	      var stateDisplay = this.state.currentDisplay;
	      if (stateDisplay === 'minView') {
	        currentDisplay = minViewDropDown;
	      }
	      if (stateDisplay === 'coupon') {
	        currentDisplay = couponDropDown;
	      }
	      var dropdownDisplayClass = this.state.enableShade ? 'cart-dropdown show' : 'cart-dropdown hide';
	      return _react2.default.createElement(
	        'footer',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'cart-container' },
	          _react2.default.createElement(
	            'div',
	            {
	              className: dropdownDisplayClass,
	              onClick: function onClick(e) {
	                _this3.hideShade();
	                e.stopPropagation();
	              }
	            },
	            _react2.default.createElement(
	              'div',
	              { className: 'dropdown-contents' },
	              currentDisplay
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            {
	              className: 'cart-img',
	              onClick: function onClick() {
	                _this3.triggerShade('minView');
	              }
	            },
	            orderNumber > 0 ? _react2.default.createElement(
	              'div',
	              { className: 'red-dot' },
	              orderNumber
	            ) : null
	          ),
	          _react2.default.createElement(
	            'div',
	            {
	              className: 'cart-total-price',
	              onClick: function onClick() {
	                _this3.triggerShade('minView');
	              }
	            },
	            _react2.default.createElement(
	              'span',
	              null,
	              '￥',
	              price
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            {
	              className: 'cart-coupon',
	              onClick: function onClick() {
	                _this3.triggerShade('coupon');
	              }
	            },
	            _react2.default.createElement(
	              'span',
	              null,
	              '选择优惠券'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'cart-do-order' },
	            '结算'
	          )
	        )
	      );
	    }
	  }]);

	  return Cart;
	}(_react2.default.Component);

	Cart.propTypes = {
	  orderArray: _react.PropTypes.array.isRequired,
	  couponArray: _react.PropTypes.array.isRequired,
	  clickAdd: _react.PropTypes.func.isRequired,
	  clickMinus: _react.PropTypes.func.isRequired,
	  triggerCouponWithId: _react.PropTypes.func.isRequired
	};

	exports.default = Cart;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Cart.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Coupon = __webpack_require__(67);

	var _Coupon2 = _interopRequireDefault(_Coupon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * it will stopPropagation
	 */
	var CouponList = function CouponList(props) {
	  var couponArray = props.couponArray;
	  var couponClickWithId = props.couponClickWithId;

	  if (couponArray.length === 0) {
	    return _react2.default.createElement('div', null);
	  }
	  var couponDOM = couponArray.map(function (val) {
	    return _react2.default.createElement(_Coupon2.default, {
	      discount: val.discount,
	      description: val.description,
	      isValid: val.isValid,
	      onClick: function onClick(e) {
	        couponClickWithId(val.id);
	        e.stopPropagation();
	      }
	    });
	  });
	  return _react2.default.createElement(
	    'div',
	    null,
	    couponDOM
	  );
	};

	CouponList.propTypes = {
	  couponArray: _react.PropTypes.array.isRequired,
	  couponClickWithId: _react.PropTypes.func.isRequired
	};

	exports.default = CouponList;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CouponList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(68);

	var checked = _react2.default.createElement(
	  'svg',
	  { fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
	  _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
	  _react2.default.createElement('path', { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' })
	);
	var ableToSelect =
	/* eslint max-len: ["off", 100] */
	_react2.default.createElement(
	  'svg',
	  { fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
	  _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
	  _react2.default.createElement('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z' })
	);
	var Coupon = function Coupon(props) {
	  var discount = props.discount;
	  var description = props.description;
	  var isValid = props.isValid;
	  var onClick = props.onClick;

	  var isInUse = isValid;
	  var validStyle = isValid ? 'coupon coupon-valid' : 'coupon';
	  return _react2.default.createElement(
	    'div',
	    { className: validStyle, onClick: onClick },
	    _react2.default.createElement(
	      'div',
	      { className: 'discount' },
	      discount,
	      '元优惠券'
	    ),
	    description ? _react2.default.createElement(
	      'div',
	      { className: 'coupon-desciption' },
	      description
	    ) : null,
	    _react2.default.createElement(
	      'div',
	      { className: 'coupon-status' },
	      isInUse ? checked : ableToSelect
	    )
	  );
	};

	Coupon.propTypes = {
	  discount: _react.PropTypes.number.isRequired,
	  description: _react.PropTypes.string,
	  isValid: _react.PropTypes.bool,
	  onClick: _react.PropTypes.func
	};

	exports.default = Coupon;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/forclan/Documents/Javascript/React/order-system-yo/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Coupon.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(69);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(58)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Coupon.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Coupon.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	// imports


	// module
	exports.push([module.id, ".coupon {\n  display: flex;\n  border-radius: 1rem;\n  background-clip: padding-box;\n  padding: 1rem;\n  margin: 1rem;\n  background-color: white; }\n  .coupon:hover {\n    cursor: pointer; }\n  .coupon .discount {\n    color: red;\n    font-size: 1.2rem;\n    flex: 1; }\n  .coupon .description {\n    color: #a2a4a4;\n    flex: 2; }\n\n.coupon-valid {\n  background-color: #5dab86; }\n", ""]);

	// exports


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(58)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Cart.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Cart.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	// imports


	// module
	exports.push([module.id, "footer {\n  background-color: #3fec84;\n  border-radius: 0.5rem;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  height: 5rem;\n  width: 100%; }\n\n.show {\n  display: block; }\n\n.hide {\n  display: none; }\n\n.cart-container {\n  display: flex;\n  justify-content: space-around;\n  position: relative; }\n  .cart-container .cart-dropdown {\n    z-index: 100;\n    position: fixed;\n    background-color: rgba(1, 7, 15, 0.5);\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 5rem;\n    overflow: scroll; }\n    .cart-container .cart-dropdown .dropdown-contents {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: 101;\n      padding: 0.4rem 0.4rem 0; }\n  .cart-container .cart-img {\n    margin: 1rem;\n    width: 3rem;\n    height: 3rem;\n    background-size: 3rem;\n    background-image: url(" + __webpack_require__(72) + ");\n    position: relative; }\n    .cart-container .cart-img .red-dot {\n      height: 1rem;\n      width: 1rem;\n      border-radius: 1rem;\n      display: inline-block;\n      text-align: center;\n      font-size: 0.8rem;\n      color: #fff;\n      background: red;\n      position: absolute;\n      top: -0.6rem;\n      right: -0.6rem; }\n  .cart-container .cart-total-price {\n    display: flex;\n    background-color: rgba(27, 252, 225, 0.76);\n    border-radius: 0.5rem;\n    flex: 1;\n    color: red;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-size: 1.5rem;\n    align-items: center;\n    justify-content: center; }\n  .cart-container .cart-coupon {\n    border-radius: 0.5rem;\n    flex: 1;\n    background-color: #63ecec;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .cart-container .cart-do-order {\n    border-radius: 0.5rem;\n    flex: 1;\n    background-color: #16e7bb;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n", ""]);

	// exports


/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAACZ0lEQVR4Ae3ZT4jMfxzH8achM9okq1atk6j1pzVcOEjJQa2TE+UghYsbKQe1Lq602h0zreIkSmkjnLDtxumXfpQdy5ZISpE/Q820u/NyNtPMYebz/ny/n/o8nvd3vZrmz7chIoqiCCBSy4ZCHzAd+gCxJ/QBj0IfIHaEPuBO6AMWGQh7gLhBYKZRKvrNPTbRgQMoNf3obML/KDVN0IHDKDVV6MBS3oU9AE6ilHSXjiznE0pBiwzSoTMoBV2nYz18Qwn3h3V04QJKuIt0pZcKSrAvrKRLl1CCnaJr/dRQQr1hGQ6Mo4Q6iBMbWUAJNIUzt5D36uzEmTzy3m2ceoC8VmM9Tu1GXruMc1PIW9/pxbkh5K2zmHiBvPSeLCYOIS8dwUiGt8i8/1iCmePIvL0Ysn/IvI+x08iwBTZjrIevyKwSHgwjoyqsxYPVVJBJw3jyHBn0mR682I9MOoEXGV4ig56RwYtjyKA5+vFihckX2UP68OQ8ctg8H7jJPrzp41fTg98GAlJADY0QkAHmm/58W0NAJlBD5wjILtTQR3IE5Bpq6ChBmUP/9JoMIWl6A5dZRVBqyGvOzYY+oBj6gDz1sAdAKfQBOSbDHgA5StSRl8zkKVCmGuqAKIq2U2SWGjVmKZI3uGcox3jDx2idEjmDeyZyPEU0N0nO4J6Bq6hFRef3DGyljlpUJ29wz7ErqE0Fg3uOvUJtKhvcc+wnalPV/F4c0P4lnzG459gIatOowT3HtrCIWlRn0Pk9A6OoRWMG9wxkeYxo7glZg3tGEwpNP77GyBrcM7SNMcpUqTLDKINJ3ouiKIqivx8f5OVbSwreAAAAAElFTkSuQmCC"

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(58)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./App.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./App.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	// imports
	exports.i(__webpack_require__(75), "");

	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  display: none; }\n\n.order-view-container {\n  display: flex;\n  padding-bottom: 5.5rem;\n  bottom: 100px; }\n\n.body {\n  margin: 0; }\n\n@media only screen and (max-width: 700px) {\n  .order-view-container {\n    flex-direction: row; }\n    .order-view-container .category-container {\n      flex-grow: 0;\n      padding-bottom: 100px; }\n    .order-view-container .dish-list {\n      padding-left: 4.5rem; } }\n\n@media only screen and (min-width: 700px) {\n  .order-view-container {\n    flex-direction: column; } }\n", ""]);

	// exports


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(55)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n", ""]);

	// exports


/***/ }
/******/ ])
});
;