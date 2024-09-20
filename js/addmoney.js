document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('added The event handler');

    const addMoney = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin-number').value;

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance')
        .innerText;
        // console.log(balance);
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money, Please try again latter');
    }
})