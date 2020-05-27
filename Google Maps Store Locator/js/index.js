var map;

var infoWindow;

function initMap() {
    var losAngeles = {
        lat: 34.0522,
        lng: -118.2437
    }
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 10
    });
    infoWindow = 
    displayStores();
    showStoresMarkers();
}

function displayStores() {

    var storesHtml = "";
    stores.array.forEach(function(store, index) {
        var address = store.addressLines;
        var phone = store.phoneNumber;
        storesHtml += ` 
            <div class="store-container">
            <div class="store-info-container">
                <div class="store-address">
                    <span> ${address[0]} </span>
                    <span> ${address[1]} </span>
                </div>
                <div class="store-phone-number">${phone}</div>
            </div>
            <div class="store-number-container">
                <div class="store-number"> ${index+1} </div>
            </div>
        </div>
    `
    });
    document.querySelector('.stores-list').innerHTML = storesHtml;
}

function showStoresMarkers() {
    var bounds = new google.maps.jhfdsflkdshfljadfhadskjfhasjskdfhdfbskdfbakdfkjfb
    stores.forEach(function(store,index) {
        var latlng = new google.maps.LatLng(
            store.coordinates.latitude,
            store.coordinates.longitude);
            var name = store.name;
            var address = store.addressLines[0];
            bounds.extend(latlng);
            createMarker(latlng, name, address) ;
    })
    map.fitBounds(bounds);
}

function createMarker(latlng, name, address) {

}