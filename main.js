let year=prompt("Enter The Year");

if((year%4==0) && (year%400==0)){
   document.write(`${year} Leap Year`);
}
else{
   document.write(`${year} Normal Year`);
} 
