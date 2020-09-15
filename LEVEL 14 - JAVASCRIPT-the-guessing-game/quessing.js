let talkToUser = (tekst) => {
    console.log(`talkToUser: ${tekst}`);
    return window.prompt(tekst);
}

let counter = 0;
let maxTries = 2;
let quessTries = 0;
let randomNumber = Math.floor(Math.random() * 10 + 1);
let quessLeft = maxTries - counter;


let name = talkToUser("What is your name?");

while (quessTries != randomNumber) {
    console.log(`[counter: ${counter}], [maxTries: ${maxTries}], [randomnr: ${randomNumber}], [quessnr: ${quessTries}]`);
    quessTries = talkToUser(`Hi, ${name}, Please pick a number between 1 and 10, you can try it ${quessLeft} times.`);
    quessTries = Number(quessTries);
    counter += 1;

    if (counter > maxTries) {
        document.write(`You have no more tries left, you loose Sucker :-)`);
        break
    }
    if (quessTries < randomNumber) {
        talkToUser(`To low, You have ${quessLeft} left`);
    }
    if (quessTries > randomNumber) {
        talkToUser(`To high, You have ${quessLeft} left`);
    }
    if (quessTries === randomNumber) {
        document.write(`<p>Fantastic ${name}</p>`);
        document.write(`<p>The correct number is ${randomNumber}</p>`);
        document.write(`<p>You have done it in ${counter} times.</p>`);
    }
}









