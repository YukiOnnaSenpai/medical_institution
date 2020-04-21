import { AppointmentRecord }   from './AppointmentRecord.js';

class BloodSugarExam extends AppointmentRecord {

	constructor() {
		super();
		var date = new Date();
		this.lastMealTime = date.getTime();
		this.sugarLevel = Math.floor((Math.random() * 10) + 1);
	}

	execute() {
		return `Results for blood sugar are: ${this.sugarLevel} , ${this.lastMealTime}.`;
	}

}
export { BloodSugarExam }