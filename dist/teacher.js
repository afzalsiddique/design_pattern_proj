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
    exports.Teacher = void 0;
    var Teacher = /** @class */ (function () {
        function Teacher() {
            this.courseNo = "";
            this.topicName = "";
            this.teacher = "";
            this.time = new Date();
        }
        Teacher.prototype.update = function (courseNo, topicName, teacher, time) {
            this.courseNo = courseNo;
            this.topicName = topicName;
            this.teacher = teacher;
            this.time = new Date(time);
            this.show();
        };
        Teacher.prototype.show = function () {
            console.log("Teacher Display:");
            console.log("Course No: " + this.courseNo);
            console.log("Topic Name: " + this.topicName);
            console.log("Teacher Name: " + this.teacher);
            console.log("Date: " + this.time.toLocaleString('en-us', { hour12: false }));
        };
        return Teacher;
    }());
    exports.Teacher = Teacher;
});
//# sourceMappingURL=teacher.js.map