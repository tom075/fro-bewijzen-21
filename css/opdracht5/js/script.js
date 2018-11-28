var index = 0; // welke link is actief
var main = document.querySelector('.context');
var links = document.querySelectorAll('.nav__menu-item');
var alleLinks = [];







links.forEach( (item) => {
    item.addEventListener('click', (e) => {
        index = alleLinks.indexOf(item);
        activeren(index);
})
    alleLinks.push(item);
});



const activeren = (num) => {
    //verwijder actieve classe
    verwijderActief();
    // activeer de link num
    alleLinks[num].classList.add('nav--actief')

    //verschuif context num
    main.style.marginLeft = (-100*num) + 'vw';
}

const verwijderActief = () => {
    alleLinks.forEach( (item) => {
        item.classList.remove('nav--actief')
})
}

leftbtn = document.getElementById('left')
rightbtn = document.getElementById('right')

function left(){
    if (index == 0){
        leftbtn.style.color = 'grey';
        leftbtn.style.cursor = 'not-allowed';

        rightbtn.style.color = '#333';
        rightbtn.style.cursor = 'pointer';

    } else {
        index--;
        activeren(num = index);
        leftbtn.style.color = '#333';
        leftbtn.style.cursor = 'pointer';

        rightbtn.style.color = '#333';
        rightbtn.style.cursor = 'pointer';

    }
}
function right(){
    if (index == 4){
        rightbtn.style.color = 'grey';
        rightbtn.style.cursor = 'not-allowed';

        leftbtn.style.color = '#333';
        leftbtn.style.cursor = 'pointer';

    } else {
        index++;
        activeren(num = index);
        rightbtn.style.color = '#333';
        rightbtn.style.cursor = 'pointer';

        leftbtn.style.color = '#333';
        leftbtn.style.cursor = 'pointer';
    }
}



// bij de start eerste item
activeren(index);