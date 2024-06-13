//Array
//it allows us to store different item (string,num,bool etc.) in same variable
//JS array are resizable like if we declared it then after that also we can edit value in it
//JS array copy operations create shallow copies
//shallow copy:it is a copy of an object who share a same reference point(mean whatever we change it get changed into original array)
//Deep copy:it is a copy of an object who don't share same reference point(mean whatever we change it doesn't get changed to original array)

let array = [1, 2, 3, 4, 5,"arr"];
let hero_arr = ["ironman", "thor","flash","hulk","wonda" ]
console.log(array)
console.log(hero_arr)

const myArr = new Array(2,53,6,98,1,2)   //here we can use () bracket
console.log(myArr)

// Array Methods

// Length
console.log(myArr.length);   //it tells the length of the array(length of empty array is 0)

//indexOf
console.log( myArr.indexOf(5) )  //if the element is not present then it returns -1
console.log( myArr.indexOf(4) )  //if the element is present then it returns the index value of the first occurred value

//lastIndexOf
console.log( myArr.lastIndexOf(2) )

//includes(it return boolean value)
console.log(myArr.includes(9) )   //if the value is not present then it returns false
console.log(myArr.includes(4) )   //if the value is not present then it returns true

//push & pop
myArr.push(3,9);     //it pushes the given value to the Array at the end
console.log(myArr);
console.log(myArr.pop())    //it doesn't need any input it just pops out the last element from the array(if the array is empty it returns undefined)

//Shift & unshift
myArr.unshift(34,4)  //it adds the element at the start of the array(people say it is worst as we have to shift index of all element of whole array)
console.log(myArr)
myArr.shift()
console.log(myArr)     //it doesn't need any input it just deletes out the first element from the array(if the array is empty it returns undefined)

//join
const newArr = myArr.join()   //it converts the array in string and join it
console.log(newArr)
console.log(typeof newArr)          //its type changes to string from object
const check_array = [1,4,6,3]
console.log(check_array.join("deep"));     //it joins deep to all the elements of the array and convert it to string

//slice  (don't make change in original array)
console.log(myArr.slice(1,5))    //return the sliced array(here it returns value on index 1,2,3,4 not 5 as it is not included)
console.log(myArr.slice(1,-3))   //it starts from 1 and end at -3(mean -1=3,-2=1, -3=98) but 98 (-3) is not included
console.log(myArr.slice())       //when we not give any input then it returns whole array
console.log(myArr.slice(myArr.length-1))     //if we want last element then we can do length-1
console.log(myArr.slice(myArr.length))       //it returns empty array as myArr.length return length of the array mean slice starts after last element of array which is nothing

//splice
console.log(myArr.splice(5))   //for single value it work like slice
console.log(myArr.splice(1,3))  //it deletes the value from index 1 to 3 (except 3)
console.log(myArr.splice(0,1,7,4))    //select element 0(start) and delete 1(delete count) element from the array and insert the item at 0(start) index
console.log(myArr.splice(1,2,5))
console.log(myArr)

//Concatenation   (don't make change in original array)
array.push(hero_arr)    //when we push an array in another array then the pushed array is counted as a single element in the first array
console.log(array)

const all_hero = array.concat(hero_arr)   //it concat two array (but its drawback is that it can concat only two array at a time)
console.log(all_hero)

const all_new_hero = [...array,...hero_arr,...myArr]    //like this we can concat more than two array
console.log(all_new_hero)

//flat   (when there is array inside array, and we want to split them into single then we use flat )
const another_array = [33,34,52,6,[6,26,3,[56,63,]],6]
console.log(another_array.flat(1))   //depth represent that how deep we have to plat the array

// isArray   (return boolean value)
console.log(Array.isArray("hello"))   //here the Array is not that array that we have defined it is build in(it check weather the given input is array or not here "hello" is not an array, so it give false)
console.log(Array.isArray(another_array))   //here it give true as another_array is an array

//from   (convert input to array)
console.log(Array.from("hello"))   //for string use braces() //here the Array is not that array that we have defined it is build in (it convert the input to array)
console.log(Array.from([2,4,5]))  //for number use square brackets[]

//of    (creat a array of multiple values)
let score1 = 100
let score2 =  200
let score3 = 300
console.log(Array.of(score1,score2,score3))  //combine/join all scores and create an array

//fill    (fill/replace the value with input values//make change in original array)
console.log(another_array.fill(5,2,4))  //replace the value at index 2,3 by 5
console.log(another_array.fill(5))    //change all the value of the array to r

//sort & reverse (both make change in original array)
console.log(hero_arr.sort())      //sort the array but only use in strings not on number(make change in original array)
console.log(hero_arr.reverse())   //reverse the array(make change in original array)
console.log(hero_arr)

//split
let name = "deep k"
console.log(name.split())    //convert whole string to single value in array
console.log(name.split(''))   //convert each letter to separate in array















