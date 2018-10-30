# Milestones in Learning JavaScript
*Bloc start date: 9.24.18*

## Before Bloc

My experience with JavaScript before Bloc was very limited. While working as the webmaster at a public library system, which is how I discovered my interest in coding, I relied on HTML and CSS and skirted around other languages. Bootstrap helped with this, so I was able to easily get a responsive navigation bar up and running without needing to know a whole lot.

I did implement small pieces of JS here and there to test the waters. For instance, I added a piece of code to show the open hours of each branch depending on what day it was, and I used it in a form to show/hide a `<div>` depending on the user's dropdown selection. I found and used code examples from StackOverflow and W3Schools to get these working, spending an embarrassing amount of time because I was trying to use JS without knowing anything about the language. Now, I know a whole lot more about the DOM and locating elements with selectors, which would have been helpful at the time!

## October 2018

After a few lessons in HTML and CSS, which were mostly review for me, I launched into learning JavaScript in October. As with any coding tutorial, you have to get the baby steps out of the way. My first code pieces are terribly unimpressive, but I remember being so excited I would screenshot them to show my husband later. Here is one such example:

```
function introduce(toWhom){
  let name = "Lindsay";
  if (toWhom == "family"){
    name = "Linds";
  }
  return "This is" + name;
}
introduce("stranger"); // prints "This is Lindsay"
introduce("family"); // prints "This is Linds"
```

I know. Basic. But it was the first time I wrote my own JS code that actually worked, and it represents my first step towards being a real web developer. I couldn't have been more proud of myself in that moment. I passed an argument! Combined a function with a conditional! Called a function! I'm the coding Queen! But then a week later we started learning closures, and I felt like I knew nothing and would never figure any of this out.

After 1 month of Bloc lessons and several hours of internet research into what the heck a closure is, though, I would rewrite this code to read:

```
var introduce = function(givenName, nickName){
  name = givenName;
  altName = nickName;
  var greeting = function(toWhom){
    if (toWhom === "family" || toWhom === "friend"){
      return "Hi, I'm " + altName;
    } else if (toWhom !== "family" && toWhom !== "friend") {
      return "Hi, I'm " + name;
    } else {
      return "error";
    }
  };
  return greeting;
};
var meet = introduce("Lindsay", "Linds");
console.log(meet("family")); // prints "Hi, I'm Linds"
console.log(meet("stranger")); // prints "Hi, I'm Lindsay"
```

Much better! My conditional is a bit more advanced with strict equalities and inequalities (`===` and `!==`) and logical operators (`&&` and `||`). I made use of closure by placing the `greeting` function inside the `introduce` function, which preserves the code block to use later with calling `meet`. It also gives me the ability to reuse the `introduce` function over and over again with different `givenName` and `nickName` parameters. DRY (Don't Repeat Yourself) status achieved!

I'm sure I will learn something in the near future that makes this updated code look like sludge, but I can see how far I have come in such a short amount of time. This example shows me how I just need to be patient with myself while learning and be confident that I will only grow as a developer.

## Assessment Time
