var marker;
 function initMap() {
    var map = new google.maps.Map(document.getELementById('map'),{
     zoom: 13,
     center: {lat:25.7778115,lng:-100.1494789}
});
    marker = new google.maps.Marker({
       map: map,
       draggable: true,
       animation: google.maps.Animation.DROP,
       position: {lat:25.7778115 ,lng:-100.1494789}
});
    marker.addListener('click', toggleBounce);
 }

 function toggleBounce() {
    if (marker.getAnimation()!== null) {
      marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
   }
}