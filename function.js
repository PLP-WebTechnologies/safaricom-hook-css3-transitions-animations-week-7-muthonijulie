//calculate area
function calculateArea(){
const length1=parseFloat(prompt("Enter first value:"));
const length2=parseFloat(prompt("Enter second value"));
 if(isNaN(length1) || isNaN(length2)){
        document.getElementById("res").textContent="Invalid number! Enter the right numbers";
        return;
    }

    let area=length1*length2;//local scope
    return area;
}
let result=calculateArea();
document.getElementById("res").textContent=`The area of the square is:${result}`;

//show global variable
let text="I love PLP";
function global(){
    console.log(text);
}
global();

//show local variable
function local(){
    let text1="I will be specialising on the full stack module";
    console.log(text1);
}
local();
// console.log(text1);//undefined

//logic for toggle animation
function toggleAnimation(){
    const element=document.getElementById("animated");
    element.classList.toggle("animate");
}
document.getElementById("toggleBtn").addEventListener("click",toggleAnimation);

// Start or stop spinner
function toggleSpinner() {
  const spinner = document.getElementById("spinner");
  if (spinner.style.display === 'none') {
    spinner.style.display = 'block';
  } else {
    spinner.style.display = 'none';
  }
}

document.getElementById('spinner').addEventListener('click', toggleSpinner);

document.getElementById("flip").addEventListener("click",function(){
    const card=document.getElementById("flip-card-inner");
    card.classList.toggle("flip");
    
});