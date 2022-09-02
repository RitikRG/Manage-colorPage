// collecting
const mobiNavOpen = document.querySelector('#mobiNavOpen');
const mobiNavClose = document.querySelector('#mobiNavClose');
const mobiNav = document.querySelector('#mobiNavbar');
//Defining Functions

const iconSwitch=()=>{
    mobiNavOpen.classList.toggle('hidden');
    mobiNavClose.classList.toggle('hidden');
}

const menuToggle=()=>{
    mobiNav.classList.toggle('hidden');
}


//Calling functions
mobiNavOpen.addEventListener('click', iconSwitch);
mobiNavOpen.addEventListener('click', menuToggle);
//
mobiNavClose.addEventListener('click', iconSwitch);
mobiNavClose.addEventListener('click', menuToggle);