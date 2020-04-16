class AppointmentSchedule {

	constructor(type, doctor, patient, scheduledDate, scheduledTime) {
		this.type = type;
		this.doctor = doctor;
		this.patient = patient;
		this.scheduledDate = scheduledDate;
		this.scheduledTime = scheduledTime;
	}

	schedule(app) {
		return ` Appointment ${this.type},  for ${this.patient.firstName} has been successfully scheduled by doctor ${this.doctor.firstName} on ${this.scheduledDate} in ${this.scheduledTime} `;
	}
}
export { AppointmentSchedule }