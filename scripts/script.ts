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
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class = "cart-title"> ${this.name}</h5>
        <h6 class = "cart-title"> ${this.gender}</h6> 
        <h6 class = "cart-title"> ${this.age}</h6>
        <h6 class = "cart-title"> ${this.size}</h6>
        <h6 class = "cart-title"> ${this.vaccine}</h6>  
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
        <h6 class = "cart-title"> ${this.breed}</h6>
        <h6 class = "cart-title"> ${this.furColor}</h6>
        <h6 class = "cart-title"> ${this.urlBreed}</h6>`;

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
        <h6 class = "cart-title"> ${this.breed}</h6>
        <h6 class = "cart-title"> ${this.training}</h6>`;
    }

}

let animals: Array<Animal> = [];

new Animal("Rocky", "Male", 4, "medium", true, "img/turtle_640.jpg");
new Animal("Roger", "Male", 2, "small", true, "img/rabbit_640.jpg");
new Cat("Fidel Catstro ", "Male", 8, "small", false, "img/cat_640.jpg", "russian-blue", "silver-gray", "https://en.wikipedia.org/wiki/Russian_Blue");
new Cat("Cat2", "Female", 7, "small", true, "img/cat2_640.jpg", "Birman", "white", "https://en.wikipedia.org/wiki/Birman");
new Dog("Dog1", "Male", 2, "medium", true, "img/dog_640.jpg", "Bullterrier", true);
new Dog("Dog2", "Female", 5, "large", true, "img/dog2_640.jpg", "Husky", true);

animals.forEach((val) => {
    (document.getElementById("row") as HTMLElement).innerHTML += val.display();
})