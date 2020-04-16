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
})({"medicalInstitution/Person.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(firstName, lastName) {
  _classCallCheck(this, Person);

  this._firstName = firstName;
  this._lastName = lastName;
};

exports.Person = Person;
},{}],"medicalInstitution/Doctor.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Doctor = /*#__PURE__*/function () {
  function Doctor(firstName, lastName, specialty) {
    _classCallCheck(this, Doctor);

    this.firstName = firstName;
    this.lastName = lastName;
    this.specialty = specialty;
    this.patients = [];
  }

  _createClass(Doctor, [{
    key: "addPatient",
    value: function addPatient(patient) {
      this.patients.push(patient);
    } //promis za kad ga izabere pacijent

  }]);

  return Doctor;
}();
},{}],"medicalInstitution/Patient.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Patient = /*#__PURE__*/function () {
  function Patient(firstName, lastName, ID, medicalNumber) {
    _classCallCheck(this, Patient);

    this.firstName = firstName;
    this.lastName = lastName;
    this.ID = ID;
    this.medicalNumber = medicalNumber;
  }

  _createClass(Patient, [{
    key: "chooseTheDoctor",
    value: function chooseTheDoctor(doctor) {
      this.choosenDoctor = doctor;
    }
  }]);

  return Patient;
}();
},{}],"medicalInstitution/BloodSugarExam.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BloodSugarExam = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BloodSugarExam = /*#__PURE__*/function () {
  function BloodSugarExam() {
    _classCallCheck(this, BloodSugarExam);

    this.lastMealTime = Date.getTime();
    this.sugarLevel = Math.floor(Math.random() * 10 + 1);
  }

  _createClass(BloodSugarExam, [{
    key: "execute",
    value: function execute() {
      return "Results for blood sugar are: ".concat(this.sugarLevel, " , ").concat(this.lastMealTime, ".");
    }
  }]);

  return BloodSugarExam;
}();

exports.BloodSugarExam = BloodSugarExam;
},{}],"medicalInstitution/BloodPressureExam.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BloodPressureExam = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BloodPressureExam = /*#__PURE__*/function () {
  function BloodPressureExam() {
    _classCallCheck(this, BloodPressureExam);

    this.pulse = Math.floor(Math.random() * 150 + 1);
    this.upperValue = Math.floor(Math.random() * 200 + 1);
    this.lowerValue = Math.floor(Math.random() * 100 + 1);
  }

  _createClass(BloodPressureExam, [{
    key: "execute",
    value: function execute() {
      return "Results for blood pressure are: ".concat(this.upperValue, " , ").concat(this.lowerValue, ", ").concat(this.pulse, ".");
    }
  }]);

  return BloodPressureExam;
}();

exports.BloodPressureExam = BloodPressureExam;
},{}],"medicalInstitution/BloodCholesterolExam.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BloodCholesterolExam = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BloodCholesterolExam = /*#__PURE__*/function () {
  function BloodCholesterolExam() {
    _classCallCheck(this, BloodCholesterolExam);

    this.lastMealTime = Date.getTime();
    this.cholesterolLevel = Math.floor(Math.random() * 10 + 1);
  }

  _createClass(BloodCholesterolExam, [{
    key: "execute",
    value: function execute() {
      return "Results for blood cholesterol are: ".concat(this.cholesterolLevel, " , ").concat(this.lastMealTime, ".");
    }
  }]);

  return BloodCholesterolExam;
}();

exports.BloodCholesterolExam = BloodCholesterolExam;
},{}],"medicalInstitution/AppointmentRecord.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppointmentRecord = void 0;

var _BloodSugarExam = require("./BloodSugarExam.js");

var _BloodPressureExam = require("./BloodPressureExam.js");

