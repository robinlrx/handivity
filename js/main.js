$(document).ready(function () {
	$(".icon").click(function () {
		$(".icon").toggleClass("active"), $(".overlay").toggleClass("openandclose"), $(".logo").toggleClass("menulogo")
	}), $(window).scroll(function () {
		$(this).scrollTop() > .9 * window.innerHeight && $(this).scrollTop() <= 1.5 * window.innerHeight && $(this).width() > 650 ? $(".navbar").addClass("navbarbas") : $(".navbar").removeClass("navbarbas")
	}), $(".item-header").on("click", function () {
		$(".accordeon-item").removeClass("active"), $(this).parent().toggleClass("active"), $(".accordeon-icon").html("+"), $(this).children(".accordeon-icon").html("-")
	})
});