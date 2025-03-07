const display=document.getElementById("display");
const cel=document.getElementById("cel");
const far=document.getElementById("far");
const result=document.getElementById("result");
let temp;
function convert(){
if(far.checked){
temp=Number(display.value);
temp=temp*9/5 + 32;
result.textContent=temp.toFixed(1) + "°F";

} else if(cel.checked){
temp=Number(display.value);
temp=(temp-32)*(5/9);
result.textContent=temp.toFixed(1) + "°C";

}else{

    result.textContent="Select a unit";
}
     
 
}