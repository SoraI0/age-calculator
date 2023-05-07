let btn = document.querySelector('#btn');

let outputYear = document.querySelector('#year-output'),
	outputMonth = document.querySelector('#month-output'),
	outputDay = document.querySelector('#day-output');

const yearError = document.querySelector('#year-error');
const monthError = document.querySelector('#month-error');
const dayError = document.querySelector('#day-error');




btn.addEventListener('click', function () {
	let year = document.querySelector('#year-input').value;
	let month = document.querySelector('#month-input').value;
	let day = document.querySelector('#day-input').value;
	let isValid = true;

	const date = new Date(year, month, day);
	const now = new Date();
	function daysInMonth(month, year) {
		return new Date(year, month, 0).getDate();
	}
	if (!day) {
		dayError.innerHTML = 'This field is required';
		isValid = false;
		document.querySelector('#day-input').style.borderColor = "hsl(0, 100%, 67%)";
		document.querySelector('.data-input__day').style.color = "hsl(0, 100%, 67%)";

	}
	if (!month) {
		monthError.innerHTML = 'This field is required';
		isValid = false;
		document.querySelector('#month-input').style.borderColor = "hsl(0, 100%, 67%)";
		document.querySelector('.data-input__month').style.color = "hsl(0, 100%, 67%)";
	}
	if (!year) {
		yearError.innerHTML = 'This field is required';
		isValid = false;
		document.querySelector('#year-input').style.borderColor = "hsl(0, 100%, 67%)";
		document.querySelector('.data-input__year').style.color = "hsl(0, 100%, 67%)";
	}
	if (date > now) {
		yearError.innerHTML = 'Must be in the past'
		document.querySelector('#year-input').style.borderColor = "hsl(0, 100%, 67%)";
		document.querySelector('.data-input__year').style.color = "hsl(0, 100%, 67%)";
		isValid = false;
	}
	if (month > 12) {
		monthError.innerHTML = 'Must be a valid month'
		document.querySelector('#month-input').style.borderColor = "hsl(0, 100%, 67%)";
		document.querySelector('.data-input__month').style.color = "hsl(0, 100%, 67%)";
		isValid = false;
	}
	if (daysInMonth(month, year) < +day) {
		dayError.innerHTML = 'Must be a valid day'
		document.querySelector('#day-input').style.borderColor = "hsl(0, 100%, 67%)";
		document.querySelector('.data-input__day').style.color = "hsl(0, 100%, 67%)";
		isValid = false;
	}
	if (isValid) {
		dayError.innerHTML = '';
		monthError.innerHTML = '';
		yearError.innerHTML = '';
		document.querySelector('#day-input').style.borderColor = "";
		document.querySelector('.data-input__day').style.color = "";
		document.querySelector('#month-input').style.borderColor = "";
		document.querySelector('.data-input__month').style.color = "";
		document.querySelector('#year-input').style.borderColor = "";
		document.querySelector('.data-input__year').style.color = "";
		let differenceInMilliseconds = now - date;
		let differenceInDays = differenceInMilliseconds / 1000 / 3600 / 24;

		let differenceInMonths = (now.getMonth() + 12 * now.getFullYear()) - (date.getMonth() + 12 * date.getFullYear());
		let differenceInYears = differenceInMonths / 12;
		differenceInMonths = differenceInMonths % 12;
		differenceInDays = Math.floor(differenceInDays % 30.4375);

		outputYear.innerHTML = Math.floor(differenceInYears);
		outputMonth.innerHTML = differenceInMonths;
		outputDay.innerHTML = differenceInDays;
	}

}
);







