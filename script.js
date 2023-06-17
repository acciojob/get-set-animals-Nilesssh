//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	purr(){
		console.log("purr");
	}
	bark(){
		console.log("woof");
	}
}

class Dog extends Animal {
	bark();
}

class Cat extends Animal {
	purr();
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
