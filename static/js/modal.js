
var selectionIndex = 0;

function isMobileView() {
	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	return vw <= 980;

}

function scrollToTargetAdjusted(element){
	var headerOffset = 0;
	var elementPosition = element.offsetTop;
    var offsetPosition = elementPosition - headerOffset;
    document.documentElement.scrollTop = offsetPosition;
    document.body.scrollTop = offsetPosition; // For Safari
}

// Open the Modal
function openModal() {
    
    if (true || !isMobileView())
	    document.getElementById("myModal").style.display = "flex";
  }
  
  // Close the Modal
  function closeModal() {
	document.getElementById("myModal").style.display = "none";
	selectionIndex = 0;
  }
  
//   var slideIndex = 1;
//   showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
	showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	var i, slides, dots;

	if (false && isMobileView()){
		slides = document.getElementsByClassName("card");
		if (selectionIndex > 0)
			slides[selectionIndex -1].className = slides[selectionIndex -1].className.replace(" active", "");
		if (n != selectionIndex) {
			slides[n-1].className += " active";
			scrollToTargetAdjusted(slides[n-1]);
			selectionIndex = n;
		}
		else {
			selectionIndex = 0;
		}

	}
	else{
		slides = document.getElementsByClassName("mySlides");
		dots = document.getElementsByClassName("demo");
		var captionText = document.getElementById("caption");
		if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "flex";
		dots[slideIndex-1].className += " active";
		captionText.innerHTML = dots[slideIndex-1].alt;
	}

	
  }