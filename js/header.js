const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav__link');

for(let i =0; i<menuItem.length; i++){
    console.log(menuItem[i].href)
    console.log(currentLocation)
    if(menuItem[i].href === currentLocation){
        menuItem[i].classList.add('nav__link--active');
    }
}