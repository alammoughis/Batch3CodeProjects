// Synchronous = code run line by line


/* 
Asynchonous Programming and Callbacks

Most of the time, JavaScript code is ran synchronously.
This means that a line of code is executed, then the next one is executed, and
so on.
Everything is as you expect, and how it works in most programming
languages.
However there are times when you cannot just wait for a line of code to
execute.
You can't just wait 2 seconds for a big file to load, and halt the program
completely.
You can't just wait for a network resource to be downloaded, before doing
something else.
JavaScript solves this problem using callbacks.
One of the simplest examples of how to use callbacks is timers. Timers are not
part of JavaScript, but they are provided by the browser, and Node.js. Let me
talk about one of the timers we have: setTimeout() .
The setTimeout() function accepts 2 arguments: a function, and a number.
The number is the milliseconds that must pass before the function is ran.
Example: 

*/


/*
Synchronous = code will run line by line
*/
console.log('step 1....');


// console.log('load large file step 2....'); // run within 2 minutes


// function muzammil(){
// }

// muzammil(); //callback
setTimeout(function(){
    console.log('load large file step 2 .... 1gb excel');
},2000); //callback
//1000 = 1 second

console.log('step 3....');
console.log('step 4....');


// function muzammilTimeout(functionParam,miliSeconds){
//     functionParam();
//     console.log(miliSeconds,'miliseconds')
// }

// // muzammilTimeout(); //callback;

// muzammilTimeout(function(){
//     console.log('check this function')
// },2000); // callback


/*
there are three ways to convert code from Synchronous to Asynchronous

1-callback
2-promise
3-async await
*/

//1-callback

console.log('step 1....');

setTimeout(function(){
    console.log('step 2.... 1gb excel');
},2000); //callback

console.log('step 3....');

// 2-Promise

const doSomething = new Promise(function(resolve,reject){
    if (true) {
        resolve({
        name: "muzammil",
        last: "mustaqeem",
        address: "north karachi",
        });
    } else {
        reject("this error occurred");
    }
})

doSomething
.then(function(data){
    console.log(data," promise data");
})
.catch(function(error){
    console.log(error," promise error");
})


//3-asyns await

const getTodosData = function () {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    //   console.log(data,"data");
      return data;
    })
    .catch(function (error) {
    //   console.log(error);
      return error;
    });
};

//ASYNC AWAIT
const doSomethingAsyncAwait = async function () {
  const data = await getTodosData();
  if (data) {
    data.forEach((singleItem) => {
      console.log(singleItem);
    });
  }
};

doSomethingAsyncAwait();

// https://flaviocopes.com/page/list-subscribed/?ref=html-book