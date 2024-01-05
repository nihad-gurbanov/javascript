function toggle(button) {
  turnOffOtherButtons();

  buttonElement = document.querySelector(`.${button}`);
  if (!buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.add('is-toggled');
  }
  else {
    buttonElement.classList.remove('is-toggled');
  }
}

function turnOffOtherButtons() {
  const otherButtons = document.querySelector('.is-toggled');

  if (otherButtons) {
    otherButtons.classList.remove('is-toggled');
  }
}

