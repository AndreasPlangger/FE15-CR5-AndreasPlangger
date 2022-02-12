class Animal {
    name: string;
    gender: string;
    age: number;
    size: string;
    vaccine: boolean;
    img: any;

    constructor(name: string, gender: string, age: number, size: string, vaccine: boolean, img: any) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.size = size;
        this.vaccine = vaccine;
        this.img = img;
        animals.push(this);
    }
    displayTop() {
        return `
        <div class = "col">
        <div class="card h-100 shadow mb-5 bg-body rounded" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class = "cart-title text-center text-light bg-dark"> ${this.name}</h4>
        <h6 class = "cart-title">Gender: ${this.gender}</h6> 
        <h6 class = "cart-title">Age: ${this.age}</h6>
        <h6 class = "cart-title">Size: ${this.size}</h6>
        <h6 class = "cart-title bg-${this.vaccine ? "success" : "danger"} text-center p-2"> ${this.vaccine}</h6>
        `
    }
    displayBottom() {
        return `        
        </div>
        </div>
        </div>`;
    }

    display() {
        return this.displayTop() + this.displayBottom()
    }

}
class Cat extends Animal {
    breed: string;
    furColor: string;
    urlBreed: string;
    constructor(name: string, gender: string, age: number, size: string, vaccine: boolean, img: any, breed: string, furColor: string, urlBreed: string) {
        super(name, gender, age, size, vaccine, img)
        this.breed = breed;
        this.furColor = furColor;
        this.urlBreed = urlBreed;
    }

    displayTop() {
        return `
        ${super.displayTop()}
        <h6 class = "cart-title">Breed: ${this.breed}</h6>
        <h6 class = "cart-title">Fur color: ${this.furColor}</h6>
        <h6 class = "cart-title">Learn more: ${this.urlBreed}</h6>`;

    }
}

class Dog extends Animal {
    breed: string;
    training: boolean;
    constructor(name: string, gender: string, age: number, size: string, vaccine: boolean, img: any, breed: string, training: boolean) {
        super(name, gender, age, size, vaccine, img)
        this.breed = breed;
        this.training = training;
    }
    displayTop() {
        return `${super.displayTop()}
        <h6 class = "cart-title">Breed: ${this.breed}</h6>
        <h6 class = "cart-title">Training: ${this.training}</h6>`;
    }

}

let animals: Array<Animal> = [];

new Animal("Donnashello", "Male", 28, "medium", true, "img/turtle_640.jpg");
new Animal("Rabbit DeNiro", "Male", 2, "small", true, "img/rabbit_640.jpg");
new Animal("Marty McFly", "Male", 1, "small", true, "img/parrott_640.jpg");
new Cat("Fidel Catstro", "Male", 8, "small", false, "img/cat_russian_blue.jpg", "russian-blue", "silver-gray", "en.wikipedia.org/wiki/Russian_Blue");
new Cat("Cleocatra", "Female", 7, "small", true, "img/cat_birman.jpg", "Birman", "white", "en.wikipedia.org/wiki/Birman");
new Cat("Cat Stevens", "Female", 4, "small", true, "img/cat_scotish.jpg", "Scottish Fold", "white", "en.wikipedia.org/wiki/Scottish_Fold");
new Dog("Dogstoyevsky", "Male", 2, "medium", true, "img/dog_640.jpg", "Bullterrier", true);
new Dog("Karl Barx", "Male", 5, "large", true, "img/dog_terrier.jpg", "Terrier", true);
new Dog("Woofi Goldberg", "Female", 6, "large", false, "img/dog2_640.jpg", "Husky", true);
animals.forEach((val) => {
    (document.getElementById("row") as HTMLElement).innerHTML += val.display();
})

// SORT FUNCTION


function sortVal() {
    animals.sort((a, b) => a.age - b.age);
    // Empty container before sorted printout
    (document.getElementById("row") as HTMLElement).innerHTML = ``;
    animals.forEach((val) => {
        (document.getElementById("row") as HTMLElement).innerHTML += val.display();
    }
    )
}