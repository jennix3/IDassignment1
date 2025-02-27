document.addEventListener("DOMContentLoaded", function() {
    // Fade in the body once content is loaded
    document.body.style.opacity = 1;
  });
  
  // Slideshow functionality (if you add slides with class "mySlides")
  let slideIndex = 0;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return; // Exit if no slides are found
  
    slideIndex = (n >= slides.length) ? 0 : (n < 0 ? slides.length - 1 : n);
  
    // Hide all slides
    for (let slide of slides) {
      slide.style.display = "none";
    }
    // Show the current slide
    slides[slideIndex].style.display = "block";
  }
  