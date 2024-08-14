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

>>What is Scope Chain of varibles or functions?
  The Scope of execution where each execution context has linked to its parent scope
  or Lexical Scope of the Execution.

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
        15
  >Variables created using let and const are stored in separate Memory (Script).
    Implies we cannot access them before intialization, 
    Throws ReferenceError : cannot access before intialization.
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

>>What is Temporal DeadZone?
    let and const are know as temporal DeadZone.
    When let and const variables are intialized ,they are stored in diff memory 
    rather than global Memory.
    If they are accesed before it is been intialized.It gives reference error.

>>Mention Some errors.
    ReferenceError
    TypeError
    SyntaxError

>>What is window or this in JavaScript?
  Window object is a global object in JavaScript.
  this is same as window.

>>Whaat is Block?
  Block is groupping area.Declared in flower Brackets.

>>What is Block Scope?
  scope/acces  of objects in a range is know as block scope.

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
    const is a global m/y storage.Hence it is never behave as  block Scope only.
    

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



*/

    
