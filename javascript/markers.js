function init(){
var mapOptions: {
    zomm:8,
    center: new google.maps.LatLng(25.6487278,-100.4435271),
    mapTyPeId: google.maps.mapTyPeIdROADMAP,
    disableDefaultUI: true
};
   var myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions);
}
google.maps.event.addDomListener(window, 'load', init);

var marker = new MarkerWithLabel({
    position: myMap.getCenter(),
    icon:{
        path: google.maps.SymbolPath.CIRCLE,
        scale:0;
},
    map: myMap,
    labelAnchor: new google.maps.Point(10,10),
    labelClass:"label"
});