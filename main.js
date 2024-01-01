const submit = document.querySelector('.submit');
const mail = document.querySelector('.mail');
const alertMsg = document.querySelector('.alert-msg');

submit.addEventListener('click', (e)=>{

  e.preventDefault();

  mail.classList.remove('active');   
  alertMsg.classList.remove('active');

  const pattern =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (mail.value == "") {
    mail.classList.add('active');   
    alertMsg.classList.add('active');
    alertMsg.value = "Whoops! It looks like you forgot to add your email" 
  } else if (!mail.value.match(pattern)) {
    mail.classList.add('active');   
    alertMsg.classList.add('active');
    alertMsg.value = "Please provide a valid email address" 
  } else {
    alert("thank you for subscribing");
  }
})

