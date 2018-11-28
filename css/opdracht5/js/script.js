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









// bij de start eerste item
activeren(index);