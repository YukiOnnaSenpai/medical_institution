import { BloodSugarExam } from './BloodSugarExam.js';
import { BloodPressureExam } from './BloodPressureExam.js';
import { BloodCholesterolExam } from './BloodCholesterolExam.js';

class AppointmentRecord {

	constructor(schedule) {
		this.schedule = schedule;
	}

	returnResults() {
		var exam;

		switch(this.schedule.type) {
			case 'blood pressure':
				exam = new BloodPressureExam();
				break;
			case 'blood cholesterol':
				exam = new BloodCholesterolExam();
				break;
			case 'blood sugar':
				exam = new BloodSugarExam();
				break;
			default:
				exam = new BloodPressureExam();
				break;
		}
		
		return `Exam ${this.schedule.type} has been done for patient ${this.schedule.patient.firstName}, and ${this.exam.execute()}`;

	}

}
export { AppointmentRecord }