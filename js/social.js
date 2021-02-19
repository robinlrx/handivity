! function () {
	var e = function (e, t, n, r) {
		var o = n || 640,
			i = r || 320,
			c = window.screenLeft || window.screenX,
			a = window.screenTop || window.screenY,
			d = c + (window.innerWidth || document.documentElement.clientWidth) / 2 - o / 2,
			u = a + (window.innerHeight || document.documentElement.clientHeight) / 2 - i / 2;
		window.open(e, t, "scrollbars=yes, width=" + o + ", height=" + i + ", top=" + u + ", left=" + d);
		return !0
	};
	document.querySelector(".share_twitter").addEventListener("click", function (t) {
		t.preventDefault();
		var n = this.getAttribute("data-url"),
			r = "https://twitter.com/intent/tweet?text=&url=" + encodeURIComponent(n);
		e(r, "Partager sur Twitter")
	}), document.querySelector(".share_facebook").addEventListener("click", function (t) {
		t.preventDefault();
		var n = this.getAttribute("data-url"),
			r = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(n);
		e(r, "Partager sur Facebook")
	})
}();