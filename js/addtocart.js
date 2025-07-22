document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const productContainer = this.closest(".pr");
      const productName = productContainer.querySelector(".P_Name").textContent;
      const productPrice = productContainer.querySelector(".price").textContent;
      const productImage = productContainer.querySelector("img").src;

      const productDetails = {
        name: productName,
        price: productPrice,
        image: productImage,
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      if (!Array.isArray(cart)) {
        cart = [];
      }

      cart.push(productDetails);

      localStorage.setItem("cart", JSON.stringify(cart));

      this.textContent = "Added to Cart !";
    });
  });
});
