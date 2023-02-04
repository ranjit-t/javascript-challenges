const length = parseInt(prompt("Enter Length of the room in meters"));
const width = parseInt(prompt(" Super, Now Enter Width of the room in meters"));

const area = length*width;



if(isNaN(area))
{
  alert("make sure you enter right values");
    
}
else {
    alert(`The area of the room is ${area}`);
}
