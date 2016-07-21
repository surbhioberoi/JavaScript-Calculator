$(document).ready(function() {

  function display(event) {
    var buttonValue = event.target.innerText;
    var currentValue = document.getElementById('screen').innerText;
    if (buttonValue === 'C') {
      document.getElementById('screen').innerText = 0;
      return;
    } else if (buttonValue[buttonValue.length - 1] === '=') {
      document.getElementById('screen').innerText = eval(currentValue);
      return;
    }

    var newValue = currentValue + buttonValue;
    if (currentValue == '0') {
      newValue = buttonValue;
    }
    document.getElementById('screen').innerText = newValue;

  }

  $('.button').click(display);

})