const a: number = 5;
const b: string = 'test';
const b2: string = '222';
let c: string[] = ['first', '2', 'third'];
const d: object = {};
const e: boolean = false;

const data = {
  "userId": 1,
  "id": 1,
  "title": "Some title",
  "info": {
    "desc": "desc info",
    "isActive": true,
  },
  "tags": [
    {
      "name": "some name",
      "value": 1000,
    },
  ],
}

interface Info {
  desc: string,
  isActive: boolean,
}

interface Tag {
  name: string,
  value: number,
}

interface Data {
  userId: number | string,
  id: number | string,
  title: string,
  info: Info,
  tag: Tag[],
}

function test(a: number): number {
  return a ** a;
}

c = c.map(x => x.toLocaleLowerCase());


type stringOrNumber = string | number;


type point = {
  x: number,
  y?: number
}
type D3Point = point & {
  z: number,
}


interface IPoint {
  x: number,
  y?: number,
}

interface I3DPoint extends IPoint {
  z: number,
}

const bla = (point: IPoint) => {
  const d: I3DPoint = point as I3DPoint;
}

const canvas = document.getElementById('canvas') as HTMLCanvasElement;


function countCoords(coords: I3DPoint) {
  return;
}

function printIt(id: stringOrNumber) {
  if (typeof id === 'string') {
    id.toLocaleLowerCase();
  } else {
    id.toString();
  }
}

function getSum(a: number | number[]) {
  if (Array.isArray(a)) {

  }
}


type actionType = 'up' | 'down';
function performAction(action: actionType) {
  switch (action) {
    case 'down': return -1;
    case 'up': return 1;
  }
}


enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

enum Decision {
  Yes = 1,
  No = calcEnum(),
}

function calcEnum() {
  return 2;
}

function runEnum(obj: { Up: string }) {

}
runEnum(Direction)

enum Test {
  A,
}

let testA = Test.A;
let nameA =Test[testA];

const enum ConstEnum {
  A,
  B,
}

let cEnum = ConstEnum.A;

enum Dice {
  One = 1,
  Two,
  Three,
}

function runDice(dice: Dice) {
  switch (dice) {
    case Dice.One: return 'one';
    case Dice.Two: return 'two';
    case Dice.Three: return 'three';
    default: const a: never = dice;
  }
}

const cortege: [number, string, number] = [0, 'a', 1];
// cortege.push(22);
cortege.map(s => {
  switch (typeof s) {
    case 'string': return 'str';
  }
});


function logTime<T>(num: T): T {
  console.log(new Date());
  return num;
}

logTime<string>('number');
logTime<number>(1);

interface Time {
  transform: <T, F>(a: T) => F;
}

class Generic<T> {
  value: T | undefined;
}

const gen = new Generic<number>();
console.log(gen.value);

interface TimeStamp {
  stamp: number,
}

function logTimeStamp<T extends TimeStamp>(num: T) {
  console.log(num.stamp);
  return num;
}
