function Logger(str: string) {
  return function (constructor: Function) {
    console.log(str);
    console.log(constructor);
  };
}

function AddProperty() {
  return function (constructor: Function) {
    console.log("AddProparty");
    constructor.prototype.modify = true;
  };
}

@Logger("Logging - Controler after AddProperty")
@AddProperty()
class Controller {
  public id = 1;
  public modify = false;
}

const constructor = new Controller();
console.log("Is modify? ", constructor.modify);

/** ----------------------------------------------------------------------------------------------------------------------- */

interface IDecoration {
  parent: string;
  template: string;
}

function ControlerDecoration(config: IDecoration) {
  return function <T extends { new (...args: any[]): { content: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      private element: HTMLElement;
      private parent: HTMLElement;

      constructor(...args: any[]) {
        super(...args);
        this.parent = document.getElementById(config.parent)!;
        this.element = document.createElement(config.template);

        this.element.innerHTML = this.content;

        this.parent.appendChild(this.element);
      }
    };
    // const current = new constructor();

    // const getParent = document.getElementById(config.parent);
    // const createElement = document.createElement(config.template);

    // createElement.innerHTML = current.content;

    // constructor.prototype.element = createElement;
    // constructor.prototype.parent = getParent;

    // getParent?.appendChild(createElement);
  };
}

@ControlerDecoration({
  parent: "app",
  template: "H1",
})
class NewControler {
  public content = "My first controler";
}

@ControlerDecoration({
  parent: "app",
  template: "P",
})
class UserControler {
  public content = "My name is Andrii";
}

const controler = new NewControler();
const userControler = new UserControler();

/** ----------------------------------------------------------------------------------------------------------------------- */

function ShowParams(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("target", target);
  console.log("name", name);
  console.log("descriptor", descriptor);
}

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value as Function;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return method.bind(this);
    },
  };
}

class Notifier {
  public content = "Message in Notifier Class";
  @ShowParams
  @AutoBind
  showMessage() {
    console.log("showMessage method");
  }
}

const notifier = new Notifier();
const showMessages = notifier.showMessage;

notifier.showMessage();
showMessages();

/** ----------------------------------------------------------------------------------------------------------------------- */

function AddTax(tax: number) {
  return function (_: any, _2: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value as Function;

    return {
      configurable: true,
      enumerable: false,
      get() {
        return (...args: any[]) => {
          const result = method.apply(this, args);
          return result + (result / 100) * tax;
        };
      },
    };
  };
}

class Payment {
  @AddTax(40)
  pay(money: number) {
    return money;
  }
}

const payment = new Payment();
console.log(payment.pay(2000));

/** ----------------------------------------------------------------------------------------------------------------------- */

function CheckEmail(target: any, name: string, position: number) {
  if (!target[name].validation) {
    target[name].validation = {};
  }

  Object.assign(target[name].validation, {
    [position]: (value: string) => {
      if (value.includes("@")) {
        return value;
      }
      throw new Error("No valid field");
    },
  });
}

function Validation(_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return (...args: any[]) => {
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
  @Validation
  setEmail(@CheckEmail email: string) {
    console.log(email);
  }
}

const person2 = new Person2();

person2.setEmail("test@gmail.com");
// person2.setEmail("testgmail.com"); // error

/** ----------------------------------------------------------------------------------------------------------------------- */

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
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
  @Required
  name: string;
  @PositiveNumber
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const person3 = new Person3("", -1);
const person4 = new Person3("Alex", 30);

if (!validate(person3)) {
  console.log("Validation error!");
} else {
  console.log("Validation ok!");
}

if (!validate(person4)) {
  console.log("Validation error!");
} else {
  console.log("Validation ok!");
}
