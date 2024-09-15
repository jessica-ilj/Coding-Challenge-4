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

function updateStock(product, sold) {

    product.quantity -= sold;   //function to upddate product stock after sales

    if(product.quantity <= product.lowStockLevel){
        console.log('Out of Stock');
    }

} 

//additional tests to check the function
//updateStock(inventory[0], 40);
// updateStock(inventory[2], 10);
// updateStock(inventory[4], 5);
// updateStock(inventory[3], 11);

function checkLowStock(inventory) {
    inventory.forEach(product => {   //iterates over the inventory array and logs the names of all products that have a quantity below their lowStockLevel.
        if (product.quantity <= product.lowStockLevel) {
            console.log(product.name, 'is low in stock');
        }
    });
}

checkLowStock(inventory);


function calculateInventoryValue(inventory) {
    let assets = 0;

    inventory.forEach(product => {

        assets += product.quantity * product.price;  //iterates over the inventory array and returns the total value of all products in stock. 

    })

    return assets;
}

let result = calculateInventoryValue(inventory)

console.log('The Inventory Value is', result);

function processSale(productName, soldItem){
    let product = inventory.find(item => item.name === productName);  //accepts a product name and the number of units sold

    if(product){
        if(product.quantity >= product.lowStockLevel){
            updateStock(product, soldItem);
        }else{
            console.log('You dont have enough', product.name);
        }
    }else{
        console.log('The product not found!');
    }
};

processSale('Laptop', 10); //finding the products in the array by name
updateStock(inventory[0], 10);// calling updateStock to reduce the quantity

processSale('Laptop DEL', 5); //error message if product not found

processSale('Laptop', 8); //prompts that the inventory is low after the first processing of Laptop sale

console.log(inventory);




