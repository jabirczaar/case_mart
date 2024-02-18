document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.getElementById("signInButton");

    signInButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission behavior
        window.location.href = "/homepage/cart.html"; // Redirect to the cart page
    });
});
