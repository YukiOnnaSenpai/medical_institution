import { Person }   from './Person.js';

class Doctor extends Person {

	constructor(firstName, lastName, specialty) {
		super(firstName,lastName);
		this.specialty = specialty;
		this.patients = [];
	}

	addPatient(patient) {
		this.patients.push(patient);
	}

}
export { Doctor }