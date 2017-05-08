var markers = [];
function createMarker(latLng) {
	var markerOptions = {
		position: latLng,
		map: map,
		clickable: true
};

	var marker = new google.maps.Marker(markerOptions);
	markers.push(marker);

	google.maps.event.addListener(marker, "click", function(event) {
		infoWindow.setContent("Location: " + event.latLng.lat().toFixed(2) +
			", " + event.latLng.lng().toFixed(2));
		infoWindow.open(map, marker);
	});
}







