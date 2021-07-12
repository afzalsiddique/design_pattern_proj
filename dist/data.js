(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Data = void 0;
    var Data = /** @class */ (function () {
        function Data() {
            this.course = "init";
            this.topic = "init";
            this.teacher = "init";
            this.timestamp = "init";
            this.observers = [];
        }
        Data.prototype.registerObserver = function (o) {
            this.observers.push(o);
        };
        Data.prototype.removeObserver = function (o) {
            this.observers = this.observers.filter(function (obj) { return obj !== o; });
        };
        Data.prototype.notifyObserver = function () {
            var _this = this;
            this.observers.map(function (o) {
                o.update(_this.course, _this.topic, _this.teacher, _this.timestamp);
            });
        };
        Data.prototype.measurementChanged = function (courseNo, time, topicName, teacher) {
            this.course = courseNo;
            this.timestamp = time;
            this.topic = topicName;
            this.teacher = teacher;
            this.notifyObserver();
        };
        return Data;
    }());
    exports.Data = Data;
});
//# sourceMappingURL=data.js.map