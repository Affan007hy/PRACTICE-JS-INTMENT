// Variable Rules:-
                    // Variable names are case sensitive.
                    // only letters,underscore,numbers and $ is allowed.
                    // Variable name must not starts by numbers.
                    // Reserved words can't be variable name.

const { Console } = require("console");

// var - Variable cab be re-declared or updated.
// let - Variable can't be re-declared but can be updated.
// const - Variable can't be re-declared nor be upadted.

//Primitive DataTypes:-
                        // Number - any +ve or -ve integer.
                        // string - all leters of alphabet.
                        // boolean - stores True or False value.
                        // Undefined - not defined variable.
                        // Null - empty variable.
                        // BigInt - big integer.
                        // Symbol - Represents a unique and immutable primitive value.

let num = 42; // Number
let str = "Hello, world!"; // String
let bool = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let sym = Symbol('symbol'); // Symbol
let bigInt = 1234567890123456789012345678901234567890n; // BigInt

console.log(num);
console.log(str);
console.log(bool);
console.log(undef);
console.log(nul);
console.log(sym);
console.log(bigInt);

//Non-primitive DataTypes:-
                            // Object - Collection of Values in keys and values pair:-
                                                                // - Array.
                                                                // - Functions.

// Object
const Student = {
    Name : "Md Affan",
    Age : 19,
    RollNo : "22DPIT007HY",
    Branch : "Diploma In Information Technology"
}

console.log(Student);

//Getting Desired Value

console.log(Student["Name"]);
console.log(Student["Age"]);
console.log(Student["RollNo"]);
console.log(Student["Branch"]);

//Changing Values of Object

Student.Age = Student.Age + 1;
Student.Name = "Mohammad Affan";
Student.RollNo = "22DPIT001HY";
Student.Branch = "Diploma in Computer Science";

console.log(Student.Age);
console.log(Student.Name);
console.log(Student.RollNo);
console.log(Student.Branch);


/*
Arithematic Operators:-
                        Addition +
                        Subtract -
                        Multiplication *
                        Division / 
                        Modulus %
                        Exponentiation **
*/
{
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
}
/*
Uinary Operator:-
                    Increment Operator ++. Post and Pre 
                    Decrement Operator --. Post and Pre 
*/

let a = 15;
a++;
console.log(a);
let b = 10;
b--;
console.log(b);

/*
Assignment Operators:-
                        =
                        +=
                        -=
                        *=
                        **=
                        %=
*/

console.log("Assignment Operators");

let x = 5;
x+=5;
console.log(x);

let y = 6;
y-=2;
console.log(y);

let z = 7;
z*=5;
console.log(z);

let k = 8;
k**=2;
console.log(k);

let l = 9;
l%=2;
console.log(l);

/*
Comparision Operators:- returns boolean value
                        Equal to ==.
                        Not Equal to !=.
                        Equal to and check data type ===.
                        Not Equal to and check data type !==.
                        Greater than >.
                        Less than <.
                        Greater than Equal to >=.
                        Less than Equal to <=.


*/

{
    console.log("Comparision Operator");
    let a = 5;
    let b = 10;
    let x = 11;
    console.log("A == B", a == b);
    console.log("A != B", a != b);
    console.log("A === X", a === x);
    console.log("A !== X", a !== x);
    console.log(a>b);
    console.log(a<b);
    console.log(a>=b);
    console.log(a<=b);
}
/*
Logical Operator:- 
                    Logical OR ||. if a expression is true then it will return TRUE
                    Logical NOT !.
                    Logical AND &&. if the all expressions are true then it will return TRUE.
*/
{
    console.log("Logical Operator");
    let a = 10;
    let b = 12;
    console.log("Condition 1 and 2", a<b && a==b);
    console.log("Condition 1 and 2", a<b || a==b);
    console.log("Condition 1 and 2", !(a<b));
}

/*
Tenrnary Operator:-
                    Syntax:- x?b:c.
                    x = condition.
                    b = True Statement.
                    c = False Statement.
*/

{
    console.log("Ternary Operator");

    let age = 20;

    let result;
    result = age >= 18 ? "Eligible" : "Not Eligible"
    console.log(result);
}

/*
Ternary Operator:

Write a program that assigns a value to a variable based on a condition.
For example, assign "Even" to a variable if a number is even, otherwise assign "Odd".
*/

{
    console.log("Ternary Operator");

    let num = 101;
    let result = num % 2 ==0 ? "Even Number" : "Odd Number";
    console.log(result);
}

/* 
Handling Multiple Conditions:

Write a program that checks if a given number is within a certain range. For example, check if a number is between 10 and 20 (inclusive).
*/

{
    let num = 501;
    if(num >= 40 && num <= 100){
        console.log("Given number is in Range");
    }
    else{
        console.log("Given number is out of Range");
    }
}