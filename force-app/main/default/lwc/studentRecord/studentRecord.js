import { LightningElement, track, api } from 'lwc';

export default class StudentRecord extends LightningElement {
    @api studentdata;
    @track student = {
        name: 'Default Name',
        totalMarks: '',
        grade: '',
        isPassed: false
    };
    grades = ['E', 'D', 'C', 'B', 'A', 'S', 'S+'];

    connectedCallback() {
        this.student.name = this.studentdata.name;
        this.student.totalMarks = this.studentdata.totalMarks;
        this.updateStudentData();
    }

    updateStudentData() {
        if (this.student.totalMarks < 35) {
            this.student.grade = 'F';
            this.student.isPassed = false;
        } else {
            //passing condition
            this.student.isPassed = true;
            this.student.grade = this.grades[Math.floor(this.student.totalMarks / 10) - 4];
        }
        this.dispatchEvent(
            new CustomEvent('studentpassed', { detail: { studentData: {
                totalMarks: this.student.totalMarks,
                grade: this.student.grade,
                isPassed: this.student.isPassed,
                id: this.studentdata.id
            }} }) //this is the event that is fired from the child component
        );
    }

    handleTotalMarksChange(event) {
        this.student.totalMarks = Number(event.target.value);
        this.updateStudentData();
    }
}
