const submit = document.querySelector('#btn-submit');
const form = document.querySelector('#user-form');

submit.addEventListener('click',(event)=>{
    const pass = document.querySelector('#pass').value;
    const cPass = document.querySelector('#confirm-pass').value;
    console.log(pass)
    if(pass!==cPass){
        event.preventDefault();
        const x = document.querySelector('.x')
        x.textContent = "Password Does not Match"
    }
    
})