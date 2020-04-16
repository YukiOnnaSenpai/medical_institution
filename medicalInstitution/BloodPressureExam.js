class BloodPressureExam{

	constructor() {
		this.pulse = Math.floor((Math.random() * 150) + 1);
		this.upperValue = Math.floor((Math.random() * 200) + 1);
		this.lowerValue = Math.floor((Math.random() * 100) + 1);
	}

	exam() {
		return `Results for blood pressure are: ${this.upperValue} , ${this.lowerValue}, ${this.pulse}.`;
	}

}