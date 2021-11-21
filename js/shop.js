// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function buy(id) {
    for(let product of products){
        if(id == product.id){
            cartList.push(product);
            // console.log(cartList);
            console.log(cartList);
            calculateSubtotals();
            return
        }; 
    };
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
};

// Exercise 2
function cleanCart() {
    cartList = [];
};

// Exercise 3

function calculateSubtotals() {
    for (let category in subtotal){
        subtotal[category].value=0;
    };
    for(let product of cartList){
        subtotal[product.type].value += product.price;
        // console.log(product.price);
    };  
 console.log(subtotal);
 calculateTotal();
};

    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes


// Exercise 4
function calculateTotal() {
    total=0;
    for(let category in subtotal){
        //console.log(subtotal[category].value);
        total += subtotal[category].value;
    }
    console.log(total);
    // Calculate total price of the cart either using the "cartList" array
    generateCart();
};

// Exercise 5



// function generateCart() {
//     cart = [];
//     for(let product in cartList){
//         if(cart.includes(cartList[product])){
//             for(let item in cart){
//                 if(cart[item]==cartList[product]){
//                     cart[item].quantity ++;  
//                 }     
//             }
//         }else{
//             console.log(cart);console.log(cartList);
//             cart.push(cartList[product]);
//             cart[cart.length-1].quantity=1;
//         } 
//     }
//     console.log(cart);
// };

function generateCart() {
    cart = [];
    for(let product in cartList){
        if(cart.includes(cartList[product])){
            cartList[product].quantity ++;
            cartList[product].subtotal=cartList[product].price*cartList[product].quantity;
            applyPromotionsCart();
           }else{
            cart.push(cartList[product]);
            cart[cart.length-1].quantity=1;
            cart[cart.length-1].subtotal=cart[cart.length-1].price;
            cart[cart.length-1].subtotalWithDiscount=0;
            
        } 
        
    }
    console.log(cart);
    
};
    
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.   








// Exercise 6
function applyPromotionsCart() {
    for(let product of cart){
        if(product.id == 1 && product.quantity >= 3){
            let newPrice = 10;
            product.subtotalWithDiscount = product.quantity*newPrice;
        }
        if(product.id == 3 && product.quantity >= 10){
            let newPrice = (product.price * 2)/3;
            let newPriceRound = newPrice.toFixed(2);
            product.subtotalWithDiscount = product.quantity*newPriceRound;
        }
    }
    console.log(cart);
    // Apply promotions to each item in the array "cart"
};

// Exercise 7
// function addToCart(id) {
//     // Refactor previous code in order to simplify it 
//     // 1. Loop for to the array products to get the item to add to cart
//     // 2. Add found product to the cart array or update its quantity in case it has been added previously.
// }

function addToCart(id) {
    for(let product of products){
        if(id == product.id){
            if(cart.includes(cart[product.id])){
                console.log('im inside the includes if');
                [product].quantity ++;
                [product].subtotal=[product].price*[product].quantity;
                applyPromotionsCart();
               }else{
                cart.push(product);
                cart[cart.length-1].quantity=1;
                cart[cart.length-1].subtotal=cart[cart.length-1].price;
                cart[cart.length-1].subtotalWithDiscount=0;
                
            } 
            console.log(cart);
            //calculateSubtotals();
           
        }
    }

};

// function buy(id){
//     addToCart(id);
// };

// Exercise 9
function removeFromCart(id) {
    console.log('remove from cart function');
    for (let product of cart){
        if(id == product.id){
            console.log(product.name);
            if(product.quantity == 1){
                console.log('i have been deleted');
                cart.splice[product,1];
            }else{
            console.log(product.quantity);
            product.quantity --;
            console.log(product.quantity);

            }
        }
    }

};



    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

// Exercise 10
let shoppingList = document.getElementById('shoppingList');
let shoppingListQuantity = document.getElementById('shoppingListQuantity');
let shoppingListSubtotal = document.getElementById('shoppingListSubtotal');
let shoppingListBtn = document.getElementById('shoppingListBtn');

function printCart() {
    generateCart();
    for(let product of cart){
        let listItem = document.createElement('li');
        listItem.innerHTML = product.name;
        shoppingList.appendChild(listItem);

        let listItemQuantity = document.createElement('li');
        listItemQuantity.innerHTML = product.quantity;
        shoppingListQuantity.appendChild(listItemQuantity);

        let listItemSubtotal = document.createElement('li');
        listItemSubtotal.innerHTML = product.subtotal;
        shoppingListSubtotal.appendChild(listItemSubtotal);

        let removeItem = document.createElement('button');
        removeItem.innerHTML = 'minus';
        shoppingListBtn.appendChild(removeItem);
        removeItem.setAttribute('click', removeFromCart(product.id));
        // removeItem.onclick = removeFromCart(product.id);
    }
};

function emptyShoppingList(){
    shoppingList.innerHTML='';
    shoppingListQuantity.innerHTML='';
    shoppingListSubtotal.innerHTML='';
    shoppingListBtn.innerHTML='';
};

// Fill the shopping cart modal manipulating the shopping cart dom
