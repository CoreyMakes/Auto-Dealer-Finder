// Initial Dealers Seed Data
var dealersData = [
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
var myVM; // Really Important! Need to make this myVM global, in order to let it be able to be called later in the Wiki API section.
// Save the ViewModel into a global variable first, then in the Wiki section, we can access wikiLinks by calling myVM.wikiLinks.
// We cannot directly call ViewModel.wikiLinks, because ViewModel is a function,
// so we need to save it into a (global) variable, then we can access its inner attributes.

// The Google Map API Callback Function
function initMap() {
    var jgc = {
        lat: 35.455791,
        lng: 139.633119
    };

    map = new google.maps.Map(document.getElementById("map"), {
        center: jgc,
        zoom: 19,
    });

    // Initiate global variables: dealerInfoWindow and bounds for later calls from the dealer's data model.
    dealerInfoWindow = new google.maps.InfoWindow();
    bounds = new google.maps.LatLngBounds();

    // Activate KnockOut.js and bind ViewModel to the View(index.html).
    myVM = new ViewModel();
    ko.applyBindings(myVM);
}



// The Dealer Model!!!
// Need to construct this Dealer Data Model as a Javascript Object, like a Python class, which has attributes and methods inside.
var dealerModel = function(data) {
    var self = this; // The rule here is: use this for first-time assignment, self is used for calling purpose.

    // brand will be used for listing dealers on the left panel via ko's text binding,
    // therefore, brand is ok to be saved into a ko observable.
    // However, when making Wikipedia API calls we need the text of the car brand,
    // thus, it should not be save into a ko observable.
    this.brand = data.brand;

    // However, other attributes except from brand can not be saved into a ko observable, otherwise they become objects.
    // Because name and location will be used for creating markers,
    // name, address, and site will be used for dealerInfo (infoWindow contents),
    // therefore, object cannot be passed in, we need a real value instead of an object memory in these cases.
    this.name = data.name;
    this.location = data.location;
    this.address = data.address;
    this.site = data.site;

    // Set the marker for each dealer.
    this.marker = new google.maps.Marker({
        position: self.location,
        title: self.name,
        animation: google.maps.Animation.DROP
    });

    // Push the marker to the array of markers.
    markers.push(self.marker);

    self.marker.addListener('click', function() {
        // click action #1
        toggleBounce(this);
        
        // click action #2
        var dealerInfo = {
            name: self.name,
            address: self.address,
            site: self.site,
            venueID: self.venueID,
            phone: self.phone, // Refer to codes in AJAX section below.
            hours: self.hours, // Refer to codes in AJAX section below.
        };
        setInfoWindow(this, dealerInfoWindow, dealerInfo);
        
        // click action #3
        map.panTo(this.getPosition());
        // Or we can use: map.panTo(self.location);

        // click action #4
        self.loadWikiData(self.brand);
    });

    // Clicking the dealers(brands) in the list should have the same effect with clicking the markers directly on the map.
    this.selectDealer = function() {
        // By calling this selectDealer method of the dealer model,
        // trigger all pre-defined click events (click action #1 ~ #4) for this specific dealer's marker.
        google.maps.event.trigger(self.marker, 'click');
    }


    // An attribute for filtering the markers on the map when users search for specific brand.
    this.visible = ko.observable(true);

    // Function for filtering markers' visibility according to user's search.
    this.filteredMarkers = ko.computed(function() {
        if (self.visible() === true) {
            self.marker.setMap(map);
            // Extend the boundaries of the map for each marker.
            bounds.extend(self.marker.position);
            map.fitBounds(bounds);
        } else {
            self.marker.setMap(null);
        }
    });


    // Use JQuery to make AJAX calls to fetch information via Foursquare API.
    this.venueID = ""; // For saving the venueID of each dealer via the 1st layer AJAX call.
    this.phone = "";
    this.hours = "";

    var CLIENT_ID = "OZPSHTUEOD0EZQDXWOCSFZM2MQ1Y32OHEBHKK4CYYZDKQU4G";
    var CLIENT_SECRET = "3O4GOCSEK15DWKUBZO42IZYOGDX5GKZQEIZOGO5SPP55DK45";

    var getVenueIDUrl = "https://api.foursquare.com/v2/venues/search?ll=" + self.location.lat + "," + self.location.lng +
        "&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&v=20190212" + "&query=" + self.name;

    // Need to implement a nested AJAX calls, because venue's contact info and opening hours do not show up just by the 1st layer call.
    $.ajax({
        url: getVenueIDUrl,
        success: function(result) {
            self.venueID = result.response.venues[0].id;
            // Confirm the first layer's AJAX call was success and leave some time for the venueID to be updated before calling the 2nd layer.
            if (result.meta.code === 200) {
                // Important! The assigning of this url has to be put in here rather than outside (after getVenueIDUrl, which is wrong),
                // because the self.venueID will not be updated during assignation, if this url defining is placed outside.
                // Also, we need a question mark before client_id in this url.
                var getVenueDetailsUrl = "https://api.foursquare.com/v2/venues/" + self.venueID +
                    "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&v=20190212";

                $.ajax({
                    url: getVenueDetailsUrl,
                    success: function(data) {
                        // Get the dealer's phone number.
                        self.phone = data.response.venue.contact.formattedPhone ? data.response.venue.contact.formattedPhone : "N/A";

                        // Get the dealer's opening time.
                        if (data.response.venue.hours) {
                            var timeframes = data.response.venue.hours.timeframes[0];
                            // Tip: &nbsp represents blank space in HTML.
                            self.hours = timeframes.days + "<span>&nbsp &nbsp</span>" + timeframes.open[0].renderedTime;
                        } else {
                            self.hours = "Opening Time Unknown";
                        }
                    },
                    error: function(error) {
                        alert("Error: Foursqure API call failed(2nd layer)!");
                        console.log(error);
                    }
                });
            }
        },
        error: function(error) {
            alert("Error: Foursqure API call failed(1st layer)!");
            console.log(error);
        }
    });

    // Use Wikipedia API (OpenSearch) to get some user selected car maker related wikipedia links.
    // This loadWikiData function is not a ko.computed function,
    // therefore, in order to run it, we need to call it (when user makes click action at a brand or marker).
    this.loadWikiData = function(carBrand) {
        // Clear out old data before new request.
        myVM.wikiLinks([]);

        var wikiUrl = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + carBrand + "&limit=10&format=json&callback=wikiCallback";

        var wikiRequestTimeout = setTimeout(function() {
            myVM.wikiLinks.push("<h4>Failed to get Wikipedia resources...</h4>");
        }, 8000);

        $.ajax(wikiUrl, {
            dataType: "jsonp",
            success: function(response) {
                keyWordList = response[1];
                for (index = 0; index < keyWordList.length; index++) {
                    searchKeyWord = keyWordList[index];
                    var searchUrl = "https://en.wikipedia.org/wiki/" + searchKeyWord;
                    myVM.wikiLinks.push("<a href='"+ searchUrl + "'>" + searchKeyWord + "</a>");
                }
                clearTimeout(wikiRequestTimeout);
            },
            error: function(error) {
                alert("Error: Wikipedia API call failed!");
                console.log(error);
            }
        });

        // This "return false is not for the async request, it is for the loadData function and if we don’t set it to false,
        // it will re-call the function (and reload the page) unlimited times, this way it will break after one completed time.
        return false;
    };
};


// Function for handling marker's bouncing animation.
function toggleBounce(marker) {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.setAnimation(null);
        }, 1500);
    }
}

