const openMenu = document.querySelector('#menu-icon');
const closeMenu = document.querySelector('.modal-icon');
const modal = document.querySelector('.modal')

openMenu.addEventListener('click', function () {
    modal.style.display = 'flex'
})

closeMenu.addEventListener('click', function () {
    modal.style.display = 'none'
})