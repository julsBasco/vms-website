function toggleHamburger() {
    var x = document.querySelector('.hamburger-items');
    if(x.style.display === 'none'){
        x.style.display = 'block';
    } else{
        x.style.display = 'none';
    }
}