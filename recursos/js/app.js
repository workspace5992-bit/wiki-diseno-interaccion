// ==================================================
// MENÚ MÓVIL
// ==================================================

const menuButton = document.querySelector(".nav-menu");

const mobileMenu = document.querySelector(".mobile-menu");

const closeButton = document.querySelector(".btn-close");


menuButton.addEventListener("click", () => {

	mobileMenu.classList.add("active");

});


closeButton.addEventListener("click", () => {

	mobileMenu.classList.remove("active");

});


mobileMenu.addEventListener("click", () => {

	mobileMenu.classList.remove("active");

});


document.querySelectorAll(".mobile-menu a, .btn-close")
.forEach(item => {

	item.addEventListener("click", event => {

		event.stopPropagation();

	});

});

/* ==========================================
   PESTAÑAS CASOS DE USO
========================================== */

const tabButtons = document.querySelectorAll('.tab-btn');

const tabContents = document.querySelectorAll('.case-content');

tabButtons.forEach(button => {

	button.addEventListener('click', () => {

		const target = button.dataset.tab;

		tabButtons.forEach(btn => {

			btn.classList.remove('active');

		});

		tabContents.forEach(content => {

			content.classList.remove('active');

		});

		button.classList.add('active');

		document.getElementById(target).classList.add('active');

	});

});


/* ==================================================
   MODAL VIDEOS
================================================== */

const videoCards = document.querySelectorAll(".video-card");

const videoModal = document.getElementById("videoModal");

const youtubeFrame = document.getElementById("youtubeFrame");

const closeVideo = document.getElementById("closeVideo");


videoCards.forEach(card => {

	card.addEventListener("click", () => {

		const videoURL = card.dataset.video;

		youtubeFrame.src =
			videoURL + "?autoplay=1";

		videoModal.classList.add("active");

		document.body.style.overflow = "hidden";
	});

});


function closeVideoModal(){

	youtubeFrame.src = "";

	videoModal.classList.remove("active");

	document.body.style.overflow = "";
}


closeVideo.addEventListener(
	"click",
	closeVideoModal
);


videoModal.addEventListener(
	"click",
	(event) => {

		if(event.target === videoModal){

			closeVideoModal();
		}
	}
);