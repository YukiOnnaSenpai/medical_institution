class BloodSugarExam{

	constructor() {
		this.lastMealTime = Date.getTime();
		this.sugarLevel = Math.floor((Math.random() * 10) + 1);
	}

	exam() {
		return `Results for blood sugar are: ${this.sugarLevel} , ${this.lastMealTime}.`;
	}

}