import { Logger } from './Logger.js';
import { Person } from './Person.js';
import { singletonLogger } from './SingletonLogger.js';

class Patient extends Person{

	constructor(firstName, lastName, id, medicalNumber) {
		super(firstName,lastName);
		this.id = id;
		this.medicalNumber = medicalNumber;
		this.appointment = {};
		Logger.createPatient(firstName);
		singletonLogger.createPatient(firstName);
	}

	chooseTheDoctor(doctor) {
		this.choosenDoctor = doctor;
		Logger.chooseDoctor(this.firstName, doctor.firstName);
		singletonLogger.chooseDoctor(this.firstName, doctor.firstName);
	}

	setAnAppointment(appointment) {
		this.appointment = appointment;
	}

	goToAppointment(appointment) {
		appointment.execute();
		Logger.executeAppointment(appointment);
		singletonLogger.executeAppointment(appointment);
	}

}
export { Patient }