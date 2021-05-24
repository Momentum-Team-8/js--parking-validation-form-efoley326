let carYear = document.querySelector('#car-year')
let cvvInput = document.querySelector('#cvv')

form.addEventListener('submit', event => {
    event.preventDefault()
    numbervalidInput()
    datedaysInput()
    cvvInput()
})

function numbervalidInput(numbers) 
{
    var numbers = /^[0-9]+$/;
    if (carYear === numbers);
    else
    {alert("this field requires numbers") ; 
    document.carYear.focus();
    }

  
function datedaysInput (numbers)
 datedays.value = ""
 {
if (datedays.value === "") {
    function numbervalidInput(numbers) }
    else 
    (datedays.value > 30) ;
    alert("cannot exceed 30"); 
    document.datedays.focus();
    }

function cvvInput (numbers1, numbers2, numbers3)

 {
    if  (cvvInput.value === "" && "" && "") ; 
    else
    { alert("must contain 3 numbers") ;
    cvvInput.focus();
    return false; 
 }
}




     
    


