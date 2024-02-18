document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Iphone 11 pro Case ", price: 1500.99, image: "rashid images/images.jpg" },
        { name: "Samsung S4 Case ", price: 1000.99, image: "rashid images/s24.webp" },
        { name: "Iphone 11 pro Case ", price: 1500.99, image: "rashid images/images.jpg" },
        { name: "Samsung S4 Case ", price: 1000.99, image: "rashid images/s24.webp" },
        { name: "Iphone 11 pro Case ", price: 1500.99, image: "rashid images/images.jpg" },
        { name: "Samsung S4 Case ", price: 1000.99, image: "rashid images/s24.webp" },
        { name: "Iphone 11 pro Case ", price: 1500.99, image: "rashid images/images.jpg" },
        { name: "Samsung S4 Case ", price: 1000.99, image: "rashid images/s24.webp" },
        { name: "Iphone 11 pro Case ", price: 1500.99, image: "rashid images/images.jpg" },
        { name: "Samsung S4 Case ", price: 1000.99, image: "rashid images/s24.webp" },
        { name: "Iphone 11 pro Case ", price: 1500.99, image: "rashid images/images.jpg" },
        { name: "Samsung S4 Case ", price: 1000.99, image: "rashid images/s24.webp" },
        { name: "Iphone 11 pro Case ", price: 1500.99, image: "rashid images/images.jpg" },
    ];

    const productsContainer = document.getElementById("products");

    // Function to create product HTML
    function createProductHTML(product) {
        return `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>KES.${product.price.toFixed(2)}</p>
                <button>Add to Cart</button>
            </div>
        `;
    }

    // Function to render products
    function renderProducts() {
        productsContainer.innerHTML = "";
        products.forEach(product => {
            const productHTML = createProductHTML(product);
            productsContainer.innerHTML += productHTML;
        });
    }
    //Adding product to cart
    function addToCart(productId) {
        // Logic to add the product to the cart (you can store it in localStorage or session storage)
        // For demonstration purposes, let's just log the product ID
        console.log("Added to cart:", productId);
    }

    // Initial rendering of products
    renderProducts();
});
