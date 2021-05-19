const MyForm = document.querySelector('#loan-form');
const LoanAmount = document.querySelector('#LoanAmt');
const years = document.querySelector('#years');
const interest= document.querySelector('#interest');

/* ---Lesson: I couldn't the variable "compound between the function/even handler "getSelectValue and "onSubmit". So declaring the variable before both functions helped me fix the bug------*/
let compound;
function getSelectValue()
{
   compound = document.querySelector('#cpnd').value;
   Number('compound')
   console.log(compound);
}

MyForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    console.log(LoanAmount.value);
    console.log(years.value);
    console.log(interest.value);

    const MonthlyPayment = LoanAmount.value /(((1+(interest.value/100/12)**(12*years.value))-1)/( (interest.value/100/12)*(1+(interest.value/100/12))**(12*years.value)));
    
    const TotalInterest = LoanAmount.value * (1+interest.value/compound)**(compound*years.value);
    const Totalpayment = TotalInterest + LoanAmount.value;

    console.log(MonthlyPayment)
    console.log(TotalInterest)
    console.log(Totalpayment)

    document.querySelector('#MonthlyP').innerHTML = '$ ' + MonthlyPayment;
    document.querySelector('#TotalInt').innerHTML = '$ '+ TotalInterest;
    document.querySelector('#TotalAm').innerHTML = '$ ' + Totalpayment;
}

