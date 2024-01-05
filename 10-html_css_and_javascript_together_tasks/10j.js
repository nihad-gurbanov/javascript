let calculation = localStorage.getItem('calculation') || '';
      displayCalculation();

      function calculate(keyPress) {
        if (keyPress === '=') {
          calculation = eval(calculation);
          displayCalculation();
          localStorage.setItem('calculation', calculation)
        }
        else if (keyPress === 'Clear') {
          calculation = '';
          // console.log('Cleared');
          displayCalculation();
          localStorage.setItem('calculation', calculation)
        }
        else {
          calculation += keyPress;
          localStorage.setItem('calculation', calculation)
        }
        console.log(calculation);
        displayCalculation();
      }

      function displayCalculation() {
        document.querySelector('.calculation-result').innerHTML = calculation;
      }