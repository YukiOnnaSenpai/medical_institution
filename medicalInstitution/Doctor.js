import { Person }   from './Person.js';
import { BloodSugarExam } from './BloodSugarExam.js';
import { BloodPressureExam } from './BloodPressureExam.js';
import { BloodCholesterolExam } from './BloodCholesterolExam.js';


class Doctor extends Person {

	constructor(firstName, lastName, specialty) {
		super(firstName,lastName);
		this.specialty = specialty;
		this.patients = [];
		this.appointments = [];
	}

	addPatient(patient) {
		this.patients.push(patient);
	}

	addAnAppointment(appointment) {
		this.appointments.push(appointment);
	}

	makeAnAppointment(type, doctor, patient, scheduledDate, scheduledTime) {
		const appointment = {};

		switch(type) {
			case 'blood pressure':
				appointment.type = new BloodPressureExam();
				break;
			case 'blood cholesterol':
				appointment.type = new BloodCholesterolExam();
				break;
			case 'blood sugar':
				appointment.type = new BloodSugarExam();
				break;
			default:
				appointment.type = new BloodPressureExam();
				break;
		}

		appointment.doctor = doctor;
		appointment.patient = patient;
		appointment.scheduledDate = scheduledDate;
		appointment.scheduledTime = scheduledTime;

		this.addAnAppointment(appointment);
		patient.getScheduledForAnAppointment(appointment);

		return appointment;

	}

}
export { Doctor }