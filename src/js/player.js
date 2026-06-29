// ==========================================
// ELEMENTOS
// ==========================================

const button = document.getElementById("playMusic");
const audio = document.getElementById("music");

const progress = document.getElementById("progress");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

// Si la página no tiene reproductor, no hacer nada.

if(button && audio){

    // ==========================================
    // PLAY / PAUSE
    // ==========================================

    button.addEventListener("click",()=>{

        if(audio.paused){

            audio.play();

        }else{

            audio.pause();

        }

    });

    // ==========================================
    // ACTUALIZAR ICONO
    // ==========================================

    audio.addEventListener("play",()=>{

        button.textContent="⏸";

    });

    audio.addEventListener("pause",()=>{

        button.textContent="▶";

    });

    audio.addEventListener("ended",()=>{

        button.textContent="▶";

        progress.value=0;

        currentTime.textContent="0:00";

    });

    // ==========================================
    // CARGAR DURACIÓN
    // ==========================================

    audio.addEventListener("loadedmetadata",()=>{

        progress.max=audio.duration;

        duration.textContent=format(audio.duration);

    });

    // ==========================================
    // ACTUALIZAR BARRA
    // ==========================================

    audio.addEventListener("timeupdate",()=>{

        progress.value=audio.currentTime;

        currentTime.textContent=format(audio.currentTime);

    });

    // ==========================================
    // MOVER BARRA
    // ==========================================

    progress.addEventListener("input",()=>{

        audio.currentTime=progress.value;

    });

    // ==========================================
    // ESPACIO = PLAY / PAUSE
    // ==========================================

    document.addEventListener("keydown",(e)=>{

        if(e.code==="Space"){

            e.preventDefault();

            button.click();

        }

    });

}

// ==========================================
// FORMATO MM:SS
// ==========================================

function format(time){

    if(isNaN(time)) return "--:--";

    const minutes=Math.floor(time/60);

    const seconds=Math.floor(time%60);

    return `${minutes}:${seconds.toString().padStart(2,"0")}`;

}

