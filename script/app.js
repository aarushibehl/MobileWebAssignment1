$(document).ready(function(){
    
    $("#Comp").html(`Customer Company Name: ${localStorage.getItem(" CustCompanyName")}`);
    $("#BorrowAmount").html(`Borrow amount: ${localStorage.getItem("borrowamount")} <br>
   Payment Terms: ${localStorage.getItem("paymentTerms")}`);


    let Interest =(localStorage.getItem("borrowamount")) * ((localStorage.getItem("paymentTerms")) / 12)  * 3;
    $("#Interest").html(`interest: $ ${Interest}`);
    let payment = (localStorage.getItem("borrowamount")) + interest;
   
    $("#payment").html(`Payment: $${payment}`);
    let profit = payment - (localStorage.getItem("borrowamount"));

    $("#profit").html(`Profit: $${profit}`);
    let Decision = document.getElementById("Decision").value;

    function func()
    {
        localStorage.setItem("Interest", Interest.value);
        localStorage.setItem("profit", profit.value);
        localStorage.setItem("Payment", payment.value);
        localStorage.setItem("Decision", Decision);
    }
});