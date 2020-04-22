import { Appointment }   from './Appointment.js';

class BloodCholesterolExam extends Appointment {

	constructor(doctor, patient, scheduledDate, scheduledTime) {
		super(doctor, patient, scheduledDate, scheduledTime);
		var date = new Date();
		this.lastMealTime = date.getTime();
		this.cholesterolLevel = Math.floor((Math.random() * 10) + 1);
	}

	execute() {
		return `Results for blood cholesterol are: ${this.cholesterolLevel} , ${this.lastMealTime}.`;
	}

}
export { BloodCholesterolExam }