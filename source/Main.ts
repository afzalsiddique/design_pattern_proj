import {StudentDisplay} from "./studentDisplay";
import {TeacherDisplay} from "./teacherDisplay";
import {Data} from "./data";

let data = new Data();
let s1 = new StudentDisplay();
data.registerObserver(s1)
data.measurementChanged('SWE-4501', '10.07.2021 23:56', 'Observer Pattern', 'A')

let t1= new TeacherDisplay();
data.registerObserver(t1) 
data.measurementChanged('SWE-4501','10.07.2021 23:45', 'Observer Pattern', 'B')

let t2= new TeacherDisplay();
data.registerObserver(t2)
data.measurementChanged('SWE-4502','11.07.2021 15:45', 'Observer Pattern', 'C')
data.removeObserver(s1)
