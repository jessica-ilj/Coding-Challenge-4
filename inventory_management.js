const inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },  //Creating & initializing inventory with product objects
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },  
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
]

function displayProductDetails(product){ 
    let pro = product[1]; //function to check for a product

    console.log('Product Name: ' + pro.name +', ', 'Price : ' + pro.price + ', ', 'Quantity: '+pro.quantity);

     pro.lowStockLevel >= pro.quantity ? console.log('In Stock') : console.log('Low Stock') ;

}

displayProductDetails(inventory);
