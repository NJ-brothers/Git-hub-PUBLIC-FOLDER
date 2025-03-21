export let cart = JSON.parse(localStorage.getItem('cart'));
// import { selector2 } from "../Scripts/amazon.js";

if(!cart) {
  cart = [
    {
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:1,
    },
    {
      productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity:1,
  
    }
  ];
}

export function addtocart(productId) {
    let matchingItem;
    cart.forEach((item)=>{
      if(productId === item.productId){
        matchingItem = item;
      }
    });
    
    if(matchingItem) {
    matchingItem.quantity += 1;
  } else{
    cart.push({
      productId: productId,
      quantity:1
    })
   }
   
   saveToStorage();

}

export function updatecartquantity(selector2) {
    let cartQuantity = 0;
    let realselector2 = selector2.value;
    cart.forEach((item)=> {
      cartQuantity += item.quantity;
      // console.log(cartQuantity);
      // console.log(item.quantity);
      if(cartQuantity === realselector2 ) {
        cartQuantity = item.quantity + 2;
      }
    });
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

export function removeFromcart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();

}

function saveToStorage() {
  localStorage.setItem('cart',JSON.stringify(cart));

}

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem)=>{
    cartQuantity += cartItem.quantity;
  });


  return cartQuantity;
}