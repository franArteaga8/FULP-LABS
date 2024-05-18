"use strict";
console.log("Hi, hello");

// SUBTOTAL AUTO UPDATE

const qtyInput = document.querySelectorAll("input");

[...qtyInput].forEach((input) => {
  input.addEventListener("change", () => {
    const parentProduct = input.closest(".product"); // Find the closest product container
    const subtotalItem = parentProduct.querySelector(".subtotal"); // Find the subtotal within the product container
    const costItem = parseFloat(parentProduct.querySelector(".cost").innerText); // Find the cost within the product container

    subtotalItem.innerText = input.value * costItem + "€";
  });
});

// CALCULATE TOTAL PRICE

const totalPriceButton = document.getElementById("calcTotalPrice");
const totalAmount = document.getElementById("totalAmount");
const subtotalElement = document.getElementsByClassName("subtotal");

totalPriceButton.addEventListener("click", () => {
  const subtotals = [...subtotalElement].map((e) => parseInt(e.innerText));
  totalAmount.innerText = subtotals.reduce((acc, curr) => acc + curr, 0);
});

// DELETE ITEM

const deleteButtons = document.getElementsByClassName("delete");
console.log(deleteButtons);

[...deleteButtons].map((e) =>
  e.addEventListener("click", () => {
    e.parentElement.remove();
  })
);

// CREATE NEW PRODUCT

const addButton = document.getElementById("addButton");
const products = document.getElementById("products");

addButton.addEventListener("click", () => {
  console.log("HERE2");
  products.appendChild(document.createElement("p").textContent);
  console.log(products);
});

function createNewItemRow(itemName, itemUnitPrice) {}

//
function getPriceByProduct(itemNode) {}
function updatePriceByProduct(productPrice, index) {}

function createNewItem() {}
// window.onload = function () {
//   var calculatePriceButton = document.getElementById("calc-prices-button");
//   var createItemButton = document.getElementById("new-item-create");
//   var deleteButtons = document.getElementsByClassName("btn-delete");
//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;
//   for (var i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
