document.getElementById("bottone").addEventListener("click", function() {
    var key = document.getElementById("keyword").value;
    fetch("./ricercaReperti.php?keyword=" + key)
        .then(
            function(response) {
                if(response.status != 200) {
                    console.log("Richiesta rifiutata!");
                    return;
                }

                response.json()
                .then(reperti => {
                    reperti.forEach(stampaReperto);
                });
            }
        ).catch(function(err) {
            console.log("Qualcosa è andato storto!", err);
        });
})

function stampaReperto(reperto, index) {
    document.write("<p>" + reperto.codassoluto + "</p>");
}
