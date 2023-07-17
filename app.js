const categoryItem = document.querySelector('.categories');
const icon = categoryItem.querySelector('.rotate-icon');

categoryItem.addEventListener('click', function() {
  icon.classList.toggle('rotate');
});