"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(str) {
    return function (constructor) {
        console.log(str);
        console.log(constructor);
    };
}
function AddProperty() {
    return function (constructor) {
        console.log("AddProparty");
        constructor.prototype.modify = true;
    };
}
let Controller = class Controller {
    constructor() {
        this.id = 1;
        this.modify = false;
    }
};
Controller = __decorate([
    Logger("Logging - Controler after AddProperty"),
    AddProperty()
], Controller);
const constructor = new Controller();
console.log("Is modify? ", constructor.modify);
function ControlerDecoration(config) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                super(...args);
                this.parent = document.getElementById(config.parent);
                this.element = document.createElement(config.template);
                this.element.innerHTML = this.content;
                this.parent.appendChild(this.element);
            }
        };
    };
}
let NewControler = class NewControler {
    constructor() {
        this.content = "My first controler";
    }
};
NewControler = __decorate([
    ControlerDecoration({
        parent: "app",
        template: "H1",
    })
], NewControler);
let UserControler = class UserControler {
    constructor() {
        this.content = "My name is Andrii";
    }
};
UserControler = __decorate([
    ControlerDecoration({
        parent: "app",
        template: "P",
    })
], UserControler);
const controler = new NewControler();
const userControler = new UserControler();
function ShowParams(target, name, descriptor) {
    console.log("target", target);
    console.log("name", name);
    console.log("descriptor", descriptor);
}
function AutoBind(_, _2, descriptor) {
    const method = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return method.bind(this);
        },
    };
}
class Notifier {
    constructor() {
        this.content = "Message in Notifier Class";
    }
    showMessage() {
        console.log("showMessage method");
    }
}
__decorate([
    ShowParams,
    AutoBind
], Notifier.prototype, "showMessage", null);
const notifier = new Notifier();
const showMessages = notifier.showMessage;
notifier.showMessage();
showMessages();
function AddTax(tax) {
    return function (_, _2, descriptor) {
        const method = descriptor.value;
        return {
            configurable: true,
            enumerable: false,
            get() {
                return (...args) => {
                    const result = method.apply(this, args);
                    return result + (result / 100) * tax;
                };
            },
        };
    };
}
class Payment {
    pay(money) {
        return money;
    }
}
__decorate([
    AddTax(40)
], Payment.prototype, "pay", null);
const payment = new Payment();
console.log(payment.pay(2000));
function CheckEmail(target, name, position) {
    if (!target[name].validation) {
        target[name].validation = {};
    }
    Object.assign(target[name].validation, {
        [position]: (value) => {
            if (value.includes("@")) {
                return value;
            }
            throw new Error("No valid field");
        },
    });
}
function Validation(_, _2, descriptor) {
    const method = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return (...args) => {
                if (method.validation) {
                    args.forEach((item, index) => {
                        if (method.validation[index]) {
                            args[index] = method.validation[index](item);
                        }
                    });
                }
                return method.apply(this, args);
            };
        },
    };
}
class Person2 {
    setEmail(email) {
        console.log(email);
    }
}
__decorate([
    Validation,
    __param(0, CheckEmail)
], Person2.prototype, "setEmail", null);
const person2 = new Person2();
person2.setEmail("test@gmail.com");
const registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ["required"] });
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ["positive"] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Person3 {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
__decorate([
    Required
], Person3.prototype, "name", void 0);
__decorate([
    PositiveNumber
], Person3.prototype, "age", void 0);
const person3 = new Person3("", -1);
const person4 = new Person3("Alex", 30);
if (!validate(person3)) {
    console.log("Validation error!");
}
else {
    console.log("Validation ok!");
}
if (!validate(person4)) {
    console.log("Validation error!");
}
else {
    console.log("Validation ok!");
}
//# sourceMappingURL=decorators.js.map