/*
function x()
{
    let i=1;  
    setTimeout(function(){console.log(i);},3000);
    console.log("Check this Line are you there");
    
}
x();
*/


/*
    CLOSURES remembers there reference only.Not it's value.
    Time and Tide waits for none,JAVASCRIPT Waits for NONE.
*/

/*

function x()
{
    for(var i=10;i<=1000000;i++)
    {
        setTimeout(function(){console.log(i);},i*1000);
    }  

    console.log("Check this Line are you there");
    
}
x();
console.log("FINAl LINE");

*/


//Doing same task without using let.

function x()
{
    for(var k=1;k<=5;k++)
    {
        setTimeout(function(){console.log(k);},k*1000);
    }
}
x();















/*
function x()
{
    let i=1;
    for(let k=0;k<10;k++)
    {
        setTimeout(function(){console.log(i);},3000);
        console.log("In Middle");
        i++;
        
    }
    
}
x();
console.log("FINALLY I CAME HERE");

*/