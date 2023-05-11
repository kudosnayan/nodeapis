// Simulating an asynchronous operation that takes some time to complete
function simulateAsyncOperation(callback) {
    setTimeout(() => {
      const result = 'Async operation completed Nayan!';
      callback(null, result);
    }, 5000);
  }
  
  // Calling the asynchronous operation and handling the result using a callback
  simulateAsyncOperation((error, result) => {
    if (error) {
      console.error('An error occurred:', error);
    } else {
      console.log('Result:', result);
    }
  });
  
  console.log('This code is executed synchronously');