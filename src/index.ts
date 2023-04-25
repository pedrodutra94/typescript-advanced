import { Queue } from './lessons/queue';

let queue: Queue<number> = new Queue();
queue.push(3);
queue.pop()

console.log(queue instanceof Queue);
console.log('data' in queue);

type User = {
    name: string;
    age: number;
}

const users: User[] = [
    { name: 'Pedro', age: 28 },
    { name: 'João', age: 20 }
]

function getUserAge(name: string): number {
    const user = users.find(user => user.name === name)
    if(user === undefined) throw Error('hahahahah')
    return user.age
}
/**
 * null vs undefined
 */

function logVowels(value: string) {
    console.log(value.match(/[aeiou]/gi))
}
console.log(null == undefined);

console.log(logVowels('vavavab'));

type Point2D = {
    x: number
    y?: number
}

type Point3D = Point2D & {
    z?:number
}
const point3D: Point3D = {
    x:3
}

//interfaces exists cause is commom to developer of other languages
interface Animal {
    paws:number
}

interface Dog extends Animal {
    teeth: number
}

const git: Dog = {
    paws: 4,
    teeth: 30
}


/** 
 * ! Declaration Merging
 * ! Familiarity
 * * interface declaration merging 
 * * */

/**
 * * type aliases is the new black
 * ! Unions
 * ! Intersections (&)
 * ! Primitives
 * ! Shorthand Functions
 * ! Advanced Type Functions
 */

/**
 * ! Never type
 */

/**
 * !implements
 */

const random = Math.floor((Math.random()*5)+ 1)
console.log(random);

/** 
 * ! Assertion functions
 */

type Person = {
    name: string,
    dateOfBirth?: Date
}

function assert(condition: unknown, message: string): asserts condition {
    if(!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
    if(value instanceof Date) return;
    else throw new TypeError('Value is not Date')
}

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);
