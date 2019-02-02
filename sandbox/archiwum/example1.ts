console.log("--------------Zmienne-------------------")
console.log("hello world");

let x: number = 3;
let y: string;
y = 'napis';

let z: boolean;
z = true;

console.log(x);
console.log(y);
console.log(z);

console.log("----------Tablice------------------------")

let arr: number[] = [1, 2, 3, 4];
let arr2: Array<number> = [12, 23, 34, 45];

console.log(arr);
console.log(arr.length);
console.log(arr2.filter(x => x == 12));

let arr3 = [5, 6, 6, ...arr];
console.log(arr3);

console.log("------interpolating-string---------------")


let asdf = `Liczba x = ${x}`;
console.log(asdf);

let tab = `tablica arr ${arr[0]}`;
let tab2 = `tablica arr ${arr[0] + 1}, ${arr3[2]}`;

console.log(tab);
console.log(tab2);

console.log("------------Funkcje-----------------")

function welcome(name: string){
    console.log(`Welcome ${name}`)
}

function welcome2(name:string){
    return `Welcome ${name} 2`;
}

function welcome3(name:string = "elo"){
    return `Welcome ${name} 2`;
}

function welcome4(...names:string[]){
    return `Welcome ${names.join(", ")}`;
}

welcome("Karolinka");
console.log(welcome2("kamil"));
console.log(welcome3());
console.log(welcome4("Ala", "ma", "kota"));

console.log("---------Funkcje-anonimowe---------------")

function wilkomen(name: string){
    return`Welcome ${name}`;
}

console.log(["Kamil", "Jan"].map(wilkomen));

console.log(["Kamil", "Janek", "Karolinka"].map(function(name: string){
    return`Welcome ${name}`; 
}));

console.log
(
    ["Kamil", "Janek", "Karolinka"].map(name => `Welcome ${name}`)
    
);

console.log("---------------Interfejs----------------")

interface ICustomer {
    name: string;
    age?: number;
    adres: IAddress;
}

interface IAddress {
    street: string;
    city: string;
}


function Witaj(customer: ICustomer){
    return`Welcome ${customer.name}, Age: ${customer.age}, city: ${customer.adres.city}`;
}

console.log(
    Witaj({name: "Kamil", age: 24, adres:{
        street: "Kopernika",
        city: "Wrocław"
    }})
);
console.log(
    Witaj({name: "Kamil", adres:{
        street: "Kopernika2",
        city: "Wrocław2"
    }})
);

console.log("----------Instrukcje-sterujace------------")
let xy = 5;

if(x > 10){
    console.log(xy);
}

let numbers: Array<number> = [10, 20, 30];

for(let i of numbers)
{
    console.log(i);
}

console.log("-------------Enumeracje----------------------------");

enum CustomerType{
    Standard = 10,
    Premium,
    Vip = 99
}

function welcome5(name: string, customerType: CustomerType){
    if(customerType == CustomerType.Premium)
        return`Welcome ${name}, ${CustomerType[CustomerType.Premium]}`;
}


console.log(
    welcome5("Kamil", CustomerType.Premium)
);

console.log("-----------------Klasy1------------------------")

interface ICustomer1 {
    name: string;
    age: number
}

let customer: ICustomer1 = {
    name: "Jan",
    age: 56
};

class Customer {
    name: string;
    age: number;
}

let cust1 = new Customer();
cust1.name = "Kamil";
cust1.age = 29;
console.log(cust1);

console.log("-----------------Klasy2------------------------")

class Customer2 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let cust2 = new Customer2("Ala", 12);
console.log(cust2);

console.log("-----------------Klasy3------------------------")

class Customer3 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    welcome(): void {
        console.log(`Hello ${this.name}, Age: ${this.age}`);
    }

    welcomeReturn(): string {
        return `Return Hello ${this.name}, Age: ${this.age}`;
    }

    isAdult(): boolean{
        if(this.age >= 18)
            return true;
        else
            return false;
    }
}

let cust3 = new Customer3("Michał", 22);
cust3.welcome();

let cust31 = new Customer3("Wojciech", 9);

console.log(cust3.welcomeReturn())
console.log(cust3.isAdult());
console.log(cust31.isAdult());


console.log("--------------klasy4-dzidziczenie---------------------------")

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    welcome(): void {
        console.log(`Hello ${this.name}, Age: ${this.age}`);
    }

    welcomeReturn(): string {
        return `Return Hello ${this.name}, Age: ${this.age}`;
    }

    isAdult(): boolean{
        if(this.age >= 18)
            return true;
        else
            return false;
    }
}

class Customer4 extends Person {
    advisor: string;

    constructor(name: string, age: number, advisor: string){
        super(name, age);
        this.advisor = advisor;
    }
}

let cust4 = new Customer4("Robercik", 2, "Józef");

console.log(cust4);
console.log(cust4.isAdult());

let jan: Person = new Customer4("Jan", 56, "Kamil");
console.log(jan);


class Customer5 extends Person {
    advisor: string;

    constructor(name: string, age: number, advisor: string){
        super(name, age);
        this.advisor = advisor;
    }

    welcome(){
        return `Heja jak tam ${this.name} ?`
    }
}

let cust5 = new Customer5("Jaki", 123, "eloszka");

console.log(cust5.welcome());

console.log("-----------Kalsy6-Modyfikatory-dostepu-----------------------------")

interface ICanTalk {
    talk(): string;
}

class Person2 implements ICanTalk {
    constructor(protected name: string, private age: number) {  }

    welcome(): void {
        console.log(`Hello ${this.name}, Age: ${this.age}`);
    }

    welcomeReturn(): string {
        return `Return Hello ${this.name}, Age: ${this.age}`;
    }

    isAdult(): boolean{
        if(this.age >= 18)
            return true;
        else
            return false;
    }

    talk() :string{
        return `Nazywam się ${this.name}`;
    }
}

class Customer6 extends Person2 {
    constructor(name: string, age: number, public advisor: string){
        super(name, age);
    }

    welcomeReturn(){
        return `Heja jak tam ${this.name} ?`
    }
}

let cust6 = new Customer6("Beata", 21, "Rufus");

//cust6.name = "Jolanta";

console.log(cust6.welcomeReturn());
console.log(cust6.talk());


console.log("-----------Typy generyczne------------------------------")

let names: string[] = ["Miłosz", "Ewa"];
let names2: Array<string> = ["Jolanta", "Rufus"];

names2[0] = "Kamil";
//names2[0] = 5;

console.log("-----------------------------------------")
