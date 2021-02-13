$(document).ready(function(){

    document.form.onsubmit = function () {
        return form();
    }
    $("#header").html(`Assignment #1-- Aarushi --991588659`);
   
    
    localStorage.setItem('user', JSON.stringify({
        "CustomerCompanyName" : document.getElementById("CustomerCompanyName").value,
        "CompanyOwner": document.getElementById("CompanyOwner").value,
        "EmailAddress":document.getElementById("EmailAddress").value,
        "PhoneNumber":document.getElementById("PhoneNumber").value,
        "AnnualSales":document.getElementById("AnnualSales").value,
        "BorrowAmount": document.getElementById("BorrowAmount").value,
        "PaymentTerms":  document.getElementById("PaymentTerms").value }));
    
        $("#footer").html(`Aarushi -- Davis Campus`);
});