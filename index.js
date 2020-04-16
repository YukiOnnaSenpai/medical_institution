import { Person }  from './medicalInstitution/Person.js';
import { Doctor }  from './medicalInstitution/Doctor.js';
import { Patient }  from './medicalInstitution/Patient.js';
import { AppointmentRecord } from './medicalInstitution/AppointmentRecord.js';
import { AppointmentSchedule } from './medicalInstitution/AppointmentSchedule.js';


(function() {

	var milan = new Doctor("Milan", "Doktorovic", "Gastroenternolog");
	console.log(`[ ${new Date} ] kreiran doktor Milan`);

	var dragan = new Patient("Dragan", "Pacijentic",1234567891234, 36);
	console.log(`[ ${new Date} ] kreiran pacijent Dragan`);

	dragan.chooseTheDoctor(milan);
	console.log(`[ ${new Date} ] pacijent izabrao doktora`);
	milan.addPatient(dragan);

	let appointment1 = new AppointmentSchedule("blood sugar", milan, dragan, new Date, new Date.now());
	console.log(appointment1.schedule());
	let appointment2 = new AppointmentSchedule("blood pressure", milan, dragan, new Date, new Date.now());
	console.log(appointment2.schedule());

	let record1 = new AppointmentRecord(appointment1);
	console.log(`[ ${new Date} ] ${record1.returnResults()} pregled 1 izvrsen `);
	let record2 = new AppointmentRecord(appointment2);
	console.log(` [ ${new Date} ] ${record2.returnResults()} pregled 2 izvrsen `);

})();