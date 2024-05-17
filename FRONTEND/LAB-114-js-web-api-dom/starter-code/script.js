"use strict";
console.log("Hi, hello");

// SUBTOTAL AUTO UPDATE

const qtyInput = document.querySelectorAll("input");
const subtotalElement = document.getElementsByClassName("subtotal");
[...qtyInput].map((e) =>
  e.addEventListener("change", () => {
    let subtotalItem = document.getElementsByClassName("subtotal")[0];
    let costItem = parseFloat(
      document.getElementsByClassName("cost")[0].innerText
    );
    subtotalItem.innerText = e.value * costItem + "€";
  })
);

// CALCULATE TOTAL PRICE

const totalPriceButton = document.getElementById("calcTotalPrice");
const totalAmount = document.getElementById("totalAmount");

console.log(totalAmount.innerText);

totalPriceButton.addEventListener("click", () => {
  const subtotals = [...subtotalElement].map((e) => parseInt(e.innerText));
  console.log(subtotals);
  totalAmount.innerText = subtotals.reduce((acc, curr) => acc + curr, 0);
});

// DELETE ITEM

const deleteButtons = document.getElementsByClassName("delete");
function deleteItem(e) {}

//
function getPriceByProduct(itemNode) {}
function updatePriceByProduct(productPrice, index) {}

function createNewItemRow(itemName, itemUnitPrice) {}
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
