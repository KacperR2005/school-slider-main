let index = 0;
let images = [];

// Pobierz listę obrazów za pomocą pliku PHP
fetch('getImages.php')
    .then(response => response.json())
    .then(data => {
        images = data;

        // Jeśli nie ma obrazów, przekieruj do index.html
        if (images.length === 0) {
            window.location.href = 'index.html';
            return;
        }

        // Wywołaj funkcję changeImage co 7 sekund
        setInterval(changeImage, 5000);
    });

// Funkcja do zmiany obrazu
function changeImage() {
    let imgElement = document.getElementById('slider1');
    imgElement.src = images[index];
    index++;

    // Jeśli index przekroczył liczbę obrazów, zresetuj go do 0
    if (index === images.length) {
        index = 0;
    }
}
