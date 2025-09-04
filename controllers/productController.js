const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
    activeAddProduct: true,
    formCss: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res) => {
  res.render("shop", {
    prods: products,
    pageTitle: "My Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCss: true,
  });
};
