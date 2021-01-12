const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	burger.addEventListener('click', ()=>{
		// Toggle Nav
		nav.classList.toggle('nav-active');

		// Animer Links
		navLinks.forEach((link, testnav) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${testnav / 7 + 0.3}s`;
			}
		});
		// Burger Animasjon
		burger.classList.toggle('toggle');
	});
}

navSlide();