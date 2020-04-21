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
})({"medicalInstitution/Logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, null, [{
    key: "createDoctor",
    value: function createDoctor(name) {
      console.log("[ ".concat(new Date(), " ] created doctor ").concat(name));
    }
  }, {
    key: "createPatient",
    value: function createPatient(name) {
      console.log("[ ".concat(new Date(), " ] created patient ").concat(name));
    }
  }, {
    key: "chooseDoctor",
    value: function chooseDoctor(patientName, doctorName) {
      console.log("[ ".concat(new Date(), " ] patient ").concat(patientName, " has choosen doctor ").concat(doctorName));
    }
  }, {
    key: "scheduleAppointment",
    value: function scheduleAppointment(appointment) {
      console.log(" Appointment ".concat(appointment.type, ",  for ").concat(appointment.patient.firstName, " has been successfully scheduled by doctor ").concat(appointment.doctor.firstName, " on ").concat(appointment.scheduledDate, " in ").concat(appointment.scheduledTime, " "));
    }
  }, {
    key: "executeAppointment",
    value: function executeAppointment(appointment) {
      console.log("[ ".concat(new Date(), " ] appointment has been executed ").concat(appointment.type.execute(), " "));
    }
  }]);

  return Logger;
}();

exports.Logger = Logger;
},{}],"medicalInstitution/Person.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(firstName, lastName) {
  _classCallCheck(this, Person);

  this.firstName = firstName;
  this.lastName = lastName;
};

exports.Person = Person;
},{}],"medicalInstitution/AppointmentRecord.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppointmentRecord = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppointmentRecord = /*#__PURE__*/function () {
  function AppointmentRecord() {
    _classCallCheck(this, AppointmentRecord);

    if (this.constructor === AppointmentRecord) {
      throw new TypeError('Abstract class cannot be instantiated directly.');
    }
  }

  _createClass(AppointmentRecord, [{
    key: "execute",
    value: function execute() {
      throw new Error('you cannot exeecute abstract class.');
    }
  }]);

  return AppointmentRecord;
}();

exports.AppointmentRecord = AppointmentRecord;
},{}],"medicalInstitution/BloodSugarExam.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BloodSugarExam = void 0;

var _AppointmentRecord2 = require("./AppointmentRecord.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BloodSugarExam = /*#__PURE__*/function (_AppointmentRecord) {
  _inherits(BloodSugarExam, _AppointmentRecord);

  var _super = _createSuper(BloodSugarExam);

  function BloodSugarExam() {
    var _this;

    _classCallCheck(this, BloodSugarExam);

    _this = _super.call(this);
    var date = new Date();
    _this.lastMealTime = date.getTime();
    _this.sugarLevel = Math.floor(Math.random() * 10 + 1);
    return _this;
  }

  _createClass(BloodSugarExam, [{
    key: "execute",
    value: function execute() {
      return "Results for blood sugar are: ".concat(this.sugarLevel, " , ").concat(this.lastMealTime, ".");
    }
  }]);

  return BloodSugarExam;
}(_AppointmentRecord2.AppointmentRecord);

exports.BloodSugarExam = BloodSugarExam;
},{"./AppointmentRecord.js":"medicalInstitution/AppointmentRecord.js"}],"medicalInstitution/BloodPressureExam.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BloodPressureExam = void 0;

var _AppointmentRecord2 = require("./AppointmentRecord.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BloodPressureExam = /*#__PURE__*/function (_AppointmentRecord) {
  _inherits(BloodPressureExam, _AppointmentRecord);

  var _super = _createSuper(BloodPressureExam);

  function BloodPressureExam() {
    var _this;

    _classCallCheck(this, BloodPressureExam);

    _this = _super.call(this);
    _this.pulse = Math.floor(Math.random() * 150 + 1);
    _this.upperValue = Math.floor(Math.random() * 200 + 1);
    _this.lowerValue = Math.floor(Math.random() * 100 + 1);
    return _this;
  }

  _createClass(BloodPressureExam, [{
    key: "execute",
    value: function execute() {
      return "Results for blood pressure are: ".concat(this.upperValue, " , ").concat(this.lowerValue, ", ").concat(this.pulse, ".");
    }
  }]);

  return BloodPressureExam;
}(_AppointmentRecord2.AppointmentRecord);

