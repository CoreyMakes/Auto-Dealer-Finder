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
        site: "lamborghini-yokohama.com",
        logo: "http://www.car-logos.org/wp-content/uploads/2011/09/lamb.png"
    },
    {
        brand: "Ferrari",
        name: "Nicole Competizione フェラーリ横浜ショールーム",
        location: {
            lat: 35.45573,
            lng: 139.631808
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい２丁目２−１",
        site: "nicole-competizione.co.jp",
        logo: "http://www.car-brand-names.com/wp-content/uploads/2015/03/Ferrari-emblem.jpg"
    },
    {
        brand: "Rolls-Royce",
        name: "ロールス・ロイス・モーター・カーズ横浜",
        location: {
            lat: 35.455927,
            lng: 139.631887
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい２丁目２−１",
        site: "rolls-roycemotorcars-nicole.com",
        logo: "http://www.carlogos.org/logo/Rolls-Royce-logo-2048x2048.png"
    },
    {
        brand: "Bentley",
        name: "ベントレー横浜",
        location: {
            lat: 35.4582,
            lng: 139.634704
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい３丁目７−1",
        site: "sky-g.org",
        logo: "http://www.carlogos.org/logo/Bentley-logo.png"
    },
    {
        brand: "Maserati",
        name: "マセラティみなとみらい",
        location: {
            lat: 35.457577,
            lng: 139.633594
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい３丁目６−1",
        site: "blue-trident.co.jp",
        logo: "https://cdn.freebiesupply.com/logos/large/2x/maserati-4-logo-png-transparent.png"
    },
    {
        brand: "Porsche",
        name: "ポルシェセンターみなとみらい",
        location: {
            lat: 35.457864,
            lng: 139.628323
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目５−1",
        site: "porsche-minatomirai.jp",
        logo: "http://www.car-logos.org/wp-content/uploads/2011/09/porsche.png"
    },
    {
        brand: "BMW",
        name: "ビー・エム・ダブリューみなとみらい",
        location: {
            lat: 35.457585,
            lng: 139.628342
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目５−1",
        site: "minato-mirai-bmw.co.jp",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png"
    },
    {
        brand: "Mini",
        name: "ミニみなとみらい",
        location: {
            lat: 35.457756,
            lng: 139.628677
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目８−１",
        site: "minatomirai.mini.jp",
        logo: "https://www.motoringresearch.com/wp-content/uploads/2017/12/Mini_logo_2001.jpg"
    },
    {
        brand: "Audi",
        name: "アウディみなとみらい",
        location: {
            lat: 35.455109,
            lng: 139.639344
        },
        address: "〒231-0001 神奈川県横浜市中区新港２丁目３−3",
        site: "audi-minatomirai.jp",
        logo: "https://listcarbrands.com/wp-content/uploads/2015/10/logo-Audi-600x203.png"
    },
    {
        brand: "Jaguar",
        name: "ジャガー・ランドローバー横浜",
        location: {
            lat: 35.460199,
            lng: 139.629363
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目８−１",
        site: "yokohama.jaguar.co.jp",
        logo: "https://i.pinimg.com/originals/52/64/47/5264473baaf2a25be3a539225b0caf31.jpg"
    },
    {
        brand: "Land Rover",
        name: "ジャガー・ランドローバー横浜",
        location: {
            lat: 35.460092,
            lng: 139.629263
        },
        address: "〒220-0012 神奈川県横浜市西区みなとみらい４丁目８−１",
        site: "yokohama.landrover.co.jp",
        logo: "https://www.android.com/static/2016/img/auto/logos/land-rover_w_1x.jpg"
    },
    {
        brand: "Toyota",
        name: "トヨペット横浜店",
        location: {
            lat: 35.458082,
            lng: 139.623649
        },
        address: "〒220-0022 神奈川県横浜市西区花咲町７丁目150",
        site: "yokohama-toyopet.co.jp",
        logo: "https://www.trimactoyota.ca/wp-content/uploads/sites/254/2016/09/cropped-toyota-logo.png"
    },
    {
        brand: "Nissan",
        name: "神奈川日産自動車株式会社中央店",
        location: {
            lat: 35.456129,
            lng: 139.625372
        },
        address: "〒220-8523 神奈川県横浜市西区花咲町６丁目139",
        site: "ni-kanagawa.nissan-dealer.jp",
        logo: "data:image/jpeg;base64,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"
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
    this.logo = data.logo;

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

    var CLIENT_ID = "GQXTUBI3KTZFAVMEQUBVDGWTVAWIWCOOERO1IC4V21WZ43Q4";
    var CLIENT_SECRET = "1IVMPJGZYUCN2UP53MZX1W042BF1AYMODNBUQZK5UGKOKNRM";

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
                            self.hours = "Unknown";
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
        // Fill the Wiki articles theme (title).
        myVM.wikiTitle(carBrand);
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

        // Make sure the marker property is cleared if the infowindow is closed.
        infoWindow.addListener('closeclick', function() {
            infoWindow.marker = null;
        });
    // // Either need the closeclick listener or the else statement code below.
    // } else {
    //     infoWindow.setContent(populateInfoWindow(dealerInfo));
    //     infoWindow.open(map, marker);


        // Initiate the Google Street View Image insertion.
        var streetViewService = new google.maps.StreetViewService();
        // Use streetview service to get the closest streetview image within 50 meters of the markers position.
        var radius = 50;
        // Activate Street View Service and check whether ther is valid images around, if so, then procced to getStreetView().
        streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);

        // Fuction for getting street view images and processing the rest operation(like the callback/continued function of getPanoramaByLocation).
        // In case the status is OK, which means the pano was found, compute the position of the streetview image,
        // then calculate the heading, then get a panorama from that and set the options.
        function getStreetView(data, status) {
            // Check status.
            if (status == google.maps.StreetViewStatus.OK) {
                // Get closest available location near the marker.
                var nearStreetViewLocation = data.location.latLng; // latLng, pay attention to the capital L spelling.
                // Compute heading.
                var heading = google.maps.geometry.spherical.computeHeading(nearStreetViewLocation, marker.position);
                // Setup the infoWindow with other stuffs and an empty tag for the Street View Image.
                infoWindow.setContent(populateInfoWindow(dealerInfo) + "<div id='pano'></div>");
                // Write the panorama options we desire with position and point of view.
                var panoramaOptions = {
                    position: nearStreetViewLocation,
                    pov: {
                      heading: heading,
                      pitch: 30
                    }
                  };
                // Get the correct panorama photos and populate it into the infoWindow.
                var panorama = new google.maps.StreetViewPanorama(
                    document.getElementById("pano"), panoramaOptions);
            } else {
                // If status not OK, or there is no valid photos around the marker.
                // Then we just populate other contents except from the Street View Image.
                infoWindow.setContent(populateInfoWindow(dealerInfo) + "<div>No Street View Found...</div>");
            }
        };

        // Finally, open the infoWindow on the correct marker.
        infoWindow.open(map, marker);
    }
}

// Function for generating contents of infowindow except from the Google Street View Image.
function populateInfoWindow(dealerInfo) {
    return ("<div class = 'info-content'>" +
        "<h4>" + dealerInfo.name + "</h4>" +
        "<h5>" + "Address: &nbsp" + dealerInfo.address + "</h5>" +
        "<p>" + "Website: &nbsp" + dealerInfo.site + "<p>" +
        "<p>" + "Tel: &nbsp" + dealerInfo.phone + "<p>" +
        "<p>" + "Opening Time: &nbsp" + dealerInfo.hours + "<p>" +
        "<p>" + "Foursquare Venue ID: &nbsp"+ dealerInfo.venueID + "<p>" +
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

    // The central theme of the listing Wiki articles varies with the car brand user selected.
    this.wikiTitle = ko.observable("");
    // For accessing Wikipedia articles, save all the relevant links into a ko observableArray.
    this.wikiLinks = ko.observableArray([]);
};



// Functions for toggling the slidable navigation panel (for page styling).
function openNav() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("side-bar").style.width = "25%";
    document.getElementById("side-bar").style.display = "block";
    document.getElementById("openNav").style.display = "none";
}

function closeNav() {
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("side-bar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}