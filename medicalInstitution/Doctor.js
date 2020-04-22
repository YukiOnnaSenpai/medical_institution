import { Logger } from './Logger.js';
import { Person }   from './Person.js';
import { singletonLogger } from './/SingletonLogger.js';
import { BloodSugarExam } from './BloodSugarExam.js';
import { BloodPressureExam } from './BloodPressureExam.js';
import { BloodCholesterolExam } from './BloodCholesterolExam.js';


class Doctor extends Person {

	constructor(firstName, lastName, specialty) {
		super(firstName,lastName);
		this.specialty = specialty;
		this.patients = [];
		this.appointments = [];
		Logger.createDoctor(firstName);
		singletonLogger.createDoctor(firstName);
	}

	addPatient(patient) {
		this.patients.push(patient);
	}

	addAnAppointment(appointment) {
		this.appointments.push(appointment);
	}

	makeAnAppointment(type, doctor, patient, scheduledDate, scheduledTime) {
		let appointment = {};

		switch(type) {
			case 'blood pressure':
				appointment = new BloodPressureExam( doctor, patient, scheduledDate, scheduledTime);
				break;
			case 'blood cholesterol':
				appointment = new BloodCholesterolExam( doctor, patient, scheduledDate, scheduledTime);
				break;
			case 'blood sugar':
				appointment = new BloodSugarExam( doctor, patient, scheduledDate, scheduledTime);
				break;
			default:
				appointment = new BloodPressureExam( doctor, patient, scheduledDate, scheduledTime);
				break;
		}

		this.addAnAppointment(appointment);
		patient.setAnAppointment(appointment);

		Logger.scheduleAppointment(appointment);
		singletonLogger.scheduleAppointment(appointment);

		return appointment;

	}

}
export { Doctor }