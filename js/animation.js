"use strict";
var ratio = .1,
	options = {
		root: null,
		rootMargin: "0px",
		threshold: .1
	},
	callback = function (e, r) {
		e.forEach(function (e) {
			e.intersectionRatio > ratio && (e.target.classList.add("reveal-visible"), r.unobserve(e.target))
		})
	},
	observer = new IntersectionObserver(callback, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (e) {
	observer.observe(e)
});