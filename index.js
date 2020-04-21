import { Logger } from './medicalInstitution/Logger.js';
import { Doctor }  from './medicalInstitution/Doctor.js';
import { Patient }  from './medicalInstitution/Patient.js';
import { SingletonLogger } from './medicalInstitution/SingletonLogger.js';


(function() {

	let date = new Date();

	let doctor = new Doctor("Milan", "Doktorovic", "Gastroenternolog");
	Logger.createDoctor(doctor.firstName);
	SingletonLogger.createDoctor(doctor.firstName);

	let patient = new Patient("Dragan", "Pacijentic",1234567891234, 36);
	Logger.createPatient(patient.firstName);
	SingletonLogger.createPatient(patient.firstName);

	patient.chooseTheDoctor(doctor);
	Logger.chooseDoctor(patient.firstName, doctor.firstName);
	SingletonLogger.chooseDoctor(patient.firstName, doctor.firstName);

	let appointment1 = doctor.makeAnAppointment("blood sugar", doctor, patient, date, date.getTime());
	Logger.scheduleAppointment(appointment1);
	SingletonLogger.scheduleAppointment(appointment1);
	let appointment2 = doctor.makeAnAppointment("blood pressure", doctor, patient, date, date.getTime());
	Logger.scheduleAppointment(appointment2);
	SingletonLogger.scheduleAppointment(appointment2);

	Logger.executeAppointment(appointment1);
	SingletonLogger.executeAppointment(appointment1);
	Logger.executeAppointment(appointment2);
	SingletonLogger.executeAppointment(appointment2);
	
})();