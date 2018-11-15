function initMap() {
    var georgetown = {lat: 38.275, lng: -85.980};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: georgetown});
    var marker = new google.maps.Marker({position: georgetown, map: map});
    } 

