const path = require("path");
const express = require("express");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./utils/path");

const app = express();
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.engine(
//   "hbs",
//   expressHbs({
//     layoutDirs: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// ); // for handlebars

// app.set('view engine','pug');
app.set("view engine", "ejs");
app.set("views", "views");
// middleware

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
