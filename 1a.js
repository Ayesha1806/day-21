// create a promise that resolves to a random number between 1 and 10 after a delay of 1 second
const randomNumberPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      resolve(randomNumber);
    }, 1000);
  });
  
  // use the then() method to display the resolved value in the console
  randomNumberPromise.then((randomNumber) => {
    console.log("Random number: " + randomNumber);
  });
  