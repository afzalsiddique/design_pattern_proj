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
    exports.StudentDisplay = void 0;
    var StudentDisplay = /** @class */ (function () {
        function StudentDisplay() {
            this.course = "init";
            this.topic = "init";
            this.teacher = "init";
            this.timestamp = new Date();
        }
        StudentDisplay.prototype.update = function (courseNo, topicName, teacher, time) {
            this.course = courseNo;
            this.topic = topicName;
            this.teacher = teacher;
            this.timestamp = new Date(time);
            this.display();
        };
        StudentDisplay.prototype.display = function () {
            console.log("Student Display:");
            console.log("Course No: " + this.course);
            console.log("Topic Name: " + this.topic);
            console.log("Teacher : " + this.teacher);
            console.log("Date: " + this.timestamp.toLocaleString('en-us', { hour12: true }));
        };
        return StudentDisplay;
    }());
    exports.StudentDisplay = StudentDisplay;
});
//# sourceMappingURL=studentDisplay.js.map