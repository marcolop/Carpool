function displayLocation(position){
	var latitude  = position.coords.latitude;
	var longitude = position.coords.longitude;
	var pLocation = document.getElementById("location");
	pLocatio.innerHTML += latitude + ", " + longitude + "<br>";
}
function displayError(error){
	var errors =["Unknown error", "Permission denied by user","position not available", "Timeout error"];
    var message = errors[error.code];
    console.warn("Error in gettin your location"+ message, error.message);
}
function computeTotalDistance(){
	return 0;
}
window.onload = function(){
	var pDistance = document.getElementById("distance");
	var trackButton = document.querySelector("button");
    trackButton.onclick = fucntion(e){
    	e.preventDefault();
    	if(trackButton.innerHTML=="Start"){
    	   trackButton.innerHTML= "STOP";
     	  trackMe();
       } 
       else{
           trackButton.innerHTML = "Start";
           clearTracking();
    };
}
