document.getElementById('contactForm').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "php/contacts.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("nameC=" + f.nameC.value + "&emailC=" + f.emailC.value + "&messageC=" + f.messageC.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      //alert(http.responseText + ', Ваше сообщение отправлено.');
      $("#contactSuccess").removeClass('hidden');
      $("#contactSuccess").fadeOut(5000);
      f.messageC.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.messageC.value='';
      f.nameC.value='';
      f.emailC.value='';
    }
  }
  http.onerror = function() {
    //alert('Извините, сообщение не были передано');
    $("#contactError").removeClass('hidden');
    $("#contactError").fadeOut(8000);
  }
}, false);
