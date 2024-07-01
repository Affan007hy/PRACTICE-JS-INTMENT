/*
In JavaScript, conditional statements are used to execute different
actions based on different conditions:

1. if statement: Executes a block of code if a specified condition is true.
2. else statement: Specifies a block of code to be executed if the same condition is false.
3. else if statement: Allows you to specify a new condition if the first condition is false.
4. switch statement: Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

These statements are fundamental for controlling the flow of program based on varying conditions.
*/


/* 
Write a program that checks if a person is eligible to vote.
A person is eligible to vote if they are 18 years old or older and are a citizen of the country.
*/

{
    let age = 18;
    let nationality = "Indian";
    if(age >= 18 && nationality == "Indian"){
        console.log("Eligible For Vote");
    }
    else{
        console.log("Not Eligible For VOte");
    }
}


//Write a program that checks if a number is positive, negative, or zero and prints the appropriate message.

console.log("Checking the number whether it is +ve , -ve or zero");
{
    let num = 10;

    if(num>0){
     console.log(num, "is Positive");
    }
    else if(num<0){
        console.log(num,"is Negative");
    }
    else{
        console.log(num,"is zero");
    }
}

/*Write a program that assigns a letter grade based on a numeric score.
For example, a score of 90 and above is an "A", 80-89 is a "B", 70-79 is a "C",
60-69 is a "D", and below 60 is an "F".*/

console.log("else-if Statement")
{
    let score = 55;

    if(score>90 && score<=100){
        console.log("A Grade");
    }
    else if(score>80 && score<89){
        console.log("B Grade");
    }
    else if(score>70 && score<79){
        console.log("C Grade");
    }
    else if(score>60 && score<69){
        console.log("D Grade");
    }
    else{
        console.log("Failed");
    }
}


/*
Write a program that checks if a year is a leap year.
A year is a leap year if it is divisible by 4, but not by 100, unless it is also divisible by 400.
*/
console.log("Checking the Year is leap or not");

console.log("Nested if Statement");
{
    let year = 1996;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(year + " is a leap year.");
            } else {
                console.log(year + " is not a leap year.");
            }
        } else {
            console.log(year + " is a leap year.");
        }
    } else {
        console.log(year + " is not a leap year.");
    }
}

/*
Write a program that takes a day of the week as an input (1 for Monday, 2 for Tuesday, etc.) 
and prints the name of the day. Use a switch statement for this.
*/

console.log("Switch Case");

{
    let day = 58;
    switch (day){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Input!..");
    }
}

/*
Switch with Fall-through:

Write a program using a switch statement that categorizes a given month number (1-12) into the appropriate season 
(Winter, Spring, Summer, or Fall). Use fall-through to group months into seasons.
*/

{
    console.log("Month season");
    let monthnum = 11;
    switch(monthnum){
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn (Fall)");
            break;
        default:
            console.log("Invalid Month Number!..");
    }
}