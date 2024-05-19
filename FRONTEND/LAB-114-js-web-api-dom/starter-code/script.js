//INITIAL CONSOLE LOG (JS WORKING)
console.log("Hi, hello");

// SUBTOTAL AUTO UPDATE

const qtyInput = document.querySelectorAll("input");

[...qtyInput].forEach((input) => {
  input.addEventListener("change", () => {
    const parentProduct = input.closest(".product");
    const subtotalItem = parentProduct.querySelector(".subtotal");
    const costItem = parseFloat(parentProduct.querySelector(".cost").innerText);

    subtotalItem.innerText = (input.value * costItem).toFixed(2) + "€";
  });
});

// CALCULATE TOTAL PRICE

const totalPriceButton = document.getElementById("calcTotalPrice");
const totalAmount = document.getElementById("totalAmount");
const subtotalElement = document.getElementsByClassName("subtotal");

totalPriceButton.addEventListener("click", () => {
  const subtotals = [...subtotalElement].map((e) => parseInt(e.innerText));
  totalAmount.innerText = parseFloat(
    subtotals.reduce((acc, curr) => acc + curr, 0)
  ).toFixed(2);
});

// DELETE ITEM

const deleteButtons = document.getElementsByClassName("delete");

[...deleteButtons].map((e) =>
  e.addEventListener("click", () => {
    e.parentElement.remove();
  })
);

// CREATE NEW PRODUCT

const addButton = document.getElementById("addButton");
const products = document.getElementById("products");

addButton.addEventListener("click", () => {
  const productName = window.prompt("Enter the product name:", "Product");
  let productCost;
  while (true) {
    productCost = window.prompt("Enter the product cost:", "Unit Price");
    if (
      !isNaN(productCost) &&
      productCost !== null &&
      productCost.trim() !== ""
    ) {
      productCost = parseFloat(productCost).toFixed(2);
      break;
    } else {
      alert("Please enter a valid number for the product cost.");
    }
  }

  const productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.style.display = "grid";
  productDiv.style.gridTemplateColumns = "1fr 1fr 1fr 1fr auto";
  productDiv.style.gap = "10px";
  productDiv.style.padding = "10px";
  productDiv.style.margin = "10px";
  productDiv.style.borderBottom = "1px solid #ccc";
  productDiv.style.alignItems = "center";

  const nameDiv = document.createElement("div");
  const nameSpan = document.createElement("span");
  nameSpan.className = "name";
  nameSpan.textContent = productName || "Camiseta";
  nameDiv.appendChild(nameSpan);

  const costDiv = document.createElement("div");
  costDiv.className = "cost";
  const costSpan = document.createElement("span");
  costSpan.textContent = productCost || "25";
  costDiv.appendChild(costSpan);

  const qtyDiv = document.createElement("div");
  const qtyLabel = document.createElement("label");
  qtyLabel.setAttribute("for", "QTY");
  qtyLabel.textContent = "QTY";
  const qtyInput = document.createElement("input");
  qtyInput.type = "number";
  qtyInput.name = "QTY1";
  qtyInput.className = "qty";
  qtyInput.min = "0";
  qtyDiv.appendChild(qtyLabel);
  qtyDiv.appendChild(qtyInput);

  const subtotalSpan = document.createElement("span");
  subtotalSpan.className = "subtotal";
  subtotalSpan.textContent = "0€";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";

  productDiv.appendChild(nameDiv);
  productDiv.appendChild(costDiv);
  productDiv.appendChild(qtyDiv);
  productDiv.appendChild(subtotalSpan);
  productDiv.appendChild(deleteButton);

  products.appendChild(productDiv);

  qtyInput.addEventListener("change", () => {
    const parentProduct = qtyInput.closest(".product");
    const subtotalItem = parentProduct.querySelector(".subtotal");
    const costItem = parseFloat(
      parentProduct.querySelector(".cost span").innerText
    );
    subtotalItem.innerText = qtyInput.value * costItem + "€";
  });

  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const parentProduct = button.closest(".product");
      parentProduct.remove();
    });
  });
});
