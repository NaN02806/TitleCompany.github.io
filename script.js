

// Cambiar el texto dinámicamente
const dynamicText = document.getElementById('dynamicText');
const texts = [
    '¡Descarga ahora y mejora tu experiencia!',
    '¡Disponible en App Store y Google Play!',
    '¡Lleva nuestra app a donde vayas!'
];
let textIndex = 0;

setInterval(() => {
    dynamicText.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
}, 3000);
