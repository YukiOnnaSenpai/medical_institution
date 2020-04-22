class SingletonLogger {

		createDoctor(name) {
			console.log( `[ ${new Date()} ] created doctor ${name}` );
		}

		createPatient(name) {
			console.log(`[ ${new Date()} ] created patient ${name}`);
		}

		chooseDoctor(patientName, doctorName) {
			console.log( `[ ${new Date()} ] patient ${patientName} has choosen doctor ${doctorName}` );
		}

		scheduleAppointment(appointment) {
			console.log( ` Appointment ${appointment.type},  for ${appointment.patient.firstName} has been successfully scheduled by doctor ${appointment.doctor.firstName} on ${appointment.scheduledDate} in ${appointment.scheduledTime} ` );
		}

		executeAppointment(appointment) {
			console.log(`[ ${new Date} ] appointment has been executed ${ appointment.execute() } `);
		}

}

const singletonLogger = new SingletonLogger();

export { singletonLogger }
