import {Log, LogClass } from './decorators';

@LogClass("info")
export class Person11 {
    constructor(protected name: string, public age: number){}

    @Log()
    welcome(): string{
        return `Hello from ${this.name}, age ${this.age}`
    }
}

export class Customer11 extends Person11 {
    constructor(name: string, age: number, public advisor: string)
    {
        super(name, age);
    }

    welcome(): string {
        return `Hello from customer ${this.name}, advised by ${this.advisor}`;
    }
}

export let persons = [
    new Person11("test1", 1),
    new Person11("Angela", 12),
    new Person11("Michal", 21),
    new Person11("Ala", 31),
]

export function getIds(){
    console.log("You get all Ids");
}

//"-----------Arrow-functions------------------------"

export class Person22 {
    constructor(protected name: string, private age: number){
        setTimeout(() => {
            console.log(this.name);
        }, 500);
    }

    welcome(): string {
        return `Hello from ${this.name}. age: ${this.age}`;
    }
}

export class Customer112 extends Person22 {
    constructor(name: string, age: number, private advisor){
        super(name, age);
    }

    welcome(): string {
        return `Hello from customer ${this.name}, advised by ${this.advisor}`
    }

}



//"--------------------------------------------------"
