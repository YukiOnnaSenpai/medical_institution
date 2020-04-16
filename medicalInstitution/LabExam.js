class LabExam {

	constructor(date, time){
		this.date = date;
		this.time = time;
	}

	bloodPressure() {
		let upperValue = Math.floor((Math.random() * 200) + 1);
		let lowerValue = Math.floor((Math.random() * 100) + 1);
		let pulse = Math.floor((Math.random() * 150) + 1);
	}

	bloodSugar() {
		let sugarLevel = Math.floor((Math.random() * 10) + 1);
		let lastMealTime = Date.getTime();
	}

	bloodCholesterol() {
		let cholesterolLevel = Math.floor((Math.random() * 10) + 1);
		let lastMealTime = Date.getTime();

	}
}