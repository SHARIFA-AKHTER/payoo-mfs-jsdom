document.getElementById('btn-cash-out')
.addEventListener('click',function(event){
    event.preventDefault();

    console.log('cash out button click')

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);

    const pinNumber =document.getElementById('input-cash-out-pin-number').value;

    console.log(cashOut, pinNumber);

    //wrong way to  varify phone number

    if(pinNumber === '1234'){
        // console.log('money is reducing')

        const balance = document.getElementById('account-balance')
        .innerText;
        // console.log(balance);
        //reduce the balance 
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;

        //update the ui
        document.getElementById('account-balance').innerText =newBalance;

    }
    else{
        alert('Failed to cash out.Please try again letter')
    }
})