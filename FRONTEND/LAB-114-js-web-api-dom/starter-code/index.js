function deleteItem(e) {}

const itemName = document.getElementsByClassName("itemName");
console.log(itemName);

const itemUnitPrice = document.getElementsByClassName("itemUnitPrice");
console.log(itemUnitPrice);

const itemQty = document.querySelectorAll("input");
console.log(itemQty);

const calcPricesBtn = document.getElementById("calc-prices");
console.log(calcPricesBtn);

calcPricesBtn.addEventListener("click", function () {
  console.log(itemUnitPrice);
  console.log(itemQty.value);
  let totalCalcPrice = 0;

  for (let i = 0; i < itemName.length; i++) {
    let calcPrice = itemUnitPrice[i].innerHTML * itemQty[i].value;
    console.log(calcPrice);

    totalCalcPrice += calcPrice;

    console.log(
      (document.getElementsByClassName("totalPricePerItem")[i].innerHTML =
        calcPrice + "€")
    );
    console.log(
      (document.getElementsByClassName("allItemsTotalPrice")[0].innerHTML =
        totalCalcPrice + "€")
    );
  }
});

var deleteButtonsItems = [...document.getElementsByClassName("btn-delete")];
var deleteButtons = document.getElementsByClassName("btn-delete");

console.log(deleteButtonsItems);

deleteButtonsItems.forEach((buttons) => {
  buttons.addEventListener("click", function (e) {
    let parent = buttons.parentNode.parentNode.parentNode.parentNode;
    let child = buttons.parentNode.parentNode.parentNode;
    parent.removeChild(child);
    console.log(buttons);
  });
});

/* for(var i = 0; i<deleteButtons.length ; i++){
  deleteButtons[i].onclick = deleteItem;
}


deleteItem.addEventListener('click', function(e){
  
  console.log(deleteItem)
  console.log(e.currentTarget)
}) */

// for(var i = 0; i<deleteButtons.length ; i++){
//   deleteButtons[i].onclick = deleteItem;
// }

/* calcPricesBtn.addEventListener(onclick, function(){
  calcPricesBtn.value++
  console.log(calcPricesBtn)
}) */

function addQty() {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

const totalPrice = 0;

/*const itemUnitPrice = document.getElementById('itemUnitPrice')
 console.log(itemUnitPrice)
console.log(document.getElementById('quantity')) */

function getTotalPrice() {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

/* window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
 */
