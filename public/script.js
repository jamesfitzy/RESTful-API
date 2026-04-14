const API = "/customers";

// Load customers on page load
async function loadCustomers() {
  const res = await fetch(API);
  const customers = await res.json();

  const list = document.getElementById("customerList");
  list.innerHTML = "";

  customers.forEach(c => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${c.name} (${c.email})
      <button onclick="deleteCustomer('${c._id}')">Delete</button>
    `;
    list.appendChild(li);
  });
}

// Add customer
document.getElementById("customerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email })
  });

  document.getElementById("customerForm").reset();
  loadCustomers();
});

// Delete customer
async function deleteCustomer(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  loadCustomers();
}

// Initial load
loadCustomers();
