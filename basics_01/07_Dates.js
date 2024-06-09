let mydate = new Date();
console.log(mydate);               //give the date information which is not understandable
console.log(mydate.toString());    //it gives the date in fome of IST
console.log(mydate.toLocaleDateString());   //it gives the date in local format like 8/6/2024
console.log(mydate.toDateString());        //it converts date to the format like( sat jun 08 2024)
console.log(mydate.toTimeString());        //it gives only time in IST
console.log(mydate.toISOString());         //it gives the date info in ISO(it is same as normal mydate print)
console.log(mydate.toJSON());              //IT IS SAME AS toISOstring

console.log(typeof mydate);     //type of date is object (interview ques)
//Best to use toLocalString


let myCreatedDate = new Date(2024, 5, 8);   //it gives the year,month,date
console.log(myCreatedDate.toLocaleString());
myCreatedDate    = new Date(2024, 5, 8, 5, 23, 77, 784);   //it gives last time upto the year,month,date,hours,minute,second,millisecond
console.log(myCreatedDate.toLocaleString());
myCreatedDate    = new Date("january-2-2020 ");   //it is in american standard mm/dd/yyyy
console.log(myCreatedDate.toLocaleString());
myCreatedDate    = new Date("02-11-2023");  //it is in american standard mm/dd/yyyy
console.log(myCreatedDate.toLocaleString());



let timeStamp = Date.now()
console.log(timeStamp);         //give time in millisecond


const time = new Date()
console.log(time.getFullYear());
console.log(time.getMonth());        //january=>0
console.log(time.getDate());
console.log(time.getDay());          //sunday=>0   Saturday=>6
console.log(time.getTime());         //it millisecond
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());








