function init(){
  var button = document.getElementById('entrybutton');
  var textbox = document.getElementById('entryinput');
  
  function showMeText(){
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Atan Antar: " + textbox.value);
  }
  
  button.addEventListener('click', showMeText);
  }
window.addEventListener('load', init);
