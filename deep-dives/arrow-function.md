# Confronting Arrow Functions in JavaScript

I tend to shy away from using arrow function expressions. I rely on my traditional function syntax, but I think it's time I get with the times and feel comfortable not only using but parsing arrow functions.  

## Comparing Syntax

let foo = (string) => {
    return bar.toUpperCase();
}

let foo = string => string.toUpperCase();

function add(num1, num2){
  return bar.toUpperCase();
}

let add = (num1, num2) => {
  return num1 + num2;
}

let add = (num1, num2) => num1 + num2;

## Alternate Uses

Certain JS methods rely on arrow function expressions, including .map() and .filter().

let arr = [2, 5, 45, 76];

let doubleArr = arr.map(x => {
  return x * 2;
  })
console.log(doubleArr);
