Published on Medium! -> https://medium.com/@lindsayspencer/let-vs-var-a-simple-answer-3cf8c941f4e4

# JS Deep Dive: Let vs. Var

## Why I'm Curious

A concept I have struggled to understand in JavaScript is the difference between `let` and `var`. They both declare a variable that will hold some value. They can both be used in the global or local scope. They both allow a variable's value to be changed. One day, I realized I was really just using them interchangeably while coding, and not picking one for a specific purpose. Knowing this lack of understanding would only reinforce bad coding habits, I set out to truly understand the keywords `let` and `var`. So `let`'s figure out what is really going on! (Pardon the pun.)

## Definition

MDN defines `let` and `var` by saying:

> `let` allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the `var` keyword, which defines a variable globally, or locally to an entire function regardless of block scope. [link to article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

Based on this definition, `let` seems to have a more limited or defined scope than `var`. Since the scope is `var` is local, "regardless of block scope", it will be scoped to the entire function. So the placement of `var` must not be as big of a deal because if I'm in the scope, I'm good. When using `let`, I need to make sure I am declaring the variable in the correct block that I intend to use it. I must code more carefully. This still doesn't give me the full picture I am looking for, like telling me when to use one over the other. Examining their different behavior in code examples will illustrate more fully.

## Hoisting Examples

Var hoisting is an important concept in JS, based on the fact that JS is a compiled language [link to You Don't Know JS chapter](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch3.md). It is a quickly compiled language, but compiled nonetheless. Just before running, the JS engine makes sure everything is in its place. It sees that you used `var x = 2` halfway through your program, so it declares `var x` for you at the top of the program. Hoisting seems to work a little differently, though, when using `let`. We can see the difference with this simple code:

```
var x;
let y;

console.log(x); // undefined
console.log(y); // undefined
```
All I did was declare `x` and `y`, without setting any values. When using `console.log()` on both, they return `undefined`. This makes sense. The engine sees that, yes indeed, we do have an `x` and `y` variable, but they are `undefined` since I haven't given them any values. Now I'm going to move `var x`:
```
let y;

console.log(x); // undefined
console.log(y); // undefined

var x;
```
With this change, I am trying to print `x` before I have even declared it, which should cause some problems. But due to var hoisting, everything actually turns out okay. When compiling the code, the declaration of `x` is hoisted to the top of the program. So `console.log(x);` still returns `undefined`. What happens when I do the same thing with `let y`, though?
```
console.log(x); // undefined
console.log(y); // error!

var x;
let y;
```
I still got `undefined` from `console.log(x);` due to var hoisting, but I got a big fat error message from `console.log(y);`: `ReferenceError: y is not defined`. So var hoisting doesn't really work on `let`. The engine got mad that I did not write my code in the correct order. I should have declared my variable `y` before trying to use it. Shame on me!

In this example, the use of `let` introduces a kind of strict mode. When I wrote bad code, the engine called me on it. Imagine having a program that was 1000 lines longer with 10 times as many variable. Would it be more useful as a developer to see an `undefined` message or a detailed error message when debugging?

## Number Examples
It seems like `let`'s more defined scope may actually be useful. I decided to try another example, this time giving values to `x` and `y`. First, I tried it with `var`:
```
var x = 2;

function add(){
  return x + y;
}
console.log(add()); // NaN

var y = 3;

```
Why did I get a response of `Nan`? `NaN` means "not a number", so my function did not return a numerical value.

- I declared the variable `x` and gave it a value of 2.
- I wrote my function to add the values of `x` and `y`.
- I executed the `add()` function and printed its return value to the console with `console.log()`
- Here's my problem! I declared the value of `y` after calling the function `add()`, so it ran before it knew the value of 3 existed.

What did the function actually return then? What did it consider to be "not a number"? Var hoisting would have come into play, hoisting `var y;` to the top of the program, but was `undefined` at the time of executing `add()`. So the function actually returned `2 + undefined`, which is definitely not a number. I'll move my statement `var y = 3;` to the top of the program and everything will work as it should.  

What would have happened if I had used `let` instead?

```
let x = 2;

function add(){
  return x + y;
}
console.log(add()); // error!

let y = 3;
```
This time I got an error message: `ReferenceError: y is not defined`. Based on this info, I should look at where my `y` variable is.
- I referenced it in the `add()` function
- Here's my problem! I declared the value of `y` after calling the `add()` function, so `y` was not defined at the time of execution.

See how much faster that debugging process was? Because I used `let` instead of `var`, I got an error instead of `NaN`. The detailed error message pointed me in the right direction from the start to quickly find and fix the problem with my code.

Granted, no one should or would be writing code like this. Everyone knows better than to declare a variable and its value after executing a function where it is used. But mistakes happen! In giant programs, when multiple developers are going in and making changes, misplaced code is bound to happen. That is why the term "debugging" exists. So, like I said earlier, would you rather have a message of `undefined` or `NaN` or a detailed error message?

## Conclusion

I initially approached this investigation with the question, "When should I be using `let` instead of `var`?" My answer after doing the research is "always". Of course, you can continue to use `var` instead of `let`; but, you must be mindful of the scope of the variable you are declaring and how it will be hoisted by the JS engine. Or, you can rely on `let` instead of `var`. It did force me to be extra careful with using proper placement and syntax - but I should be doing this anyway.

The introduction of `let` in ES6 is as simple as a quality of life addition to JS. Using `let` encourages you to pay attention to your syntax to avoid getting errors. It also provides more helpful information when debugging. Instead of getting `undefined`, using `let` means I'll get a detailed error message, such as `ReferenceError: x is not defined`.

I'm sure there are many who prefer `var` and will say, "Well, that's just how `var` works, so deal with it." You could. Or, you could make your code that much syntactically sweeter, and use `let`.

### Resources

- https://www.vojtechruzicka.com/javascript-hoisting-var-let-const-variables/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md
