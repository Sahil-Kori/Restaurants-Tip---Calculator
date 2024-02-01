let total_Amount = document.querySelector('#total-amount');
let number_of_person = document.querySelector('#number-of-person');
let calculate = document.querySelector('#calculate');
let select = document.querySelector('.select');
let option = document.querySelectorAll('.option');

function tip_calculate(){

    let tip;
    let process1;

    if(total_Amount.value === '' || number_of_person === ''){
        alert('You have to fulfill information');
    }else{       
        tip = total_Amount.value * (100 - select.value) /100;
        process1 = total_Amount.value - tip; 
    }
    return process1;   

}

let tip_int;
let total_amount_int;
let addition ;
let one_cal;
let final_calculation;

calculate.addEventListener('click',function(){

    tip_calculate();
    tip_int = (parseInt(tip_calculate()));
    total_amount_int = (parseInt(total_Amount.value));
    addition = (tip_int+total_amount_int);
    one_cal = (parseInt(number_of_person.value));
    final_calculation = addition/one_cal;
    alert(`Rs.${final_calculation} to pay each person`);

    location.reload();

});

