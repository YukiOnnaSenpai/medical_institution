import { Doctor }  from './medicalInstitution/Doctor.js';
import { Patient }  from './medicalInstitution/Patient.js';


(function() {

	let date = new Date();

	let doctor = new Doctor("Milan", "Doktorovic", "Gastroenternolog");
	
	let patient = new Patient("Dragan", "Pacijentic",1234567891234, 36);

	patient.chooseTheDoctor(doctor);

	let appointment1 = doctor.makeAnAppointment("blood sugar", doctor, patient, date, date.getTime());
	let appointment2 = doctor.makeAnAppointment("blood pressure", doctor, patient, date, date.getTime());

	patient.goToAppointment(appointment1);
	patient.goToAppointment(appointment2);
	
})();