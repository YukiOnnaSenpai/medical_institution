import { Appointment }   from './Appointment.js';

class BloodPressureExam extends Appointment {

	constructor( doctor, patient, scheduledDate, scheduledTime ) {
		super( doctor, patient, scheduledDate, scheduledTime );
		this.pulse = Math.floor((Math.random() * 150) + 1);
		this.upperValue = Math.floor((Math.random() * 200) + 1);
		this.lowerValue = Math.floor((Math.random() * 100) + 1);
	}

	execute() {
		return `Results for blood pressure are: ${this.upperValue} , ${this.lowerValue}, ${this.pulse}.`;
	}

}
export { BloodPressureExam }