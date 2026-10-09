class Animal {
    sound(): void {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    sound(): void {
        console.log("Dog barks");
    } 
}

let obj = new Dog();
obj.sound();
