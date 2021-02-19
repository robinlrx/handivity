function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: new google.maps.LatLng(48.866667, 2.333333),
		zoom: 11,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID]
		},
		disableDefaultUI: !0,
		mapTypeControl: !1,
		scaleControl: !0,
		zoomControl: !0,
		streetViewControl: !0,
		rotateControl: !0,
		fullscreenControl: !0,
		gestureHandling: "greedy",
		styles: [{
			elementType: "geometry",
			stylers: [{
				color: "#1d2c4d"
			}]
		}, {
			elementType: "labels.text.fill",
			stylers: [{
				color: "#8ec3b9"
			}]
		}, {
			elementType: "labels.text.stroke",
			stylers: [{
				color: "#1a3646"
			}]
		}, {
			featureType: "administrative.country",
			elementType: "geometry.stroke",
			stylers: [{
				color: "#4b6878"
			}]
		}, {
			featureType: "administrative.land_parcel",
			elementType: "labels",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "administrative.land_parcel",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#64779e"
			}]
		}, {
			featureType: "administrative.province",
			elementType: "geometry.stroke",
			stylers: [{
				color: "#4b6878"
			}]
		}, {
			featureType: "landscape.man_made",
			elementType: "geometry.stroke",
			stylers: [{
				color: "#334e87"
			}]
		}, {
			featureType: "landscape.natural",
			elementType: "geometry",
			stylers: [{
				color: "#023e58"
			}]
		}, {
			featureType: "poi",
			elementType: "geometry",
			stylers: [{
				color: "#283d6a"
			}]
		}, {
			featureType: "poi",
			elementType: "labels.text",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "poi",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#6f9ba5"
			}]
		}, {
			featureType: "poi",
			elementType: "labels.text.stroke",
			stylers: [{
				color: "#1d2c4d"
			}]
		}, {
			featureType: "poi.business",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "poi.park",
			elementType: "geometry.fill",
			stylers: [{
				color: "#023e58"
			}]
		}, {
			featureType: "poi.park",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#3C7680"
			}]
		}, {
			featureType: "road",
			elementType: "geometry",
			stylers: [{
				color: "#304a7d"
			}]
		}, {
			featureType: "road",
			elementType: "labels.icon",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "road",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#98a5be"
			}]
		}, {
			featureType: "road",
			elementType: "labels.text.stroke",
			stylers: [{
				color: "#1d2c4d"
			}]
		}, {
			featureType: "road.arterial",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "road.highway",
			elementType: "geometry",
			stylers: [{
				color: "#2c6675"
			}]
		}, {
			featureType: "road.highway",
			elementType: "geometry.stroke",
			stylers: [{
				color: "#255763"
			}]
		}, {
			featureType: "road.highway",
			elementType: "labels",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "road.highway",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#b0d5ce"
			}]
		}, {
			featureType: "road.highway",
			elementType: "labels.text.stroke",
			stylers: [{
				color: "#023e58"
			}]
		}, {
			featureType: "road.local",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "road.local",
			elementType: "labels",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "transit",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "transit",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#98a5be"
			}]
		}, {
			featureType: "transit",
			elementType: "labels.text.stroke",
			stylers: [{
				color: "#1d2c4d"
			}]
		}, {
			featureType: "transit.line",
			elementType: "geometry.fill",
			stylers: [{
				color: "#283d6a"
			}]
		}, {
			featureType: "transit.station",
			elementType: "geometry",
			stylers: [{
				color: "#3a4762"
			}]
		}, {
			featureType: "water",
			elementType: "geometry",
			stylers: [{
				color: "#0e1626"
			}]
		}, {
			featureType: "water",
			elementType: "labels.text.fill",
			stylers: [{
				color: "#4e6d70"
			}]
		}]
	}), $.ajax("php/carte_donnees.php", {
		method: "GET"
	}).done(function (e) {
		let t = JSON.parse(e);
		console.log(t);
		for (let l = 0; l < e.length; l++) {
			let e = new google.maps.Marker({
				position: {
					lat: parseFloat(t[l].lat),
					lng: parseFloat(t[l].lng)
				},
				map: map,
				id: `${t[l].id}`,
				icon: {
					url: "images/marker.svg",
					scaledSize: new google.maps.Size(35, 35)
				}
			});
			console.log(e.id);
			let o = new google.maps.InfoWindow({
				content: `\n                <div class="info-container">\n                <img src='${t[l].photo}' alt="">\n                    <div class="info-txt">\n                        <h2 class="info-titre">${t[l].titre}</h2>\n                        <h3>${t[l].ville} (${t[l].postal})</h3>\n                        <p>${t[l].description}</p>\n                    </div>\n                </div> `
			});
			e.addListener("mouseover", function () {
				this.setOpacity(.7)
			}), e.addListener("mouseout", function () {
				this.setOpacity(1)
			}), map.active_window = !1, google.maps.event.addListener(e, "click", function () {
				0 != map.active_window && (map.active_window.info.close(map, map.active_window.marker), console.log("pop up précédente fermée")), o.open(map, e), map.active_window = {
					info: o,
					marker: e
				}, console.log("pop up actuelle ouvert")
			}), $(".item").filter("#s_" + e.id).click(() => {
				google.maps.event.trigger(e, "click")
			})
		}
	}).fail(function (e) {
		console.log("Une erreur s'est produite", e.status)
	})
}
$(document).ready(function () {
	$(".btn-slideup").on("click", function () {
		30 == $(".content-mobile").height() ? $(".content-mobile").animate({
			height: "180px"
		}) : 180 == $(".content-mobile").height() && $(".content-mobile").animate({
			height: "30px"
		})
	})
});