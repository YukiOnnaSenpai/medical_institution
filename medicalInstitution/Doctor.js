class Doctor {
	
	constructor(firstName, lastName, specialty) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.specialty = specialty;
		this.patients = [];
	}

	addPatient(patient) {
		this.patients.push(patient);
	}
	//promis za kad ga izabere pacijent
}