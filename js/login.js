//document.getElementById('id').addEventListener('click',function)

//search: form submit reloading the page

//step- 1 set event handler
document.getElementById('button-login')
.addEventListener('click', function(event){

    //step-2 : prevent default behavior (prevent reloding browser)
    event.preventDefault();  //Vejal to beggener

    // console.log('login button clicked'); //ati shudho chak korar jonnon pora delet korta hoba

    //step-3: get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    console.log(phoneNumber,pinNumber);


    //step-4: validate phone and pin
    // this is temporary.you should do like this.

    if(phoneNumber=== '5' && pinNumber === '1234'){ 
        console.log('you are logged in');
        window.location.href = '/home.html';

        //step-5: allow user to use the website
    }
    else{ 
        alert('wrong phone number or pin');
    }
})