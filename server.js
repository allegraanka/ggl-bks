const express = require("express");
const path = require("path");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/books/:search", function(req, res) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${req.params.search}:keyes&key=${process.env.GOOGLE_API_KEY}`;
  console.log(url);
  axios.get(url)
  .then(function(response) {
    console.log(response.data.items[0]);
  })
  .catch(function(error) {
    console.log(error);
  });
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
