var map;
var markers =[];
function initMap(){
    var monterrey = {lat:25.7602328,lng:-100.1143823};
    map = new google.maps.Map(document.getElementById('map'),{
    zoom: 12,
    center: monterrey,
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

    //THIS EVENT LISTENER WILL CALL ADDMARKER() WHEN THE MAP IS CLICKED.
   map.addListener('click', function(event){
     addMarker(event.latLng);
   });
   addMarker(monterrey);
}

//adds a marker to the map and push to the array.
  function addMarker(location){
    var marker = new google.maps.Marker({
     position: location,
     map: map
    });
    markers.push(marker);
  }
//sets the ma on all marker in the array.

function setMapOnAll(map){
    for(var i = 0;  i < markers.length; i++){
        markers[i].setMap(map);
    }
}
//removes the markers from the map, but keeps them in the array.
function clearMarkers(){
    setMapOnAll(null);
}
//shows any markers currently in the array.
 function showMarkers(){
    setMapOnAll(map);
 }
 function deleteMarkers(){
    clearMarkers();
    markers = [];
 }