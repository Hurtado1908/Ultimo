document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#productos .grid");
    
    const getProductUrl = (productName) => {
        return `/pages/objetivos/ganar-masa/productos/${productName
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')}.html`;
    };

    // Actualiza la ruta del JSON
    fetch("objetivo_ganarmasa.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo cargar los datos.");
            }
            return response.json();
        })
        .then((data) => {
            let htmlContent = '';
            // Asegúrate de acceder al array de productos correctamente
            data.productos.forEach((producto) => {
                if (!producto.nombre || !producto.precio || !producto.imagen) {
                    console.warn("Producto con datos incompletos:", producto);
                    return;
                }
                htmlContent += `
                    <a href="${getProductUrl(producto.url || producto.nombre)}"
                       class="block bg-white p-4 shadow rounded-lg catalogo transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                        <div class="relative overflow-hidden">
                            <img src="${producto.imagen}" 
                                 alt="${producto.nombre}" 
                                 class="w-full h-50 object-cover rounded-t-lg transition-transform duration-300 ">
                            <div class="absolute inset-0 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                        </div>
                        <h3 class="text-xl font-semibold mt-4 text-gray-800">${producto.nombre}</h3>
                        <p class="mt-2 text-green-700 font-bold">S/ ${producto.precio.toFixed(2)}</p>
                        <div class="mt-3 text-sm text-blue-600 hover:text-blue-800">
                            Ver detalles →
                        </div>
                    </a>
                `;
            });
            container.innerHTML = htmlContent;
        })
        .catch((error) => {
            console.error("Error al cargar los datos del catálogo:", error);
            container.innerHTML = "<p class='text-red-500'>No se pudieron cargar los productos. Por favor, inténtalo más tarde.</p>";
        });
});
