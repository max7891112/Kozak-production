// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"W9Ct":[function(require,module,exports) {
module.exports = "Vector.c76dbc3a.svg";
},{}],"YXqr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOT_MODAL_CASE_FIRST = exports.ROOT_MODAL = void 0;
var ROOT_MODAL = document.querySelector('.modalForm');
exports.ROOT_MODAL = ROOT_MODAL;
var ROOT_MODAL_CASE_FIRST = document.querySelector('.modalCaseFirst');
exports.ROOT_MODAL_CASE_FIRST = ROOT_MODAL_CASE_FIRST;
},{}],"UKhy":[function(require,module,exports) {
module.exports = "trafic.4086fa4f.png";
},{}],"QrLR":[function(require,module,exports) {
module.exports = "chart.982ff9da.png";
},{}],"XtWt":[function(require,module,exports) {
module.exports = "table.6eaf46ce.png";
},{}],"Sfhf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Vector = _interopRequireDefault(require("../modalForm/img/Vector.svg"));
var _root = require("../../../constants/_root.js");
var _trafic = _interopRequireDefault(require("./img/trafic.png"));
var _chart = _interopRequireDefault(require("./img/chart.png"));
var _table = _interopRequireDefault(require("./img/table.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ModalForm = /*#__PURE__*/function () {
  function ModalForm() {
    _classCallCheck(this, ModalForm);
  }
  _createClass(ModalForm, [{
    key: "render",
    value: function render() {
      var htmlContent = " \n            <div class=\"case\" id=\"case-container\" data-close=\"true\">\n                <div class=\"case__body _container\" >\n                    <img src=\"".concat(_Vector.default, "\" alt=\"close\" class=\"case__close\" data-close=\"true\">\n                    <div class=\"case__container\">\n                        <h2 class=\"case__title\">4-\u0445 \u043A\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0437\u0430\u044F\u0432\u043E\u043A \u0441 \u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u0438\u0440\u0435\u043A\u0442 \u0432 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0412\u0423\u0417 \u041C\u043E\u0441\u043A\u0432\u044B</h2>\n                        <p class=\"case__client\"><span>\u041A\u043B\u0438\u0435\u043D\u0442: </span>\u041F\u0435\u0434\u0430\u0433\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0412\u0423\u0417 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435</p>\n                        <div class=\"case__task-container\">\n                            <p class=\"case__task-title\"><span>\u0417\u0430\u0434\u0430\u0447\u0430:</span></p>\n                            <p class=\"case__task-text\">\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u043C \xAB\u041F\u0435\u0440\u0435\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430\xBB \u0438 \xAB\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438\xBB \u0434\u043B\u044F \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0443\u0447\u0435\u0431\u043D\u044B\u0445 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0438 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u043E\u0432 \u0434\u043E\u0448\u043A\u043E\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F.\u041D\u0430\u0431\u0440\u0430\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0432\u044B\u0434\u0435\u043B\u044F\u0435\u043C\u043E\u0433\u043E \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u0441\u043E \u0441\u0440\u0435\u0434\u043D\u0435\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C\u044E \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 2500 \u0440\u0443\u0431.</p>\n                        </div>\n                        <div class=\"case__did-container\">\n                            <p class=\"case__did-title\"><span>\u0427\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u043D\u043E:</span></p>\n                            <ul class=\"case__did-ul\">\n                                <li class=\"case__did-li\">\u0418\u043D\u0442\u0435\u0440\u0432\u044C\u044E\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0438 \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0441 \u0435\u0433\u043E \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.</li>\n                                <li class=\"case__did-li\">\u041F\u0440\u043E\u0432\u0435\u0434\u0435\u043D \u0430\u043D\u0430\u043B\u0438\u0437 \u0441\u0430\u0439\u0442\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u043F\u0440\u044F\u043C\u044B\u0445 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432, \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438.</li>\n                                <li class=\"case__did-li\">\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D \u043F\u0443\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043A\u0430\u0441\u0430\u043D\u0438\u044F \u0435\u0433\u043E \u043D\u0430\u0448\u0435\u0439 \u0440\u0435\u043A\u043B\u0430\u043C\u043E\u0439.</li>\n                                <li class=\"case__did-li\">\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u044B \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u044B \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0438.</li>\n                                <li class=\"case__did-li\">\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0433\u043E \u0431\u044E\u0434\u0436\u0435\u0442\u0430, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F</li>\n                                <li class=\"case__did-li\">\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0430\u044F \u0446\u0435\u043B\u044C \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u044B \u0438 \u0441\u043E\u043F\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043C\u0438\u043A\u0440\u043E\u0446\u0435\u043B\u0438 \u0434\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u0431\u044B\u0441\u0442\u0440\u043E\u0439 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0439 \u0441 \u0432\u044B\u0432\u0435\u0434\u0435\u043D\u0438\u0435\u043C \u0438\u0445 \u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u0441 \u043E\u043F\u043B\u0430\u0442\u043E\u0439 \u0437\u0430 \u0437\u0430\u044F\u0432\u043A\u0443.</li>\n                                <li class=\"case__did-li\">\u041F\u043E\u044D\u0442\u0430\u043F\u043D\u043E\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435, \u0437\u0430\u043F\u0443\u0441\u043A \u0438 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u0430 \u043F\u043E\u0438\u0441\u043A\u0435, \u0432 \u0441\u0435\u0442\u044F\u0445 \u0438 \u043C\u0430\u0441\u0442\u0435\u0440 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438.</li>\n                            </ul>\n                        </div>\n                        <div class=\"case__results-container\">\n                            <p class=\"case__results-title\"><span>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B:</span></p>\n                            <ul class=\"case__results-ul\">\n                                <li class=\"case__results-li\">\u0412 \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u0438 \u0434\u043B\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u0435\u0441\u044F\u0442\u043A\u043E\u0432 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0439, \u0431\u043E\u043B\u0435\u0435 <span>3000</span> \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439</li>\n                                <li class=\"case__results-li\">\u0412\u0441\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0432\u044B\u0432\u0435\u0434\u0435\u043D\u044B \u043D\u0430 \u0440\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043E\u043F\u043B\u0430\u0442\u043E\u0439 \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430 \u0437\u0430\u044F\u0432\u043A\u0443</li>\n                                <li class=\"case__results-li\">\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u0446\u0435\u043D\u0430 \u0437\u0430\u044F\u0432\u043A\u0438 \u043E\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 <span>2000  \u20BD</span></li>\n                                <li class=\"case__results-li\">\u0417\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441 \u043C\u0430\u044F 2022 \u043F\u043E \u044F\u043D\u0432\u0430\u0440\u044C 2023 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A \u043D\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043E \u0432 <span>7</span> \u0440\u0430\u0437 - <span>121</span> \u0432 \u043C\u0430\u0435 2022 \u0438 <span>831</span> \u0432 \u044F\u043D\u0432\u0430\u0440\u0435 2023.</li>\n                            </ul>\n                        </div>\n                        <div class=\"case__img-container\">\n                            <img src=\"").concat(_trafic.default, "\"></img>\n                            <img src=\"").concat(_chart.default, "\"></img>\n                            <img src=\"").concat(_table.default, "\"></img>\n                        </div>\n                        \n                    </div>\n                </div>\n            </div>\n            ");
      var htmlWrapper = "\n                <div class=\"case__wrapper\">\n                    ".concat(htmlContent, "\n                </div>\n            ");
      _root.ROOT_MODAL_CASE_FIRST.innerHTML = htmlWrapper;
    }
  }, {
    key: "open",
    value: function open() {
      this.render();
      document.querySelector('.case__body').classList.add('open'); // анимации появления окна
      document.querySelector('.case').classList.add('open');
    }
  }, {
    key: "close",
    value: function close() {
      var modal = document.querySelector('.case');
      var modalWindow = document.querySelector('.case__body');
      if (modal) {
        modalWindow.classList.remove('open');
        modalWindow.parentElement.classList.remove('open');
        modalWindow.classList.add('disappearance');
        modalWindow.parentElement.classList.add('disappearance');
        setTimeout(function () {
          modalWindow.classList.remove('disappearance');
          modalWindow.parentElement.classList.remove('disappearance');
          _root.ROOT_MODAL_CASE_FIRST.innerHTML = '';
        }, 300);
      }
      ;
    }
  }]);
  return ModalForm;
}();
var _default = new ModalForm();
exports.default = _default;
},{"../modalForm/img/Vector.svg":"W9Ct","../../../constants/_root.js":"YXqr","./img/trafic.png":"UKhy","./img/chart.png":"QrLR","./img/table.png":"XtWt"}],"WaA4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Vector = _interopRequireDefault(require("./img/Vector.svg"));
var _TechnicalFunctions = _interopRequireDefault(require("../../../technicalFunctions/TechnicalFunctions.js"));
var _root = require("../../../constants/_root.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ModalForm = /*#__PURE__*/function () {
  function ModalForm() {
    _classCallCheck(this, ModalForm);
  }
  _createClass(ModalForm, [{
    key: "render",
    value: function render() {
      var htmlContent = " \n            <div class=\"modal\" id=\"modal-container\" data-close=\"true\">\n                <div class=\"modal__body _container\" >\n                    <img src=\"".concat(_Vector.default, "\" alt=\"close\" class=\"modal__close\" data-close=\"true\">\n                    <div class=\"modal__container\">\n                        <h3 class=\"modal__title\">\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u0438 \u043C\u044B \u043F\u0440\u043E\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u0435\u043C \u0432\u0430\u0441 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E</h3>\n                        <form action=\"#\" class=\"modal__form\" id=\"form-free-lesson\">\n                            <input class=\"form__input form__input_name _thirdModal-req\" placeholder=\"\u0418\u043C\u044F\" data-input=\"true\">\n                            <input class=\"form__input form__input_phone _thirdModal-req form__input_phone\" placeholder=\"+7 (___)-___-__-__\" type=\"tel\" data-input=\"true\" maxlength=\"15\">\n                            <button class=\"modal__button _order-button\">\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            ");
      var htmlWrapper = "\n                <div class=\"modal__wrapper\">\n                    ".concat(htmlContent, "\n                </div>\n            ");
      _root.ROOT_MODAL.innerHTML = htmlWrapper;
    }
  }, {
    key: "open",
    value: function open() {
      this.render();
      document.querySelector('.modal__body').classList.add('open'); // анимации появления окна
      document.querySelector('.modal').classList.add('open');
      this.addListenerForTelMaskModal();
    }
  }, {
    key: "close",
    value: function close() {
      var modal = document.querySelector('.modal');
      var modalWindow = document.querySelector('.modal__body');
      if (modal) {
        modalWindow.classList.remove('open');
        modalWindow.parentElement.classList.remove('open');
        modalWindow.classList.add('disappearance');
        modalWindow.parentElement.classList.add('disappearance');
        setTimeout(function () {
          modalWindow.classList.remove('disappearance');
          modalWindow.parentElement.classList.remove('disappearance');
          _root.ROOT_MODAL.innerHTML = '';
        }, 300);
      }
      ;
    }
  }, {
    key: "addListenerForTelMaskModal",
    value: function addListenerForTelMaskModal() {
      var tel = document.querySelector('.form__input_phone');
      tel.addEventListener('keyup', function (event) {
        if (event.key != 'Backspace' && (tel.value.length === 1 || tel.value.length === 5 || tel.value.length === 9 || tel.value.length === 12)) {
          tel.value += '-';
        }
      });
    }
  }, {
    key: "sendForm",
    value: function sendForm() {
      var form = document.getElementById('form-free-lesson');
      var container = document.getElementById('modal-container');
      form.addEventListener('submit', formSend);
      function formSend(event) {
        // async
        event.preventDefault();
        var error = formValidate(form);
        var formData = new FormData(form);
        if (error == 0) {
          container.classList.add('_sending');
          form.reset();
          setTimeout(function () {
            var response = fetch('sendmail.php', {
              // await
              method: 'POST',
              body: formData
            });
            if (response.ok) {
              var result = response.json(); // await
              alert(result.message);
              form.reset();
              container.classList.remove('_sending');
            } else {
              alert('Ошибка отправки данных на сервер');
              container.classList.remove('_sending');
              var modal = document.querySelector('.modal'); // дублирование кода
              var modalWindow = document.querySelector('.modal__body');
              if (modal) {
                modalWindow.classList.remove('open');
                modalWindow.parentElement.classList.remove('open');
                modalWindow.classList.add('disappearance');
                modalWindow.parentElement.classList.add('disappearance');
                setTimeout(function () {
                  modalWindow.classList.remove('disappearance');
                  modalWindow.parentElement.classList.remove('disappearance');
                  _root.ROOT_MODAL.innerHTML = '';
                }, 300);
              }
              ; // дублирование кода
            }
          }, 1000);
        } else {
          alert('Заполните обязательные поля');
        }
      }
      function formValidate() {
        var error = 0;
        var formReq = document.querySelectorAll('._thirdModal-req');
        for (var i = 0; i < formReq.length; i++) {
          var input = formReq[i];
          _TechnicalFunctions.default.formRemoveError(input);
          if (input.value == '') {
            formAddError(input);
            error++;
          }
        }
        return error;
      }
      function formAddError(input) {
        input.classList.add('_error');
        if (input.placeholder == 'Имя' || input.placeholder == 'Введите имя') {
          input.placeholder = 'Введите имя';
        } else if (input.placeholder == 'Телефон' || input.placeholder == 'Введите номер телефона') {
          input.placeholder = 'Введите номер телефона';
        }
      }
    }
  }]);
  return ModalForm;
}();
var _default = new ModalForm();
exports.default = _default;
},{"./img/Vector.svg":"W9Ct","../../../technicalFunctions/TechnicalFunctions.js":"opYb","../../../constants/_root.js":"YXqr"}],"opYb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ModalCase = _interopRequireDefault(require("../components/modal/modalCase/ModalCase.js"));
var _ModalForm = _interopRequireDefault(require("../components/modal/modalForm/ModalForm.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TechnicalFunctions = /*#__PURE__*/function () {
  function TechnicalFunctions() {
    _classCallCheck(this, TechnicalFunctions);
  }
  _createClass(TechnicalFunctions, [{
    key: "formRemoveError",
    value: function formRemoveError(input) {
      input.classList.remove('_error');
    }
  }, {
    key: "addListenerForDataInput",
    value: function addListenerForDataInput() {
      document.addEventListener('click', function (event) {
        var target = event.target;
        if (!target.hasAttribute('data-input')) return;
        target.classList.remove('_error');
      });
    }
  }, {
    key: "addListenerForTelMask",
    value: function addListenerForTelMask() {
      var inputTels = document.querySelectorAll('.form__input_phone');
      var _iterator = _createForOfIteratorHelper(inputTels),
        _step;
      try {
        var _loop = function _loop() {
          var tel = _step.value;
          tel.addEventListener('keyup', function (event) {
            if (event.key != 'Backspace' && (tel.value.length === 1 || tel.value.length === 5 || tel.value.length === 9 || tel.value.length === 12)) {
              tel.value += '-';
            }
            ;
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      ;
    }
  }, {
    key: "addListenerDataClose",
    value: function addListenerDataClose() {
      document.addEventListener('click', function (event) {
        var target = event.target;
        if (target.dataset.close) {
          _ModalForm.default.close();
          _ModalCase.default.close();
        }
        ;
      });
    }
  }, {
    key: "addListenerForModalForm",
    value: function addListenerForModalForm() {
      var records = document.querySelectorAll('._order-form');
      var _iterator2 = _createForOfIteratorHelper(records),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var record = _step2.value;
          record.addEventListener('click', function () {
            // запись на бесплатное занятие через главную страницу
            _ModalForm.default.open(); // открытие модального окна
            _ModalForm.default.sendForm();
            document.addEventListener('keydown', function (event) {
              if (event.code.toLowerCase() == 'escape') {
                _ModalForm.default.close();
              }
              ;
            });
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      ;
    }
  }, {
    key: "addListenerForModalCase",
    value: function addListenerForModalCase() {
      var record = document.querySelector('._watch-case');
      record.addEventListener('click', function () {
        // запись на бесплатное занятие через главную страницу
        _ModalCase.default.open(); // открытие модального окна
        document.addEventListener('keydown', function (event) {
          if (event.code.toLowerCase() == 'escape') {
            _ModalCase.default.close();
          }
          ;
        });
      });
    }
  }, {
    key: "smoothNavigation",
    value: function smoothNavigation() {
      var menuLinks = document.querySelectorAll('._smooth-link[data-goto]');
      if (menuLinks.length != 0) {
        var _iterator3 = _createForOfIteratorHelper(menuLinks),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var menuLink = _step3.value;
            menuLink.addEventListener('click', function (event) {
              var target = event.target;
              if (target.dataset.goto && document.querySelector(target.dataset.goto)) {
                var gotoBlock = document.querySelector(target.dataset.goto);
                var gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 100;
                window.scrollTo({
                  top: gotoBlockValue,
                  behavior: 'smooth'
                });
                event.preventDefault();
              }
              ;
            });
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      ;
    }
  }]);
  return TechnicalFunctions;
}();
;
var _default = new TechnicalFunctions();
exports.default = _default;
},{"../components/modal/modalCase/ModalCase.js":"Sfhf","../components/modal/modalForm/ModalForm.js":"WaA4"}],"mrum":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TechnicalFunctions = _interopRequireDefault(require("../../technicalFunctions/TechnicalFunctions"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Form = /*#__PURE__*/function () {
  function Form() {
    _classCallCheck(this, Form);
  }
  _createClass(Form, [{
    key: "sendForm",
    value: function sendForm() {
      var form = document.getElementById('questionForm');
      var container = document.getElementById('formContainer');
      form.addEventListener('submit', formSend);
      function formSend(_x) {
        return _formSend.apply(this, arguments);
      }
      function _formSend() {
        _formSend = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
          var error, formData;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                error = formValidate();
                formData = new FormData(form);
                if (error == 0) {
                  container.classList.add('_sending');
                  form.reset();
                  setTimeout(function () {
                    var response = fetch('sendmail.php', {
                      // await
                      method: 'POST',
                      body: formData
                    });
                    if (response.ok) {
                      var result = response.json(); // await
                      alert(result.message);
                      form.reset();
                      container.classList.remove('_sending');
                    } else {
                      alert('Ошибка отправки данных на сервер');
                      container.classList.remove('_sending');
                    }
                    ;
                  }, 1000);
                } else {
                  alert('Заполните обязательные поля');
                }
                ;
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _formSend.apply(this, arguments);
      }
      ;
      function formValidate() {
        var error = 0;
        var formReq = document.querySelectorAll('._secondForm__req');
        for (var i = 0; i < formReq.length; i++) {
          var input = formReq[i];
          _TechnicalFunctions.default.formRemoveError(input);
          if (input.value == '') {
            formAddError(input);
            error++;
          }
          ;
        }
        ;
        return error;
      }
      ;
      function formAddError(input) {
        input.classList.add('_error');
        if (input.placeholder == 'Имя' || input.placeholder == 'Введите имя') {
          input.placeholder = 'Введите имя';
        } else if (input.placeholder == 'Телефон' || input.placeholder == 'Введите номер телефона') {
          input.placeholder = 'Введите номер телефона';
        }
      }
      _TechnicalFunctions.default.addListenerForDataInput();
      _TechnicalFunctions.default.addListenerForTelMask();
    }
  }]);
  return Form;
}();
;
var _default = new Form();
exports.default = _default;
},{"../../technicalFunctions/TechnicalFunctions":"opYb"}],"nx6M":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Questions = /*#__PURE__*/function () {
  function Questions() {
    _classCallCheck(this, Questions);
  }
  _createClass(Questions, [{
    key: "addListener",
    value: function addListener() {
      document.addEventListener('click', function (event) {
        var vector = event.target;
        if (!vector.hasAttribute('data-vector')) return;
        var target = vector.parentNode.nextElementSibling;
        target.classList.toggle('hidden');
        if (target.classList.contains('hidden')) {
          vector.style.transform = 'rotate(0deg)';
        } else {
          vector.style.transform = 'rotate(-180deg)';
        }
      });
    }
  }]);
  return Questions;
}();
;
var _default = new Questions();
exports.default = _default;
},{}],"j65i":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TechnicalFunctions = _interopRequireDefault(require("../../technicalFunctions/TechnicalFunctions"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SecondForm = /*#__PURE__*/function () {
  function SecondForm() {
    _classCallCheck(this, SecondForm);
  }
  _createClass(SecondForm, [{
    key: "sendForm",
    value: function sendForm() {
      var form = document.getElementById('secondForm');
      var container = document.getElementById('secondFormContainer');
      form.addEventListener('submit', formSend);
      function formSend(_x) {
        return _formSend.apply(this, arguments);
      }
      function _formSend() {
        _formSend = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
          var error, formData;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                error = formValidate();
                formData = new FormData(form);
                if (error == 0) {
                  container.classList.add('_sending');
                  form.reset();
                  setTimeout(function () {
                    var response = fetch('sendmail.php', {
                      // await
                      method: 'POST',
                      body: formData
                    });
                    if (response.ok) {
                      var result = response.json(); // await
                      alert(result.message);
                      form.reset();
                      container.classList.remove('_sending');
                    } else {
                      alert('Ошибка отправки данных на сервер');
                      container.classList.remove('_sending');
                    }
                    ;
                  }, 1000);
                } else {
                  alert('Заполните обязательные поля');
                }
                ;
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _formSend.apply(this, arguments);
      }
      ;
      function formValidate() {
        var error = 0;
        var formReq = document.querySelectorAll('._form__req');
        for (var i = 0; i < formReq.length; i++) {
          var input = formReq[i];
          _TechnicalFunctions.default.formRemoveError(input);
          if (input.value == '') {
            formAddError(input);
            error++;
          }
          ;
        }
        ;
        return error;
      }
      ;
      function formAddError(input) {
        input.classList.add('_error');
        if (input.placeholder == 'Имя' || input.placeholder == 'Введите имя') {
          input.placeholder = 'Введите имя';
        } else if (input.placeholder == 'Телефон' || input.placeholder == 'Введите номер телефона') {
          input.placeholder = 'Введите номер телефона';
        }
      }
      _TechnicalFunctions.default.addListenerForDataInput();
      _TechnicalFunctions.default.addListenerForTelMask();
    }
  }]);
  return SecondForm;
}();
;
var _default = new SecondForm();
exports.default = _default;
},{"../../technicalFunctions/TechnicalFunctions":"opYb"}],"Focm":[function(require,module,exports) {
"use strict";

var _Form = _interopRequireDefault(require("./components/form/Form.js"));
var _Questions = _interopRequireDefault(require("./components/questions/Questions.js"));
var _SecondForm = _interopRequireDefault(require("./components/secondForm/SecondForm.js"));
var _TechnicalFunctions = _interopRequireDefault(require("./technicalFunctions/TechnicalFunctions.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
document.addEventListener('DOMContentLoaded', function () {
  _Form.default.sendForm();
  _SecondForm.default.sendForm();
  _Questions.default.addListener();
  _TechnicalFunctions.default.addListenerDataClose();
  _TechnicalFunctions.default.addListenerForModalForm();
  _TechnicalFunctions.default.addListenerForModalCase();
  _TechnicalFunctions.default.smoothNavigation();
  new Swiper('.image-slider', {
    navigation: {
      nextEl: '.swiper-button-next-modern',
      prevEl: '.swiper-button-prev-modern'
    },
    pagination: {
      el: '.swiper-paginations',
      //буллеты
      clickable: true
    },
    loop: true
  });
});
},{"./components/form/Form.js":"mrum","./components/questions/Questions.js":"nx6M","./components/secondForm/SecondForm.js":"j65i","./technicalFunctions/TechnicalFunctions.js":"opYb"}]},{},["Focm"], null)