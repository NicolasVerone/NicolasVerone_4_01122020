


const init = () => {
	const burgerIcon = document.getElementById("burgericon");
	const closeModalBtn = document.getElementById("close");

	burgerIcon.addEventListener("click", () => {
		editNav();
	});

	closeModalBtn.addEventListener("click", () => {
		closeModal();

	});
};


const editNav = () => {
	let changeNavStyle = document.getElementById("myTopnav");
	if (changeNavStyle.className === "topnav") {
		changeNavStyle.className += " responsive";
	} else {
		changeNavStyle.className = "topnav";
	}
};


const closeModal = () => {
	let modalbg = document.querySelector(".bground");
	modalbg.style.display = "none";
};

init();
















