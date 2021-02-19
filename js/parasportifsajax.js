document.getElementById("search").addEventListener("click", function (e) {
	e.preventDefault();
	var t = document.getElementById("searchValue").value;
	let n = new XMLHttpRequest;
	n.open("GET", `./services/filter.php?search=${t}`), n.send(), n.onload = function () {
		if (200 != n.status) alert(`Error ${n.status}: ${n.statusText}`);
		else {
			document.getElementById("page").innerHTML = n.response;
			new Swiper(".swiper-container", {
				slidesPerView: 1,
				spaceBetween: 10,
				slidesPerGroup: 1,
				loop: !0,
				loopFillGroupWithBlank: !0,
				keyboard: {
					enabled: !0,
					onlyInViewport: !1
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: !0,
					type: "fraction"
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				breakpoints: {
					881: {
						slidesPerView: 3,
						spaceBetween: 0,
						centeredSlides: !0
					},
					651: {
						slidesPerView: 3,
						spaceBetween: 10,
						centeredSlides: !0,
						pagination: {
							type: "fraction"
						}
					},
					400: {
						slidesPerView: 1,
						spaceBetween: 10,
						centeredSlides: !1,
						pagination: {
							type: "fraction"
						}
					}
				}
			})
		}
	}
}), document.getElementById("retieiveFilterValues").addEventListener("click", function (e) {
	e.preventDefault();
	var t = document.getElementById("championnat"),
		n = t.options[t.selectedIndex].value,
		i = document.getElementById("handisport"),
		s = i.options[i.selectedIndex].value;
	let r = new XMLHttpRequest;
	r.open("GET", `./services/filter.php?sport=${s}&competition=${n}`), r.send(), r.onload = function () {
		if (200 != r.status) alert(`Error ${r.status}: ${r.statusText}`);
		else {
			document.getElementById("page").innerHTML = r.response;
			new Swiper(".swiper-container", {
				slidesPerView: 1,
				spaceBetween: 10,
				slidesPerGroup: 1,
				loop: !0,
				loopFillGroupWithBlank: !0,
				keyboard: {
					enabled: !0,
					onlyInViewport: !1
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: !0,
					type: "fraction"
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				breakpoints: {
					881: {
						slidesPerView: 3,
						spaceBetween: 0,
						centeredSlides: !0
					},
					651: {
						slidesPerView: 3,
						spaceBetween: 10,
						centeredSlides: !0,
						pagination: {
							type: "fraction"
						}
					},
					400: {
						slidesPerView: 1,
						spaceBetween: 10,
						centeredSlides: !1,
						pagination: {
							type: "fraction"
						}
					}
				}
			})
		}
	}
});