//CALCULATOR PROGRAM

const display=document.getElementById("display");

document.addEventListener("keydown", function(event){
if(event.key==display.value){
 appendToDisplay(event.key);
}

});




function appendToDisplay(input){
   display.value +=input;

}
function clearDisplay(){
   display.value = " ";
}
function calculate(){
try {
   display.value=eval(display.value);

} catch (error) {
   display.value="Error";
}
}
