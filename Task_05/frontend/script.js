const API = "http://localhost:3000";

function makePayment() {
    const senderId = document.getElementById("sender").value;
    const receiverId = document.getElementById("receiver").value;
    const amount = document.getElementById("amount").value;

    fetch(`${API}/pay`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senderId, receiverId, amount })
    })
    .then(res => res.text())
    .then(msg => alert(msg))
    .then(() => loadAccounts());
}

function loadAccounts() {
    fetch(`${API}/accounts`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("accounts").innerHTML =
                data.map(a => `<p>ID:${a.id} | ${a.name} | ₹${a.balance}</p>`).join("");
        });
}

loadAccounts();