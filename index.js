import { Person }  from './medicalInstitution/Person.js';
import { Doctor }  from './medicalInstitution/Doctor.js';
import { Patient }  from './medicalInstitution/Patient.js';
import { AppointmentRecord } from './medicalInstitution/AppointmentRecord.js';
import { AppointmentSchedule } from './medicalInstitution/AppointmentSchedule.js';


(function() {

	var date = new Date();

	var milan = new Doctor("Milan", "Doktorovic", "Gastroenternolog");
	console.log(`[ ${date} ] kreiran doktor Milan`);

	var dragan = new Patient("Dragan", "Pacijentic",1234567891234, 36);
	console.log(`[ ${date} ] kreiran pacijent Dragan`);

	dragan.chooseTheDoctor(milan);
	console.log(`[ ${date} ] pacijent izabrao doktora`);

	let appointment1 = new AppointmentSchedule("blood sugar", milan, dragan, date, date.getTime());
	console.log(appointment1.schedule());
	let appointment2 = new AppointmentSchedule("blood pressure", milan, dragan, date, date.getTime());
	console.log(appointment2.schedule());

	let record1 = new AppointmentRecord(appointment1);
	console.log(`[ ${new Date} ] ${record1.returnResults()} pregled 1 izvrsen `);
	let record2 = new AppointmentRecord(appointment2);
	console.log(` [ ${new Date} ] ${record2.returnResults()} pregled 2 izvrsen `);

})();