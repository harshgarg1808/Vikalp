const fields = document.querySelectorAll('input');
const send = document.querySelector('.form-group');

send.addEventListener('click', onClick);
function onClick(e) {
  e.preventDefault();

  fields.forEach((x) => {
    if(x.value === '') {
      console.log(x.value);
      x.parentElement.classList.add('error-tag');
    }else {
      x.parentElement.classList.remove('error-tag');
      if(x.type == 'email'){
        if (validateEmail(x.value)) {
          x.parentElement.classList.remove('error-tag');
        }else {
          x.parentElement.classList.add('error-tag');
        }
      }
    }
  })
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
} 

