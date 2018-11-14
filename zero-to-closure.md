# From Zero to Closures

What I learned from one month of JavaScript.



```
function introduce(setting){
  let name = "Lindsay";
  if (setting == "casual"){
    name = "Linds";
  }
  return "This is" + name;
}
introduce("formal"); // prints "This is Lindsay"
introduce("casual"); // prints "This is Linds"
```

This function is intended to print my given name or my nick name depending on the setting of the introduction. A formal setting would require my full name, while my nick name will work in a casual setting.


Pretty basic. But it was the first time I wrote my own JS code that actually worked, and it represents my first step towards being a real web developer. I couldn't have been more proud of myself in that moment. I passed an argument! Used a conditional! Called a function! But then a week later we started learning closures, and I felt like I knew nothing.

After 1 month of Bloc lessons and several hours of internet research into what the heck a closure is, though, I would rewrite this code to read:

```
let introduce = function(givenName, nickName){
  let name = givenName;
  let altName = nickName;
  let greeting = function(setting){
    if (setting === "casual"){
      return "Hi, I'm " + altName;
    } else if (setting === "formal") {
      return "Hi, I'm " + name;
    } else {
      return "error";
    }
  };
  return greeting;
};
let meetMe = introduce("Lindsay", "Linds");
console.log(meetMe("casual")); // prints "Hi, I'm Linds"
console.log(meetMe("formal")); // prints "Hi, I'm Lindsay"

let meetSister = introduce("Rachel", "Rach");
console.log(meetSister("casual")); // prints "Hi, I'm Rach"
console.log(meetSister("formal")); // prints "Hi, I'm Rachel"
```

Much better! I made use of closure by placing the `greeting` function inside the `introduce` function, which preserves the code block to use later with calling `meet`. It also gives me the ability to reuse the `introduce` function over and over again with different `givenName` and `nickName` parameters. DRY (Don't Repeat Yourself) status achieved!

I'm sure I will learn something in the near future that makes this updated code look like sludge, but I can see how far I have come in such a short amount of time. This example shows me how I just need to be patient with myself while learning and be confident that I will only grow as a developer.
