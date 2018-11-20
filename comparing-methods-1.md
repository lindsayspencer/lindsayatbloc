# Comparing Methods

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
