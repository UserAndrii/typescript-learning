"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string")
        return a.toString() + b.toString();
    return a + b;
}
function showFileds(el) {
    if ("createData" in el)
        console.log(el.createData);
    if ("privileges" in el)
        console.log(el.privileges);
    console.log(el.name);
}
showFileds({
    name: "Alex",
    privileges: ["One", "Two"],
});
class Guy {
    constructor(name) {
        this.name = name;
    }
}
class Good extends Guy {
    advice() {
        console.log("advice");
    }
}
class Bad extends Guy {
    insult() {
        console.log("insult");
    }
}
const good = new Good("Djon");
const bad = new Bad("Sergei");
function quys(user) {
    console.log(user.name);
    if (user instanceof Good)
        user.advice();
    if (user instanceof Bad)
        user.insult();
}
quys(good);
quys(bad);
const input = document.getElementById("inputEmail");
if (input) {
    input.value = "gadar@gmail.com";
    const newInput = input;
    console.log(newInput.value);
}
const user2 = {
    name: "Andrii",
    age: 27,
    gender: "MAN",
    county: "Ukraine",
};
console.log(user2);
const people = {
    names: ["Max", "Alex"],
};
(_a = people === null || people === void 0 ? void 0 : people.additionInfo) === null || _a === void 0 ? void 0 : _a.someInfo;
const userInput = "";
const store = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(store);
function addSymbol(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(addSymbol(2, 2));
console.log(addSymbol("2", 2));
console.log(addSymbol("3", "3"));
let arr;
arr = ["Alex", 23, 34, "Andrii"];
const promise = new Promise((resolve) => resolve("String"));
promise.then((data) => console.log(data));
(() => {
    function promiseFoo() {
        return __awaiter(this, void 0, void 0, function* () {
            return "String2";
        });
    }
    promiseFoo().then((data) => console.log(data));
})();
function merge(ObjA, ObjB) {
    return Object.assign({}, ObjA, ObjB);
}
const user3 = {
    name: "Max",
};
const user3Age = {
    age: 21,
};
const merged = merge(user3, user3Age);
console.log(user3);
console.log(user3Age);
console.log(merged);
console.log(merged.name);
function getLength(str) {
    return str.length;
}
const obj = {
    length: 10,
};
console.log(getLength("HAFAHGAJ"));
console.log(getLength(["HAFAHGAJ"]));
console.log(getLength(obj));
function extractValue(obj, key) {
    return obj[key];
}
console.log(extractValue({ name: "Alex" }, "name"));
class DataStore {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    getItem() {
        return this.data;
    }
}
const storeUser = new DataStore();
storeUser.addItem({
    name: "Max",
});
storeUser.addItem({
    name: "Anton",
});
console.log(storeUser.getItem());
const ageStore = new DataStore();
ageStore.addItem(23);
ageStore.addItem(67);
console.log(ageStore.getItem());
function createCar(model) {
    const car = { model };
    car.age = 1997;
    return car;
}
const arrNum = ["One", "Two", "Three"];
console.log(arrNum);
const objCar = {
    model: "Peugeot",
    age: 2015,
};
console.log(objCar);
const pageAnnotation = {
    annotation: "Some page",
    numberPage: 1,
};
//# sourceMappingURL=intersectionTypesAndGeneric.js.map