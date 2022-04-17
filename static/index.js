let map;
let service;
let infowindow;

const lat = latitude;
const lng = longitude;
const employeeCount = numEmployees;

function initMap() {
  const user = { lat: lat, lng: lng };

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: user,
    zoom: 15,
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

  const userInfoWindow = new google.maps.InfoWindow({
    content: userContentString,
  });

  const userMarker = new google.maps.Marker({
    position: user,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
  });

  userMarker.addListener("click", () => {
    userInfoWindow.open({
      anchor: userMarker,
      map,
      shouldFocus: true,
    });
  });

  // const request = {
  //   query: "restaurant",
  //   fields: ["name", "geometry"],
  // };

  // service = new google.maps.places.PlacesService(map);
  // service.findPlaceFromQuery(request, (results, status) => {
  //   if (status === google.maps.places.PlacesServiceStatus.OK && results) {
  //     for (let i = 0; i < results.length; i++) {
  //       createMarker(results[i]);
  //     }

  //     map.setCenter(results[0].geometry.location);
  //   }
  // });

  const image = {
    url: "./static/assets/restaurant.png",
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
  };

  const sdcs =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">SuperDawg Drive-In </h1>' +
    '<div id="bodyContent">' +
    "<p><b>SuperDawg Drive-In</b>, is rated " +
    "95/100 on our sustainability scale.  " +
    "Avatars of Superdawg founders Maurie and Flaurie Berman stand guard over this venerable Chicago drive-in at the intersection of Devon, Nagle, and Milwaukee; customers can spot those giant hot dog statues bearing the Bermans’ likenesses from blocks away. Superdawg is a throwback dining experience where customers park their cars and talk to staff through crackling drive-in speakers and carhops bring out trays of food. Superdawg’s offering isn’t a traditional Chicago-style dog. Rather than a Vienna Beef frank, Superdawg uses a thick, proprietary all-beef sausage that comes with mustard, pickled green tomato, and chopped Spanish onions. This is all cradled in a box of crinkle fries. There’s a second suburban location in Wheeling. " +
    "</div>" +
    "</div>";
  const sdiw = new google.maps.InfoWindow({
    content: sdcs,
  });

  const superDawg = new google.maps.Marker({
    position: { lat: 41.99677325478774, lng: -87.78701654434889 },
    map: map,
    draggable: false,
    icon: image,
    animation: google.maps.Animation.DROP,
  });

  superDawg.addListener("click", () => {
    sdiw.open({
      anchor: superDawg,
      map,
      shouldFocus: true,
    });
  });
  const Larson = new google.maps.Marker({
    position: { lat: 41.978606941682976, lng: -87.66862805584111 },
    map: map,
    draggable: false,
    icon: image,
    animation: google.maps.Animation.DROP,
  });

  const lcs =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Lost Larson</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Lost Larson</b>, is rated " +
    "87/100 on our sustainability scale. " +
    "When Lost Larson debuted in Andersonville in 2018, the beloved neighborhood institution Swedish Bakery had just closed. There were bound to be comparisons between the defunct bakery and the ambitious upstart. Since then, chef and owner Bobby Schaffer has shattered all expectations, keeping true to his fine dining roots at Grace and Blue Hill at Stone Barns, where he led the pastry programs. Though the breads and pastries have Scandinavian influences, Lost Larson isn’t locked on a single theme. The bakery and cafe doles out whole wheat ham-and-cheese croissants, scones, quiche, and the fabled cardamom bun. Be sure to order online early because stock sells out, but the Andersonville and the new Wicker Park locations both reserve inventory for walk-in customers." +
    "</div>" +
    "</div>";
  const liw = new google.maps.InfoWindow({
    content: lcs,
  });

  Larson.addListener("click", () => {
    liw.open({
      anchor: Larson,
      map,
      shouldFocus: true,
    });
  });
  const Luellas = new google.maps.Marker({
    position: { lat: 41.96520249349684, lng: -87.68611784397496 },
    map: map,
    draggable: false,
    icon: image,
    animation: google.maps.Animation.DROP,
  });
  const lucs =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Luellas Southern Kitchen</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Luellas Southern Kitchen</b>, is rated " +
    "76/100 on our sustainability scale.   " +
    "While chef Darnell Reed toiled in hotel kitchens in downtown Chicago, he imagined opening a restaurant that honored his great-grandmother Luella, who arrived in Chicago from Mississippi in 1943. Now, his tiny Lincoln Square restaurant serves some of the city’s best Southern food, including cream shrimp and grits, chicken gumbo, and a mighty platter of fried chicken and waffles. This Black-owned restaurant on the North Side is also a popular brunch destination. It’s a casual spot with counter ordering, but it brings a serious menu where everyone can find something hearty and delectable. " +
    "</div>" +
    "</div>";
  const luiw = new google.maps.InfoWindow({
    content: lucs,
  });

  Luellas.addListener("click", () => {
    luiw.open({
      anchor: Luellas,
      map,
      shouldFocus: true,
    });
  });
  const Smoque = new google.maps.Marker({
    position: { lat: 41.95018628345257, lng: -87.72785420288209 },
    map: map,
    draggable: false,
    icon: image,
    animation: google.maps.Animation.DROP,
  });
  const smcs =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Smoque BBQ</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Smoque BBQ</b>, is rated " +
    "35/100 on our sustainability scale. " +
    "Description: With two smokers to prep meaty St. Louis-style and baby-back ribs, tender brisket, apple-and-oak-smoked pulled pork, and more, this destination on the Northwest Side neighborhood of Irving Park delivers barbecue in the style of Kansas City and Memphis. During the pandemic, owner Barry Sorkin expanded takeout and outdoor dining options, including a patio in the former parking lot." +
    "</div>" +
    "</div>";
  const smiw = new google.maps.InfoWindow({
    content: smcs,
  });

  Smoque.addListener("click", () => {
    smiw.open({
      anchor: Smoque,
      map,
      shouldFocus: true,
    });
  });
  const FriedChicken = new google.maps.Marker({
    position: { lat: 41.94263568391839, lng: -87.70277160644379 },
    map: map,
    draggable: false,
    icon: image,
    animation: google.maps.Animation.DROP,
  });
  const fccs =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Honey Butter Fried Chicken</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Honey Butter Fried Chicken</b>, is rated " +
    "88/100 on our sustainability scale. " +
    "Description: A perennial North Side favorite, Honey Butter Fried Chicken grew from a series underground dinner parties thrown by a pair of talented chefs. These crisp and skinless pieces of meat come with the restaurant’s signature honey butter. But beyond the food, Christine Cikowksi and Josh Kulp are committed to improving restaurant working conditions and have championed a business model where employees receive health care benefits. That explains why prices that are higher than the average counter service joint, but HBFC reports strong worker retention, which is a rarity in the industry.</i> " +
    "</div>" +
    "</div>";
  const fciw = new google.maps.InfoWindow({
    content: fccs,
  });

  FriedChicken.addListener("click", () => {
    fciw.open({
      anchor: FriedChicken,
      map,
      shouldFocus: true,
    });
  });
  const Ristorante = new google.maps.Marker({
    position: { lat: 41.9307898539798, lng: -87.65581473437592 },
    map: map,
    draggable: false,
    icon: image,
    animation: google.maps.Animation.DROP,
  });
  const rics =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Pat\'s Pizza and Ristorante</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Pat's Pizza and Ristorante</b>, is rated " +
    "92/100 on our sustainability scale. " +
    "Description: Chicago thin-crust pizza is having a moment, with the city’s pizza makers eager to defy the notion that this is only a deep-dish town. (Settle down, deep-dish fans. The thick slices are still awesome.) Pat’s Pizza in Lakeview has a storied history of popularizing tavern-style pies. This family-owned spot sports some of the crispiest, thinnest pizzas around. Pat’s uses its own sausage blend for the pizza, which also helps set this place apart. Pies are available for carryout, delivery, patio, and indoor dining." +
    "</div>" +
    "</div>";
  const riiw = new google.maps.InfoWindow({
    content: rics,
  });

  Ristorante.addListener("click", () => {
    riiw.open({
      anchor: Ristorante,
      map,
      shouldFocus: true,
    });
  });

  const Antojeria = new google.maps.Marker({
    position: { lat: 41.928909485187354, lng: -87.6977407034288 },
    map: map,
    draggable: false,
    icon: image,
    animation: google.maps.Animation.DROP,
  });
  const ancs =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Mi Tocaya Antojeria</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Mi Tocaya Antojeria</b>, is rated " +
    "77/100 on our sustainability scale. " +
    "Description: Few chefs share the talent and drive that Diana Dávila exhibits while showcasing a dazzling display of small Mexican dishes in Logan Square. Dávila isn’t shy about taking risks: she isn’t pandering to the typical American diner. This isn’t a place to fill up on chips and salsa with a pitcher of margaritas; Dávila left her previous job after owners tried to force those expectations on her. That’s not to say there’s not a taste of the familiar — the guacamole, steak burrito, and fried oyster tacos are all stellar. But customers should dive into unique items like peanut butter lengua and tlacoyo de nopalitos, the latter of which represents Dávila’s obsession with pre-Hispanic Mexico." +
    "</div>" +
    "</div>";
  const aniw = new google.maps.InfoWindow({
    content: ancs,
  });

  Antojeria.addListener("click", () => {
    aniw.open({
      anchor: Antojeria,
      map,
      shouldFocus: true,
    });
  });

  const LulaCafe = new google.maps.Marker({
    position: { lat: 41.92764213122275, lng: -87.70678864909515 },
    map: map,
    draggable: false,
    icon: image,
    animation: google.maps.Animation.DROP,
  });
  const lccs =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Lula Cafe</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Lula Cafe</b>, is rated " +
    "a 93/100 on our sustainability scale.  " +
    "Description: Chef and owner Jason Hammel continue to keep community at the forefront of the operations at Lula Cafe, which has, since 1999, endeared itself to many in Logan Square as a welcoming space for New American cuisine. This is an all-day cafe with fresh-baked pastries and a stellar breakfast burrito. At night, the wine list goes deep to accompany dishes like roast chicken, beet bruschetta, and summer squash with Santa Rosa plums, tropea onions, and basil. Find a seat at the bar and enjoy oysters and snacks like chicken liver mousse.</i> " +
    "</div>" +
    "</div>";
  const lciw = new google.maps.InfoWindow({
    content: lccs,
  });

  LulaCafe.addListener("click", () => {
    lciw.open({
      anchor: LulaCafe,
      map,
      shouldFocus: true,
    });
  });
  const Pequods = new google.maps.Marker({
    position: { lat: 41.921926119946775, lng: -87.66437925952687 },
    map: map,
    draggable: false,
    icon: image,
    animation: google.maps.Animation.DROP,
  });
  const pecs =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Pequods Pizza</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Pequods Pizza</b>, is rated " +
    "79/100 on our sustainability scale.  " +
    "Description: Chicago-style deep-dish pizza is a polarizing topic for locals that has bred resentment in recent years, as national media consistently uses it in its ongoing struggle to understand Chicago. It’s not that deep dish pizza isn’t delicious; it’s just that Chicagoans don’t want the city to be defined by the dish alone. Though Pequod’s version isn’t exactly the deep dish that tourists expect — it’s thinner than the stuffed pizza many travel magazines feature — it’s still the premier take on the style. The crust features a chewy rim of caramelized cheese that may appear burnt, but that chew adds a special texture that sets it apart. There are locations in Lincoln Park and suburban Morton Grove. Be prepared to wait on weekends." +
    "</div>" +
    "</div>";
  const peiw = new google.maps.InfoWindow({
    content: pecs,
  });

  Pequods.addListener("click", () => {
    peiw.open({
      anchor: Pequods,
      map,
      shouldFocus: true,
    });
  });
  const Redhot = new google.maps.Marker({
    position: { lat: 41.91746339581054, lng: -87.68925470246887 },
    map: map,
    draggable: false,
    icon: image,
    animation: google.maps.Animation.DROP,
  });
  const rhcs =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Redhot Ranch</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Redhot Ranch</b>, is rated " +
    "73/100 on our sustainability scale.  " +
    "Description: It’s hard for hot dog stands to differentiate themselves from the pack in Chicago as all of them, for the most part, use the same product: dependable Vienna Beef. But Red Hot Ranch has managed. First, the stand uses sausage with natural casings. This provides the dogs with a unique bite, snappier than the Oscar Mayers that many Americans grew up eating. The stand also serves Depression Dogs, the Chicago variant that comes with french fries in the bun. The griddle burgers are also of note. There are few meals that as satisfying late at night. Red Hot Ranch has locations in Lakeview and Bucktown. Additionally, 35th Street Red Hots, near Sox Park in Bridgeport, is from the same owners and has an identical menu." +
    "</div>" +
    "</div>";
  const rhiw = new google.maps.InfoWindow({
    content: rhcs,
  });

  Redhot.addListener("click", () => {
    rhiw.open({
      anchor: Redhot,
      map,
      shouldFocus: true,
    });
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;
  // custom image for restaurants
  const image = {
    url: "./static/assets/restaurant.png",
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
  };

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
    icon: image,
    animation: google.maps.Animation.DROP,
  });

  // marker.addListener("click", () => {
  //   restaurantInfoWindow.open({
  //     anchor: marker,
  //     map,
  //     shouldFocus: true,
  //   });
  // });

  // google.maps.event.addListener(marker, "click", () => {
  //   infowindow.setContent(place.name || "helo");
  //   infowindow.open(map);
  // });
}

window.initMap = initMap;
