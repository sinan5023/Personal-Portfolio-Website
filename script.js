const navLinkEls = document.querySelectorAll('.nav-link');

navLinkEls.forEach(navLinkEl =>{
    navLinkEl.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active');

    })
})

const full_name = document.getElementById('name')
const email = document.getElementById('email')
const company_name = document.getElementById('company-name')
const Project_type = document.getElementById('project-type')
const message = document.getElementById('message')
const form = document.getElementById('form')

// form-validation-error-mesages
const name_error = document.getElementById('name-error')
const email_error = document.getElementById('email-error')
const message_error = document.getElementById('message-error')


form.addEventListener('submit',(e)=>{
    if(full_name.value===''|| full_name.value==null||full_name==[0-9]){

        e.preventDefault();
        name_error.innerHTML="please enter a valid name";
    }
    else{
        name_error.innerHTML=""
    }
     
    var email_Check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(!email.value.match(email_Check) || email.value==='' || email.value==null){

        e.preventDefault();
        email_error.innerHTML = " please enter a valid email"
    }

    if(message.value===''||message.value==null) {
        e.preventDefault()
        message_error.innerHTML = "Would love to hear something from you"


    }



})