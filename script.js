
const form =document.getElementById('registration-form')
const name =document.getElementById('name')
const email =document.getElementById('email')
const  name_error=document.getElementById('name_error')
const  email_error=document.getElementById('email_error')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    let isvalid=true

    //name validation
    const nameValue=document.getElementById('name').value.trim()
    if(nameValue =='' || nameValue== null)
    {
        isvalid=false;
        name_error.innerHTML = "Name is required";
    } else {
        name_error.innerHTML = "";
    }

    //email validation
    const emailValue=document.getElementById('email').value.trim()
    if(emailValue =='' || emailValue== null)
    {
        isvalid=false;
        email_error.innerHTML = "Email is required";
    } else {
        email_error.innerHTML = "";
    }

    if(!isvalid) {
        return;
    }
})
