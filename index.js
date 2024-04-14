const mainmenu = document.querySelector('.mainmenu');
const closemenu = document.querySelector('.closemenu');
const openMenu = document.querySelector('.openmenu');
const items = document.querySelectorAll('nav .mainmenu li a');


openMenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

items.forEach(item => {
    item.addEventListener('click', function(){
        close();
    })
})

function show(){
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
}
function close(){
    mainmenu.style.top = '-200%';
}
