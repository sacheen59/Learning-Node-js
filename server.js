const path = require("path");
const express = require("express");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./utils/path");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine','pug');
app.set('views','views')
// middleware

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404',{pageTitle: 'Page Not Found'});
});

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
