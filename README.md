# 🎉 Invitación de Cumpleaños con Control de Invitados

Este proyecto es una **invitación digital de cumpleaños interactiva**, desarrollada con HTML, CSS y JavaScript.  
Incluye un **formulario de confirmación de asistencia**, control de invitados, cuenta regresiva al evento, música de fondo y un diseño visual atractivo.

El envío de datos se realiza mediante **Formspree**, utilizando `fetch` desde JavaScript, sin necesidad de un backend propio.

---

## 🚀 Funcionalidades

- 📩 Invitación digital accesible desde cualquier dispositivo
- 🎥 Video de fondo adaptativo (horizontal / vertical)
- 📨 Formulario de confirmación de asistencia
- 👥 Control de número de invitados
- 🧠 Lógica dinámica según asistencia (Sí / No)
- ⏳ Cuenta regresiva al evento
- 🎵 Música de fondo al interactuar con la invitación
- 💬 Modales de confirmación y error (Bootstrap)
- 📬 Envío de datos vía Formspree usando `fetch`

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** – Estructura del sitio
- **CSS3** – Estilos, animaciones y diseño responsivo
- **JavaScript (ES6)** – Lógica del formulario e interactividad
- **Bootstrap** – Modales y componentes visuales
- **Formspree** – Manejo del envío del formulario

---

## 📂 Estructura del Proyecto

```text
├── assets/                 # Videos, música e imágenes
│   ├── bg-video.mp4
│   ├── bg-video-vertical.mp4
│   └── ...
├── index.html              # Página principal de la invitación
├── style.css               # Estilos del proyecto
├── script.js               # Lógica del formulario e interacciones
└── README.md               # Documentación del proyecto
```
##📬 Envío del Formulario (Formspree)

El formulario se envía mediante JavaScript usando fetch, lo que permite controlar validaciones, mensajes y experiencia del usuario sin usar el atributo action en el HTML.

# Configuración del endpoint

En el archivo script.js se define el endpoint de Formspree:

```text
const formspreeURL = "https://formspree.io/f/XXXXXXX";
```

# Los datos enviados incluyen:

- Nombre de la persona
- Nombre de la familia
- Confirmación de asistencia
- Número de personas
- Mensaje adicional

# Ejemplo del envío:
```text
fetch(formspreeURL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        Persona_nombre,
        Familia_nombre,
        asistencia,
        personas,
        mensaje
    }),
});
```

## 🧠 Lógica del Formulario

- Si el usuario selecciona “No asistiré”, el selector de personas se deshabilita automáticamente
- Si selecciona “Sí asistiré”, se habilita la selección del número de asistentes

# Al enviar el formulario:

- Se muestra un modal de éxito o error
- Se reinicia el formulario
- Se restablecen los estados iniciales

___

👤 Autor

Alejandro Soto
Proyecto personal para práctica de desarrollo web

✨ Invitación digital moderna, interactiva y sin backend.
