! function (i) {
	i.fn.extend({
		sliderM: function (n) {
			n = i.extend(n, {
				scroll: 300,
				mode: "full"
			}), this.each(function () {
				var t = i(this),
					l = i(this).find(".items-wrap-mobile").first();

				function o(i) {
					if (!(l.prop("scrollWidth") < t.width())) {
						var n = t.width() - l.prop("scrollWidth"),
							o = parseInt(l.css("margin-left")) + i;
						o > 0 ? o = 0 : o < n && (o = n), l.css("margin-left", o)
					}
				}
				i(this).find(".next-control-mobile").click(function () {
					o(-n.scroll)
				}), i(this).find(".prev-control-mobile").click(function () {
					o(n.scroll)
				})
			})
		}
	}), i(document).ready(function () {
		i(".slider-mobile").sliderM()
	})
}(jQuery);