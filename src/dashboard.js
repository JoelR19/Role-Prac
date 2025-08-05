const user = JSON.parse(localStorage.getItem('user'));
const listProduct = document.getElementById('listProducts');

if (!user) {
  window.location.href = '../index.html';
}

document.getElementById('welcome').textContent = `Bienvenido ${user.name}!`;

async function loadProducts() {
  const res = await fetch('http://localhost:3000/products');
  const data = await res.json();
  console.log(data);

  listProduct.innerHTML = '';

  data.forEach((product) => {
    let li = document.createElement('li');
    li.innerHTML = `
        nombre : ${product.name}  -  precio : ${product.price}
    `;
    listProduct.appendChild(li);
  });
}

loadProducts();
