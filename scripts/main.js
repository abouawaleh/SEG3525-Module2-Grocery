
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_accordion.asp

function openInfo(panelName) {
	
	// Show the current panel if display is "none", hide if "block"
	if (document.getElementById(panelName).style.display === "none"){
	  document.getElementById(panelName).style.display = "block";
	} else {
	  document.getElementById(panelName).style.display = "none";
	}
}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    var s3 = document.getElementById(slct3);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s3.innerHTML = "";
		debugger;
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value, s2.value);
    var priceArray = restrictListProductPrices(products, s1.value, s2.value);
    var imageArray = restrictListProductImages(products, s1.value, s2.value);
	
	//Code pour créer table inspiré de https://stackoverflow.com/questions/14643617/create-table-using-javascript
	
	var tbl = document.createElement('table');
  	tbl.style.width = '100%';
	
  	var thead = document.createElement('thead');
    	var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('\u0020'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Product'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('\u0020'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Price'));
        tr.appendChild(th); 
	thead.appendChild(tr);
  	tbl.appendChild(thead);
	
  	var tbdy = document.createElement('tbody');
	
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
  	for (var i = 0; i < optionArray.length; i++) {
    		var tr = document.createElement('tr');
		
        	var td = document.createElement('td');
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		td.appendChild(checkbox);
        	tr.appendChild(td);
		
        	var td = document.createElement('td');
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label');
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		td.appendChild(label);
		tr.appendChild(td);
		
		var td = document.createElement('td');
		var productImage = imageArray[i];
		// create an image for the checkbox, and also add in HTML DOM
		var img = document.createElement('img');
		img.src = productImage;
		td.appendChild(img);
		tr.appendChild(td);
		
        	var td = document.createElement('td');
		var productPrice = priceArray[i];
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label');
		label.htmlFor = productPrice;
		label.appendChild(document.createTextNode("$ "+productPrice));
		td.appendChild(label);
		tr.appendChild(td);
		
		tbdy.appendChild(tr);
      	}    	
  	tbl.appendChild(tbdy);
  	s3.appendChild(tbl);
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $ " + getTotalPrice(chosenProducts)));
		
}
