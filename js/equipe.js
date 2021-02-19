$(window).scroll(function () {
	$(this).width() > 950 ? ($(".guenole, .priveen, .luca, .mehdi, .calvin, .robin").hover(function () {
		$(this).toggleClass("hover")
	}), $(".guenole").click(function () {
		$(".guenole").css("height", "100vh"), $(".guenole").css("background-size", "cover"), $(".priveen").css("height", "0vh"), $(".infosguenole").addClass("opacity"), $(".infosguenole a, .infosguenole h1, .infosguenole h2, .trait").css("display", "block"), $(".luca, .calvin, .mehdi, .robin").css("opacity", "0.3")
	}), $(".guenole").mouseleave(function () {
		$(".guenole").css("height", "50vh"), $(".priveen").css("height", "50vh"), $(".infosguenole").removeClass("opacity"), $(".infosguenole a, .infosguenole h1, .infosguenole h2, .trait").css("display", "none"), $(".luca, .calvin, .mehdi, .robin").css("opacity", "1")
	}), $(".priveen").click(function () {
		$(".priveen").css("height", "100vh"), $(".priveen").css("background-size", "cover"), $(".guenole").css("height", "0vh"), $(".infospriveen").addClass("opacity"), $(".infospriveen a, .infospriveen h1, .infospriveen h2, .trait").css("display", "block"), $(".luca, .calvin, .mehdi, .robin").css("opacity", "0.3")
	}), $(".priveen").mouseleave(function () {
		$(".priveen").css("height", "50vh"), $(".guenole").css("height", "50vh"), $(".infospriveen").removeClass("opacity"), $(".infospriveen a, .infospriveen h1, .infospriveen h2, .trait").css("display", "none"), $(".luca, .calvin, .mehdi, .robin").css("opacity", "1")
	}), $(".luca").click(function () {
		$(".luca").css("height", "100vh"), $(".luca").css("background-size", "cover"), $(".mehdi").css("height", "0vh"), $(".infosluca").addClass("opacity"), $(".infosluca a, .infosluca h1, .infosluca h2, .trait").css("display", "block"), $(".guenole, .calvin, .priveen, .robin").css("opacity", "0.3")
	}), $(".luca").mouseleave(function () {
		$(".luca").css("height", "50vh"), $(".mehdi").css("height", "50vh"), $(".infosluca").removeClass("opacity"), $(".infosluca a, .infosluca h1, .infosluca h2, .trait").css("display", "none"), $(".guenole, .calvin, .priveen, .robin").css("opacity", "1")
	}), $(".mehdi").click(function () {
		$(".mehdi").css("height", "100vh"), $(".mehdi").css("background-size", "cover"), $(".luca").css("height", "0vh"), $(".infosmehdi").addClass("opacity"), $(".infosmehdi a, .infosmehdi h1, .infosmehdi h2, .trait").css("display", "block"), $(".guenole, .calvin, .priveen, .robin").css("opacity", "0.3")
	}), $(".mehdi").mouseleave(function () {
		$(".mehdi").css("height", "50vh"), $(".luca").css("height", "50vh"), $(".infosmehdi").removeClass("opacity"), $(".infosmehdi a, .infosmehdi h1, .infosmehdi h2, .trait").css("display", "none"), $(".guenole, .calvin, .priveen, .robin").css("opacity", "1")
	}), $(".calvin").click(function () {
		$(".calvin").css("height", "100vh"), $(".calvin").css("background-size", "cover"), $(".robin").css("height", "0vh"), $(".infoscalvin").addClass("opacity"), $(".infoscalvin a, .infoscalvin h1, .infoscalvin h2, .trait").css("display", "block"), $(".guenole, .mehdi, .priveen, .luca").css("opacity", "0.3")
	}), $(".calvin").mouseleave(function () {
		$(".calvin").css("height", "50vh"), $(".robin").css("height", "50vh"), $(".infoscalvin").removeClass("opacity"), $(".infoscalvin a, .infoscalvin h1, .infoscalvin h2, .trait").css("display", "none"), $(".guenole, .mehdi, .priveen, .luca").css("opacity", "1")
	}), $(".robin").click(function () {
		$(".robin").css("height", "100vh"), $(".robin").css("background-size", "cover"), $(".calvin").css("height", "0vh"), $(".infosrobin").addClass("opacity"), $(".infosrobin a, .infosrobin h1, .infosrobin h2, .trait").css("display", "block"), $(".guenole, .mehdi, .priveen, .luca").css("opacity", "0.3")
	}), $(".robin").mouseleave(function () {
		$(".robin").css("height", "50vh"), $(".calvin").css("height", "50vh"), $(".infosrobin").removeClass("opacity"), $(".infosrobin a, .infosrobin h1, .infosrobin h2, .trait").css("display", "none"), $(".guenole, .mehdi, .priveen, .luca").css("opacity", "1")
	})) : ($(".guenole, .priveen, .luca, .mehdi, .calvin, .robin").css({
		filter: "grayscale(0)",
		"border-top": "solid 2px black",
		"border-bottom": "solid 2px black"
	}), $(".infosrobin, .infosmehdi, .infospriveen, .infosluca, .infoscalvin, .infosguenole").css("opacity", "1"), $(".infosrobin a, .infosrobin h1, .infosrobin h2, .trait, .infoscalvin a, .infoscalvin h1, .infoscalvin h2, .infosmehdi a, .infosmehdi h1, .infosmehdi h2, .infosluca a, .infosluca h1, .infosluca h2, .infospriveen a, .infospriveen h1, .infospriveen h2, .infosguenole a, .infosguenole h1, .infosguenole h2").css("display", "block"), $(".infosrobin h2, .infoscalvin h2, .infosmehdi h2, .infosluca h2, .infospriveen h2, .infosguenole h2").css({
		"text-shadow": "#000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px"
	}))
});