document.addEventListener("DOMContentLoaded", function () {
    const radioSi = document.getElementById("radioDefault1");
    const radioNo = document.getElementById("radioDefault2");
    const selectPersonas = document.getElementById("personas");
    const form = document.getElementById("contactForm");

    // Deshabilitar select al inicio si está "No"
    if (radioNo.checked) {
        selectPersonas.disabled = true;
        selectPersonas.value = "";
    }

    // Evento cuando cambian los radios
    [radioSi, radioNo].forEach(radio => {
        radio.addEventListener("change", function () {
            if (radioSi.checked) {
                selectPersonas.disabled = false;
            } else {
                selectPersonas.disabled = true;
                selectPersonas.value = "";
            }
        });
    });

    document.getElementById("contactForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        const Familia_nombre = document.getElementById("nombre").value.trim();
        const asistencia = radioSi.checked ? "Sí" : "No";
        const personas = asistencia === "Sí" ? selectPersonas.value : 0;
        const mensaje = document.getElementById("mensaje").value;

        // FORMSPREE - Aquí colocas tu endpoint de Formspree
        const formspreeURL = "https://formspree.io/f/xvgbvkkj"; // <-- cámbialo

        try {
            const response = await fetch(formspreeURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ Familia_nombre, asistencia, personas, mensaje }),
            });

            if (response.ok) {
                showModal("Tu asistencia fue enviada exitosamente.");
                document.getElementById("contactForm").reset();
                selectPersonas.disabled = true; // vuelve a deshabilitar el select
            } else {
                showModal("Ocurrió un error al enviar el mensaje.");
            }
        } catch (error) {
            showModal("Error de conexión con el servidor.");
        }
    });

    function showModal(message) {
        const modalMessage = document.getElementById("modalMessage");
        modalMessage.textContent = message;
        const modal = new bootstrap.Modal(document.getElementById("responseModal"));
        modal.show();
    }

    // Fecha del evento
    const eventDate = new Date("Oct 25, 2025 13:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "🎉 ¡La fiesta ya comenzó!";
            return;
        }

        document.getElementById("days").textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("hours").textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").textContent = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
});
