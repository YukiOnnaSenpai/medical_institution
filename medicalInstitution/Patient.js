class Patient{

	constructor(firstName, lastName, ID, medicalNumber) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.ID = ID;
		this.medicalNumber = medicalNumber;
	}

	chooseTheDoctor(doctor) {
		this.choosenDoctor = doctor;
	}

}