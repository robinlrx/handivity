function select(i) {
	$(".item").removeClass("bordure"), i.addClass("bordure")
}
$(".item").click(function () {
		select($(this))
	}),
	function (i) {
		i.fn.extend({
			slider: function (t) {
				t = i.extend(t, {
					scroll: 625,
					mode: "full"
				}), this.each(function () {
					var n = i(this),
						c = i(this).find(".items-wrap").first();

					function e(i) {
						if (!(c.prop("scrollWidth") < n.width())) {
							var t = n.width() - c.prop("scrollWidth"),
								e = parseInt(c.css("margin-left")) + i;
							e > 0 ? e = 0 : e < t && (e = t), c.css("margin-left", e)
						}
					}
					i(this).find(".next-control").click(function () {
						e(-t.scroll)
					}), i(this).find(".prev-control").click(function () {
						e(t.scroll)
					})
				})
			}
		}), i(document).ready(function () {
			i(".slider").slider()
		})
	}(jQuery);