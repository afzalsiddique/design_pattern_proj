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
    exports.TeacherDisplay = void 0;
    var TeacherDisplay = /** @class */ (function () {
        function TeacherDisplay() {
            this.courseNo = "";
            this.topicName = "";
            this.teacher = "";
            this.time = new Date();
        }
        TeacherDisplay.prototype.update = function (courseNo, topicName, teacher, time) {
            this.courseNo = courseNo;
            this.topicName = topicName;
            this.teacher = teacher;
            this.time = new Date(time);
            this.show();
        };
        TeacherDisplay.prototype.show = function () {
            console.log("Teacher Display:");
            console.log("Course No: " + this.courseNo);
            console.log("Topic Name: " + this.topicName);
            console.log("Teacher Name: " + this.teacher);
            console.log("Date: " + this.time.toLocaleString('en-us', { hour12: false }));
        };
        return TeacherDisplay;
    }());
    exports.TeacherDisplay = TeacherDisplay;
});
//# sourceMappingURL=teacherDisplay.js.map