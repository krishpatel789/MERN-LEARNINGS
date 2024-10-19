/*
//Excecution Context

>>>JavaScript is Synchronous ,Single Threaded Language

>>What happens when we run an js Program?
  Global Excecution Context gets created.
  CallStack gets created where all Execution Context is loaded,
  untill its termination.
  Once a function call or GCE gets returned or done then the call stack becomes 
  empty.

>>What is callStack?
  Callstack maintains the order of execution of execution contexts.
  CallStack is also knows by the following names:
  Execution Context Stack
  Program Stack
  Control Stack
  Runtime Stack
  Machine Stack

>>What is Loosely Typed Language?
  Loosely Typed Language means the variables are not Strictly or Strongly bounded to 
  DataType.
  Implies there is no prefixed datatype to an variable.

  //EXAMPLE:
  let a=20;
  let a="Hari";
  let a="22.00";

  Here "a" can be anything/it can hold any datatype.

  Example: JS ,Python.
  Example for Strongly Typed/Strictly Typed Language: Java

>>What is Scope Chain of varibles or functions or LEXICAL SCOPE ?
  The Scope of execution where each execution context has linked to its parent scope
  or Lexical Scope of the Execution.

        EXAMPLE:1
         function msg()
         {
          console.log(a);
         }
         var a=20;
         msg();

         EXAMPLE 2:

            function num()
          {
            c();
            function c()
            {
              console.log(a);
            }
          }

          num();
          var a;


>>Let and Const are hosted.What does this mean?
  let and const are stored on diff memory  rather than in the global.
  Hence let and const cannot be accessed before its intialization of value.

    console.log(num);
    let num=100;
    //Uncaught ReferenceError: cannot access num before intialization.
    console.log(num2);
    const num2=20;
    //Uncaught ReferenceError: cannot access num2 before intialization.

>>Diff b/w var,let,const variables.
   Variables created using  var are attached to Global Objects.or stored in Global.
   if we access var before its intialization,The output would be Undefined.

   Example for where var can be reused..
        var a=15;
        a=20;
        console.log(a);
        OUTPUT:
        20

  >Variables created using let and const are stored in separate Memory (Script).
    Implies we cannot access them before intialization, 
    Throws ReferenceError : cannot access before intialization.
  >>arrow function during excecution context at first phase,it behaves as a variable.
       example:
       var greet=()=>
        {
         console.log("Namaskar arrow function");
        }
    
>>While using const to declare variables,they should intialized and declared at the
  same time.Why?
    if not the output would be:
        SyntaxError: Missing intializer in const declartion.

        //Example:
        const a;
        a=100;
        console.log(a);

        OUTPUT:
        Syntax Error:Missing intializer in const declartion.

        //Example:
        const a=25;
        a=100;
        console.log(a);

        OUTPUT:
        TypeError: Assignment to constant variable.

        >>while using const, intialization must be done immediately 
        nor Syntax Error : Missing intializer in const declartion occurs.
        >>Once value is assigned to a const variable,we cannot reintialize to other value.

>>What is Temporal DeadZone?
    let and const are know as temporal DeadZone. Time b/w they are hoisted and intialized

    When let and const variables are intialized ,they are stored in diff memory 
    rather than global Memory.
    If they are accesed before it is been intialized.It gives reference error.

    when variables are created using let and const are created,they are stored in script M/Y

    >>The phase from which the var is hosted and till it is assigned an value is called
       Temporal Dead Zone.

      EXAMPLE 1:
       console.log(a)
        let a=20;
        var b=36;
      
      EXAMPLE 2:
       console.log(pii);
       const pii=2.137;

      OUTPUT:
      ReferenceError: Cannot access 'num' before initialization.




>>Mention Some errors.
    ReferenceError
    >>TypeError 
      Occurs incase of invoking a arrow fun before its declaration
      Assignment to constant variable.
      Example:
       const a=20;
       a=200;
       OUTPUT:
       TypeError: Assignment to constant variable.

    SyntaxError
    >> When there exists an Syntax Error.The entire program doesn't get run even some lines of
    code are correct.
     Example:
     console.log(a);
     let a=50;
     console.log(a)
     let a=200;   //or even var a=200;

     OUTPUT:
      SyntaxError: Identifier a has already declared.
     

>> What is Arrow function ?
        var greet=()=>
          {
            console.log("Namskar JavaScript ");
          }
          greet();
    >>when arrow fun is invoked before its declartion

      greet(); //arrow function behaves as variable.
      var greet=()=>
      {
        console.log("Namskar Arrow Function");
      }
      Output:
      TypeError: greet is not a function.
      
>>HOSTING?
  whenever there is question of hosting do describe the execution context using 
  examples of let const,var(global memory) and function ,arrow function.

>>What is global space in js?
 Anything that resides outside the function  stores in the global space only.

 //suppose:
 var a=20;
 console.log(window.a);
 console.log(a);
 both are same,js engine automatically add window and searches in the global space/scope.

 >> Local space
  anything inside a function stores in the local space of that function.

>>What is window or this in JavaScript?
  Window object is a global object in JavaScript.
  this is same as window.

>>Whaat is Block?
  Block is groupping area.Declared in flower Brackets.

>>What is Block Scope?
  scope/access  of objects in a range is know as block scope.

  let and Const are Block Scopes in JS.
  
        //Example
        let a=15;
            console.log("Value Outside the Block is: ",a);
            {
                let a=20;
                console.log("Value Inside the  Block is: ",a);
            }
            console.log("Value Outside the Block is: ",a);
            
            //OUTPUT
            Value Outside the Block is:  15
            Value Inside the  Block is:  20
            Value Outside the Block is:  15
    
>>var is not a block Scope Why ? or var doesn't support block Scope why?
    var is a global m/y storage.Hence it is never behave as  block Scope only.
    

        //Example
            var a=15;
            console.log("Value Outside the Block is: ",a);
            {
                var a=20;
                console.log("Value Inside the Block is: ",a);
            }
            console.log("Value Outside the Block is: ",a);

            //OUTPUT:
            Value Outside the Block is:  15
            Value Inside  the Block is:  20
            Value Outside the Block is:  20

    >>var variables can be accessed outside the block as it is stored in the Global object memory space, 
     hence it is called Global scoped.

     Example:
        {
            var a=20;
            console.log(a);
        }
        console.log(a);

        //OUTPUT:
        20
        20

     
      >>What is Shadowing ?
        Shadowing is way of changing the value of an variable using block scopes.
        
        Example:
          let a=20;
          {
            console.log(a);
            a=200;
            console.log(a);
            
          }
          console.log(a);
          OUTPUT:
          20
          200
          20

      >>What is illegal shadowing?
       We know that we cannot reintialize a variable with its same variable name for let and const.
       Illegal Shadowing is way of reintialize the let and const using same variable name
       using block scope or function scope.

       Example:
        let a=200;
        {
        let a=250;
        console.log(a);
          {
            let a=240; 
            console.log(a);
          }
        }
        console.log(a);
        OUTPUT:
        250
        240
        200


>>What is a closure?
  A closure is the combination of a function bundled together(enclosed) with refernces to its surrounding
  state(lexcial environment).
  In other words, a closure gives you access to an outer functions scope from an inner function.
  In js,closures are created everytime a function is created,at function creation time
     
   Example:
   function msg()
      {
        var message="Heyy";
        function alert()
        {
          console.log(message);
        }
        return alert;
      }
var result=msg();
console.log(result);

OUTPUT:
Function: alert

since we returned the function itself so when we call msg() function it returns alert function 
hence whenever msg is inovked it returns entire alert function itself.
    Uses of Closures:
    MOdule Design Patterns
    Currying
    Functions like once
    memoize
    Maintaining state in async
    setTimeouts
    Iterators
    and many 

  
  
  
  
  
  
  */

  


  




