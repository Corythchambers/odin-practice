// object literal
const myObject = {
    property: 'Value',
    otherProperty: 77,
    "obnoxious property": function() {
        // do some stuff!
    }
};


// dot notation
myObject.property; // 'Value'

// bracket notation 
myObject["obnoxious property"]; // [function]

const variable = 'property';
myObject.variable; // gives undefined
myObject[variable]; // equivalent to myObject['property'] reutrning 'Value'

// example one
const playerOneName = "tim";
const playerTwoName = "jim";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
    name: "tim",
    marker: "X"
}

const playerTwo = {
    name: "jenn",
    marker: "O"
}

function printName(player) {
    console.log(player.name);
}

printName(playerOne);

// Object constructor
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log("My name is " + this.name);
    }
}

const player = new Player('steve', 'X');
player.sayName();


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    let isRead = ""
    if (read) {
        isRead = "already read"
    } else {
        isRead = "not read yet"
    }
    this.info = function() {
        return title + " by " + author + ", "  + pages +  " pages, " + isRead;
    }
}

theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", true);

console.log(theHobbit.info());


// Prototype stuff
Player.prototype.sayHello = function() {
    console.log("Hellow, I'm a player!");
};

player.sayHello();

console.log(Object.getPrototypeOf(Player.prototype) == Object.prototype);

console.log(player.valueOf());

console.log(player.hasOwnProperty('valueOf'));
console.log(Object.prototype.hasOwnProperty('valueOf'));