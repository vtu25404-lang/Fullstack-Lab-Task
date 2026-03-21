const API = "http://localhost:3000";

// Load Orders
fetch(`${API}/orders`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("orders").innerHTML =
            data.map(o =>
                `<p>${o.name} bought ${o.product_name} (₹${o.total})</p>`
            ).join("");
    });


// Highest Order
fetch(`${API}/highest-order`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("highest").innerHTML =
            data.map(h =>
                `<p>${h.name} - ₹${h.total}</p>`
            ).join("");
    });


// Active Customer
fetch(`${API}/active-customer`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("active").innerHTML =
            data.map(a =>
                `<p>${a.name} (${a.total_orders} orders)</p>`
            ).join("");
    });