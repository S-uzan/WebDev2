
// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
function ajaxPost(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(data);
}


var email = document.getElementById("mail");
var buttonEl = document.getElementById("mailbtn");




function SaveMail () {
    var identite = new FormData();
    identite.append("Mail", email.value);
    ajaxPost("http://localhost:8888/test/post_form.php",identite,function (reponse) {
        // Affichage dans la console en cas de succès
        console.log("Commande envoyée au serveur");
    }
    );
}

buttonEl.addEventListener("click", SaveMail)

