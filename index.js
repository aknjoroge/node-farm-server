let fs = require("fs");
let http = require("http");
let url = require("url");
let replace = require("./function/replacer");

//reading the files

let apiData = fs.readFileSync(`${__dirname}/data/app.json`);
let apiobject = JSON.parse(apiData);
let card = fs.readFileSync(`${__dirname}/static/card.html`, "utf-8");
let home = fs.readFileSync(`${__dirname}/static/home.html`, "utf-8");
let product = fs.readFileSync(
  `${__dirname}/static/productDetails.html`,
  "utf-8"
);

//Creating the server
let server = http.createServer(function (request, response) {
  let { pathname, query } = url.parse(request.url, true);

  if (pathname == "/home" || pathname == "/") {
    response.writeHead(200, {
      "Content-type": "text/html",
      "my-own-header": "Techkey Modules",
    });

    let productsData = JSON.parse(apiData).map((element) =>
      replace(card, element)
    );

    let productsString = productsData.join(" ");
    let outputData = home.replace("{%PRODUCTCARDS%}", productsString);

    response.end(outputData);
  } else if (pathname == "/product") {
    let productDetail = replace(product, apiobject[query.id]);

    response.end(productDetail);
  } else if (pathname == "/api") {
    response.writeHead(200, { "Content-type": "Application/json" });
    response.end(apiData);
  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end("<h1>Page not found</h1>");
  }
});
server.listen(3000, function () {
  console.log("server started");
});
