window.addEventListener("DOMContentLoaded", function() {
    'use strict';
    
    let content = document.querySelectorAll('.header__right-side'),  //your tabcontent class
        navTab = document.querySelector('.header__brend'),           //your tabs' parent (e.g. "ul")
        tab = document.querySelectorAll('.header__brend-item');      //your tabs

    function removeContent(a) {
        for ( let i = a; i < content.length; i++) {
            content[i].classList.remove('show');
            content[i].classList.add("hide");
        }
    }
    removeContent(1);

    function showContent(b) {
        if (content[b].classList.contains('hide')) {
            content[b].classList.remove('hide');
            content[b].classList.add("show");
        }
    }

    navTab.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('header__brend-item')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    removeContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    });

});
