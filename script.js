class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    // To be overridden by subclasses
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }

  makeSound() {
    this.purr();
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }

  makeSound() {
    this.bark();
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
