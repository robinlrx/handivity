let partager = document.getElementById("btnPopup"),
	popup = document.getElementById("fond"),
	close = document.getElementById("close");

function open2() {
	popup.style.display = "flex", popup.style.overflow = "hidden"
}

function fermer() {
	popup.style.display = "none"
}
partager.addEventListener("click", open2), close.addEventListener("click", fermer);
const toCopy = document.getElementById("to-copy"),
	btnCopy = document.getElementById("copy");
btnCopy.addEventListener("click", function () {
	return toCopy.select(), document.execCommand("copy"), !1
});