exports.BloodPressureExam = BloodPressureExam;
},{"./AppointmentRecord.js":"medicalInstitution/AppointmentRecord.js"}],"medicalInstitution/BloodCholesterolExam.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BloodCholesterolExam = void 0;

var _AppointmentRecord2 = require("./AppointmentRecord.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BloodCholesterolExam = /*#__PURE__*/function (_AppointmentRecord) {
  _inherits(BloodCholesterolExam, _AppointmentRecord);

  var _super = _createSuper(BloodCholesterolExam);

  function BloodCholesterolExam() {
    var _this;

    _classCallCheck(this, BloodCholesterolExam);

    _this = _super.call(this);
    var date = new Date();
    _this.lastMealTime = date.getTime();
    _this.cholesterolLevel = Math.floor(Math.random() * 10 + 1);
    return _this;
  }

  _createClass(BloodCholesterolExam, [{
    key: "execute",
    value: function execute() {
      return "Results for blood cholesterol are: ".concat(this.cholesterolLevel, " , ").concat(this.lastMealTime, ".");
    }
  }]);

  return BloodCholesterolExam;
}(_AppointmentRecord2.AppointmentRecord);

exports.BloodCholesterolExam = BloodCholesterolExam;
},{"./AppointmentRecord.js":"medicalInstitution/AppointmentRecord.js"}],"medicalInstitution/Doctor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Doctor = void 0;

var _Person2 = require("./Person.js");

var _BloodSugarExam = require("./BloodSugarExam.js");

var _BloodPressureExam = require("./BloodPressureExam.js");

var _BloodCholesterolExam = require("./BloodCholesterolExam.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Doctor = /*#__PURE__*/function (_Person) {
  _inherits(Doctor, _Person);

  var _super = _createSuper(Doctor);

  function Doctor(firstName, lastName, specialty) {
    var _this;

    _classCallCheck(this, Doctor);

    _this = _super.call(this, firstName, lastName);
    _this.specialty = specialty;
    _this.patients = [];
    _this.appointments = [];
    return _this;
  }

  _createClass(Doctor, [{
    key: "addPatient",
    value: function addPatient(patient) {
      this.patients.push(patient);
    }
  }, {
    key: "addAnAppointment",
    value: function addAnAppointment(appointment) {
      this.appointments.push(appointment);
    }
  }, {
    key: "makeAnAppointment",
    value: function makeAnAppointment(type, doctor, patient, scheduledDate, scheduledTime) {
      var appointment = {};

      switch (type) {
        case 'blood pressure':
          appointment.type = new _BloodPressureExam.BloodPressureExam();
          break;

        case 'blood cholesterol':
          appointment.type = new _BloodCholesterolExam.BloodCholesterolExam();
          break;

        case 'blood sugar':
          appointment.type = new _BloodSugarExam.BloodSugarExam();
          break;

        default:
          appointment.type = new _BloodPressureExam.BloodPressureExam();
          break;
      }

      appointment.doctor = doctor;
      appointment.patient = patient;
      appointment.scheduledDate = scheduledDate;
      appointment.scheduledTime = scheduledTime;
      this.addAnAppointment(appointment);
      patient.getScheduledForAnAppointment(appointment);
      return appointment;
    }
  }]);

  return Doctor;
}(_Person2.Person);

exports.Doctor = Doctor;
},{"./Person.js":"medicalInstitution/Person.js","./BloodSugarExam.js":"medicalInstitution/BloodSugarExam.js","./BloodPressureExam.js":"medicalInstitution/BloodPressureExam.js","./BloodCholesterolExam.js":"medicalInstitution/BloodCholesterolExam.js"}],"medicalInstitution/Patient.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Patient = void 0;

