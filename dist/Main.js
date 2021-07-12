(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./studentDisplay", "./teacherDisplay", "./data"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var studentDisplay_1 = require("./studentDisplay");
    var teacherDisplay_1 = require("./teacherDisplay");
    var data_1 = require("./data");
    var data = new data_1.Data();
    var s1 = new studentDisplay_1.StudentDisplay();
    data.registerObserver(s1);
    data.measurementChanged('SWE-4501', '10.07.2021 23:56', 'Observer Pattern', 'A');
    var t1 = new teacherDisplay_1.TeacherDisplay();
    data.registerObserver(t1);
    data.measurementChanged('SWE-4501', '10.07.2021 23:45', 'Observer Pattern', 'B');
    var t2 = new teacherDisplay_1.TeacherDisplay();
    data.registerObserver(t2);
    data.measurementChanged('SWE-4502', '11.07.2021 15:45', 'Observer Pattern', 'C');
    data.removeObserver(s1);
});
//# sourceMappingURL=Main.js.map