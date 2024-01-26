// class House {
//   //   private type: string;
//   //   private street: string;
//   private tenants: string[] = [];

//   constructor(public readonly type: string, protected street: string) {}

//   public addTenant(name: string) {
//     this.tenants.unshift(name);
//   }

//   public showAddres(this: House, num: number): void {
//     console.log("Addres: " + this.street + " " + num);
//   }

//   public showType(): void {
//     console.log("Type: " + this.type);
//   }

//   public showTenants(): void {
//     console.log(this.tenants);
//   }
// }

// const house = new House("Wood", "Sykhivska");

// house.showAddres(19);

// house.addTenant("Andrii");
// house.addTenant("Marta");
// house.addTenant("Ihor");

// house.tenants.unshift("Anton"); // Можна було б напряму змінити у випадку, якщо це б були публічні методи.
// house.type = "Woowf"; // Завдяки readonly можна тільки читати, але не змінювати.
// console.log(house.type);

// house.showTenants();

// const copyHouse = { street: "new address", showAddres: house.showAddres };
// copyHouse.showAddres(19);

/** ----------------------------------------------------------------------------------------------------------------------- */

// class StoneHouse extends House {
//   public chargeOfTheHouse: string;

//   constructor(street: string, general: string) {
//     super("stone", street);
//     this.chargeOfTheHouse = general;
//   }

//   public showAddres(): void {
//     console.log("Addres: " + this.street); // завдяки властивості protected street у класі House, street - наслідується
//   }

//   public showTenants(): void {
//     console.log("General: " + this.chargeOfTheHouse);
//     super.showTenants();
//   }
// }

// const stoneHouse = new StoneHouse("Stone", "Andrii");

// stoneHouse.addTenant("Andrii");
// stoneHouse.addTenant("Maria");
// stoneHouse.addTenant("Volodymyr");

// stoneHouse.showTenants();
// stoneHouse.showAddres();

/** ----------------------------------------------------------------------------------------------------------------------- */

class useStatic {
  private static count = 0;

  constructor() {
    useStatic.count += 1;
  }

  public static isStaticMethod() {
    console.log("I'm static");
  }

  public showCount() {
    console.log(useStatic.count);
  }
}

const obj1 = new useStatic();
const obj2 = new useStatic();
const obj3 = new useStatic();

obj1.showCount();
obj2.showCount();
obj3.showCount();

useStatic.isStaticMethod();

/** ----------------------------------------------------------------------------------------------------------------------- */

abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): string;
}

class Maize extends Plane {
  public startEngine() {
    return "Tra-tra-tra";
  }
}

class Boing extends Plane {
  public startEngine() {
    return "Buuuuuuu";
  }
}

const maize = new Maize();
// const boing = new Boing();

maize.sitInPlane();
// boing.sitInPlane();

console.log(maize.startEngine());
// console.log(boing.startEngine());

/** ----------------------------------------------------------------------------------------------------------------------- */

interface IPerson {
  readonly name: string;
  age?: number;

  greet(phrase: string): void;
}

// type Person = {
//   readonly name: string;
//   age: number;

//   greet: (phrase: string) => void;
// };

interface IPilot {
  flyMessage(): void;
}

let user: IPerson = {
  name: "Andrii",
  age: 27,

  greet(phrase) {
    console.log(phrase + " " + this.name);
  },
};

// user.name = ""; // Помилка, ми не можемо змінювати імʼя

user.greet("Hi, I'm");

class Pilot implements IPilot, IPerson {
  constructor(public readonly name: string, public age: number) {
    this.checkAge();
  }

  private checkAge() {
    if (this.age <= 28) throw new Error("Pilot to young");
  }

  public greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }

  public flyMessage(): void {
    console.log("We are leaving");
  }
}

const pilot = new Pilot("Andrii", 32);
pilot.greet("Hello! I'm a pilot, my name is");
pilot.flyMessage();

abstract class PilotAI {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot) {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class BoingPlane extends PilotAI {
  public startEngine = (): boolean => {
    if (!this.pilot) throw new Error("No pilot in cabine");
    console.log("Starting the turbines");
    this.pilot.flyMessage();
    return true;
  };
}

const boing = new BoingPlane();
boing.sitInPlane(pilot);
boing.startEngine();

class Terrorist implements IPilot {
  bluff(phrase: string): void {
    console.log(phrase);
  }

  public flyMessage(): void {
    console.log("We demand 9 million dollars or we will kill everyone");
  }
}

const newPilot = new Terrorist();
boing.sitInPlane(newPilot);
newPilot.bluff("We hijacked the plane");
boing.startEngine();

/** ----------------------------------------------------------------------------------------------------------------------- */

type AddFunc = (n1: number, n2: number) => number;
interface IAddFunc {
  (n1: number, n2: number): number;
}

const foo: AddFunc = (n1: number, n2: number) => n1 + n2;
const foo2: IAddFunc = (n1: number, n2: number) => n1 + n2;

console.log(foo(123, 456));
console.log(foo(789, 123));

/** ----------------------------------------------------------------------------------------------------------------------- */

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error("Door is close");
    }

    this.tenants.push(person);
    console.log("Person inside");
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
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
