import { AppointmentRecord }   from './AppointmentRecord.js';

class BloodPressureExam extends AppointmentRecord {

	constructor() {
		super();
		this.pulse = Math.floor((Math.random() * 150) + 1);
		this.upperValue = Math.floor((Math.random() * 200) + 1);
		this.lowerValue = Math.floor((Math.random() * 100) + 1);
	}

	execute() {
		return `Results for blood pressure are: ${this.upperValue} , ${this.lowerValue}, ${this.pulse}.`;
	}

}
export { BloodPressureExam }