
var selectionIndex = 0;

function isMobileView() {
	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	return vw <= 980;

}


// Open the Modal
function openModal() {
		document.getElementById("myModal").style.display = "flex";
		const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
		const body = document.body;
		body.classList.add('modal-open');
		body.style.position = 'fixed';
		console.log(`Setting the body top to -${scrollY} ` );
		body.style.topp = `-${scrollY}`;
  }
  
  // Close the Modal
  function closeModal() {
	document.getElementById("myModal").style.display = "none";
	selectionIndex = 0;
	const body = document.body;
	body.classList.remove('modal-open');
	const scrollY = body.style.topp;
	body.style.position = '';
	body.style.topp = '';
	window.scrollTo(0, parseInt(scrollY || '0') * -1);
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

	// window.scrollTo(0,0);
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



  window.addEventListener('scroll', () => {
	document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });
  
  