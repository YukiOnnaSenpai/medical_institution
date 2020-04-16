class BloodCholesterolExam{

	constructor() {
		this.lastMealTime = Date.getTime();
		this.cholesterolLevel = Math.floor((Math.random() * 10) + 1);
	}

	execute() {
		return `Results for blood cholesterol are: ${this.cholesterolLevel} , ${this.lastMealTime}.`;
	}

}
export { BloodCholesterolExam }