(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

 document.getElementById('sendMessage').addEventListener('click', function() {
    var today = new Date();
    var date = today.getFullYear()+"."+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;
    
   n = today.toLocaleDateString();
   n = n.replace(/\//g, '.');
   var time = today.toLocaleTimeString();

   document.getElementById('time').innerHTML = n + ' ' + time;

     const message = document.getElementById('message');
     const username = document.getElementById('usern');
     const newMessage = `<li class="list-group-item">${message.value}</li>`;
     const newUsername = `<li class="list-group-item">${username.value}</li>`
     document.getElementById('messageSent').innerHTML += newMessage;
     document.getElementById('usernameSent').innerHTML += newUsername;
 })




//var date = new Date();
// get the date as a string
//var n = date.toDateString();
// get the time as a string
//var time = date.toLocaleTimeString();

// find the html element with the id of time
// set the innerHTML of that element to the date a space the time
//document.getElementById('time').innerHTML = n + ' ' + time;
//<div id='time'></div>