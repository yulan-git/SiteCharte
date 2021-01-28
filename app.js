window.onload = function () {
    var listeApprenant = [
        'Flora',
        'Caroline',
        'Maelis',
        'Lobna',
        'Alicia',
        'Alexis',
        'David',
        'Jonathan',
        'Farima',
        'Ayoub',
        'Lyes',
        'Gaelle',
        'Muhammad',
        'Abdoulaye',
        'Asad',
        'Fodie',
        'Elyesse',
        'Mohamed',
        'Bamba',
        'Ayoub'
    ]

    /** PROBLEME AVEC le declenchement de setTimeout, 
     * erreur dans la console après deux secondes : VM39106:1 Uncaught ReferenceError: Caroline is not defined
    at <anonymous>:1:1
     */
    let btn = document.getElementById("btn");
    function affichage() {
        btn.innerHTML = "Prêt !";
        let prenom = Math.floor(Math.random() * listeApprenant.length);
        setTimeout(btn.innerHTML = listeApprenant[prenom], 2000);
    }
    btn.addEventListener('click', affichage);



    /** apparition de la liste */
    var span = document.getElementsByClassName("extend");

    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var ul = this.nextElementSibling;
            if (ul.style.display === "block") {
                ul.style.display = "none";
            } else {
                ul.style.display = "block";
            }
        });
    }
}

    
    

