//imp! NAVBAR SCROLLING COLOR

window.onscroll = () => {
    if(scrollY > 233){
        document.querySelector('.header-section').style.backgroundColor = '#1b1514e7';
    }
    else if (scrollY === 0){
        document.querySelector('.header-section').style.backgroundColor = 'transparent';
    }
}

