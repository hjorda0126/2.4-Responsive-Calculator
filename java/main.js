function alertNumberPlusNumber (event){
  var button=event.target;
  var number=Number(button.textContent);
  alert(number + number);
}

[].forEach.call (document.querySelectorAll('.number'));

function(element){
  element.addEventListener ('click', alertNumberPlusNumber);
},False)
