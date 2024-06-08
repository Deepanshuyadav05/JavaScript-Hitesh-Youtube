const name = "deepanshu"
const age = 20

console.log(`My name is ${name} and age is ${age}` ) //always use backticks syntax instead of concatenation of the string

const str = new String("  hammer")

//Length
console.log(str.length)      //tell the length of the string

//Trim
console.log(str.trim())      //trims the spaces from start and end of a string but not in between the string .There is also some property to trim only from start or only from end like (trimstart) and (trimend)

//toUppercase
console.log(str.toUpperCase())    //convert whole string to uppercase

//toLowercase
console.log(str.toLowerCase())    //convert whole string to lowercase

//indexof  (use to find the index value of the given input value)
console.log(str.indexOf("m"))    //we get the index of "m" if it is present in string and return the index of first occurrence
console.log(str.indexOf("z"))    //we get -1 value if the given value is not present in the string
console.log(str.indexOf("er"))   //we can search for words also
console.log(str.indexOf(""))     //empty string always return 0 value
console.log(str.indexOf("m",5))  //in this syntax the search starts from the index value of 5 skipping all value before it

//lastIndexOf   (use to find the index of last similar value )
console.log(str.lastIndexOf("m"))     //tells the index of the last m

//include
console.log(str.includes("a"))   //if the value is present then it will return true
console.log(str.includes("z"))   //if the value is not present it will return false
console.log(str.includes(""))    //empty string is always true
console.log(str.includes(" "))   //we can check the space also

//slice     (use to slice the given string from and to the index value given in input)
console.log(str.slice(4))        //slice the string from index 4 to end as the ending string is not given, so it assumes to be whole string
console.log(str.slice())         //when we left the value empty then it print whole string
console.log(str.slice(2,6))      //here slicing start from index value 2 to index value 6 but 6 is excluded
console.log(str.slice(-1))       //when we use -ve value then it mean we slice the string from the end
console.log(str.slice(-4))
// console.log(str.slice(-4,3))  //invalid input
console.log(str.slice(-7,-2))    //slicing start from -7 to -2

//Replace   (use to replace any word or character by something else )
console.log(str.replace("m","r"))       //it replaces m  with  r but the first occurrence only
console.log(str.replace("mm","rr"))     //it replaces mm with rr
console.log(str.replace("","win"))      //when there is empty string the given value is inserted at the start
console.log(str.replace(" ","x"))       //we can replace space also
console.log(str.replaceAll("m","r"))    //replace all searchvalue with the replace value

//Repeat   (copies the original string multiple times)
console.log(str.repeat(3))         //it prints the string 3 times
console.log(str.repeat(4.2))       //it roundoff the value to the nearest small integer
console.log(str.repeat(7/2))       //it does the division and repeat the value according to that
console.log(str.repeat(4*2))       //it does the multiplication and repeat the value according to that
// console.log(str.repeat(-2))           //invalid syntax

//split      (use tp split a string)
console.log(str.split(''))     //when we give no space in between then all character get differ index in array  //if we assign it to differ variable by that we can print single character also
let a = str.split('')
console.log( typeof a)                  //split convert str to array
console.log(str.split(" "))    //when we give single space in between then all letter get differ index in array //if we assign it to differ variable by that we can print single word also
console.log(str.split())                //when we don't give anny thing then it convert whole str in single index array  //if we assign it to differ variable by that we can print whole str also

//charAt    (use to find the value at the given index)
console.log(str.charAt(2))              //it returns value at index number 2
console.log(str.charAt(9))              //if the given index in not present in the str then it returns an empty string(i think so not sure)
console.log(str.charAt(-2))             //-ve value are not recommended in that case also it returns empty str

//Concat       (use to add two strings)
let b= "hel"
let c = "leo"
console.log(b.concat(c))      //what ever we put first (like here b str is first) that will come before

//Method chaining   (use to chain multiple methods)
console.log(str.trim().toUpperCase().repeat(2))      //here we chain different methods like first we trim str then change it to uppercase and the repeat it 2 times