// Function for opening infowindow of a marker.
function setInfoWindow(marker, infoWindow, dealerInfo) {
    if (infoWindow.marker !== marker) {
        infoWindow.setContent('');
        infoWindow.marker = marker;
        infoWindow.setContent(populateInfoWindow(dealerInfo));
        infoWindow.open(map, marker);

        // Make sure the marker property is cleared if the infowindow is closed.
        infoWindow.addListener('closeclick', function() {
            infoWindow.marker = null;
        });

    // // Either need the closeclick listener or the else statement code below.
    // } else {
    //     infoWindow.setContent(populateInfoWindow(dealer));
    //     infoWindow.open(map, marker);
    }
}

// Function for generating contents of infowindow.
function populateInfoWindow(dealerInfo) {
    return ("<div class = 'info-content'>" +
        "<h3>" + dealerInfo.name + "</h3>" +
        "<h4>" + dealerInfo.address + "</h4>" +
        "<p>" + dealerInfo.site + "<p>" +
        "<p>" + dealerInfo.venueID + "<p>" +
        "<p>" + dealerInfo.phone + "<p>" +
        "<p>" + dealerInfo.hours + "<p>" +
        "</div>");
}



// The View Model
var ViewModel = function() {
    self = this;

    this.dealers = ko.observableArray([]);
    dealersData.forEach(function(dealerData) {
        self.dealers.push(new dealerModel(dealerData));
    });

    // Function for filtering the brand.
    this.searchBrand = ko.observable(""); // No need to prepopulate the content, otherwise, no brands will be shown when page is loaded.
    this.filteredDealers = ko.computed(function() {
        var wantedBrand = self.searchBrand().toLowerCase();
        if (!wantedBrand) {
            self.dealers().forEach(function(dealerItem) {
                dealerItem.visible(true);
            });
            return self.dealers();
        } else {
            return ko.utils.arrayFilter(self.dealers(), function(dealerItem) {
                var keywords = dealerItem.brand.toLowerCase(); // brand is not a ko object, so we do not need a bracket after it.
                var result = (keywords.search(wantedBrand) >= 0);
                // result is a boolean, below is an alternative way.
                // var result = keywords.includes(wantedBrand);

                dealerItem.visible(result);

                // Filter the items which contain wantedBrand in the dealers() ko observable array.
                return result; // Only return true (to execute the arrayFilter method) when wantedBrand contains characters in keywords.
            });
        }
    }, this);

    // For accessing Wikipedia articles, save all the relevant links into a ko observableArray.
    this.wikiLinks = ko.observableArray([]);
};