let min=999
let max=100
for(let i=0;i<5;i++)
{
    let a=Math.floor(100+Math.random()*900)
    console.log(a)
        if(a<min)
            min=a
        else 
        if(a>max)
            max=a     
}
console.log("min is: "+min)
console.log("max is: "+max)