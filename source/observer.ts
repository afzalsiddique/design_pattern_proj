export interface Observer {
    update(courseNo: string, topicName: string, teacher: string, time: String): void
}