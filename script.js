window.onload = function(){
    alert("I'm here");
    //browser check
    if (navigator.geolocation){
        //Get the location
        navigator.geolocation.getCurrentPosition(function(position){
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            //show map
            showMap(lat,lon);
        });

    } else {
        //output error message
        document.write("Your browser does not support GeoLocation");
    }
}

function showMap(lat,lon){
    var myLatLng = new google.maps.LatLng(lat,lon);

    var mapOptions = {
        zoom: 8,
        center: myLatLng, mapTypeID: google.maps.MapTypeId.ROADMAP
    };
    //Generates the map
    var map= new google.maps.Map(document.getElementById("map"),mapOptions);

    //Adds a marker
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Found you!'

    });
}