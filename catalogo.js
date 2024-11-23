document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#productos .grid");

    // Fetch data from the JSON file
    fetch("catalogo.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo cargar los datos.");
            }
            return response.json();
        })
        .then((catalogo) => {
            // Render products
            catalogo.forEach((producto) => {
                const productHTML = `
                    <div class="bg-white p-4 shadow rounded-lg catalogo">
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-40 object-cover rounded-t-lg">
                        <h3 class="text-xl font-semibold mt-4">${producto.nombre}</h3>
                        <p class="mt-2 text-green-700 font-bold">S/ ${producto.precio}</p>
                    </div>
                `;
                container.innerHTML += productHTML;
            });
        })
        .catch((error) => {
            console.error("Error:", error);
            container.innerHTML = "<p class='text-red-500'>No se pudieron cargar los productos.</p>";
        });
});



