	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.04
	},
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.12
	},
	{
		name: "Beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 3.99
	},
	{
		name: "Pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.38
	},
	{
		name: "Olive oil",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.58
	},
	{
		name: "Almond",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.51
	},
	{
		name: "Tuna Sandwich",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 3.11
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 3.02
	},
	{
		name: "Honey",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.54
	},
	{
		name: "Regular milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.18
	},
	{
		name: "Almond milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.45
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, restriction2) {	
	let product_organic = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction2 == "Organic") && (prods[i].organic == true)){
			product_organic.push(prods[i].name);
		}
		else
			product_organic.push(prods[i].name);
		}
	}
	let product_names = [];
	for (let i=0; i<product_organic.length; i+=1) {
		if ((restriction == "Vegetarian") && (product_organic[i].vegetarian == true)){
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
	let product_organic = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction2 == "Organic") && (prods[i].organic == true)){
			product_organic.push(prods[i].price);
		}
		else
			product_organic.push(prods[i].price);
		}
	}
	let product_prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (product_organic[i].vegetarian == true)){
			product_prices.push(prods[i].price);
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
