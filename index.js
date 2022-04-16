// Initialize and add the map
function initMap() {
  // The location of the user
  const user = { lat: 38.79, lng: -77.61 };
  // The map, centered at the user's location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: user,
  });

  // info window -> if a marker is clicked, this window pops up
  const userContentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">You</h1>' +
    '<div id="bodyContent">' +
    "</div>" +
    "</div>";

  const restaurantContentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Restaurant Name</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

  const userInfoWindow = new google.maps.InfoWindow({
    content: userContentString,
  });

  const restaurantInfoWindow = new google.maps.InfoWindow({
    content: restaurantContentString,
  });

  // The marker, positioned at the user
  const userMarker = new google.maps.Marker({
    position: user,
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
  });

  userMarker.addListener("click", () => {
    userInfoWindow.open({
      anchor: userMarker,
      map,
      shouldFocus: true,
    });
  });

  // blue marker with checkmark ** currently unused
  // const svgMarker = {
  //   path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  //   fillColor: "blue",
  //   fillOpacity: 0.6,
  //   strokeWeight: 0,
  //   rotation: 0,
  //   scale: 2,
  //   anchor: new google.maps.Point(15, 30),
  // };

  // custom marker image -> fork + knife for restaurant
  const image = {
    url: "./assets/restaurant.png",
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
  };

  // copy restaurant marker + the eventListener for the info box
  // restaurant marker  -> eventually make for loop that takes in restaurant lat + lng data and spits out markers for each restaurant
  const marker1 = new google.maps.Marker({
    position: { lat: 38.8, lng: -77.62 },
    map: map,
    icon: image,
    animation: google.maps.Animation.DROP,
  });

  marker1.addListener("click", () => {
    restaurantInfoWindow.open({
      anchor: marker1,
      map,
      shouldFocus: true,
    });
  });
}

window.initMap = initMap;
