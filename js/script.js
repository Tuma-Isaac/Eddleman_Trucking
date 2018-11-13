var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}


function initMap() {
var georgetown = {lat: 38.275, lng: -85.980};
var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: georgetown});
var marker = new google.maps.Marker({position: georgetown, map: map});
}