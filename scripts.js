/*
// All items made by Sony

var sonyItems = getItemsByBrand(getItems(products), "Sony");

console.log(sonyItems);

// All items made by Sony that are available

console.log (getAvailableProducts(sonyItems));

// All available items by the author "Adorama Camera"

var acItems = getItemsByAuthor(getItems(products), "Adorama Camera");

console.log(getAvailableProducts(acItems));

// All items made by Nikon with the author eBay

var nikonItems = getItemsByBrand(getItems(products), "Nikon");

console.log(getItemsByAuthor(nikonItems, "eBay"));
*/

// User input search by brand

var brandInput = prompt("What would you like to see?");
var count = 0;
var brandListing = getItemsByBrand(getItems(products), brandInput);

if(brandListing.length === 0) {
  console.log("Sorry, no results were found");
} else console.log(brandListing);

