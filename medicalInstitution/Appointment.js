import { AppointmentRecord }   from './AppointmentRecord.js';

class Appointment extends AppointmentRecord {

	constructor(doctor, patient, scheduledDate, scheduledTime ) {
		super();
		this.doctor = doctor;
		this.patient = patient;
		this.scheduledDate = scheduledDate;
		this.scheduledTime = scheduledTime;
	}

	execute() {
		throw new TypeError('Cannot execute paretn class.');
	}

}
export { Appointment }