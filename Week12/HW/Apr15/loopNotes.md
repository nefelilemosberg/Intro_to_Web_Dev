# Loops

Loops are about repeating something over and over again.

## Looping through a collection 

Sometimes when using a loop you have a collection of items and want to do something eith every item.
>- Arrays 

## For...of loop 

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

1. Given the collection cats, get the first item in the collection.
2. Assign it to the variable cat and then run the code between the curly braces {}.
3. Get the next item, and repeat (2) until you've reached the end of the collection.

## Map() and Filter()

>- You use map() to do something to each item in a collection and create a new collection with the changed items (used with function expressions )

function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

>- calls the function once for each item making them all uppercase 

filter() tests each item in a collection and creates a new collection with the filter 

function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]

## The Standard for loop 

>- you want to run the same code 100 times - use "for" loop

for (initializer; condition; final-expression) {
  // code to run
}

1. An initializer — this is usually a variable set to a number, which is incremented to count the number of times the loop has run. It is also sometimes referred to as a counter variable.
2. A condition — this defines when the loop should stop looping. This is generally an expression featuring a comparison operator, a test to see if the exit condition has been met.
3. A final-expression — this is always evaluated (or run) each time the loop has gone through a full iteration. It usually serves to increment (or in some cases decrement) the counter variable, to bring it closer to the point where the condition is no longer true.

example: 

const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));

Breaking down the for (let i = 1; i < 10; i++)

1. let i = 1: the counter variable, i, starts at 1
2. i < 10: keep going round the loop for as long as i is smaller than 10
3. i++: add one to i each time round the loop

## Exiting loops with break 

>- If you want to exit a loop before all the iterations have been complete - use break statement 

## Skipping iterations with continue 

>- skits to the next iteration of the loop
