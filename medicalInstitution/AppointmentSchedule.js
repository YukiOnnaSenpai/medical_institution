class ScheduledAppointment {

	constructor(doctor, patient, type, scheduledDate, scheduledTime) {
		this.type = type;
		this.doctor = doctor;
		this.patient = patient;
		this.scheduledDate = scheduledDate;
		this.scheduledTime = scheduledTime;
	}

	schedule() {
		return `Appointment ${this.type},  for ${this.patient.firstName} has been successfully scheduled by doctor ${this.doctor.firstName} on ${this.scheduledDate} in ${this.scheduledTime}`;
	}
}