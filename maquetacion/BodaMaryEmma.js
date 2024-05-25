// Establece la fecha y hora de destino para la cuenta regresiva
const countDownDate = new Date("Feb 1, 2025 15:37:25").getTime();

// Actualiza la cuenta regresiva cada segundo
const x = setInterval(function() {

    // Obtén la fecha y hora actual
    const now = new Date().getTime();

    // Encuentra la distancia entre ahora y la fecha de destino
    const distance = countDownDate - now;

    // Calcula el tiempo para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en el elemento con id="countdown"
    document.getElementById("countdown").innerHTML = days + "Dias " + hours + "Horas "
    + minutes + "Minutos " + seconds + "Segundos";

    // Si la cuenta regresiva ha terminado, escribe un texto
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);