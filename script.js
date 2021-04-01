function compute() {
     principal = document.getElementById("principal").value;
     rt = document.getElementById("rate").value;
     years = parseFloat(document.getElementById("years").value);
    
    interest = principal*years*rt/100;
    currentyear = new Date().getFullYear();
    futureyear = currentyear + years;

    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal +"</mark>, <br/>"
    +"at an interest rate of <mark>"+rt+"%</mark>. <br/>"
    +"You will receive an amount of <mark>" + interest + "</mark>, <br/>"
    +"in the year <mark>" + futureyear + "</mark>";
}
function rangeslide(rate){
    var ratedisplay = document.getElementById("ratevalue");
    ratedisplay.innerHTML = rate + "%";
}
function validate(){ 
    p = document.getElementById("principal").value;
    if (p <= 0) {
    alert("Enter a Positive Number");
    document.getElementById("principal").getfocus();
    return false;}} 
