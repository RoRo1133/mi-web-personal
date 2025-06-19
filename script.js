console.log("¡JavaScript está funcionando!");
alert("¡Bienvenido a mi web interactiva!");

let nombreUsuario = "Rodrigo";
let edad = 36;
let programando = true;

console.log("Hola, mi nombre es " + nombreUsuario);
console.log("Tengo " + edad + " años");
console.log("¿Estoy programando? " + programando);

function mostrarMensaje() {
  alert("Gracias por hacer click aquí!!");
}

function CambiarTexto() {
  const mensaje = document.getElementById("mensaje");
  if (mensaje) {
    mensaje.innerText = "Este texto fue cambiado con JavaScript";
  }
}

function abrirModal() {
  const modal = document.getElementById("miModal");
  if (modal) modal.style.display = "block";
}

function cerrarModal() {
  const modal = document.getElementById("miModal");
  if (modal) modal.style.display = "none";
}

function abrirNuevoModal() {
  const modal = document.getElementById("nuevoModal");
  if (modal) modal.style.display = "block";
}

function cerrarNuevoModal() {
  const modal = document.getElementById("nuevoModal");
  if (modal) modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioContacto");
  const inputNombre = document.getElementById("nombre");
  const inputEmail = document.getElementById("email");
  const respuesta = document.getElementById("respuesta");
  const errorNombre = document.getElementById("errorNombre");
  const errorEmail = document.getElementById("errorEmail");

  if (!formulario || !inputNombre || !inputEmail) return;

  const nombreGuardado = localStorage.getItem("nombreUsuario");
  const emailGuardado = localStorage.getItem("emailUsuario");
  if (nombreGuardado) inputNombre.value = nombreGuardado;
  if (emailGuardado) inputEmail.value = emailGuardado;

  inputNombre.addEventListener("input", () => {
    if (inputNombre.value.trim() === "") {
      inputNombre.classList.add("input-error");
      inputNombre.classList.remove("input-ok");
      errorNombre.textContent = "El nombre es obligatorio.";
    } else {
      inputNombre.classList.remove("input-error");
      inputNombre.classList.add("input-ok");
      errorNombre.textContent = "";
    }
  });

  inputEmail.addEventListener("input", () => {
    if (!inputEmail.value.includes("@")) {
      inputEmail.classList.add("input-error");
      inputEmail.classList.remove("input-ok");
      errorEmail.textContent = "Email inválido.";
    } else {
      inputEmail.classList.remove("input-error");
      inputEmail.classList.add("input-ok");
      errorEmail.textContent = "";
    }
  });

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = inputNombre.value.trim();
    const email = inputEmail.value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (nombre === "" || email === "") {
      respuesta.textContent = "Por favor, completá todos los campos.";
      respuesta.style.color = "red";
    } else if (!emailValido) {
      respuesta.textContent = "Por favor, ingresa un email válido.";
      respuesta.style.color = "orange";
    } else {
      respuesta.textContent = `¡Gracias por tu mensaje, ${nombre}! Te responderé pronto a ${email}.`;
      respuesta.style.color = "green";
      formulario.reset();

      localStorage.setItem("nombreUsuario", nombre);
      localStorage.setItem("emailUsuario", email);
    }
  });
});

window.addEventListener("click", function (event) {
  const modal1 = document.getElementById("miModal");
  const modal2 = document.getElementById("nuevoModal");

  if (event.target === modal1) {
    modal1.style.display = "none";
  }

  if (event.target === modal2) {
    modal2.style.display = "none";
  }
});

let tecnologiasFavoritas = ["HTML" , "CSS" , "JavaScript" , "Git"];
console.log("Tecnologias Favoritas", tecnologiasFavoritas);
console.log("Primera tecnologia", tecnologiasFavoritas[0]);
console.log("Cantidad total", tecnologiasFavoritas.length);
tecnologiasFavoritas.push("React");
let contienePython = tecnologiasFavoritas.includes("Python");
console.log("Incluye Python", contienePython);

tecnologiasFavoritas[1] = "Tailwind";
console.log("Reemplazamos CSS por Tailwind:", tecnologiasFavoritas);
tecnologiasFavoritas.pop();
console.log("Después de eliminar el último elemento:", tecnologiasFavoritas);
tecnologiasFavoritas.shift();
console.log("Después de eliminar el primer elemento:", tecnologiasFavoritas);
tecnologiasFavoritas.unshift("TypeScript");
console.log("Después de agregar TypeScript al principio:", tecnologiasFavoritas);
tecnologiasFavoritas.splice(2, 0, "Node.js");
console.log("Después de insertar Node.js en la posición 2:", tecnologiasFavoritas);

tecnologiasFavoritas.forEach(function(tecnologia, index) {
  console.log(`Tecnología ${index + 1}: ${tecnologia}`);
});

let proyectoWeb = {
  titulo: "Mi página personal",
  tecnologias: ["HTML", "CSS", "JavaScript"],
  publicado: true,
  mostrarInfo: function() {
    console.log(`El proyecto "${this.titulo}" está publicado: ${this.publicado}`);
  }
};
proyectoWeb.mostrarInfo();
