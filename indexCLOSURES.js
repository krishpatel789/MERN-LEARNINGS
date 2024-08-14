//CLOSURES IN JAVASCRIPT
/*
Function with its lexical Scope(or bundled to its lexical scope) 
is Called Closure

CLOSURES are created everytime a function is created,at
function creation time.
*/

/*
//Example 1
function namee()
{
    var a=20;
    function name2()
    {
        console.log(a);
    }
    name2();
}
namee();
*/

/*
//Example2
function x()
{
    var a=7;
    function y()   //return function y()
    {
        console.log(a);
    }
    return y; //Whole CLOSURE IS RETURNED
    //FUNCTION IS RETURNED NOT THE VALUE OF REFERENCE ITSELF.
}
var a=x();
console.log(a);

a();
*/

/*
//Example 3
function x()
{
    var a=7;
    function y()   //return function y()
    {
        console.log(a);
    }
    a=100;
    return y; //Whole CLOSURE IS RETURNED . function is returned not any value itself.
}
var a=x();
console.log(a);

a();

*/


//Example 4

function a()
{

    var x=10;
    function b()
    {
        var y=20;
        function c()
        {
            console.log(x,y);
        }
        var y=100;
        c();
    }
    b();
}
var k=a();
k;

/*
//USES OF CLOSURES
MODULE DESIGN PATTERNS
CURRYING
FUNCTIONS LIKE ONCE
MEMOIZE
MAINTAING STATE IN ASYNC WORLD
SETTIMEOUTS
ITERATORS
AND MANY MORE.................
*/