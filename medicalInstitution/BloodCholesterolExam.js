import { AppointmentRecord }   from './AppointmentRecord.js';

class BloodCholesterolExam extends AppointmentRecord {

	constructor() {
		super();
		var date = new Date();
		this.lastMealTime = date.getTime();
		this.cholesterolLevel = Math.floor((Math.random() * 10) + 1);
	}

	execute() {
		return `Results for blood cholesterol are: ${this.cholesterolLevel} , ${this.lastMealTime}.`;
	}

}
export { BloodCholesterolExam }