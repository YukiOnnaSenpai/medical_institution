var SingletonLogger = ( function () {

	function getInstance() {
		const loggerService = new SingletonLogger();
		return loggerService;
	}

	return {
		createDoctor: function(name) {
			console.log( `[ ${new Date()} ] created doctor ${name}` );
			return getInstance();
		},
		ceatePatient: function(name) {
			console.log(`[ ${new Date()} ] created patient ${name}`);
			return getInstance();
		},
		chooseDoctor: function(patientName, doctorName) {
			console.log( `[ ${new Date()} ] patient ${patientName} has choosen doctor ${doctorName}` );
			return getInstance();
		},
		scheduleAppointment: function(appointment) {
			console.log( ` Appointment ${appointment.type},  for ${appointment.patient.firstName} has been successfully scheduled by doctor ${appointment.doctor.firstName} on ${appointment.scheduledDate} in ${appointment.scheduledTime} ` );
			return getInstance();
		},
		exectuteAppoinment: function(appointment) {
			console.log(`[ ${new Date} ] appointment has been executed ${ appointment.type.execute() } `);
			return getInstance();
		}
	};

})();
