	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		image: "images/brocoli.jpg",
		vegetarian: true,
		glutenFree: true,
		vegNoGluten: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Bread",
		image: "images/bread.jpg",
		vegetarian: true,
		glutenFree: false,
		vegNoGluten: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Hot Dog",
		image: "images/hot-dog.jpg",
		vegetarian: false,
		glutenFree: true,
		vegNoGluten: false,
		organic: false,
		price: 3.09
	},
	{
		name: "Salmon",
		image: "images/salmon.jpeg",
		vegetarian: false,
		glutenFree: true,
		vegNoGluten: false,
		organic: false,
		price: 7.04
	},
	{
		name: "Apple",
		image: "images/apple.jpg",
		vegetarian: true,
		glutenFree: true,
		vegNoGluten: true,
		organic: true,
		price: 2.12
	},
	{
		name: "Streusel",
		image: "images/streusel.jpg",
		vegetarian: false,
		glutenFree: false,
		vegNoGluten: false,
		organic: false,
		price: 3.69
	},
	{
		name: "Coffee",
		image: "images/coffee.jpg",
		vegetarian: true,
		glutenFree: true,
		vegNoGluten: true,
		organic: false,
		price: 2.49
	},
	{
		name: "Beef",
		image: "images/beef.jpg",
		vegetarian: false,
		glutenFree: true,
		vegNoGluten: false,
		organic: false,
		price: 3.99
	},
	{
		name: "Pasta",
		image: "images/pasta.jpg",
		vegetarian: true,
		glutenFree: false,
		vegNoGluten: false,
		organic: false,
		price: 3.38
	},
	{
		name: "Strawberry Shortcake",
		image: "images/strawberry-shortcake.jpg",
		vegetarian: true,
		glutenFree: false,
		vegNoGluten: false,
		organic: false,
		price: 8.39
	},
	{
		name: "Olive oil",
		image: "images/olive-oil.jpg",
		vegetarian: true,
		glutenFree: true,
		vegNoGluten: true,
		organic: true,
		price: 2.58
	},
	{
		name: "Almond",
		image: "images/almond.jpg",
		vegetarian: true,
		glutenFree: true,
		vegNoGluten: true,
		organic: true,
		price: 3.51
	},
	{
		name: "Tuna Sandwich",
		image: "images/tuna-sandwich.jpg",
		vegetarian: false,
		glutenFree: false,
		vegNoGluten: false,
		organic: false,
		price: 3.11
	},
	{
		name: "Chicken",
		image: "images/chicken.jpg",
		vegetarian: false,
		glutenFree: true,
		vegNoGluten: false,
		organic: false,
		price: 3.02
	},
	{
		name: "Honey",
		image: "images/honey.jpg",
		vegetarian: true,
		glutenFree: true,
		vegNoGluten: true,
		organic: true,
		price: 2.54
	},
	{
		name: "Regular milk",
		image: "images/regular-milk.jpg",
		vegetarian: true,
		glutenFree: true,
		vegNoGluten: true,
		organic: false,
		price: 2.18
	},
	{
		name: "Almond milk",
		image: "images/almond-milk.jpg",
		vegetarian: true,
		glutenFree: true,
		vegNoGluten: true,
		organic: true,
		price: 3.45
	},
];
	
// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, restriction2) {	
	//sort arrays
	//Code pour sort inspiré de https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
	prods.sort(function(a, b) { return a.price-b.price; });
	
	let product_organic = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction2 == "Organic") && (prods[i].organic == true)){
			product_organic.push(prods[i]);
		}
		else if ((restriction2 == "None") && (prods[i].organic == false)){
			product_organic.push(prods[i]);
		}
		else if ((restriction2 == "All")){
			product_organic.push(prods[i]);
		}
	}
	let product_names = [];
	for (let i=0; i<product_organic.length; i+=1) {
		if ((restriction == "VegNoGluten") && (product_organic[i].vegNoGluten == true)){
			product_names.push(product_organic[i].name);
		}
		else if ((restriction == "Vegetarian") && (product_organic[i].vegetarian == true)){
			product_names.push(product_organic[i].name);
		}
		else if ((restriction == "GlutenFree") && (product_organic[i].glutenFree == true)){
			product_names.push(product_organic[i].name);
		}
		else if (restriction == "None"){
			product_names.push(product_organic[i].name);
		}
	}
	return product_names;
}

function restrictListProductPrices(prods, restriction, restriction2) {	
	//sort arrays
	//Code pour sort inspiré de https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
	prods.sort(function(a, b) { return a.price-b.price; });
	
	let product_organic = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction2 == "Organic") && (prods[i].organic == true)){
			product_organic.push(prods[i]);
		}
		else if ((restriction2 == "None") && (prods[i].organic == false)){
			product_organic.push(prods[i]);
		}
		else if ((restriction2 == "All")){
			product_organic.push(prods[i]);
		}
	}
	let product_prices = [];
	for (let i=0; i<product_organic.length; i+=1) {
		if ((restriction == "VegNoGluten") && (product_organic[i].vegNoGluten == true)){
			product_prices.push(product_organic[i].price);
		}
		else if ((restriction == "Vegetarian") && (product_organic[i].vegetarian == true)){
			product_prices.push(product_organic[i].price);
		}
		else if ((restriction == "GlutenFree") && (product_organic[i].glutenFree == true)){
			product_prices.push(product_organic[i].price);
		}
		else if (restriction == "None"){
			product_prices.push(product_organic[i].price);
		}
	}
	return product_prices;
}

function restrictListProductImages(prods, restriction, restriction2) {	
		//sort arrays
	//Code pour sort inspiré de https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
	prods.sort(function(a, b) { return a.price-b.price; });
	
	let product_organic = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction2 == "Organic") && (prods[i].organic == true)){
			product_organic.push(prods[i]);
		}
		else if ((restriction2 == "None") && (prods[i].organic == false)){
			product_organic.push(prods[i]);
		}
		else if ((restriction2 == "All")){
			product_organic.push(prods[i]);
		}
	}
	let product_images = [];
	for (let i=0; i<product_organic.length; i+=1) {
		if ((restriction == "VegNoGluten") && (product_organic[i].vegNoGluten == true)){
			product_images.push(product_organic[i].image);
		}
		else if ((restriction == "Vegetarian") && (product_organic[i].vegetarian == true)){
			product_images.push(product_organic[i].image);
		}
		else if ((restriction == "GlutenFree") && (product_organic[i].glutenFree == true)){
			product_images.push(product_organic[i].image);
		}
		else if (restriction == "None"){
			product_images.push(product_organic[i].image);
		}
	}
	return product_images;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
