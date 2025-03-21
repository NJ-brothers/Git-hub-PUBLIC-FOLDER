// const products = [
//   {
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating: { stars: 4.5, count: 87 },
//     price_cents: 1090
//   },
//   {
//     image: 'images/products/intermediate-composite-basketball.jpg',
//     name: 'Intermediate Size Basketball',
//     rating: { stars: 4, count: 127 },
//     price_cents: 2095
//   },
//   {
//     image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: { stars: 4.5, count: 56 },
//     price_cents: 799
//   },
//   {
//     image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: { stars: 4.5, count: 56 },
//     price_cents: 799
//   }
// ];

import {cart,addtocart,updatecartquantity,calculateCartQuantity} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from "./utilities/money.js";
import { UpdateCartQuantity } from './Checkout.js';

let productsHTML = '';

// export let selector2 = document.getElementById("Selector-plus-2");

products.forEach(product => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>
      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>
      <div class="product-rating-container">
        <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>
      <div class="product-price">
        $${formatCurrency(product.priceCents)}
      </div>
      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2" id="Selector-plus-2">2</option>
          <option value="3" id="Selector-plus-3">3</option>
          <option value="4" id="Selector-plus-4">4</option>
          <option value="5" id="Selector-plus-5">5</option>
          <option value="6" id="Selector-plus-6">6</option>
          <option value="7" id="Selector-plus-7">7</option>
          <option value="8" id="Selector-plus-8">8</option>
          <option value="9" id="Selector-plus-9">9</option>
          <option value="10" id="Selector-plus-10">10</option>
        </select>
      </div>
      <div class="product-spacer"></div>
      <div class="added-to-cart">
        <img src="images/icons/checkmark.png"> Added
      </div>
      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;


document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
    const productId = button.dataset.productId;
    addtocart(productId);
    // updatecartquantity(selector2);

  });
});

UpdateCartQuantity();


// function addtocart(productId) {
//       let matchingItem;
//       cart.forEach((item)=>{
//         if(productId === item.productId){
//           matchingItem = item;
//         }
//       });
      
//       if(matchingItem) {
//       matchingItem.quantity += 1;
//     } else{
//       cart.push({
//         productId: productId,
//         quantity:1
//       })
//      }  
// }

// function updatecartquantity() {
//       let cartQuantity = 0;
//       cart.forEach((item)=> {
//         cartQuantity += item.quantity;
//       });
//       document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
// }