"use strict";
class useStatic {
    constructor() {
        useStatic.count += 1;
    }
    static isStaticMethod() {
        console.log("I'm static");
    }
    showCount() {
        console.log(useStatic.count);
    }
}
useStatic.count = 0;
const obj1 = new useStatic();
const obj2 = new useStatic();
const obj3 = new useStatic();
obj1.showCount();
obj2.showCount();
obj3.showCount();
useStatic.isStaticMethod();
class Plane {
    constructor() {
        this.pilotInCabin = false;
    }
    sitInPlane() {
        this.pilotInCabin = true;
    }
}
class Maize extends Plane {
    startEngine() {
        return "Tra-tra-tra";
    }
}
class Boing extends Plane {
    startEngine() {
        return "Buuuuuuu";
    }
}
const maize = new Maize();
maize.sitInPlane();
console.log(maize.startEngine());
let user = {
    name: "Andrii",
    age: 27,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user.greet("Hi, I'm");
class Pilot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.checkAge();
    }
    checkAge() {
        if (this.age <= 28)
            throw new Error("Pilot to young");
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
    flyMessage() {
        console.log("We are leaving");
    }
}
const pilot = new Pilot("Andrii", 32);
pilot.greet("Hello! I'm a pilot, my name is");
pilot.flyMessage();
class PilotAI {
    sitInPlane(pilot) {
        this.pilot = pilot;
    }
}
class BoingPlane extends PilotAI {
    constructor() {
        super(...arguments);
        this.startEngine = () => {
            if (!this.pilot)
                throw new Error("No pilot in cabine");
            console.log("Starting the turbines");
            this.pilot.flyMessage();
            return true;
        };
    }
}
const boing = new BoingPlane();
boing.sitInPlane(pilot);
boing.startEngine();
class Terrorist {
    bluff(phrase) {
        console.log(phrase);
    }
    flyMessage() {
        console.log("We demand 9 million dollars or we will kill everyone");
    }
}
const newPilot = new Terrorist();
boing.sitInPlane(newPilot);
newPilot.bluff("We hijacked the plane");
boing.startEngine();
const foo = (n1, n2) => n1 + n2;
const foo2 = (n1, n2) => n1 + n2;
console.log(foo(123, 456));
console.log(foo(789, 123));
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error("Door is close");
        }
        this.tenants.push(person);
        console.log("Person inside");
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error("Key to another door");
        }
        return (this.door = true);
    }
}
const key = new Key();
const house = new MyHouse(key);
const person1 = new Person(key);
house.openDoor(person1.getKey());
house.comeIn(person1);
//# sourceMappingURL=constructor.js.map