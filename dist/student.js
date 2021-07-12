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
    exports.Student = void 0;
    var Student = /** @class */ (function () {
        function Student() {
            this.courseNo = "init";
            this.topicName = "init";
            this.teacher = "init";
            this.time = new Date();
        }
        Student.prototype.update = function (courseNo, topicName, teacher, time) {
            this.courseNo = courseNo;
            this.topicName = topicName;
            this.teacher = teacher;
            this.time = new Date(time);
            this.display();
        };
        Student.prototype.display = function () {
            console.log("Student Display:");
            console.log("Course No: " + this.courseNo);
            console.log("Topic Name: " + this.topicName);
            console.log("Teacher : " + this.teacher);
            console.log("Date: " + this.time.toLocaleString('en-us', { hour12: true }));
        };
        return Student;
    }());
    exports.Student = Student;
});
//# sourceMappingURL=student.js.map