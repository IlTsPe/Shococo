const blocks = document.querySelectorAll('[data-animation]');

const appearanceSection = function (entries, observer) {
	entries.forEach(entry => {

		if (!entry.isIntersecting) return
		entry.target.classList.remove('appearance');
		observer.unobserve(entry.target);
	})
};

const sectionObserver = new IntersectionObserver(appearanceSection, {
	root: null,
	threshold: 0.2,
});

blocks.forEach(block => {
	sectionObserver.observe(block);
	block.classList.add('appearance');
});