const submit = document.querySelector('.submit');
const mail = document.querySelector('.mail');
const alertMsg = document.querySelector('.alert-msg');

//escucho el evento CLICK en el boton SUBMIT
submit.addEventListener('click', (e)=>{
  //evito que RECARGUE la pagina cada click
  e.preventDefault();
  //borro las clases ACTIVE de los dos elementos en CADA click antes de ejecutar la funcion
  mail.classList.remove('active');   
  alertMsg.classList.remove('active');
  //patron de comparacion formato MAIL
  const pattern =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  //si el valor de MAIL esta vacio...
  if (mail.value == "") {
    //agrega las clases active y muestra el texto
    mail.classList.add('active');   
    alertMsg.classList.add('active');
    alertMsg.value = "Whoops! It looks like you forgot to add your email" 
  //si el valor de mail NO es igual a PATTERN
  } else if (!mail.value.match(pattern)) {
    //agrega las clases active y muestra el texto
    mail.classList.add('active');   
    alertMsg.classList.add('active');
    alertMsg.value = "Please provide a valid email address" 
  } else {
    //si el campo no esta vacio y tiene formato de mail, se dispara un alert con mensaje de GRACIAS
    alert("thank you for subscribing");
  }
})

