class House {
  //   private type: string;
  //   private street: string;
  private tenants: string[] = [];

  constructor(public readonly type: string, protected street: string) {}

  public addTenant(name: string) {
    this.tenants.unshift(name);
  }

  public showAddres(this: House, num: number): void {
    console.log("Addres: " + this.street + " " + num);
  }

  public showType(): void {
    console.log("Type: " + this.type);
  }

  public showTenants(): void {
    console.log(this.tenants);
  }
}

const house = new House("Wood", "Sykhivska");

house.showAddres(19);

house.addTenant("Andrii");
house.addTenant("Marta");
house.addTenant("Ihor");

// house.tenants.unshift("Anton"); // Можна було б напряму змінити у випадку, якщо це б були публічні методи.
// house.type = "Woowf"; // Завдяки readonly можна тільки читати, але не змінювати.
console.log(house.type);

house.showTenants();

// const copyHouse = { street: "new address", showAddres: house.showAddres };
// copyHouse.showAddres(19);

/** ----------------------------------------------------------------------------------------------------------------------- */

class StoneHouse extends House {
  public chargeOfTheHouse: string;

  constructor(street: string, general: string) {
    super("stone", street);
    this.chargeOfTheHouse = general;
  }

  public showAddres(): void {
    console.log("Addres: " + this.street); // завдяки властивості protected street у класі House, street - наслідується
  }

  public showTenants(): void {
    console.log("General: " + this.chargeOfTheHouse);
    super.showTenants();
  }
}

const stoneHouse = new StoneHouse("Stone", "Andrii");

stoneHouse.addTenant("Andrii");
stoneHouse.addTenant("Maria");
stoneHouse.addTenant("Volodymyr");

stoneHouse.showTenants();
stoneHouse.showAddres();
