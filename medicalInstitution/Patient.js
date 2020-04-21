import { Person } from './Person.js';

class Patient extends Person{

	constructor(firstName, lastName, id, medicalNumber) {
		super(firstName,lastName);
		this.id = id;
		this.medicalNumber = medicalNumber;
	}

	chooseTheDoctor(doctor) {
		this.choosenDoctor = doctor;
	}

	getScheduledForAnAppointment(appointment) {
		this.appointment = appointment;
	}

}
export { Patient }