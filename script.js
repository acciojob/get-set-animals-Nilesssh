//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	makeSound(sound){
		console.log(sound);
	}
}

class Dog extends Animal {
	makeSound("woof");
}

class Cat extends Animal {
	makeSound("purr");
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
