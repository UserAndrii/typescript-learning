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
