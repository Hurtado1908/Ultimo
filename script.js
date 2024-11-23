// Obtener los modales
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

// Obtener los enlaces que abren los modales
var openLoginModal = document.getElementById("openLoginModal");
var openRegisterModal = document.getElementById("openRegisterModal");

// Obtener los elementos de cierre
var closeLoginModal = document.getElementById("closeLoginModal");
var closeRegisterModal = document.getElementById("closeRegisterModal");

// Abrir el modal de inicio de sesión
openLoginModal.onclick = function() {
    loginModal.style.display = "block";
}

// Abrir el modal de registro
openRegisterModal.onclick = function() {
    registerModal.style.display = "block";
}

// Cerrar el modal de inicio de sesión
closeLoginModal.onclick = function() {
    loginModal.style.display = "none";
}

// Cerrar el modal de registro
closeRegisterModal.onclick = function() {
    registerModal.style.display = "none";
}

console.log("script.js cargado");

function loadHTML(containerId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar ' + filePath);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            console.log(`${filePath} cargado en ${containerId}`);
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Cargar los componentes
loadHTML('header', 'header.html');
loadHTML('quienessomos', 'quienessomos.html')
loadHTML('objetivos', 'objetivos.html');
loadHTML('productos', 'productos.html');
loadContent('catalogo', 'catalogo.html');  // Añadir esta línea
loadHTML('contacto', 'contactos.html');
loadHTML('footer', 'footer.html');





