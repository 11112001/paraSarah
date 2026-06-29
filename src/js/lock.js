/* ==========================================
   LOCK.JS
========================================== */

const modal = document.getElementById("lockModal");
const open = document.getElementById("lockedSong");
const unlock = document.getElementById("unlockButton");

const input = document.getElementById("secretCode");
const error = document.getElementById("lockError");

const icon = document.getElementById("lockIcon");
const title = document.getElementById("lockTitle");
const description = document.getElementById("lockDescription");

const PASSWORD = "29-06-2023";

/* ==========================================
   ABRIR MODAL
========================================== */

if (open && modal) {

    open.addEventListener("click", (e) => {

        e.preventDefault();

        modal.classList.add("show");

        input.value = "";
        error.textContent = "";

        icon.textContent = "🔒";
        title.textContent = "Última canción";
        description.innerHTML =
            "Esta pista está protegida.<br>Introduce el código para continuar.";

        input.focus();

    });

}

/* ==========================================
   CERRAR AL HACER CLICK AFUERA
========================================== */

if (modal) {

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("show");

            input.value = "";
            error.textContent = "";

        }

    });

}

/* ==========================================
   DESBLOQUEAR
========================================== */

if (unlock) {

    unlock.addEventListener("click", () => {

        if (input.value === PASSWORD) {

            icon.textContent = "🔓";

            title.textContent = "Acceso concedido";

            description.textContent =
                "Disfruta la última canción.";

            error.textContent = "";

            const destination = open.dataset.target;

            setTimeout(() => {

                window.location.href = destination;

            }, 900);

        } else {

            error.textContent = "Código incorrecto.";

            const card = document.querySelector(".lock-card");

            card.classList.remove("shake");

            void card.offsetWidth;

            card.classList.add("shake");

        }

    });

}

/* ==========================================
   ENTER
========================================== */

if (input) {

    input.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            unlock.click();

        }

    });

}
