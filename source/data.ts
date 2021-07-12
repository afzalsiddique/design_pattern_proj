import {Observer} from "./observer";
import {Subject} from "./subject";

export class Data implements Subject {
 
    course : string="init"
    topic: string="init"
    teacher : string="init"
    timestamp: string="init"
 
    public observers: Array<Observer> = []
 
    registerObserver(o: Observer): void {
        this.observers.push(o)
    }
    removeObserver(o: Observer): void {
        this.observers = this.observers.filter(obj => obj !== o)
    }
    notifyObserver(): void {
        this.observers.map(o => {
            o.update(this.course, this.topic, this.teacher, this.timestamp)
        })
    }
 
    measurementChanged(courseNo: string, time: string, topicName: string, teacher: string): void {
        this.course = courseNo
        this.timestamp = time
        this.topic = topicName
        this.teacher = teacher
        this.notifyObserver()
    }
 
 
}