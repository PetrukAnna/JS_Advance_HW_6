window.addEventListener("load", function() {
	var allImages = document.images;

	for (var i = 0; i < allImages.length; i++) {
		allImages[i].addEventListener("click", zoom);
	}
});

function zoom() {
	if(window.getComputedStyle(this).height == "75px") {
		this.style.height = "200px";
		this.style.width = "200px";
		this.style.transition = "2s";
	} else {
		this.style.height = "75px";
		this.style.width = "75px";
		this.style.transition = "2s";
	}
}