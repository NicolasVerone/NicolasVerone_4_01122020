


const init = () => {
	const burgerIcon = document.getElementById("burgericon");
	const closeModalBtn = document.getElementById("close");
	const modalBtn = document.querySelectorAll(".modal-btn");

	burgerIcon.addEventListener("click", () => {
		editNav();
	});

	closeModalBtn.addEventListener("click", () => {
		closeModal();

	});
	modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


};


const editNav = () => {
	let changeNavStyle = document.getElementById("myTopnav");
	if (changeNavStyle.className === "topnav") {
		changeNavStyle.className += " responsive";
	} else {
		changeNavStyle.className = "topnav";
	}
};

const launchModal = () => {
	let modalbg = document.querySelector(".bground");
	modalbg.style.display = "block";
};

const closeModal = () => {
	let modalbg = document.querySelector(".bground");
	modalbg.style.display = "none";
};

init();
















