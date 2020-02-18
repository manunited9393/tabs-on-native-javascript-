window.addEventListener("DOMContentLoaded", function() {
    'use strict';
    
    let content = document.querySelectorAll('.content__for_tabs'),  //your tabcontent class
        navTab = document.querySelector('.tabs__parent'),           //your tabs' parent (e.g. "ul")
        tab = document.querySelectorAll('.tab');                    //your tabs (e.g. li)

    function removeContent(a) {
        for ( let i = a; i < content.length; i++) {
            content[i].classList.remove('show');       //show is css class "display block"
            content[i].classList.add("hide");          //hide is css class "display none"
        }
    }
    removeContent(1);

    function showContent(b) {
        if (content[b].classList.contains('hide')) {   //hide is css class "display none"
            content[b].classList.remove('hide');       //hide is css class "display none"
            content[b].classList.add("show");          //show is css class "display block"
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
