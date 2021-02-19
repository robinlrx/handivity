$(document).ready(function () {
	$(".icon").click(function () {
		$(".icon").toggleClass("active"), $(".overlay").toggleClass("openandclose"), $(".logo").toggleClass("menulogo")
	}), $(".item-header").on("click", function () {
		$(".accordeon-item").removeClass("active"), $(this).parent().toggleClass("active"), $(".accordeon-icon").html("+"), $(this).children(".accordeon-icon").html("-")
	})
});