# WebDev Resources

## Index

- General Tutorials & Tools
- HTML& CSS
- JavaScript
- Command line & Git
- APIs
- Community Research & More




## General Tutorials & Tools

### Browser Tools

- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox developer tools](https://developer.mozilla.org/en-US/docs/Tools)
- [Edge developer tools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide)

### Tutorial Resources

- [MDN](https://developer.mozilla.org/en-US/)
- [W3Schools](https://www.w3schools.com/)

### Sandbox Resources

- Codepen
- JSBin
- Repl.It
- GitHub


## HTML & CSS Resources

### Tips & Tricks

- [CSS Tricks](https://css-tricks.com/)

### Frameworks

- [Bootstrap](http://getbootstrap.com/docs/4.1/getting-started/introduction/)
- [Material Design Lite](https://getmdl.io/started/index.html)
- [Foundation](https://foundation.zurb.com/sites.html)

### Accessibility

- [WebAim](https://webaim.org/)
- [508 Resources](https://www.epa.gov/accessibility/section-508-resources)

### Other

**SASS - CSS extension language**

- [Sass-lang](https://sass-lang.com/)
- [The Sass Way](https://sass-lang.com/)




## Javascript Resources

### Learning the Language

[Eloquent JavaScript](https://eloquentjavascript.net/) - an easy to read, comprehensive JS guide. Available online and in print. (New print version to be released 11/2018).

[You Don’t Know JS](https://github.com/getify/You-Dont-Know-JS) - a JS guide available on GitHub. More technical reading, and includes exercises in each chapter.

### Tutorials

**Events**

- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) vs [event.currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

**Variables & Scope**

- [Variable Hoisting](https://www.oreilly.com/library/view/you-dont-know/9781449335571/ch04.html) (YDKJS)
- [Lexical scope & variable hoisting](http://astronautweb.co/javascript-lexical-scope/) (astronautweb.co)

“during the lexing phase, the JavaScript engine declares the variables first, before the following step in which the values are assigned to the identifiers - this is hoisting. Because functions are also defined at this time (lexing phase), we can say that lexical scope is based on where variables and blocks of scope exist at author time, and thus are locked down at the end of the lexing phase. Scope is not defined at runtime, rather it can be accessed at runtime.”

“a closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.”

“lexical scope is the author-time scope created by a closure. It is the ‘outer’ scope of a function which is defined inside a closure.”

**Closures**

“We create a closure when an inner function is made accessible from outside its parent function. This can occur when an outer function RETURNS an inner function.” (-Bloc) A closure recreates its contained environment.

[Medium Article #1](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36) - “In other words, a closure gives you access to an outer function's scope from an inner function [the inner function relies on the lexical scope of the outer function]. In JavaScript, closures are created every time a function is created, at function creation time. To use a closure, simply define a function inside another function and expose it.”

[Medium Article #2](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
“When you declare a new function, and assign it to a variable, you store the function definition and the closure.” Closure = all variables in scope at the time of authoring.
“The closure is a collection of all the variables in scope at the time of creation of the function.” It creates a backpack of variables that can be searched by the call stack. A closure does not just return a value, it returns a function and all the local variables it contains."

Videos:
- https://www.youtube.com/watch?v=71AtaJpJHw0 (learned: Console.dir)
- https://www.youtube.com/watch?v=-xqJo5VRP4A (learned: a closure is a function with preserved data)
- https://www.youtube.com/watch?v=-jysK0nlz7A&t=29s

"A function is defined in a variable, and it could be defined within another function.
Closure - a function being enclosed/contained by another function
The bubble of info that is the closure gets brought to life every time the function is called"

*My thoughts: Closures protect variables from being affected by other code on the page, while still making them useful to other functions. A closure is kind like making a “contained global scope”, called lexical scope, where a variable can be passed to another function and used again and again without being available to or altered by unrelated code. It makes a private variable, contained by the scope, that can be accessed by a nested function.*

**Object-oriented programming**

[Theory](https://www.youtube.com/watch?v=YcbcfkLzgvs)
[Principles](https://medium.freecodecamp.org/object-oriented-programming-concepts-21bb035f7260)
[Definition](https://searchmicroservices.techtarget.com/definition/object-oriented-programming-OOP) - Object-oriented programming (OOP) is a programming language model organized around objects rather than "actions" and data rather than logic. Historically, a program has been viewed as a logical procedure that takes input data, processes it, and produces output data.
[Overview](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420) of Subclasses
[In depth](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) explanation of Subclasses

**Other**

[Prototypes](https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript) &  [_proto_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)

[Recursion vs for loop](https://www.c-sharpcorner.com/blogs/performance-of-recursion-vs-loop-using-javascript)
Recursion [Basics](https://medium.com/@zfrisch/understanding-recursion-in-javascript-992e96449e03) and [Examples](https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f)

[Clearing the console](https://stackoverflow.com/questions/34270829/chrome-console-clear-assignment-and-variables)

### Challenges

https://www.w3resource.com/javascript-exercises/fundamental/index.php



## Command Line & Git Resources

### Basics
https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/4/html/Step_by_Step_Guide/s1-manipulate-current.html


## API Resources

### Javascript
- [Promises](https://developers.google.com/web/fundamentals/primers/promises)
- [CORS](https://www.codecademy.com/articles/what-is-cors) (codecademy)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (MDN)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (MDN)
- [Using Fetch](https://css-tricks.com/using-fetch/) (CSS-tricks)



## Community Research & More
### Coding for UX
- [Layering code](https://www.youtube.com/watch?v=zuoMsxA9vOg)

### Performance
- [Why Performance Matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters/) (Google)

### Responsiveness
- [Fundamentals](https://developers.google.com/web/fundamentals/design-and-ux/responsive/) (Google)
