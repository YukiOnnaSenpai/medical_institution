import { Person }   from './Person.js';

class Doctor extends Person {

	constructor(firstName, lastName, specialty) {
		super(firstName,lastName);
		this._specialty = specialty;
		this._patients = [];
	}

	addPatient(patient) {
		this.patients.push(patient);
	}

}
export { Doctor }