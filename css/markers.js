 var labelIndex = 0;

  function initialize(){
    var  monterrey = {lat:25.6490376,lng:-100.4431838};
    var map = new google.maps.Map(document.getElementById('map'){
     zoom: 12,
     center: monterrey
    });

    google.maps.event.addListener(map, 'clikc', function(event){
        addMarker(event.latLng, map);
    };
    addMarker(monterrey, map);
  }

  function addMarker(location, map){
     var marker = new google.Maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
     });
}
     google.maps.event.addDomListener(window, 'load' initialize);