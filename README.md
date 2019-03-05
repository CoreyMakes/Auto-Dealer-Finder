# Auto Dealer Finder


Click [here](https://yuezhoulu.github.io/Auto-Dealer-Finder/) to view the live project hosted by GitHub Pages.

![Screenshot](/screenshot.png)


## Project Overview
The Neighborhood Map project involves developing a single page application with the KnockoutJS framework and various APIs. Aside from the Google Maps API, additional information is added to the project locations with the FourSquare API and Wikipedia API loaded asynchronously. KnockoutJS allows the project to be organized with the MVVM pattern.

This application helps the user locate all available car dealers in the MinatoMirai 21 area in Yokohama, the second largest harbour city in Japan.


## Why this Project?
The neighborhood map application is complex enough and incorporates a variety of data points that it can easily become unwieldy to manage. There are a number of frameworks, libraries and APIs available to make this process more manageable and many employers are looking for specific skills in using these packages. Interacting with API servers is the primary function of Front-End Web Developers. Use of third-party libraries and APIs is a standard and acceptable practice that is encouraged. Asynchronous programming is important to understand in today's market.


## Skills Honed
* Developing a FEND web application utilizing:
    1. JavaScript
    2. jQuery
    3. Knockout.js Framework
    4. HTML
    5. CSS
    6. Third-party APIs
+ Learnt how design patterns assist in developing a manageable codebase, and implemented separation of concerns concept by using MVVM design pattern.
+ Explored how frameworks can decrease the time required developing an application and provide a number of utilities for us to use.
+ Implementing third-party APIs that provide valuable data sets that can improve the quality of our application including Google Street View, Foursqaure, and Wikipedia.


## Getting Started
1. Download the project folder or clone this repository.
2. Open the file called "index.html" with any web browser you prefer.
3. Click on any of the markers on the map / logos or brand names on the sidebar menu for more information about a particular dealer, an Info Window of that marker on the map will appear.
4. Type in the input bar(to filter the list and markers down as you type) if you only want to find a specific dealer listed on the map and to make it easier to spot.
5. Refer to the Wikipedia article links below the brand listing for additional infomation about the car maker/brand you have just selected.


## Files in this Repo
This project has a main html file called _**index.html**_ which is the View part of the application. The _**styles.css**_ in the css folder is responsible for the styling of the App. Finally, in the js folder you can find the Data, Data Model, and View Model of this App, the _**app.js**_ file. In the lib sub folder within the js folder, there are library installation files for jQuery and Knockout.js.


## New Updates & Features
- _**updated on Mar 5, 2019:**_
    >- Some typo updates.

- _**updated on Feb 25, 2019:**_
    >- Updated this README.md file.

- _**updated on Feb 18, 2019:**_
    >- Got rid of the w3school's external linked css styles.
    >- Refined the styling of the App.
    >- Created this README.md file.

- _**updated on Feb 15, 2019:**_
    >- Made the navigation panel slidable and integrated a hamburger menu icon.

- _**updated on Feb 14, 2019:**_
    >- Used the Google Street View Service to get dealer's panorama.

- _**updated on Feb 13, 2019:**_
    >- Used Wikipedia API to get maker relative article links.

- _**updated on Feb 12, 2019:**_
    >- Used Foursquare API to get dealer's tel and opening time.
    >- The list of dealers and associated markers become filterable.

- _**updated on Jan 29, 2019:**_
    >- Refactored the codebase to have dealerModel as the Data Model with Markers integrated inside.

- _**updated on Jan 28, 2019:**_
    >- Handled infoWindow & marker animation, and started implementing KO.

- _**updated on Jan 25, 2019:**_
    >- Created dealers data and made markers.

- _**updated on Jan 24, 2019:**_
    >- Outlined the style and made the map appear.

- _**updated on Jan 9, 2019:**_
    >- Initialize the GitHub repository.


## Future Improvements
The web App should be mobile responsive - the hamburger menu icon should be used to hide the navigation list even on small screens. I will make it resizable using CSS Flexbox and Media Queries. The App should also recalibrate itself based on the screen size.


## Contributions
Feel free to do what you please with this project. Add and/or change anything you'd like!


## References
1. APIs used:
    * [Foursqaure API - Search for Venues](https://developer.foursquare.com/docs/api/venues/search)
    * [Wikipedia API - OpenSearch](https://www.mediawiki.org/wiki/API:Opensearch)
    * [Google Maps API - Street View](https://developers.google.com/maps/documentation/javascript/streetview)

2. Framework used:
    * [Knockout.js - Dynamic Binding](http://knockoutjs.com/documentation/introduction.html)

3. Library used:
    * [jQuery - AJAX](https://api.jquery.com/jQuery.Ajax/#jQuery-ajax-url-settings)

4. Useful Sites:
    * [Utility Functions in Knockout.js](http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html)
    * [CSS - Slide the Page Content to the Right](https://www.w3schools.com/w3css/w3css_sidebar.asp)