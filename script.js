const form = document.querySelector("#parking-form");

let carYear = document.querySelector('#car-year')
let cvvInput = document.querySelector('#cvv')
let datedays = document.querySelector('#start-date')


form.addEventListener('submit', event => {
    event.preventDefault()
    numbervalidInput()
    datedaysInput()
    cvvInput()
})

var numbers = /^[0-9]+$/;


function numbervalidInput(numbers) 
{
   if (carYear === numbers);
   else {
   alert("car year requires numbers") ; 
   carYear.focus();
   }
   }


function datedaysInput (numbers) {
if (datedays === "") 
    function numbervalidInput(numbers) 
    {}   
    else {
    (datedays.value > 30) ;
    alert("cannot exceed 30"); 
    datedays.focus(); 
}
}



function cvvValidate (numbers1, numbers2, numbers3)

 {
    if  (cvvInput === "" && "" && "") ; 
    else
    {(cvvInput === "")
    alert("must contain 3 numbers") ;
    cvvInput.focus();
    return false; 
 }
}






     
    


