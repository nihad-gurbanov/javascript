function handleCostKeydown(event) {
  console.log(event.key);
  if(event.key === 'Enter') {
    calculateTotal();
  };
}
function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');

  let cost = Number(inputElement.value);

  if (cost <= 0) {
    document.querySelector('.js-total-cost')
    .innerHTML = 'Error: cost cannot be less than $0';
    document.querySelector('.js-total-cost').classList.add('warning');
  }
  else if ((cost > 0) && (cost <40)) {
    cost += 10;
    document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
    document.querySelector('.js-total-cost').classList.remove('warning');
  }
  else {
    document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
    document.querySelector('.js-total-cost').classList.remove('warning');
  }
}
function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerHTML === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  }
  else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  };
}