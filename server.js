let express = require("express");
let app = express();
let reloadMagic = require("./reload-magic.js");

reloadMagic(app);

app.use("/", express.static("build")); // Needed for the HTML and JS files
app.use("/", express.static("public")); // Needed for local assets

// Your endpoints go after this line

// Your endpoints go before this line

app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

// app.listen(4000, '0.0.0.0', () => { console.log("Server running on port 4000") })

const { PORT = 4000, LOCAL_ADDRESS = "0.0.0.0" } = process.env;
app.listen(PORT, LOCAL_ADDRESS, () => {
  console.log("app running on port" + PORT);
});
