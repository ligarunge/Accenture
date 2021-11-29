
const form = document.getElementById('formRegister');
const usernameForm = document.getElementById('usernameForm');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const country = document.getElementById('country');
const defaultCheck = document.getElementById('defaultCheck');



function validate() {
  const usernameValue = usernameForm.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const countryValue = country.value.trim();
  var check1=0;
  var check2=0;
  var check3=0;
  var check4=0;
  var check5=0;
  var check6=0;
  var check7=0;
  var checkall=0;
 

  if(usernameValue == '') {
    showError(usernameForm,'Please provide username.');
   
  } else {
    showSuccess(usernameForm); 
    check1 = 1; 
  }  
  if(passwordValue == '') {
    showError(password,'Please provide a password.');
   
  } 
  else if (passwordValue !== password2Value) {
    showError(password,'Passwords do not match.');
    
  } 
  else if(passwordValue.length < 8) {
    showError(password,'At least 8 symbols.');
   
  }

  else {
    showSuccess(password);
    check2 = 1; 
  }
  if(password2Value == '') {
    showError(password2,'Please repeat password.');
    
  } 
  else if(password2Value.length < 8) {
    showError(password2,'At least 8 symbols.');
    
  }
  else {
    showSuccess(password2);
    check3 = 1; 
  }
  if(firstNameValue == '') {
    showError(firstName,'Please provide your name.');
   
  } else {
    showSuccess(firstName);
    check4 = 1; 
  }
  if(lastName) {
    showSuccess(lastName);
    check5 = 1; 
  }
  if(countryValue == '' || countryValue == '*Country') {
    showError(country,'Please tell us where you live.');
    
  } else {
    showSuccess(country); 
    check6 = 1; 
  }
  if(defaultCheck.checked == false) {
    
    const checkMessage = document.getElementById('agreeOnTerms');
    checkMessage.innerHTML = 'Check the box!';
    checkMessage.className = 'form-control is-invalid';
    
    
  } else {
    const checkMessage = document.getElementById('agreeOnTerms');
    checkMessage.innerHTML = '';
    checkMessage.className = 'form-control is-valid';  
    check7 = 1;
  }
  if (check1 == 1 && check2 == 1 && check3 == 1 && check4 == 1 && check5 == 1 && check6 == 1 && check7 == 1) {
    return true;}
    else {
      return false;
    }
}

function validateForm(click) {
  if (validate() === false) {
    click.preventDefault();
    return false; 
  }
  else {
    return true;
  }
  }

function showError(input, errorMessage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = errorMessage;
  formControl.className = 'form-control is-invalid';
  return false;
  
}

function showSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = '';
  formControl.className = 'form-control is-valid';
 return;
}


 function sendChatMessage() {
    var today = new Date();
    var date = today.getFullYear()+"."+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;
    
   n = today.toLocaleDateString();
   n = n.replace(/\//g, '.');
   var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
     const message = document.getElementById('message');
     const username = document.getElementById('usernameChat');
     const timeNow = n + ' ' + time;
     if(username.value == '' || message.value == '') {
       return false;
     }

    userMessage = `
    <div class="card">
        <div class="card-body">
          <h5 class="card-title" id="usernameSent">${username.value}</h5>
          <h6 class="card-subtitle mb-2 text-muted" id="time">${timeNow}</h6>
          <p class="card-text" id="messageSent">${message.value}</p>
        </div></div>
    `
    document.getElementById('newMessage').innerHTML += userMessage;

     message.value = '';
     username.value = '';
     return;
 }

 function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
 
}

