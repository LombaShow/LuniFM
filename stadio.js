document.getElementById("upgradeStadio").addEventListener("click", function() {
    let capienza = parseInt(document.getElementById("capienza").innerText);
    let nuovoLivello = capienza + 5000; // Ogni upgrade aumenta di 5000 posti

    // Blocca altri upgrade mentre si costruisce
    document.getElementById("upgradeStadio").disabled = true;
    document.getElementById("tempoCostruzione").innerText = "In costruzione... Tempo restante: 10 secondi";

    setTimeout(() => {
        document.getElementById("capienza").innerText = nuovoLivello;
        document.getElementById("upgradeStadio").disabled = false;
        document.getElementById("tempoCostruzione").innerText = "";
    }, 10000); // Simuliamo 10 secondi di costruzione (poi faremo in giorni reali)
});
