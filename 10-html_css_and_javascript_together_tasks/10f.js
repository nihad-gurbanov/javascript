function toggle(button) {
  buttonElement = document.querySelector(`.${button}`);
  if (!buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.add('is-toggled');
  }
  else {
    buttonElement.classList.remove('is-toggled');
  }
}