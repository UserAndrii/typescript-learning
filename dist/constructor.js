"use strict";
class House {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
    }
    addTenant(name) {
        this.tenants.unshift(name);
    }
    showAddres(num) {
        console.log("Addres: " + this.street + " " + num);
    }
    showType() {
        console.log("Type: " + this.type);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
const house = new House("Wood", "Sykhivska");
house.showAddres(19);
house.addTenant("Andrii");
house.addTenant("Marta");
house.addTenant("Ihor");
console.log(house.type);
house.showTenants();
class StoneHouse extends House {
    constructor(street, general) {
        super("stone", street);
        this.chargeOfTheHouse = general;
    }
    showAddres() {
        console.log("Addres: " + this.street);
    }
    showTenants() {
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
//# sourceMappingURL=constructor.js.map