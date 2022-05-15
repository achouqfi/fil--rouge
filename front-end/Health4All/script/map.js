const html_script = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./main.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
    integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
    crossorigin=""/>
    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css">
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        #map {
            height: 100vh;
            width: 100vw;
        }
    </style>
</head>
<body>
    <!--Champs de recherche-->
    <!-- <p>
        <label for="champ-ville">Ville : </label>
        <input type="text" id="champ-ville">
    </p>
    <p>
        <label for="champ-distance">Distance : </label>
        <input type="range" min="1" max="200" id="champ-distance">
    </p>
    <p id="valeur-distance"></p>
    
    <p id="distance-value"></p> -->
    <!-- map container -->
    <div id="map"></div>

    <!-- scripts -->
    <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
        integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
        crossorigin=""></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
        // city data from http://www.city-data.com/
        var villes = [
            {"nom": "Paris", "lat": 48.852969, "lon": 2.349903},
            {"nom": "Lyon", "lat": 45.764043, "lon": 4.835659},
            {"nom": "Marseille", "lat": 43.296482, "lon": 5.36978},
            {"nom": "Lille", "lat": 50.637222, "lon": 3.063333},
            {"nom": "Toulouse", "lat": 43.604652, "lon": 1.444209},
            {"nom": "london", "lat": 51.507351, "lon": -0.127613},
            {"nom": "Bordeaux", "lat": 44.837789, "lon": -0.57918},
            {"nom": "Rome", "lat": 41.902783, "lon": 12.496365},
            {"nom": "Milan", "lat": 45.465422, "lon": 9.185924},
            {"nom": "Madrid", "lat": 40.416775, "lon": -3.703787},
            {"nom": "Barcelona", "lat": 41.38506, "lon": 2.173404},
            {"nom": "Valencia", "lat": 39.469, "lon": -0.376},
            {"nom": "Seville", "lat": 37.38, "lon": -5.966},
            {"nom": "Zurich", "lat": 47.37, "lon": 8.55},
            {"nom": "Geneva", "lat": 46.204391, "lon": 6.145496},
            {"nom": "Basel", "lat": 47.57, "lon": 7.567},
            {"nom": "Bern", "lat": 46.947, "lon": 7.447},
            {"nom": "Strasbourg", "lat": 48.58, "lon": 7.75},
        ]; 

        //markers table
        var markersTable = [];

        //map initialisation
        var map = L.map('map').setView([48.852996, 2.349903], 5);

        //multiple layers
        L.control.layers({
            "plan": L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', 
            { 
                minZoom: 4, 
                maxZoom: 20, 
                attribution: '' 
            }).addTo(map),
            "satellite": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
            { 
                minZoom: 4, 
                maxZoom: 20, attribution: '' }),
            "cadastre": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', 
            { 
                zoom: 17, 
                attribution: '' 
            }).addTo(map) 
        }, {}).addTo(map);

        // marker layer
        var markers = L.markerClusterGroup();

        // custom marker
        var icon = L.icon({
            iconUrl: './image/marker.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [0, -55]
        });

        // create popup and marker
        for (let index = 0; index < villes.length; index++) {
            var marker = L.marker([villes[index].lat, villes[index].lon]); //create marker
            marker.bindPopup((villes[index].nom)); //bind popup
            markers.addLayer(marker); //add marker
            markersTable.push(marker); //push markers to new array
        }

        var group = new L.featureGroup(markersTable);
        map.fitBounds(group.getBounds().pad(0.2));

        // add marker to map
        map.addLayer(markers);

        let ville = distance = ""
        let champVille = document.getElementById('champ-ville')
        let champDistance = document.getElementById('champ-distance')
        let valeurDistance = document.getElementById('valeur-distance')

        // get ville
        champVille.addEventListener("change", function(){
            axios
                .get('https://nominatim.openstreetmap.org/search?q='+champVille.value+'&format=json&addressdetails=1&limit=1&polygon_svg=1')
                .then(reponse => {
                    let data = reponse.data
                    console.log(data);
                    ville = [data[0].lat, data[0].lon]
                    var marker = L.marker(ville, { icon:icon }); //create marker
                    marker.bindPopup((data[0].nom)); //bind popup
                    markers.addLayer(marker); //add marker
                    map.panTo(ville); //center map
                })
        })
    </script>
</body>
</html>
`

export default html_script