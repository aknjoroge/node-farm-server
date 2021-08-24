### Project Title

## Node farm project

## Description

html rendering project using json data.

## Getting Started

### Dependencies

- nodejs.

Run `node -v` to confirm node is installed

```
node -v
v10.16.0
```

### Running the program

1.  `node index.js`

### Code

Html files are located in the static folder and are uploaded through the "html-data" branch

The json file is located in the data folder and are uploaded through the "json-data" branch

fs (file system) module is used to read the static files

```javascript
let fs = require("fs");
```

`fs` has both synchronous and Asynchronous file reading method, in this project i use the synchronous method

```javascript
fs.readFileSync(`${__dirname}/data/aap.json`);
```

For A **large** project its better to use the Asynchronous method of fs

```javascript
fs.readFile(`${__dirname}/data/app.json`, "utf-8", function (error, data) {
  /* data error */
});
```

The server runs on port `3000` using the http module, can change the port to any another number, access the app through localhost:PORTNUMBER ex localhost:3000

OR 127.0.0.1:3000

```javascript
server.listen(3000, "127.0.0.1", function () {
  console.log("server has started");
});
```

The log message is displayed once the server has started

We read the json data and convert it to an object using JSON.parse

```javascript
let apiData = fs.readFileSync(`${__dirname}/data/app.json`);
let apiobject = JSON.parse(apiData);
```

`${__dirname}` is used to define the current directory

In the html we have place hoders ex `{%PRODUCTNAME%}` which we replace with the json data through a function called replacer, found in the function folder `let output = htmldata.replace(/{%PRODUCTNAME%}/g, element.productName);`

The url module `let url = require("url");` is used to extract query parameters from the request url `let { pathname, query } = url.parse(request.url, true);`

We then use object destructuring to get the pathname and query out of the object

Routes are conditionally rendered using the destructured pathname

```javascript
if (pathname === "/") {
  /*Code */
}
```

## Etc

> If you have any advise or problems about the code feel free to fork it and contribute.

## Author

Alexander karanja
[@Twitter](https://twitter.com/aknjoroge)

## Acknowledgments

[Jonas Schmedtmann](https://twitter.com/jonasschmedtman)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License;
