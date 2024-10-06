//if we declare object using this method then it is called 'singleton object'
const tinderUser = new Object()
console.log(tinderUser)
//but if we declare it normally
//it is not singleton object
const tinder = {}
console.log(tinder)

const regularUser = {
    email: 'john@gmail.com',
    fullName: {
        userfullname:{
            firstName: "John",
            lastName: "Doe"
        }
    }
}
console.log(regularUser.fullName.userfullname.firstName)

const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3: 'c',
    4: 'd'
}
/*const obj3 = Object.assign(obj1, obj2)
// console.log(obj3)
// console.log(obj1)
but if we see the working of assign method it takes two inputs one is target and rest all after that (comma separated) are source
like here (Object.assign(obj1, obj2)) obj1 become target and obj2 become source mean obj2 is injected inside obj1 so why we creat a new obj3
so if we do obj3 == obj1 then it give true bcoz both became same after that
that's why we give an empty {} in assign and then give all the objects to merge*/

const obj4 = Object.assign({}, obj1, obj2)
//there is no difference in output, but it is a good practice
console.log(obj4)

//but nowadays, we use spread operator to merge the objects like we have done in Arrays
const obj5 = {...obj1, ...obj2}
console.log(obj5)

//if we want to fetch only keys or only values from the object then
console.log(Object.keys(obj5))        //gives key in an array
console.log(Object.values(obj5))      //gives values in an array
console.log(Object.entries(obj5))     //give key value pair in array of array

//Destructuring of object
const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


//instead of doing (console.log(course.courseInstructor)) every time for every element we can destructure it as
const {courseInstructor} = course
console.log(courseInstructor)