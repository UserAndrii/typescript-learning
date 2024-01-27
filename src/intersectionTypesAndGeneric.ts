type Admin = {
  name: string;
  privileges: string[];
};

type User = {
  name: string;
  createData: Date;
};

type AdminUser = Admin & User;

/** ----------------------------------------------------------------------------------------------------------------------- */

interface IAdmin {
  name: string;
  privileges: string[];
}

interface IUser {
  name: string;
  createData: Date;
}

interface IAdminUser extends Admin, User {}

/** ----------------------------------------------------------------------------------------------------------------------- */

type ComplexType = string | number;

function combine(a: ComplexType, b: ComplexType) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  return a + b;
}

/** ----------------------------------------------------------------------------------------------------------------------- */

type AdminOrUser = Admin | User;

function showFileds(el: AdminOrUser) {
  if ("createData" in el) console.log(el.createData);
  if ("privileges" in el) console.log(el.privileges);
  console.log(el.name);
}

showFileds({
  name: "Alex",
  privileges: ["One", "Two"],
});

/** ----------------------------------------------------------------------------------------------------------------------- */

abstract class Guy {
  constructor(public name: string) {}
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

function quys(user: Guy) {
  console.log(user.name);
  if (user instanceof Good) user.advice();
  if (user instanceof Bad) user.insult();
}

quys(good);
quys(bad);

/** ----------------------------------------------------------------------------------------------------------------------- */

// const input = <HTMLInputElement>document.getElementById("inputEmail")!;
// const input = document.getElementById("inputEmail") as HTMLInputElement;

// input.value;

const input = document.getElementById("inputEmail");

if (input) {
  (input as HTMLInputElement).value = "gadar@gmail.com";
  const newInput = input as HTMLInputElement;
  console.log(newInput.value);
}

/** ----------------------------------------------------------------------------------------------------------------------- */

interface IUserPerson {
  name: string;
  age: number;
  //   [x: string]: string | number;
  [x: string]: any;
}

const user2: IUserPerson = {
  name: "Andrii",
  age: 27,
  gender: "MAN",
  county: "Ukraine",
};

console.log(user2);

/** ----------------------------------------------------------------------------------------------------------------------- */

interface People {
  names: string[];
  additionInfo?: {
    someInfo: number;
  };
}

const people: People = {
  names: ["Max", "Alex"],
};

people?.additionInfo?.someInfo;

/** ----------------------------------------------------------------------------------------------------------------------- */

const userInput = "";
const store = userInput ?? "DEFAULT";
console.log(store); // userInput !== nul || undefined ? userInput : "DEFAULT"

/** ----------------------------------------------------------------------------------------------------------------------- */

function addSymbol(a: string, b: string): string;
function addSymbol(a: number, b: number): number;
function addSymbol(a: string | number, b: string | number): string;

function addSymbol(a: string | number, b: string | number) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(addSymbol(2, 2));
console.log(addSymbol("2", 2));
console.log(addSymbol("3", "3"));

/** ----------------------------------------------------------------------------------------------------------------------- */

// let arr: Array<string | number>;
let arr: (string | number)[];

arr = ["Alex", 23, 34, "Andrii"];

const promise: Promise<string> = new Promise((resolve) => resolve("String"));

promise.then((data) => console.log(data));

(() => {
  async function promiseFoo(): Promise<string> {
    return "String2";
  }

  promiseFoo().then((data) => console.log(data));
})();

/** ----------------------------------------------------------------------------------------------------------------------- */

// function merge(ObjA: Object, ObjB: Object) {
//   return Object.assign({}, ObjA, ObjB);
// }

function merge<T extends object, U extends object>(ObjA: T, ObjB: U) {
  return Object.assign({}, ObjA, ObjB);
}

const user3 = {
  name: "Max",
};

const user3Age = {
  age: 21,
};

type User3 = {
  name: string;
};

type UserAge = {
  age: number;
};

const merged = merge<User3, UserAge>(user3, user3Age);

console.log(user3);
console.log(user3Age);
console.log(merged);
console.log(merged.name);

/** ----------------------------------------------------------------------------------------------------------------------- */
interface ILength {
  length: number;
}

function getLength<T extends ILength>(str: T): number {
  return str.length;
}

const obj = {
  length: 10,
};

console.log(getLength("HAFAHGAJ"));
console.log(getLength(["HAFAHGAJ"]));
console.log(getLength(obj));
// console.log(getLength(10)); // error

/** ----------------------------------------------------------------------------------------------------------------------- */

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(extractValue({ name: "Alex" }, "name"));
// console.log(extractValue({ name: "Alex" }, "age")); // error

/** ----------------------------------------------------------------------------------------------------------------------- */

class DataStore<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItem(): T[] {
    return this.data;
  }
}

interface IUsers {
  name: string;
}

const storeUser = new DataStore<IUsers>();

storeUser.addItem({
  name: "Max",
});
storeUser.addItem({
  name: "Anton",
});

console.log(storeUser.getItem());

const ageStore = new DataStore<number>();
ageStore.addItem(23);
ageStore.addItem(67);
console.log(ageStore.getItem());

/** ----------------------------------------------------------------------------------------------------------------------- */

interface ICar {
  model: string;
  age: number;
}

function createCar(model: string): ICar {
  const car: Partial<ICar> = { model };

  car.age = 1997;

  return car as ICar;
}

/** ----------------------------------------------------------------------------------------------------------------------- */

const arrNum: Readonly<string[]> = ["One", "Two", "Three"];
// arrNum.push("Four"); // error
// arrNum.pop(); // error
console.log(arrNum);

const objCar: Readonly<ICar> = {
  model: "Peugeot",
  age: 2015,
};

// objCar.age = 2019 // error
console.log(objCar);

/** ----------------------------------------------------------------------------------------------------------------------- */

interface IPage {
  title: string;
  annotation: string;
  numberPage: number;
}

const pageAnnotation: Pick<IPage, "annotation" | "numberPage"> = {
  annotation: "Some page",
  numberPage: 1,
};
