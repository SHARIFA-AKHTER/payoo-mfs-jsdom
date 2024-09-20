// console.log('home added');
//add event handler 
//prevent page reload
/**
 * step-2; get money to be the account balance
 * get the pin number
 * step-3: varify the pin number
 */
//step-1 add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    //prevent page reload after from submit
    event.preventDefault();
    // console.log('money add btn clicked');

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log( addMoneyInput);

        //get the pin number provided

        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput);

        //wrong way to valided pin number
        if(pinNumberInput === '1234'){
            console.log('adding money to your account')

            //step-4: get the current ballance
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance)

            // step-5: add add addMoneyInput with balance

            const addMoneyNumber = parseFloat( addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance =addMoneyNumber + balanceNumber;
            console.log( newBalance);

            //step-6: update the balance in the UI/Dom
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert ('Failed to add money! please try again.')
        }
})