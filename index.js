import { Person }  from './medicalInstitution/Person.js';
import { Doctor }  from './medicalInstitution/Doctor.js';
import { Patient }  from './medicalInstitution/Patient.js';
import { AppointmentRecord } from './medicalInstitution/AppointmentRecord.js';
import { AppointmentSchedule } from './medicalInstitution/AppointmentSchedule.js';


(function() {

	var date = new Date();

	var doctor = new Doctor("Milan", "Doktorovic", "Gastroenternolog");
	console.log(`[ ${date} ] created doctor ${doctor.firstName}`);

	var patient = new Patient("Dragan", "Pacijentic",1234567891234, 36);
	console.log(`[ ${date} ] created patient ${patient.firstName}`);

	patient.chooseTheDoctor(doctor);
	console.log(`[ ${date} ] patient ${patient.firstName} has choosen doctor ${doctor.firstName}`);

	let appointment1 = new AppointmentSchedule("blood sugar", doctor, patient, date, date.getTime());
	console.log(appointment1.schedule(appointment1));
	let appointment2 = new AppointmentSchedule("blood pressure", doctor, patient, date, date.getTime());
	console.log(appointment2.schedule(appointment2));

	let record1 = new AppointmentRecord(appointment1);
	console.log(`[ ${new Date} ] ${record1.returnResults(record1)} appointment 1 has been executed `);
	let record2 = new AppointmentRecord(appointment2);
	console.log(` [ ${new Date} ] ${record2.returnResults(record2)} appointment 2 has been executed `);

})();