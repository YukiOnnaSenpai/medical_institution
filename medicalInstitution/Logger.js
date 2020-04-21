class Logger {

	static createDoctor(name) {
		console.log( `[ ${new Date()} ] created doctor ${name}` ); 
	}

	static createPatient(name) { 
		console.log(`[ ${new Date()} ] created patient ${name}`);
	}

	static chooseDoctor(patientName, doctorName) {
		console.log( `[ ${new Date()} ] patient ${patientName} has choosen doctor ${doctorName}` );
	}

	static scheduleAppointment(appointment) {
		console.log( ` Appointment ${appointment.type},  for ${appointment.patient.firstName} has been successfully scheduled by doctor ${appointment.doctor.firstName} on ${appointment.scheduledDate} in ${appointment.scheduledTime} ` );
	}

	static executeAppointment(appointment) {
		console.log(`[ ${new Date} ] appointment has been executed ${ appointment.type.execute() } `);
	}

}
export { Logger }