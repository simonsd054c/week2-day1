//Exception
//error
//any type of error that breaks the smooth execution or the flow of execution of the program
//crashes the program
//it can be from any external libraries that we use in the program
//it can emerge from our own code as well

//types of errors in JS

// console.log(foo) // ReferenceError: foo is not defined

// let string = "hello world"
// let number = 5
// console.log(string.toUpperCase())
// console.log(number.toUpperCase()) // TypeError: number.toUpperCase is not a function

// let arr = [1, 2]
// // console.log(arr.length)
// arr.length = (2**32 - 1) + 1 // RangeError: Invalid array length
// console.log(arr)

// Throw error when we want as well
// throw keyword
// throw new Error('New Error Found')

//How can we handle the exception
//try, catch, finally
// try {
//     console.log("Try")
//     //do other things and that code threw error
//     throw new Error("New Error Found")
//     console.log("Try 2")
// } catch(err) {
//     console.log("Catch Block", err.message)
// } finally {
//     console.log("Finally")
// }

//Why finally?
//Open a file and do something with its content
// try {
//     //opened a file
//     //do something with the content of the file and it threw error
//     //close the file
// } catch(err) {
//     //handle the error
// } finally {
//     // if file not closed (still open), close the file
// }

//Example of exception handling

// function divide(numerator, denominator) {
//     try {
//         if (denominator === 0) {
//             throw new Error("Denominator cannot be zero");
//         }
//         let answer = numerator / denominator;
//         return answer;
//     } catch (err) {
//         console.log("Inside Error: ", err.message);
//     }
// }

// console.log(divide(8, 0));

//Create our own error class

// class ValidationError extends Error {
//     constructor(message, solution) {
//         super(message)
//         this.name = "ValidationError"
//         this.solution = solution
//     }
// }

// function validateUser(userObj) {
//     if(!userObj) {
//         throw new ValidationError("No user found", "Create a user at first")
//     } else if(!userObj.name) {
//         throw new ValidationError("Missing 'name' field", "You can input your name in the profile section")
//     } else if(!userObj.email) {
//         throw new ValidationError("Missing 'email' field", "You can input your email in the profile section")
//     } else {
//         return userObj
//     }
// }

// try {
//     let databaseUser = {
//         id: 1,
//         // name: "Name",
//         address: "Sydney",
//         // email: "email@email.com"
//     };
//     validateUser(databaseUser)
// } catch(err) {
//     console.log("Message: ", err.message, "\n Solution: ", err.solution)
// }
