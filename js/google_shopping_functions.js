// Function to count total items
var getItemsCount= function(itemData) {
  return itemData.items.length;
};

// 1. Function which returns the items in the array

var getItems = function(itemData) {
  return itemData.items;
};

// 2. Function that takes an item array, returns a new array of all items of a specified brand

var getItemsByBrand = function(itemData, brandName) {
  var newArr = [];
    for(var i = 0; i < itemData.length; i++) {

    if(itemData[i].product.brand === brandName) {
      newArr.push(itemData[i]);
    }
  }
  return newArr;
};

// 3. Function that takes an item array and returns a new array of all items by a specified author

var getItemsByAuthor = function(itemData, authorName) {
  var newArr = [];
    for(var i = 0; i < itemData.length; i++) {

    if(itemData[i].product.author.name.indexOf(authorName) !== -1) {
      newArr.push(itemData[i]);
    }
  }
  return newArr;
};

// 4. Function that takes an item array and returns an array containing all of the available products

var getAvailableProducts = function(itemData) {
  var newArr = [];
    for(var i = 0; i < itemData.length; i++) {

    if(itemData[i].product.inventories[0].availability === "inStock") {
      newArr.push(itemData[i]);
    }
  }
  return newArr;
};
