class Appointment {

	constructor(doctor, patient, scheduledDate, scheduledTime ) {
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