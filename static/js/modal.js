
function isMobileView() {
	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	return vw <= 980;

}

function scrollToTargetAdjusted(elmid){
	console.log("scrolling to " + elmid);
    var element = document.getElementById(elmid);
	var headerOffset = 0;
	var elementPosition = element.offsetTop;
    var offsetPosition = elementPosition - headerOffset;
    document.documentElement.scrollTop = offsetPosition;
    document.body.scrollTop = offsetPosition; // For Safari
	console.log("elementPosition " + offsetPosition);

}

// Open the Modal
function openModal() {
    
    if (!isMobileView())
	    document.getElementById("myModal").style.display = "flex";
  }
  
  // Close the Modal
  function closeModal() {
	document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
	showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");

	if (isMobileView()){
		scrollToTargetAdjusted("thumb"+n); 
	}
	else{
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