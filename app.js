console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");



for(let oddCounter = 1; oddCounter <= 100; oddCounter++)
{
    if(oddCounter % 2 == 0)
    {
        continue;
    }
    else
    {
        console.log(oddCounter);
    }
}

console.log("EXERCISE 2:\n==========\n");

// Exercise 2 Section

for(let counter = 1; counter <=100; counter++ )
{

    if(counter % 3 == 0 && counter % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if(counter % 3 == 0)
    {
        console.log("Fizz");
    }
    else if(counter % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(counter)
    }
}

console.log("Exercise 3");
//exercise 3

//while loop


let i = 1;
while(i <=100)
{
    if(i % 5 == 0 && i % 3 == 0)
    {
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0)
    {
        console.log("Fizz");
    }
    else if(i % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
    i++;
}

console.log("Do While loop");
// // do while loop

let j = 1;
do
{
    if(j % 5 == 0 && j % 3 == 0)
    {
        console.log("FizzBuzz");
    }
    else if(j % 3 == 0)
    {
        console.log("Fizz");
    }
    else if(j % 5 == 0)
    {
        console.log("Buzz");
    }
    else{
        console.log(j);
    }
    j++;


} while(j <= 100);

// //Exercise 4

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
var n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500


for(let b = 0; b <= n; b++)
{
    if (b!=value)
    {
        console.log("Did not find value");
        
    }
    if(b == value)
    {
        console.log(`Found Value! ${b}`);
        break;
    }
}

// //exercise 5

console.log("Exercise 5");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= n; i++)
{
    if(i == fizzDivisor  && i == buzzDivisor)
    {
        console.log("FizzBuzz");
    }
    else if(i == fizzDivisor)
    {
        console.log("Fizz");
    }
    else if(i == buzzDivisor)
    {
        console.log("Buzz");
    }
}