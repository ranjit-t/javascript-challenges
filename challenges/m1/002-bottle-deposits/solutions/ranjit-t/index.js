
const amount1 = parseInt(prompt("Enter number of containers holding one liter or less"));
const amount2 = parseInt(prompt("Enter number of containers holding more than one liter"));

const refund = parseFloat((amount1*0.10)+(amount2*0.25)).toFixed(2);



if(isNaN(refund))
{
  alert("make sure you enter right values");
    
}
else {
    alert(`Here is your refund amount : ${refund}$`);
}
