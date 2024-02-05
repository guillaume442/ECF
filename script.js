// Fonction pour attacher les événements au modal et au bouton
function attachModalEvents(modalId, btnId) {
    var modal = document.getElementById(modalId);
    var btn = document.getElementById(btnId);
    var span = modal.querySelector('.close');

    // Lorsque l'utilisateur clique sur le bouton, ouvre le modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Lorsque l'utilisateur clique sur <span> (x), ferme le modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Lorsque l'utilisateur clique n'importe où en dehors du modal, le ferme
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
    }
    }
    
    // Attacher les événements à chaque modal et bouton
    attachModalEvents("modal1", "btn1");
    attachModalEvents("modal2", "btn2");
    attachModalEvents("modal3", "btn3");
    attachModalEvents("modal4", "btn4");
    attachModalEvents("modal5", "btn5");

    document.addEventListener('DOMContentLoaded', function () {
        var menu = document.querySelector('.burger-menu-container');
        menu.addEventListener('click', function () {
            var navMenu = document.getElementById('navMenu');
            if (navMenu.style.display === 'block') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'block';
            }
        });
    });
    
    

