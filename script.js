// -- moldura -- //
const molduras = document.querySelectorAll('.moldura');
const audioPapel = new Audio('audios/papel.mp3');
const audioZoom = new Audio('audios/zoom.mp3');

molduras.forEach((moldura) => {
    let segurar;

    moldura.addEventListener('dblclick', function () {
        this.classList.toggle('virar');
        audioPapel.play();
    });

    moldura.addEventListener('pointerdown', function () {
        segurar = setTimeout(() => {
            if (this.classList.contains('virar')) {
                this.classList.add('zoom-virado');
                audioZoom.play();
            } else {
                this.classList.add('zoom');
                audioZoom.play();
            }
        }, 500);
    });

    const resetar = () => {
        clearTimeout(segurar);
        moldura.classList.remove('zoom', 'zoom-virado');
    }

    moldura.addEventListener('pointerup', resetar);
    moldura.addEventListener('pointerleave', resetar);
});