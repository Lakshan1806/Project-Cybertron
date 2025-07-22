document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let subtotal = 0;

  if (cart.length > 0) {
    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");

      itemDiv.innerHTML = `
          <div class="item-content">
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-info">
              <p class="item-name">Name : ${item.name}</p>
              <p class="item-price">Price : ${item.price}</p>
            </div>
          </div>
        `;

      document.getElementById("cart-items").appendChild(itemDiv);

      let cleanPrice = item.price.replace(/[^0-9.]/g, "");
      subtotal += parseFloat(cleanPrice);
    });

    let formattedSubtotal = new Intl.NumberFormat("en-LK", {
      style: "currency",
      currency: "LKR",
      minimumFractionDigits: 2,
    }).format(subtotal);

    document.getElementById("subtotal-container").innerHTML = `
        <div class="subtotal-info">
          <p class="total">Subtotal: ${formattedSubtotal}</p>
        </div>
      `;
  } else {
    document.getElementById("cart-items").innerHTML =
      '<p class="empty">Your cart is empty.</p>';
    document.getElementById("subtotal-container").innerHTML =
      '<p class="total">Subtotal : LKR 0.00</p>';
  }
});
