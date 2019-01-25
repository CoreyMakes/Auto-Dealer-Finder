var dealers = [
    {
        brand: "Lamborghini",
        name: "ランボルギーニ横浜",
        lat: 35.45734,
        lng: 139.6331,
        address: "〒220-0012 神奈川県横浜市西区みなとみらい３丁目６−１",
        site: "lamborghini-yokohama.com"
    },
    {
        brand: "Ferrari",
        name: "Nicole Competizione フェラーリ横浜ショールーム",
        lat: 35.45573,
        lng: 139.631808,
        address: "〒220-0012 神奈川県横浜市西区みなとみらい２丁目２−１",
        site: "nicole-competizione.co.jp"
    },
    {
        brand: "Rolls-Royce",
        name: "ロールス・ロイス・モーター・カーズ横浜",
        lat: 35.455927,
        lng: 139.631887,
        address: "〒220-0012 神奈川県横浜市西区みなとみらい２丁目２−１",
        site: "rolls-roycemotorcars-nicole.com"
    },
    {
        brand: "Bently",
        name: "ベントレー横浜",
        lat: 35.4582,
        lng: 139.634704,
        address: "〒220-0012 神奈川県横浜市西区みなとみらい３丁目７−1",
        site: "sky-g.org"
    },
    {
        brand: "Maserati",
        name: "マセラティみなとみらい",
        lat: 35.457577,
        lng: 139.633594,
        address: "〒220-0012 神奈川県横浜市西区みなとみらい３丁目６−1 みなとみらいセンタービル",
        site: "blue-trident.co.jp"
    },
    {
        brand: "Porsche",
        name: "ポルシェセンターみなとみらい",
        lat: 35.457864,
        lng: 139.628323,
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目５−1",
        site: "porsche-minatomirai.jp"
    },
    {
        brand: "BMW",
        name: "ビー・エム・ダブリューみなとみらい",
        lat: 35.457585,
        lng: 139.628342,
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目５−1",
        site: "minato-mirai-bmw.co.jp"
    },
    {
        brand: "Mini",
        name: "ミニみなとみらい",
        lat: 35.457756,
        lng: 139.628677,
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目８−１",
        site: "minatomirai.mini.jp"
    },
    {
        brand: "Audi",
        name: "アウディみなとみらい",
        lat: 35.455109,
        lng: 139.639344,
        address: "〒231-0001 神奈川県横浜市中区新港２丁目３−3",
        site: "audi-minatomirai.jp"
    },
    {
        brand: "Jaguar",
        name: "ジャガー・ランドローバー横浜",
        lat: 35.460199,
        lng: 139.629363,
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目８−１",
        site: "yokohama.jaguar.co.jp"
    },
    {
        brand: "Land Rover",
        name: "ジャガー・ランドローバー横浜",
        lat: 35.460092,
        lng: 139.629263,
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目８−１",
        site: "yokohama.landrover.co.jp"
    },
    {
        brand: "Toyota",
        name: "トヨペット横浜店",
        lat: 35.458082,
        lng: 139.623649,
        address: "〒220-0022 神奈川県横浜市西区花咲町７丁目150",
        site: "yokohama-toyopet.co.jp"
    },
    {
        brand: "Nissan",
        name: "神奈川日産自動車株式会社中央店",
        lat: 35.456129,
        lng: 139.625372,
        address: "〒220-8523 神奈川県横浜市西区花咲町６丁目139",
        site: "ni-kanagawa.nissan-dealer.jp"
    }
];

var map;
var markers = [];
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 35.4561941, lng: 139.6309885},
        zoom: 16,
    });

    setMarkers(dealers)
    function setMarkers(dealers) {
        var dealerInfoWindow = new google.maps.InfoWindow();

        for (index = 0; index < dealers.length; index++) {
            var dealer = dealers[index];
            var marker = new google.maps.Marker({
                map: map,
                position: {lat: dealer.lat, lng: dealer.lng},
                title: dealer.name,
                id: index,
                animation: google.maps.Animation.DROP
            });

            marker.addListener('click', (function(markerCaptured) {
                return function() {
                    if (markerCaptured.getAnimation() !== null) {
                        markerCaptured.setAnimation(null);
                    } else {
                        markerCaptured.setAnimation(google.maps.Animation.BOUNCE);
                        setTimeout(function() {
                            markerCaptured.setAnimation(null);
                        }, 2000);
                    }
                };
            })(marker));
            markers.push(marker);

            marker.addListener('click', function() {
                populateInfoWindow(this, dealerInfoWindow);
            });

            dealer.marker = marker;
        }
    }
}

function populateInfoWindow(marker, infoWindow) {
    if (infoWindow.marker !== marker) {
        infoWindow.marker = marker;
        infoWindow.setContent("<div>" + marker.title + "</div>");
        infoWindow.open(map, marker);
        infoWindow.addListener('closeclick', function() {
            infoWindow.setMarker(null);
        })
    }
}