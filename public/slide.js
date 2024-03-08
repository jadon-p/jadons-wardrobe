let slideIndex = 0;
let timeoutId; // Declare a variable to store the timeout ID

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (slides.length > 0) {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }    

        slides[slideIndex-1].style.display = "block";  

        // Clear the previous timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timeout
        timeoutId = setTimeout(showSlides, 5000); // Change image 
    }
}