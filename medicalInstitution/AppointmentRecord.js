class AppointmentRecord {

	constructor() {
        if (this.constructor === AppointmentRecord) {
            throw new TypeError('Abstract class cannot be instantiated directly.'); 
        }
    }

	execute() {
		throw new Error('you cannot exeecute abstract class.');

	}

}
export { AppointmentRecord }