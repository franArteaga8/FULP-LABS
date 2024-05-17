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

console.log(totalAmount.innerText);

totalPriceButton.addEventListener("click", () => {
  const subtotals = [...subtotalElement].map((e) => parseInt(e.innerText));
  console.log(subtotals);
  totalAmount.innerText = subtotals.reduce((acc, curr) => acc + curr, 0);
});

// DELETE ITEM

const deleteButtons = document.getElementsByClassName("delete");
console.log(deleteButtons);

[...deleteButtons].map((e) =>
  e.addEventListener("click", () => {
    console.log(e.parente);
    e.parentElement.remove();
  })
);
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
