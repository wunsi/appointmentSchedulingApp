const form = document.getElementById("appointmentForm");
const submitButton = document.getElementById("submitButton");
const fName = document.getElementById("firstName");
const fNameError = document.getElementById("firstNameError");
const lName = document.getElementById("lastName");
const lNameError = document.getElementById("lastNameError");
const phoneNumber = document.getElementById("phoneNumber");
const phoneNumberError = document.getElementById("phoneNumberError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const address = document.getElementById("address");
const addressError = document.getElementById("addressError");
const appointmentDate = document.getElementById("date");
const dateError = document.getElementById("dateError");
const appointmentTime = document.getElementById("time");
const timeError = document.getElementById("timeError");
const purpose = document.getElementById("purpose");
const purposeError = document.getElementById("purposeError");
const mySelect = document.getElementById("mySelect");
const counsError = document.getElementById("counsError");
const careerCouns = document.getElementById("careerCouns");
const growthCouns = document.getElementById("growthCouns");
const profChangeCouns = document.getElementById("profChangeCouns");
const couns = document.querySelectorAll(".couns");
const notes = document.getElementById("textarea");
const feedback = document.getElementById("feedback");

purpose.addEventListener("change", function () {
  mySelect.style.display = "none";
  counsError.style.display = "none";
  
	if (purpose.value === "Career") {
    careerCouns.style.display = "block";
		growthCouns.style.display = "none";
		profChangeCouns.style.display = "none";
	} else if (purpose.value === "Growth") {
		growthCouns.style.display = "block";
		careerCouns.style.display = "none";
		profChangeCouns.style.display = "none";
	} else if (purpose.value === "Change Of Profession") {
		profChangeCouns.style.display = "block";
		growthCouns.style.display = "none";
		careerCouns.style.display = "none";
	} else {
		mySelect.style.display = "block";
    counsError.style.display = "block"
		careerCouns.style.display = "none";
		growthCouns.style.display = "none";
		profChangeCouns.style.display = "none";
	}
});

form.addEventListener("submit", function (event) {
	event.preventDefault();

	formValidation();

	checkAvailability();

	let allChecksPassed = true;

	if (
		fNameError.innerHTML ||
		lNameError.innerHTML ||
		phoneNumberError.innerHTML ||
		emailError.innerHTML ||
		addressError.innerHTML ||
		dateError.innerHTML ||
		timeError.innerHTML ||
		purposeError.innerHTML ||
		counsError.innerHTML
	) {
		allChecksPassed = false;
	}

	if (allChecksPassed) {
		feedback.innerHTML = `Appointment Schedule: <br>
      Name: ${lName.value} ${fName.value} <br>
      Phone: ${phoneNumber.value} <br>
      Email: ${email.value} <br>
      Address: ${address.value} <br>
      Appointment Date: ${appointmentDate.value} <br>
      Appointment Time: ${appointmentTime.value} <br>
      Appointment Purpose: ${purpose.value} <br>
      Session Cost: N5000`;


		feedback.style.textAlign = "justify";
    feedback.style.fontSize = "1rem";


		let successMessage = document.createElement("p");

		successMessage.style.color = "green";
    successMessage.style.fontSize = "1.5rem";
    successMessage.style.paddingTop = "1rem";

		successMessage.textContent = "Appointment scheduled successfully!";
		feedback.appendChild(successMessage);
	}
});

function formValidation() {
	if (fName.value == "") {
		fNameError.innerHTML = "Please fill out this field";
		fNameError.style.color = "red";
    fNameError.style.fontSize = ".8rem";
	} else {
		fNameError.innerHTML = "";
	}

	if (lName.value == "") {
		lNameError.innerHTML = "Please fill out this field";
		lNameError.style.color = "red";
    lNameError.style.fontSize = ".8rem";
	} else {
		lNameError.innerHTML = "";
	}

	if (phoneNumber.value == "") {
		phoneNumberError.innerHTML = "Please fill out this field";
		phoneNumberError.style.color = "red";
    phoneNumberError.style.fontSize = ".8rem";
	} else {
		phoneNumberError.innerHTML = "";
	}

	if (email.value == "") {
		emailError.innerHTML = "Please fill out this field";
		emailError.style.color = "red";
    emailError.style.fontSize = ".8rem";
	} else {
		emailError.innerHTML = "";
	}

	if (address.value == "") {
		addressError.innerHTML = "Please fill out this field";
		addressError.style.color = "red";
    addressError.style.fontSize = ".8rem";
	} else {
		addressError.innerHTML = "";
	}

	if (appointmentDate.value == "") {
		dateError.innerHTML = "Please fill out this field";
		dateError.style.color = "red";
	} else {
		dateError.innerHTML = "";
	}

	if (appointmentTime.value == "") {
		timeError.innerHTML = "Please fill out this field";
		timeError.style.color = "red";
	} else {
		timeError.innerHTML = "";
	}

	if (purpose.value === "") {
		purposeError.innerHTML = "Please choose an option";
		purposeError.style.color = "red";
    purposeError.style.fontSize = ".8rem";
	} else {
		purposeError.innerHTML = "";
	}

	if (purpose.value === "") {
		purposeError.innerHTML = "Please choose an option";
		purposeError.style.color = "red";
	} else {
		purposeError.innerHTML = "";
	}

	if (purpose.value === "") {
		purposeError.innerHTML = "Please choose an option";
		purposeError.style.color = "red";

		counsError.innerHTML = "Please choose an option";
		counsError.style.color = "red";
    counsError.style.fontSize = ".8rem";
	} else {
		purposeError.innerHTML = "";
	}
}

const availableSlots = [
	{ date: "2023-08-21", time: "10:00" },
	{ date: "2023-08-23", time: "09:00" },
	{ date: "2023-08-25", time: "12:00" },
	{ date: "2023-08-30", time: "13:00" },
	{ date: "2023-08-31", time: "16:00" },
	{ date: "2023-09-04", time: "11:00" },
	{ date: "2023-09-05", time: "14:00" },
	{ date: "2023-09-08", time: "08:00" },
	{ date: "2023-09-10", time: "12:00" },
	{ date: "2023-09-15", time: "10:00" },
	{ date: "2023-09-16", time: "15:00" },
	{ date: "2023-09-18", time: "12:00" },
	{ date: "2023-09-20", time: "08:00" },
	{ date: "2023-09-25", time: "10:00" },
	{ date: "2023-09-28", time: "11:00" },
	{ date: "2023-09-30", time: "01:00" },
	{ date: "2023-10-05", time: "12:00" },
	{ date: "2023-10-09", time: "14:00" },
	{ date: "2023-10-15", time: "09:00" },
];

function checkAvailability() {
	const appointmentDateInput = document.getElementById("date");
	const appointmentTimeInput = document.getElementById("time");
	const appointmentDateval = appointmentDateInput.value;
	const appointmentTimeval = appointmentTimeInput.value;

	let slotFound = false;

	for (let i = 0; i < availableSlots.length; i++) {
		const availableSlot = availableSlots[i];
		if (
			availableSlot.date === appointmentDateval &&
			availableSlot.time === appointmentTimeval
		) {
			slotFound = true;
			break;
		}
	}

	const dateError = document.getElementById("dateError");
	const timeError = document.getElementById("timeError");

	if (slotFound) {
		dateError.innerHTML = "";
		timeError.innerHTML = "";
	} else {
		appointmentDateInput.value = "";
		appointmentTimeInput.value = "";
		dateError.innerHTML = "This slot is not available";
		dateError.style.color = "red";
    dateError.style.fontSize = ".8rem";
		timeError.innerHTML = "This slot is not available";
		timeError.style.color = "red";
    timeError.style.fontSize = ".8rem";
	}
}
