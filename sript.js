document.querySelectorAll('.dropdown').forEach(drop => {
    drop.addEventListener('mouseenter', () => {
        drop.querySelector('.dropdown-content').style.display = 'block';
    });
    drop.addEventListener('mouseleave', () => {
        drop.querySelector('.dropdown-content').style.display = 'none';
    });
});
