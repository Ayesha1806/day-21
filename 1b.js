// create a promise that resolves to a random number between 1 and 10 after a delay of 1 second
const randomNumberPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      if (randomNumber > 5) {
        resolve(randomNumber);
      } else {
        reject("Random number is too low");
      }
    }, 1000);
  });
  
  // use the then() method to display the resolved value in the console
  // and the catch() method to handle the case where the promise is rejected
  randomNumberPromise
    .then((randomNumber) => {
      console.log("Random number: " + randomNumber);
    })
    .catch((error) => {
      console.error("Error: " + error);
    });
  