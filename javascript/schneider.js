function initAutocomplete() {
    var labels ='';
    var labelIndex= 0;
    var map = new google.maps.Map(document.getElementById('map'), {
  	center:{lat:25.7778115,lng:-100.1494789},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
});
    google.maps.event.addListener(map,'click', function(event){
      addMarker(event.latLng, map);
});
    function addMarker(location, map) {
      var marker = new google.maps.Marker({
          position: location,
          label:  labels[labelIndex++ % labels.length],
          map: map,
          icon: image
   });
}
         //geolocation html5
   var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('location found');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
 }
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
  var image = 'images/home.png';
  var beachMarker = new google.maps.Marker({
    map: map,
    draggable: true,
    icon: image
});
  setMarkers(map);
}
// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var beaches = [
      ['Schneider Electric p1',  25.7778115, -100.1494789,4],
      ['Schneider Electric p2',  25.7602122,-100.114561,21],
      ['Schneider Electric p3',   ],
      ['Schneider Electric p5',   ],
      ['Schneider Electric p6',   ],
];
function setMarkers(map){
  //Adds markers to the map.
  //Marker sizes are expressed as a Size of X,Y where the origin of the image
  //(0,0) is located in the top eft of the image.
  //origins, anchor positions and coordinate of the marker increase in the x
  //direction to the rigth and in the y direction down.
  var image = {
    url: 'images/building.png',
    //this marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(80,80),
    //the origin for this image is(0,0).
    origin: new google.maps.Point(0,0),
    //the anchor for this image is the base of the flagpole at(0,32)
    anchor: new google.maps.Point(0,0)
  };
  //shaps define the clickable region of the icon. the type defines and html
  //<area> element'poly' which out a polygon as a series of x,y points
  //the final coordinate closes the poly by connecting tho te firts coordinate
  var shape = {
    coord: [1,1,1,20,18,20,18,1],
    type: 'poly'
  };
  for (var i =0; i < beaches.length; i++){
    var beach = beaches[i];
    var marker = new google.maps.Marker({
    position: {lat:beach[1], lng: beach[2]},
    map: map,
    icon: image,
    shape: shape,
    title: beach[0],
    zIndex: beach[3]
    });
}
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // [START region_getplaces]
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  // [END region_getplaces]ar
}