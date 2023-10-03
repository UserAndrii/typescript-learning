"use strict";
let age = 50;
let names = "Max";
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => {
    return 100 + a;
};
console.log(callback(1800));
let anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string")
    str = some;
let person = ["Max", 21];
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
const page = {
    load: Load.LOADING,
};
if (page.load === Load.LOADING)
    console.log("isLoading: ", Load.LOADING);
if (page.load === Load.READY)
    console.log("isLoading: ", Load.READY);
let arg;
arg = 10;
arg = "some text";
let literal;
literal = "disable";
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=type.js.map