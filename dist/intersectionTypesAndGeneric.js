"use strict";
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
//# sourceMappingURL=intersectionTypesAndGeneric.js.map