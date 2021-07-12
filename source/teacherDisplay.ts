import {Observer} from "./observer";

export class TeacherDisplay implements Observer {
    courseNo: string=""
    topicName: string=""
    teacher: string=""
    time: Date=new Date();
 
    update(courseNo: string, topicName: string, teacher: string, time: string): void {
        this.courseNo = courseNo
        this.topicName = topicName
        this.teacher = teacher
        this.time =new Date(time)
        this.show()
    }
     show(): void {
        console.log("Teacher Display:")
        console.log("Course No: " + this.courseNo);
        console.log("Topic Name: " + this.topicName);
        console.log("Teacher Name: " + this.teacher);
        console.log("Date: " + this.time.toLocaleString('en-us',{hour12: false}));
    }
}