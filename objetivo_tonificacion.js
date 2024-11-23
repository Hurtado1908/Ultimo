document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#productos .grid");

    // Función para convertir el nombre del producto a un formato de URL
    const getProductUrl = (productName) => {
        // Elimina caracteres especiales y espacios, convierte a minúsculas
        return productName
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-') + '.html';
    };

    // Fetch data from the JSON file
    fetch("../objetivos_js/objetivo_tonificacion.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo cargar los datos.");
            }
            return response.json();
        })
        .then((catalogo) => {
            let htmlContent = '';
            catalogo.forEach((producto) => {
                htmlContent += `
                    <a href="/funciones/productos/control de peso/${getProductUrl(producto.nombre)}" 
                       class="block bg-white p-4 shadow rounded-lg catalogo transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                        <div class="relative overflow-hidden">
                            <img src="${producto.imagen}" 
                                 alt="${producto.nombre}" 
                                 class="w-full h-50 object-cover rounded-t-lg transition-transform duration-300 ">
                            <div class="absolute inset-0 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                        </div>
                        <h3 class="text-xl font-semibold mt-4 text-gray-800">${producto.nombre}</h3>
                        <p class="mt-2 text-green-700 font-bold">S/ ${producto.precio}</p>
                        <div class="mt-3 text-sm text-blue-600 hover:text-blue-800">
                            Ver detalles →
                        </div>
                    </a>
                `;
            });
            container.innerHTML = htmlContent;
        })
        .catch((error) => {
            console.error("Error:", error);
            container.innerHTML = "<p class='text-red-500'>No se pudieron cargar los productos.</p>";
        });
});