//Jest testing looks like

//describe block - test group
//test block - individual test
//expect - testing

// //commonjs way - express - node
// const { add } = require("./index");

// //es way - react - jest doesn't support this
// //import {add} from "./index";

// //Suppose we have an 'add' function
// describe("Add Functionality", () => {

//     test("adds 1 and 3 to output 4", () => {
//         expect(add(1, 3)).toBe("4");
//     });

//     // test("adds 2 and 4 to output 6", () => {
//     //     expect(add(2, 4)).toBe(6)
//     // })
// });


//Jest structure
//describe block - test group
//test block - individual tests
//expect - testing

const { add, subtract } = require("./index")

describe("Add Function", () => {
    test("adds 1 and 2 to give 3", () => {
        expect(add(1, "hello")).toBe(3)
    })
})