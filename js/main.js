(function(){

var map = L.map('map').setView([40.806290, -73.963005], 16);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var marker = L.marker([40.8075, -73.9633]).addTo(map);

marker.bindPopup("<b>Columbia University</b><br>Journalism School.").openPopup();

 $('.button').on("click", function(){
	map.locate({setView: true})
	});

$('#home').on("click", function(){
	map.locate({setView: false})
	map.panTo([40.7803, -73.9833])
	map.zoomOut(4)
	});
	
	var image_data = [
			{
				name: 'Empire State building',
				lat: '40.748441',
				lng: '-73.985664',
				text: 'Tallest building'
			},
			{
				name: 'Union Square',
				lat: '42.379654',
				lng: '-71.095602',
				text: 'Fun neighborhood'
			}
			];
			
		var locations = ['Empire State Building', 'Union Square']
	
	function cycle(markers) {
   	 var i = 0;
   	 function run() {
        if (++i > markers.length - 1) i = 0;
        map.setView(markers[i].getLatLng(), 12);
        markers[i].openPopup();
        window.setTimeout(run, 2000);
    }
    run();}

    	for (var i = 0; i < image_data.length; i++) {
   marker = new L.marker([image_data[i][1],planes[i][2]])
    .bindPopup(planes[i][0])
    .addTo(map);
  }

}).call(this);

	
