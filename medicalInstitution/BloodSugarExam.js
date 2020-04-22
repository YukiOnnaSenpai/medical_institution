import { Appointment }   from './Appointment.js';

class BloodSugarExam extends Appointment {

	constructor(doctor, patient, scheduledDate, scheduledTime) {
		super(doctor, patient, scheduledDate, scheduledTime);
		var date = new Date();
		this.lastMealTime = date.getTime();
		this.sugarLevel = Math.floor((Math.random() * 10) + 1);
	}

	execute() {
		return `Results for blood sugar are: ${this.sugarLevel} , ${this.lastMealTime}.`;
	}

}
export { BloodSugarExam }