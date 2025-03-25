function cambiaMaglia(tipo, imgSrc) {
    if (tipo === 'casa') {
        document.getElementById("magliaCasa").src = imgSrc;
    } else if (tipo === 'trasferta') {
        document.getElementById("magliaTrasferta").src = imgSrc;
    }
}
