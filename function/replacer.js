//Custom module
module.exports = function respoond(template, element) {
  let output = template.replace(/{%PRODUCTNAME%}/g, element.productName);
  output = output.replace(/{%QUANTITY%}/g, element.quantity);
  output = output.replace(/{%IMAGE%}/g, element.image);
  output = output.replace(/{%ID%}/g, element.id);
  output = output.replace(/{%PRICE%}/g, element.price);
  output = output.replace(/{%DESCRIPTION%}/g, element.description);
  output = output.replace(/{%LOCATION%}/g, element.from);
  output = output.replace(/{%NUTRIENTS%}/g, element.nutrients);
  if (!element.organic) {
    output = output.replace(/{%NOTORGANIC%}/g, "not-organic");
  }

  return output;
};
