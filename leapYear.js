const year=prompt("Enter a year in YYYY format:");
if(year%4==0)
{
    if((year%100)!=0)
        console.log("Leap Year.")
    else
    if((year%400)==0)
        console.log("Leap Year.") 
    else
        console.log("Not a Leap Year.")       
}
else
    console.log("Not a Leap Year")