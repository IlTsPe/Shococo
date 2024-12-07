const images = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
	entries.forEach(item => {
		if (!item.isIntersecting) return
		item.target.srcset = item.target.dataset.src;
		observer.unobserve(item.target);
	})
};

const lazyObserver = new IntersectionObserver(loadImg, {
	root: null,
	threshold: 0.1,
});

images.forEach(img => lazyObserver.observe(img));
