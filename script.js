const fname = document.getElementById('fname');

fname.addEventListener("blur", function () {
	fname.value = fname.value.toUpperCase();
})