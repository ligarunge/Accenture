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

  <form class="needs-validation" name="formRegister" novalidate onsubmit="return(validate())">
  <div class="form-row">
      <div class="col-3">
          <label for="username"></label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">@</span>
            </div>
            <input type="text" class="form-control" id="username" placeholder="Username*" required>
          </div>
              <div class="row">
                <div class="col-12" id="username-invalid"></div>
              </div>
        </div>
      </div>
   
    <div class="col-3">
      <label for="password"></label>
      <input type="text" class="form-control" id="password" placeholder="Password*" value="" minlength="8" required>
    
    </div>
    <div class="row">
      <div class="col-12" id="password-invalid"></div>
    </div>
    <div class="col-3">
      <label for="password2"></label>
      <input type="text" class="form-control" id="password2" placeholder="Repeat password*" value="" minlength="8" required>
      
      <div class="not-match"></div>
    </div>
  <div class="form-row">
    <div class="col-3">
      <label for="firstName"></label>
      <input type="text" class="form-control" id="firstName" placeholder="First name*" required>
      
    </div>
    <div class="col-3">
      <label for="lastName"></label>
      <input type="text" class="form-control" id="lastName" placeholder="Last name">
     
    </div>
    <div class="col-3 mb-3">
      <label for="country"></label>
      <input type="text" class="form-control" id="country" placeholder="" required>
      
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary mt-3" type="submit" onclick="checkMatch()">Submit form</button>
</form>

//chat function 

const message = document.getElementById('message');
     const username = document.getElementById('usern');
     //const newMessage = `<div class="messageCell">${message.value}</div>`;
     //const newUsername = `<div class="usernameCell">${username.value}</div>`
     const timeNow = n + ' ' + time;

    userMessage = `
    <div class="col-3 mt-2 usernameCell bold" id="usernameSent">${username.value}   
            </div>
            <div class="col-2 mt-2 text-muted" id="time">${timeNow}</div>
        </div>      
            <div class="row">
            <div class="col-12 mt-3 messageCell" id="messageSent">${message.value}</div>
        </div>`

    document.getElementById('newMessage').innerHTML = userMessage;


//REGISTER  
<form action="success.html" class="form" id="formRegister" name="Registration">
    <div class="form-control">
   
      <label for="usernameForm"></label>
      <input type="text" placeholder="*Username" id="usernameForm">
      <small></small>
    
    </div>
    <div class="form-control">
      <label for="password"></label>
      <input type="text" placeholder="*Password" id="password">
     
      <small></small>
    </div>
    <div class="form-control">
      <label for="password2"></label>
      <input type="text" placeholder="*Repeat password" id="password2">
      
      <small></small>
    </div>
    <div class="form-control">
      <label for="firstName"></label>
      <input type="text" placeholder="*First name" id="firstName">
      
      <small></small>
    </div>
    <div class="form-control">
      <label for="lastName"></label>
      <input type="text" placeholder="*Last name" id="lastName">
     
      <small></small>
    </div>
    <div class="form-control">
      <label for="country"></label>
      <select class="text-muted" id="country">
        <option>*Country</option>
        <option>Latvia</option>
        <option>Estonia</option>
        <option>Lithuania</option>
        <option>Mexico</option>
        
      </select>
      <small></small>
    </div>
      <div class="form-check pt-3">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck">
        <label class="form-check-label" for="defaultCheck">
        *Agree with terms and conditions
        <small id="agreeOnTerms"></small>
        </label>
    
        
      </div>
      

      //register
      const form = document.getElementById('formRegister');
const usernameForm = document.getElementById('usernameForm');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const country = document.getElementById('country');
const defaultCheck = document.getElementById('defaultCheck');

function validateForm(click) {
if (validate() === false) {
  click.preventDefault();
  return false; 
}
else {
  return true;
}
}

function validate() {
  const usernameValue = usernameForm.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const countryValue = country.value.trim();
  

  if(usernameValue == '') {
    showError(usernameForm,'Please provide username.');
    usernameForm.focus();
   
  } else {
    showSuccess(usernameForm);  
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
  }
  if(password2Value == '') {
    showError(password2,'Please repeat password.');
    
  } 
  else if(password2Value.length < 8) {
    showError(password2,'At least 8 symbols.');
    
  }
  else {
    showSuccess(password2);
  }
  if(firstNameValue == '') {
    showError(firstName,'Please provide your name.');
   
  } else {
    showSuccess(firstName);
  }
  if(lastName) {
    showSuccess(lastName);
  }
  if(countryValue == '' || countryValue == '*Country') {
    showError(country,'Please tell us where you live.');
    
  } else {
    showSuccess(country); 
  }
  if(defaultCheck.checked == false) {
    
    const checkMessage = document.getElementById('agreeOnTerms');
    checkMessage.innerHTML = 'Check the box!';
    checkMessage.className = 'form-control is-invalid';
    
    
  } else {
    const checkMessage = document.getElementById('agreeOnTerms');
    checkMessage.innerHTML = '';
    checkMessage.className = 'form-control is-valid';  
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

    