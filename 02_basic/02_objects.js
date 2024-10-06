//Singleton => any object created using constructor mean that is singleton object( matlab ye apne jesa sirf eklauta object hai )
// Object.create

//Object literals

//declaring a symbol
const mySymbol = Symbol('key 1');

const jsUser = {
    name : "Deep",
    //if we want to give a name to a key with a space then we have to use ""
    "full name": "Deepanshu Yadav",
    age : 18,
    //to use a symbol inside a object we have to wrap it in []
    [mySymbol]: "myKey1",
    location : "rewari",
    email : "deep@gmail.com",
    isLoggedin: true,
    lastLogInDay: ["monday", "saturday"]
}
//how to access the object value/key
console.log(jsUser.email)
//if there is space in the name of the key of object then we cannot access it using '.' then we have to use []
console.log(jsUser["full name"])
//to access the symbol inside an object we have to use []
console.log(jsUser[mySymbol])    //it will return the value we give it inside the object

//to change values of object
jsUser.email = "khola@gmail.com"
console.log(jsUser.email)

//if we want to make the object that is immutable mean we cannot edit the value then we have to use a keyword 'freez'
// Object.freeze(jsUser)
//now if we try to update values in the object it will not reflect back
// jsUser.name = "deep k"
// console.log(jsUser)

//adding new key/value pair to object in function form
jsUser.greeting = function(){
    console.log("Hello world")
}
jsUser.greetingTwo = function(){
    //if we have a function/object declared inside a object and we want to access the value of the outer object then we have to use 'this'
    console.log(`Hello world, ${this.name}`)
}
/*if we only do greeting instead of greeting() then
greeting
console.log(jsUser.greeting)
This does not call the greeting method. Instead, it references the function itself without executing it.
greeting()
console.log(jsUser.greeting())
This calls the greeting() method, meaning it executes the function and returns whatever value the function is designed to return.
The parentheses () trigger the function execution*/
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())