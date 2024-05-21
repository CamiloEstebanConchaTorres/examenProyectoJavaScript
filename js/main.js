
let carrito = [];

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

async function displayData(endpoint) {
    let url = "http://172.16.101.146:5999/";
    switch (endpoint) {
        case "Abrigos":
            url += "abrigo";
            break;
        case "Camisetas":
            url += "camiseta";
            break;
        case "Pantalones":
            url += "pantalon";
            break;
        case "Allproducts":
        default:
            url = "http://172.16.101.146:5999";
            break;
    }

    const productos = await fetchData(url);

    const container = document.getElementById("data-container");
    container.innerHTML = '';

    const ul = document.createElement("ul");
    ul.classList.add("data-list");

    productos.forEach(producto => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;

        const nombre = document.createElement("p");
        nombre.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `Precio: $${producto.precio}`;

        const boton = document.createElement("button");
        boton.textContent = "Agregar al carrito";
        boton.addEventListener("click", () => agregarAlCarrito(producto));

        li.appendChild(img);
        li.appendChild(nombre);
        li.appendChild(precio);
        li.appendChild(boton);

        ul.appendChild(li);
    });

    container.appendChild(ul);
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function mostrarCarritos() {
    const container = document.getElementById("data-container");
    container.innerHTML = '';

    const ul = document.createElement("ul");
    ul.classList.add("data-list");

    carrito.forEach(producto => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;

        const nombre = document.createElement("p");
        nombre.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `Precio: $${producto.precio}`;

        li.appendChild(img);
        li.appendChild(nombre);
        li.appendChild(precio);

        ul.appendChild(li);
    });

    container.appendChild(ul);
}

function actualizarCarrito() {
    const carritosElement = document.getElementById("carritos");
    carritosElement.textContent = `✻ Carritos ㅤㅤㅤㅤ${carrito.length}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("carritos").addEventListener("click", (event) => {
        event.preventDefault();
        mostrarCarritos();
    });

    const links = document.querySelectorAll(".sidebar_section_medio a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const endpoint = event.target.id;
            displayData(endpoint);
        });
    });
});
