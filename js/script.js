function init(){

  var alertme = document.getElementById('entrybutton');

  function testfunction(){
    var text = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = text.value;
    alert("Atan Antar: " + text.value);
   
  }

  button.addEventListener('click', testfunction);
 



}

window.addEventListener('load', init);
