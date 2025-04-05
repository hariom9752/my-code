document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 1000);
});

const menuItems = [
    { name: "Pizza", price: 200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9c4T8ahaLDklv9SRpAWhrYIyRZYuphaLPg&s" },
    { name: "Burger", price: 150, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCvylPiu9UNSUSfmJFP0KFzH8H_OFIy-2jg&s" },
    { name: "Pasta", price: 180, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90IIBiU6SW1KytulhM6ixgKQuX15QC92PYA&s" },
    { name: "Sandwich", price: 120, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHpQE_f4I9H2TMoaVVdXf4TDlp8kPa7-JfQ&s" },
    { name: "French Fries", price: 100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtQU2Pf3U32qKKJLQB0tY83xthaYEYTatRw&s" },
    { name: "Salad", price: 80, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkXVtqV1FhfuXT0z8ffpc3Z1cVUXBXYfLWA&s" },
    { name: "Soup", price: 90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8A_7IhSE6cgLTqi2Dna3GksICuhZSaavIA&s" },
    { name: "Noodles", price: 200, img: "https://cdn.mygingergarlickitchen.com/images/800px/800px-veg-chezwan-noodles-recipe-9.jpg" },
    { name: "Ice Cream", price: 70, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgTGDbJN2WtqTl5qpNc1DCUfjkirSNXc82g&s" },
    { name: "Coffee", price: 50, img: "https://etimg.etb2bimg.com/photo/113047605.cms" }
];

const menuContainer = document.getElementById("menu");
const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const popup = document.getElementById("order-success");
let totalPrice = 0;

menuItems.forEach((item, index) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    menuContainer.appendChild(menuItem);
});

function addToCart(index) {
    const item = menuItems[index];
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `${item.name} - ₹${item.price} 
        <button onclick="removeFromCart(this, ${item.price})">Remove</button>`;
    cartItems.appendChild(cartItem);
    totalPrice += item.price;
    totalPriceElement.textContent = totalPrice;
}

function removeFromCart(element, price) {
    element.parentElement.remove();
    totalPrice -= price;
    totalPriceElement.textContent = totalPrice;
}

document.getElementById("order-btn").addEventListener("click", () => {
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
        cartItems.innerHTML = "";
        totalPrice = 0;
        totalPriceElement.textContent = totalPrice;
    }, 3000);
});

