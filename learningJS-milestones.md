# Milestones in Learning JavaScript
*Bloc start date: 9.24.18*

## The Very Beginning

My experience with JavaScript before Bloc was very limited. While working as the webmaster at a public library system, I relied on HTML and CSS and skirted around other languages. Bootstrap helped with this, so I was able to easily get a responsive navigation bar up and running without needing to know a whole lot! I did implement small pieces of JS here and there to test the waters. For instance, I added a piece of code to show the open hours of each branch depending on what day it was, and I used it in a form to show/hide a `<div>` depending on the user's dropdown selection. I found and used code examples from stackoverflow and W3Schools to get these working, spending an embarrassing amount of time because I was trying to use JS without knowing anything about the language. Now, I know a whole lot more about the DOM and locating elements with selectors, which would have been helpful at the time!

As with any coding tutorial, you have to get the baby steps out of the way. My first code pieces are terribly unimpressive, but I remember being so excited I would screenshot them to show my husband later. Here is one such example:

```
function introduce(toWhom){
  let name = "Lindsay";
  if (toWhom == "family"){
    name = "Linds";
  }
  return "This is" + name;
}
introduce("stranger"); // print "This is Lindsay"
introduce("family"); // print "This is Linds"
```

I know. Basic. But it was the first time I wrote my own JS code that actually worked, and it represents my first step towards being a real web developer. I couldn't have been more proud of myself in that moment! And then a week later we started learning closures, and I felt like I knew nothing and could never figure any of this out.
But now (on 10.29.18), after 35 days of Bloc lessons and several hours of internet research into what the heck a closure is, I would rewrite this code to read:

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
      return "Look at the time! Gotta go!";
    }
  };
  return greeting;
};
var meet = introduce("Lindsay", "Linds");
console.log(meet("family"));
```
Much better!
