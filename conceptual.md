### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  ### The event loop which works with the stack and queue can handle asynchronous code in JS

- What is a Promise?
  ### A promise is a future return of a piece of code that is placed in the queue and return after the stack has cleared.

- What are the differences between an async function and a regular function?
  ### An async function has promises and doesn't finish running before code beneath it runs. The async function is placed on a queue that will run after the thread stack. A regular function doesnt have promises at all and just runs in the stack.

- What is the difference between Node.js and Express.js?
  ### Node JS is the general term for backend JS while Express is the name of a framework for building JS apps in the backend. Other frameworks similar to Express are Vue and Angular.

- What is the error-first callback pattern?
  ### Error first callback pattern console.logs and error if there are problems with the code before it produces output. The code runs to see if there are errors if yes, it will return that error first. It will continue running if there are no errors and produce its intended output.

- What is middleware?
  ### Middleware is like "software glue" it processes data and produces output that can be used by another piece of software. 

- What does the `next` function do?
  ### The next function pushes the code into the next line. Without it, sometimes when a function returns something it just sits and stops. Next is required to push the thread along.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
### The issue with the above code is that Elie's API call happens first but its promise is put in the queue. The promises may not return in the order they are received so there can be blocking since JS is single-threaded. The return statement may not return all 3 of the API Calls since it will stop after the first one.
