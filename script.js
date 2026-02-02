document.addEventListener("DOMContentLoaded", () => {

    // SEARCH
    const searchInput = document.querySelector(".search-input");
    const products = document.querySelectorAll(".box");

    searchInput.addEventListener("input", () => {
        const searchValue = searchInput.value.toLowerCase();

        products.forEach(product => {
            const productName = product.querySelector("h2").innerText.toLowerCase();
            product.style.display = productName.includes(searchValue) ? "block" : "none";
        });
    });

    // CART
    const cart = [];
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-cart button");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {

            const productBox = button.closest(".box");
            const productName = productBox.querySelector("h2").innerText;

            cart.push(productName);
            cartCount.innerText = cart.length;

            button.innerText = "Added";
            button.disabled = true;
            button.style.backgroundColor = "#af3c34d4";
            button.style.color = "white";
        });
    });

});
