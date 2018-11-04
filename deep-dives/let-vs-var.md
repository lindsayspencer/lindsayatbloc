# DRAFT
# JS Deep Dive: Let vs. Var
*`Let`'s figure out what is really going on (pardon the pun)*

## Why I'm Curious

A concept I have struggled to understand in JavaScript is the difference between `let` and `var`. They both declare a variable that will hold some value. They can both be used in the global or local scope. They both allow a variable's value to be changed. One day, I realized I was really just using them interchangeably while coding, and not picking one for a specific purpose. Knowing this lack of understanding would only reinforce bad coding habits, I set out to truly understand the difference between `let` and `var`.

## Definitions

MDN defines `let` and `var` by saying:

> `let` allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the `var` keyword, which defines a variable globally, or locally to an entire function regardless of block scope. [link to article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

`let` has a bit more limited scope than `var`. Since the scope is `var` is local, "regardless of block scope", it will be scoped to the entire function.

```
function firstAdd(){
  let x = 2;
  let thenMultiply = function(){
  let y = x + 3;  
  }
  return y;
}

console.log(firstAdd());

```


## Behavior


## Example


```
// using let

let x = 2;

function add(){
  return x + y;
}
console.log(add());

let y = 3
// returns "ReferenceError: y not defined"


// using var

var x = 2;

function add(){
  return x + y;
}
console.log(add());

var y = 3;
// returns "NaN"
```

```
function subtract(){
  let x = 2;
  var y = 3;
  return y - x;
}

console.log(subtract()); // returns 1
console.log(x); // returns "error"
console.log(y); // returns "ReferenceError: x id not defined"
```


```
function add(){
  return x + 2;
}

console.log(add());

var x = 3;

console.log(add());


function add(){
  return x + 2;
}

console.log(add());

let x = 3;

console.log(add());
```

## Conclusion

I initially approached this investigation with the mindset of "When should I be using `let` instead of `var`?" My answer after doing the research is "always". Of course, you can continue to use `var` instead of `let`; but, you must be mindful of the scope of the variable you are declaring and how it will be hoisted by the JS engine. Or, you can rely on `let` instead of `var`. Granted, you will have to be extra careful with using proper placement and syntax - but you should be doing this anyway.

The introduction of `let` in ES6 is as simple as a quality of life addition to JS. Using `let` encourages you to pay attention to your syntax to avoid getting errors. It also provides more helpful information when debugging errors. Instead of getting an `undefined` or `NaN` message, for example, when you make a mistake using `let` you will get a detailed error message, such as `ReferenceError: x is not defined`.

I'm sure there are many who prefer `var` and will say, "Well, that's just how `var` works, so deal with it."" You could. Or, you could make your code that much syntactically sweeter, and use `let`.

## Resources

https://www.vojtechruzicka.com/javascript-hoisting-var-let-const-variables/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
