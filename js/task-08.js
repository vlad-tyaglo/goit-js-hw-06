const form = document.querySelector('.login-form');
const inputName = document.querySelector('input[name="email"]');
const inputPassword = document.querySelector('input[name="password"]');
form.addEventListener("submit", sendSubmit);

function sendSubmit(event) {
    event.preventDefault();
    console.dir(form)
    const formData =  new FormData(event.currentTarget);

    console.log(formData);
  
    formData.forEach((value, name) => {
    console.log(`name`, name );
    console.log(`value`, value);
    });

    
    if (inputName.value === '' || inputPassword.value === ''){
       alert("Всі поля повинні бути заповнені")
    }

    form.reset();

};


