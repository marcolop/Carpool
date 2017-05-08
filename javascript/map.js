function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat:25.6490376,lng:-100.4431838}
  });
  var image = 'images/car.png';
  var beachMarker = new google.maps.Marker({
    position: {lat:25.6490376,lng:-100.4431838},
    map: map,
    icon: image
  });
}
