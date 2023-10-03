// Задайте правильні ts типи для класичних js;
let age: number = 50;
let names: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;

let callback = (a: number): number => {
  return 100 + a;
};
console.log(callback(1800));

// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
let anything: any = -20;
anything = "Text";
anything = {};

// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") str = some;

// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
let person: [string, number] = ["Max", 21];

// Опишіть enum умову наступну: він повинен відображати статус завантаження.
// Завантажується (LOADING) та завантажена (READY).
enum Load {
  LOADING,
  READY,
}

const page = {
  load: Load.LOADING,
};

if (page.load === Load.LOADING) console.log("isLoading: ", Load.LOADING);
if (page.load === Load.READY) console.log("isLoading: ", Load.READY);

// Зробіть змінну, яка може приймати або рядок, або число.

let arg: string | number;
arg = 10;
arg = "some text";

// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

let literal: "enable" | "disable";
literal = "disable";

// Вкажіть типи для наступних функцій

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// Створіть свій тип даних на основі наявних даних.

type PageType = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: PageType = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: PageType = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
