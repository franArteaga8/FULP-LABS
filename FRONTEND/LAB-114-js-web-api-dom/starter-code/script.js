"use strict";
console.log("Hi, hello");

const prendaHmtl = document.getElementsByClassName("products");
console.log(prendaHmtl);

// const cart = [];
// [...prendaHmtl].map((element) => {
//   console.log(typeof parseFloat(element.children[1].innerText));
//   const product = {
//     item: element.children[0].innerText,
//     cost: parseFloat(element.children[1].innerText),
//     quantity: element.children[2].children[1].value,
//     subtotal: 25,
//   };
//   cart.push(product);
// });

//console.log(cart);

const qtyInput = document.querySelectorAll("input");
const subtotalElement = document.getElementsByClassName("subtotal");
[...qtyInput].map((e) =>
  e.addEventListener("change", function () {
    var _a, _b, _c, _d;
    let subtotalItem =
      (_b =
        (_a = e.parentElement) === null || _a === void 0
          ? void 0
          : _a.parentElement) === null || _b === void 0
        ? void 0
        : _b.getElementsByClassName("subtotal")[0];
    let costItem = parseFloat(
      (_d =
        (_c = e.parentElement) === null || _c === void 0
          ? void 0
          : _c.parentElement) === null || _d === void 0
        ? void 0
        : _d.getElementsByClassName("cost")[0].innerText
    );
    subtotalItem.innerText = e.value * costItem + "€";
  })
);

// function getTotalPrice() {}

const totalPriceButton = document.getElementById("calcTotalPrice");
const totalAmount = document.getElementById("totalAmount");

console.log(totalAmount.innerText);

totalPriceButton.addEventListener("click", () => {
  const subtotals = [...subtotalElement].map((e) => parseInt(e.innerText));
  console.log(subtotals);
  totalAmount.innerText = subtotals.reduce((acc, curr) => acc + curr, 0);
});

//[...cost].map((e) => console.log(e.innerText));
//console.log(cost[0].innerText);
function deleteItem(e) {}
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