var _Person2 = require("./Person.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Patient = /*#__PURE__*/function (_Person) {
  _inherits(Patient, _Person);

  var _super = _createSuper(Patient);

  function Patient(firstName, lastName, id, medicalNumber) {
    var _this;

    _classCallCheck(this, Patient);

    _this = _super.call(this, firstName, lastName);
    _this.id = id;
    _this.medicalNumber = medicalNumber;
    return _this;
  }

  _createClass(Patient, [{
    key: "chooseTheDoctor",
    value: function chooseTheDoctor(doctor) {
      this.choosenDoctor = doctor;
    }
  }, {
    key: "getScheduledForAnAppointment",
    value: function getScheduledForAnAppointment(appointment) {
      this.appointment = appointment;
    }
  }]);

  return Patient;
}(_Person2.Person);

exports.Patient = Patient;
},{"./Person.js":"medicalInstitution/Person.js"}],"medicalInstitution/SingletonLogger.js":[function(require,module,exports) {
var SingletonLogger = function () {
  function getInstance() {
    var loggerService = new SingletonLogger();
    return loggerService;
  }

  return {
    createDoctor: function createDoctor(name) {
      console.log("[ ".concat(new Date(), " ] created doctor ").concat(name));
      return getInstance();
    },
    ceatePatient: function ceatePatient(name) {
      console.log("[ ".concat(new Date(), " ] created patient ").concat(name));
      return getInstance();
    },
    chooseDoctor: function chooseDoctor(patientName, doctorName) {
      console.log("[ ".concat(new Date(), " ] patient ").concat(patientName, " has choosen doctor ").concat(doctorName));
      return getInstance();
    },
    scheduleAppointment: function scheduleAppointment(appointment) {
      console.log(" Appointment ".concat(appointment.type, ",  for ").concat(appointment.patient.firstName, " has been successfully scheduled by doctor ").concat(appointment.doctor.firstName, " on ").concat(appointment.scheduledDate, " in ").concat(appointment.scheduledTime, " "));
      return getInstance();
    },
    exectuteAppoinment: function exectuteAppoinment(appointment) {
      console.log("[ ".concat(new Date(), " ] appointment has been executed ").concat(appointment.type.execute(), " "));
      return getInstance();
    }
  };
}();
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _Logger = require("./medicalInstitution/Logger.js");

var _Doctor = require("./medicalInstitution/Doctor.js");

var _Patient = require("./medicalInstitution/Patient.js");

var _SingletonLogger = require("./medicalInstitution/SingletonLogger.js");

(function () {
  var date = new Date();
  var doctor = new _Doctor.Doctor("Milan", "Doktorovic", "Gastroenternolog");

  _Logger.Logger.createDoctor(doctor.firstName);

  _SingletonLogger.SingletonLogger.createDoctor(doctor.firstName);

  var patient = new _Patient.Patient("Dragan", "Pacijentic", 1234567891234, 36);

  _Logger.Logger.createPatient(patient.firstName);

  _SingletonLogger.SingletonLogger.createPatient(patient.firstName);

  patient.chooseTheDoctor(doctor);

  _Logger.Logger.chooseDoctor(patient.firstName, doctor.firstName);

  _SingletonLogger.SingletonLogger.chooseDoctor(patient.firstName, doctor.firstName);

  var appointment1 = doctor.makeAnAppointment("blood sugar", doctor, patient, date, date.getTime());

  _Logger.Logger.scheduleAppointment(appointment1);

  _SingletonLogger.SingletonLogger.scheduleAppointment(appointment1);

  var appointment2 = doctor.makeAnAppointment("blood pressure", doctor, patient, date, date.getTime());

  _Logger.Logger.scheduleAppointment(appointment2);

  _SingletonLogger.SingletonLogger.scheduleAppointment(appointment2);

  _Logger.Logger.executeAppointment(appointment1);

  _SingletonLogger.SingletonLogger.executeAppointment(appointment1);

  _Logger.Logger.executeAppointment(appointment2);

  _SingletonLogger.SingletonLogger.executeAppointment(appointment2);
})();
},{"./medicalInstitution/Logger.js":"medicalInstitution/Logger.js","./medicalInstitution/Doctor.js":"medicalInstitution/Doctor.js","./medicalInstitution/Patient.js":"medicalInstitution/Patient.js","./medicalInstitution/SingletonLogger.js":"medicalInstitution/SingletonLogger.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59495" + '/');

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