var _BloodCholesterolExam = require("./BloodCholesterolExam.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppointmentRecord = /*#__PURE__*/function () {
  function AppointmentRecord(schedule) {
    _classCallCheck(this, AppointmentRecord);

    this.schedule = schedule;
  }

  _createClass(AppointmentRecord, [{
    key: "returnResults",
    value: function returnResults() {
      var exam;

      switch (this.schedule.type) {
        case 'blood pressure':
          exam = new _BloodPressureExam.BloodPressureExam();
          break;

        case 'blood cholesterol':
          exam = new _BloodCholesterolExam.BloodCholesterolExam();
          break;

        case 'blood sugar':
          exam = new _BloodSugarExam.BloodSugarExam();
          break;

        default:
          exam = new _BloodPressureExam.BloodPressureExam();
          break;
      }

      return "Exam ".concat(this.schedule.type, " has been done for patient ").concat(this.schedule.patient.firstName, ", and ").concat(this.exam.execute());
    }
  }]);

  return AppointmentRecord;
}();

exports.AppointmentRecord = AppointmentRecord;
},{"./BloodSugarExam.js":"medicalInstitution/BloodSugarExam.js","./BloodPressureExam.js":"medicalInstitution/BloodPressureExam.js","./BloodCholesterolExam.js":"medicalInstitution/BloodCholesterolExam.js"}],"medicalInstitution/AppointmentSchedule.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppointmentSchedule = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppointmentSchedule = /*#__PURE__*/function () {
  function AppointmentSchedule(doctor, patient, type, scheduledDate, scheduledTime) {
    _classCallCheck(this, AppointmentSchedule);

    this.type = type;
    this.doctor = doctor;
    this.patient = patient;
    this.scheduledDate = scheduledDate;
    this.scheduledTime = scheduledTime;
  }

  _createClass(AppointmentSchedule, [{
    key: "schedule",
    value: function schedule() {
      return " Appointment ".concat(this.type, ",  for ").concat(this.patient.firstName, " has been successfully scheduled by doctor ").concat(this.doctor.firstName, " on ").concat(this.scheduledDate, " in ").concat(this.scheduledTime, " ");
    }
  }]);

  return AppointmentSchedule;
}();

exports.AppointmentSchedule = AppointmentSchedule;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _Person = require("./medicalInstitution/Person.js");

var _Doctor = require("./medicalInstitution/Doctor.js");

var _Patient = require("./medicalInstitution/Patient.js");

var _AppointmentRecord = require("./medicalInstitution/AppointmentRecord.js");

var _AppointmentSchedule = require("./medicalInstitution/AppointmentSchedule.js");

(function () {
  var milan = new _Doctor.Doctor("Milan", "Doktorovic", "Gastroenternolog");
  console.log("[ ".concat(new Date(), " ] kreiran doktor Milan"));
  var dragan = new _Patient.Patient("Dragan", "Pacijentic", 1234567891234, 36);
  console.log("[ ".concat(new Date(), " ] kreiran pacijent Dragan"));
  dragan.chooseTheDoctor(milan);
  console.log("[ ".concat(new Date(), " ] pacijent izabrao doktora"));
  milan.addPatient(dragan);
  var appointment1 = new _AppointmentSchedule.AppointmentSchedule("blood sugar", milan, dragan, new Date(), new Date.now());
  console.log(appointment1.schedule());
  var appointment2 = new _AppointmentSchedule.AppointmentSchedule("blood pressure", milan, dragan, new Date(), new Date.now());
  console.log(appointment2.schedule());
  var record1 = new _AppointmentRecord.AppointmentRecord(appointment1);
  console.log("[ ".concat(new Date(), " ] ").concat(record1.returnResults(), " pregled 1 izvrsen "));
  var record2 = new _AppointmentRecord.AppointmentRecord(appointment2);
  console.log(" [ ".concat(new Date(), " ] ").concat(record2.returnResults(), " pregled 2 izvrsen "));
})();
},{"./medicalInstitution/Person.js":"medicalInstitution/Person.js","./medicalInstitution/Doctor.js":"medicalInstitution/Doctor.js","./medicalInstitution/Patient.js":"medicalInstitution/Patient.js","./medicalInstitution/AppointmentRecord.js":"medicalInstitution/AppointmentRecord.js","./medicalInstitution/AppointmentSchedule.js":"medicalInstitution/AppointmentSchedule.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62559" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/parcell.e31bb0bc.js.map