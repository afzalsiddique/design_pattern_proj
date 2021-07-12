import {Observer} from "./observer";

export class StudentDisplay implements Observer {
    course: string="init"
    topic: string="init"
    teacher: string="init"
    timestamp: Date= new Date();
    

    update(courseNo: string, topicName: string, teacher: string, time: string): void {
        this.course = courseNo
        this.topic = topicName
        this.teacher = teacher
        this.timestamp = new Date(time)
        this.display()
 
    }

    display(): void {
        console.log("Student Display:")
        console.log("Course No: " + this.course);
        console.log("Topic Name: " + this.topic);
        console.log("Teacher : " + this.teacher);
        console.log("Date: " + this.timestamp.toLocaleString('en-us',{hour12: true}));
    }
}