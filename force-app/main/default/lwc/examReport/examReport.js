import { LightningElement } from 'lwc';

export default class ExamReport extends LightningElement {
    studentList = [
        {
            name: 'John',
            totalMarks: 45,
            id: 101,
            grade: '',
            isPassed: false
        },
        {
            name: 'Jane',
            totalMarks: 25,
            id: 102,
            grade: '',
            isPassed: false
        },
        {
            name: 'Jack',
            totalMarks: 95,
            id: 103,
            grade: '',
            isPassed: false
        },
        {
            name: 'Jill',
            totalMarks: 75,
            id: 104,
            grade: '',
            isPassed: false
        }
    ];
    passingPercentage = 0;
    totalStudents = this.studentList.length;
    passedStudents = 0;

    updatePassingPercentage(event) {
        const studentData = event.detail.studentData;
        console.log('checking studentData: ' + studentData.id);
        const curStudent = this.studentList.filter((student) => {
            return student.id === studentData.id;
        })[0];
        curStudent.totalMarks = studentData.totalMarks;
        curStudent.grade = studentData.grade;
        curStudent.isPassed = studentData.isPassed;
        this.passedStudents = this.studentList.filter((student) => {
            return student.isPassed;
        }).length;
        this.passingPercentage = Number(Math.round((this.passedStudents / this.totalStudents) * 100));
        console.log('checking passing percentage: ' + this.passingPercentage);
    }
}
