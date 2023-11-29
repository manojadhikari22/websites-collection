let header = document.querySelector('header');

let currentScrollpos = 0; //Initializing variable to 0.
let scrollDirection = 'down'; // Initializing variable to down.

const activeheader = () => {
    const prevScrollpos = window.scrollY;
    if(prevScrollpos > currentScrollpos) {
        scrollDirection = 'down';
    } else {
        scrollDirection = 'up';
    }
    if( scrollDirection === 'down' && prevScrollpos > 500) {
        header.classList.add('header-hidden');
    }
    if(scrollDirection === 'up') {
        header.classList.remove('header-hidden');
    }
    currentScrollpos = prevScrollpos;
}
window.addEventListener('scroll', activeheader);// eventListener for the scroll event on the 'window' object.