function createUser (name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return { name, discordName, getReputation, giveReputation }
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
    discordName: josh.discordName,
    reuptation: josh.getReputation()
});

function createPlayer (name, level) {
    // const { getReputation, giveReputation } = createUser(name);

    // const increaseLevel = () => level++;
    // return { name, getReputation, giveReputation, increaseLevel };

    const user = createUser(name);

    const increaseLevel = () => level++;
    return Object.assign({}, user, { increaseLevel });
}

// IIFE with factory functions inside is called the module pattern
const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
})

calculator.add(3,5);
calculator.sub(6,2);

