const initMap = (coords) => {
    const mapBoxToken = "pk.eyJ1IjoiamVua2luc211bCIsImEiOiJja3lrcGJhM2cyeWVzMm9wYm4yaWprNjEyIn0.qFMv7qFBhBfEdOSVoXXTUw"
    const mapEl = document.getElementById('map')

    let container = L.DomUtil.get("map");
    if (container != null) {
    container._leaflet_id = null;
    }

    const map = L.map(mapEl).setView([coords.lat, coords.lng], 15);

    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapBoxToken}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: mapBoxToken
    }).addTo(map);

    L.marker([coords.lat, coords.lng]).addTo(map);
}

export default initMap