// //fs - filesystem module - already built in node
// const fs = require("fs")

// //example of try, catch
// //example of why we need finally

// //open a file
// //fd - file descriptor
// fs.open("test.txt", "w", (err, fd) => {
//     console.log("File opened");
//     try {
//         fs.writeFileSync(fd, "Hello");
//         console.log("Write Successful");
//         throw "New Error"
//         fs.closeSync(fd)
//         console.log("File Closed")
//     } catch (err) {
//         console.log("error", err)
//     } finally {
//         fs.close(fd, (err) => {
//             if(err) {
//                 console.log("File closed already")
//             } else  {
//                 console.log("File closed in finally block")
//             }
//         })
//     }
// })