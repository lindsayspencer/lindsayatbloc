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

Pretty basic. But it was the first time I wrote my own JS code that actually worked, and it represents my first step towards being a real web developer. I couldn't have been more proud of myself in that moment. I passed an argument! Used a conditional! Called a function! But then a week later we started learning closures, and I felt like I knew nothing.

After 1 month of Bloc lessons and several hours of internet research into what the heck a closure is, though, I would rewrite this code to read:

```
let introduce = function(givenName, nickName){
  let name = givenName;
  let altName = nickName;
  let greeting = function(toWhom){
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
let meetMe = introduce("Lindsay", "Linds");
console.log(meetMe("family")); // prints "Hi, I'm Linds"
console.log(meetMe("stranger")); // prints "Hi, I'm Lindsay"

let meetSister = introduce("Rachel", "Rach");
console.log(meetSister("family")); // prints "Hi, I'm Rach"
console.log(meetSister("stranger")); // prints "Hi, I'm Rachel"
```

Much better! My conditional is a bit more advanced with strict equalities and inequalities (`===` and `!==`) and logical operators (`&&` and `||`). I made use of closure by placing the `greeting` function inside the `introduce` function, which preserves the code block to use later with calling `meet`. It also gives me the ability to reuse the `introduce` function over and over again with different `givenName` and `nickName` parameters. DRY (Don't Repeat Yourself) status achieved!

I'm sure I will learn something in the near future that makes this updated code look like sludge, but I can see how far I have come in such a short amount of time. This example shows me how I just need to be patient with myself while learning and be confident that I will only grow as a developer.

## Assessment Time

When I thought I'd got something wrong, I followed my instincts and trusted my understanding of JS and actually came up with a function that achieved exactly what I wanted it to!

Create a function that accepts an array and a number, and returns true if the array contains the number.

Comparing two ways to approach the same problem.

Optimizing for time and space.  
The function needs to be able to handle the following scenarios:
1. The given array does not contain the given number
2. The given array contains a single instance of the given number
3. The given array contains multiple instances of the given number

```
function checkByFilter(arr, num){
  let filteredArr = arr.filter(x => x == num){
    if(filteredArr[0] == num){
      return true;
    } else {
      return false;
    }
  }
}
```
The first optimizes for time, but not space. It is time optimized because it compares every element to a single condition, x == num. It is not optimized for space, though, since the filter() method creates a secondary array.
I declared the function checkByFilter, and passed two arguments, the array to search and the number to search for.
I then created a new variable filteredArr and set it equal to the filtered version of the original arr. I made use of the filter method to look at each value x in array arr and only return the values that are equal to num's number value. filteredArr will be either an empty array, or an array containing one or more instances of num.
So now that I have my filtered array, I can use a conditional to test it for the presence of num. Since all I am doing is searching for a single value, I can keep it as a simple if..else. If filteredArr[0] is equal to num, then return true. If it is equal to anything else, then return false.
But why did I chose to use filteredArr[0] instead of just filteredArr?

This is my preferred way to handle this type of problem simply because I only wanted the function to return a single answer. A conditional is required because I am  
```
function checkByLoop(arr, num){
  for(var x = 0; x < arr.length; x++){
    if(arr[x] == num){
      return true;
    } else {
      return false;
    }
  }
}

let arr1 = [2, 5, 7];
let arr2 = [2, 3, 4];
let num1 = 7;
let num2 = 2;

console.log(checkByFilter(arr1, num1));
console.log(checkByLoop(arr1, num1));
```
The second optimizes for space, but not time. It does not create a secondary array, but it checks every element in the array at least once, possible twice if the first condition is not met. It also takes the time to return an answer for each element.


Other ways? I could use the find() method, which is similar to the filter() method. The pro is it would only return a single value regardless if num occurred more than once in the given array. The con is it returns undefined if num is not present in the given array. This would satisfy our conditional and not technically cause a problem, but I do not think it is as clear as using the filter() method.

```
function checkByFind(arr, num){
  let foundArr = arr.find(x => x == num);
    if(foundArr == num){
      return true;
    } else {
      return false;
    }
}
```


Or I could do indexOf, and check that the answer is >= 0 and < arr.length. This may actually be the most optimized. It does not have to check every element in the array, unless num is the very last element, so it is time friendly. It also does not create a secondary array, so it is space friendly.

```
function checkByIndex(arr, num){
    if(arr.indexOf(num) >= 0 && arr.indexOf(num) < arr.length){
      return true;
    } else {
      return false;
    }
}
```

I'm sure there are several more ways to do this problem, and please feel free to share them! 
