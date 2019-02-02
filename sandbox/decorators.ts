console.log("------------dekoratory---------------")

export function Log(info: string = "")
{
    return function (target, propertyKey: string, descriptor: PropertyDescriptor){
        console.log(`Log decorator running: target: ${target}, info: ${info}`)
    }
}

export function LogClass(info: string)
{
    return function (constructor: Function){
        console.log(`LogClass decorator running; Class: ${constructor}, info: ${info}`);
    }
}

console.log("------------------------------------")