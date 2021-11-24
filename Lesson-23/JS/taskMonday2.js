function getFormvalue(event) {
    event.preventDefault();
const firstName = document.querySelector('input[name=fname]').value;
const lastName = document.querySelector('input[name=lname]').value;
console.log(firstName);
console.log(lastName);
document.getElementById('info-wrapper')
.innerHTML = 'First name is ${firstName}';
}


//could as well use ('[name="fname"]');