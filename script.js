document.querySelector('.menu-button').addEventListener('click', () => {
    const menuOptions = document.querySelector('.menu-options');
    menuOptions.style.display = menuOptions.style.display === 'flex' ? 'none' : 'flex';
});