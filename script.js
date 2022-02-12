document.getElementById('login-submit').addEventListener('click', function(){
    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;
    // console.log(userField)
    
    const emailPassword=document.getElementById('user-password');
    const userPassword=emailPassword.value;
    // console.log(userPassword);

    if(userEmail =='sazid@gmail.com' && userPassword == 123){
        window.location.href='banking.html'
    }
})