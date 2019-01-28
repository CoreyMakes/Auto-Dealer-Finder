// Initial Dealers Seed Data
var dealers = [
    {
        brand: "Lamborghini",
        name: "ランボルギーニ横浜",
        location: {
            lat: 35.45734,
            lng: 139.6331
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい３丁目６−１",
        site: "lamborghini-yokohama.com"
    },
    {
        brand: "Ferrari",
        name: "Nicole Competizione フェラーリ横浜ショールーム",
        location: {
            lat: 35.45573,
            lng: 139.631808
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい２丁目２−１",
        site: "nicole-competizione.co.jp"
    },
    {
        brand: "Rolls-Royce",
        name: "ロールス・ロイス・モーター・カーズ横浜",
        location: {
            lat: 35.455927,
            lng: 139.631887
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい２丁目２−１",
        site: "rolls-roycemotorcars-nicole.com"
    },
    {
        brand: "Bently",
        name: "ベントレー横浜",
        location: {
            lat: 35.4582,
            lng: 139.634704
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい３丁目７−1",
        site: "sky-g.org"
    },
    {
        brand: "Maserati",
        name: "マセラティみなとみらい",
        location: {
            lat: 35.457577,
            lng: 139.633594
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい３丁目６−1 みなとみらいセンタービル",
        site: "blue-trident.co.jp"
    },
    {
        brand: "Porsche",
        name: "ポルシェセンターみなとみらい",
        location: {
            lat: 35.457864,
            lng: 139.628323
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目５−1",
        site: "porsche-minatomirai.jp"
    },
    {
        brand: "BMW",
        name: "ビー・エム・ダブリューみなとみらい",
        location: {
            lat: 35.457585,
            lng: 139.628342
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目５−1",
        site: "minato-mirai-bmw.co.jp"
    },
    {
        brand: "Mini",
        name: "ミニみなとみらい",
        location: {
            lat: 35.457756,
            lng: 139.628677
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目８−１",
        site: "minatomirai.mini.jp"
    },
    {
        brand: "Audi",
        name: "アウディみなとみらい",
        location: {
            lat: 35.455109,
            lng: 139.639344
        },
        address: "〒231-0001 神奈川県横浜市中区新港２丁目３−3",
        site: "audi-minatomirai.jp"
    },
    {
        brand: "Jaguar",
        name: "ジャガー・ランドローバー横浜",
        location: {
            lat: 35.460199,
            lng: 139.629363
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目８−１",
        site: "yokohama.jaguar.co.jp"
    },
    {
        brand: "Land Rover",
        name: "ジャガー・ランドローバー横浜",
        location: {
            lat: 35.460092,
            lng: 139.629263
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目８−１",
        site: "yokohama.landrover.co.jp"
    },
    {
        brand: "Toyota",
        name: "トヨペット横浜店",
        location: {
            lat: 35.458082,
            lng: 139.623649
        },
        address: "〒220-0022 神奈川県横浜市西区花咲町７丁目150",
        site: "yokohama-toyopet.co.jp"
    },
    {
        brand: "Nissan",
        name: "神奈川日産自動車株式会社中央店",
        location: {
            lat: 35.456129,
            lng: 139.625372
        },
        address: "〒220-8523 神奈川県横浜市西区花咲町６丁目139",
        site: "ni-kanagawa.nissan-dealer.jp"
    }
];


// Define global variables, which can be accessed inside any functions and models.
var map;
var markers = [];
var dealerInfoWindow;
var bounds;
// The Google Map API Callback Function
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 35.4561941, lng: 139.6309885},
        zoom: 19,
    });

    setMarkers(dealers);

    ko.applyBindings(new ViewModel());
}

// // The Dealer Model!!!
// // Need to construct this data model, like a Python class, which has attributes and methods inside.
// var dealerModel = function(data) {
//     var self = this;

//     this.brand = data.brand;
//     this.name = data.name;
//     this.location = data.location;
//     this.address = data.address;
//     this.site = data.site;
// };

// Function for creating markers and setting up their basic properties.
function setMarkers(dealers) {
    dealerInfoWindow = new google.maps.InfoWindow();
    bounds = new google.maps.LatLngBounds();
    map.fitBounds(bounds);

    for (index = 0; index < dealers.length; index++) {
        var dealer = dealers[index];
        var position = dealer.location;
        var title = dealer.name;
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            id: index,
            animation: google.maps.Animation.DROP
        });
        // Push the marker to the array of markers.
        markers.push(marker);

        // Extend the boundaries of the map for each marker.
        bounds.extend(position);

        // // This marker animation handling IIFE can be integrated into the upgradeMarker function below.
        // marker.addListener('click', (function(markerCaptured) {
        //     return function() {
        //         if (markerCaptured.getAnimation() !== null) {
        //             markerCaptured.setAnimation(null);
        //         } else {
        //             markerCaptured.setAnimation(google.maps.Animation.BOUNCE);
        //             setTimeout(function() {
        //                 markerCaptured.setAnimation(null);
        //             }, 2000);
        //         }
        //     };
        // })(marker));

        marker.addListener('click', function(dealerCaptured) {
            return function() { // This is important, need this "return function() {};"!!! 
                upgradeMarker(this, dealerCaptured, dealerInfoWindow);
                // console.log(dealerCaptured.name); // For debugging
            };
        }(dealer));

        dealer.marker = marker;
    }
}

// Function for handling marker animation and opening infowindow.
function upgradeMarker(marker, dealer, infoWindow) {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.setAnimation(null);
        }, 2000);
    }

    if (infoWindow.marker !== marker) {
        infoWindow.setContent('');
        infoWindow.marker = marker;
        infoWindow.setContent(populateInfoWindow(dealer));
        infoWindow.open(map, marker);

        // Make sure the marker property is cleared if the infowindow is closed.
        infoWindow.addListener('closeclick', function() {
            infoWindow.marker = null;
        })
    // // Either need the closeclick listener or the else statement code below.
    // } else {
    //     infoWindow.setContent('');
    //     infoWindow.setContent(populateInfoWindow(dealer));
    //     infoWindow.open(map, marker);
    }
}

// Function for generating contents of infowindow.
function populateInfoWindow(dealer) {
    return ("<div class = 'info-content'>" +
        "<h3>" + dealer.name + "</h3>" +
        "<h4>" + dealer.address + "</h4>" +
        "<p>" + dealer.site + "<p>" +
        "</div>");
}


// The View Model
var ViewModel = function() {
    self = this;

    self.dealers = ko.observableArray(dealers);

    self.selectDealer = function(dealer) {
        dealerInfoWindow.setContent(populateInfoWindow(dealer));
        var selectedMarker = dealer.marker;
        dealerInfoWindow.open(map, selectedMarker);
        selectedMarker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            selectedMarker.setAnimation(null);
        }, 3000);
    };
};