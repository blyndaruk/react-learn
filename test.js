"use strict";
var a = 5;
var b = 'test';
var b2 = '222';
var c = ['first', '2', 'third'];
var d = {};
var e = false;
var data = {
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
};
function test(a) {
    return Math.pow(a, a);
}
c = c.map(function (x) { return x.toLocaleLowerCase(); });
var bla = function (point) {
    var d = point;
};
var canvas = document.getElementById('canvas');
function countCoords(coords) {
    return;
}
function printIt(id) {
    if (typeof id === 'string') {
        id.toLocaleLowerCase();
    }
    else {
        id.toString();
    }
}
function getSum(a) {
    if (Array.isArray(a)) {
    }
}
function performAction(action) {
    switch (action) {
        case 'down': return -1;
        case 'up': return 1;
    }
}
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision[Decision["No"] = calcEnum()] = "No";
})(Decision || (Decision = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) {
}
runEnum(Direction);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
var testA = Test.A;
var nameA = Test[testA];
var cEnum = 0 /* A */;
var Dice;
(function (Dice) {
    Dice[Dice["One"] = 1] = "One";
    Dice[Dice["Two"] = 2] = "Two";
    Dice[Dice["Three"] = 3] = "Three";
})(Dice || (Dice = {}));
function runDice(dice) {
    switch (dice) {
        case Dice.One: return 'one';
        case Dice.Two: return 'two';
        case Dice.Three: return 'three';
        default: var a_1 = dice;
    }
}
var cortege = [0, 'a', 1];
// cortege.push(22);
cortege.map(function (s) {
    switch (typeof s) {
        case 'string': return 'str';
    }
});
function logTime(num) {
    console.log(new Date());
    return num;
}
logTime('number');
logTime(1);
var Generic = /** @class */ (function () {
    function Generic() {
    }
    return Generic;
}());
var gen = new Generic();
console.log(gen.value);
function logTimeStamp(num) {
    console.log(num.stamp);
    return num;
}
