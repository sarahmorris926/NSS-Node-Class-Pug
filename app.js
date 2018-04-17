"use strict";

const express = require("express");
const app = express();
const names = ["Moe", "Larry", "Barbabra"];

app.set("view engine", "pug");

app.use(express.static(__dirname + "/public"));
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/")
);

app.get("/", (req, res, next) => {
  let homeData = {
    subtitle: "This came from my JS data",
    names,
    showMe: true
    // setShowMe: () => {console.log("Clicked") this.showMe = false}
  };
  res.render("index", homeData);
});

app.get("/article", (req, res, next) => {
  res.render("article", {
    subtitle: "This came from my JS data",
    names
  });
});

let nationalParks = {
  AK: {
    state: "Alaska",
    parks: [{ name: "Cold Stuff Place" }, { name: "Brrrrr Nat'l Park" }]
  },
  AR: {
    state: "Arkansas",
    parks: [
      { name: "Paddle Faster Refuge" },
      { name: "Dueling Banjos Nat'l Monument" }
    ]
  },
  AZ: { state: "Arizona", parks: [] },
  CA: { state: "California", parks: [] },
  CO: { state: "Colorado", parks: [] },
  FL: { state: "Florida", parks: [] },
  HI: { state: "Hawaii", parks: [{ name: "Surf's Up National Seashore" }] },
  ID: { state: "Idaho", parks: [{ name: "World's Biggest Tater Park" }] },
  KY: { state: "Kentucky", parks: [] },
  ME: { state: "Maine", parks: [] },
  MI: { state: "Michigan", parks: [] },
  MN: { state: "Minnesota", parks: [] },
  MT: { state: "Montana", parks: [] },
  TN: {
    state: "Tennessee",
    parks: [{ name: "Rush Hour Gridlock Picnic Area" }]
  },
  ND: { state: "North Dakota", parks: [] },
  NM: { state: "New Maexico", parks: [] },
  NV: { state: "Nevada", parks: [] },
  OH: {
    state: "Ohio",
    parks: [{ name: "Flat 'n Boring Park" }, { name: "Filthy Lakes Beach" }]
  },
  OR: { state: "Oregon", parks: [] },
  SC: { state: "South Carolina", parks: [] },
  SD: {
    state: "South Dakota",
    parks: [{ name: "Dead White Guys National Park" }]
  },
  TX: { state: "Texas", parks: [] },
  UT: { state: "Utah", parks: [] },
  VA: { state: "Virginia", parks: [] },
  VI: {
    state: "Virgin Islands",
    parks: [{ name: "Worst Ski Resort Ever National Park" }]
  },
  WA: { state: "Washington", parks: [] },
  WY: { state: "Wyoming", parks: [{ name: "Cowboy Happy Land" }] }
};

app.get('/parks', (req, res, next) => {
  res.render('parks', {parks: nationalParks});
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));