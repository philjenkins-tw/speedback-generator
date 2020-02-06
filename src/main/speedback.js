
import {getRoundCombos, rotateNextRound} from "./speedback-engine";

const prompts = require("prompts");

(async () => {
    const noOfUsersAnswer = await prompts({
        type: 'number',
        name: 'count',
        message: 'How many TWers?'
    });

    const userCount = noOfUsersAnswer.count;
    let users = [];

    for(let i=0; i < userCount; i++) {
        const userNameAnswer = await prompts({
            type: 'text',
            name: 'name',
            message: `TWer ${i+1} name:`
        });

        users.push(userNameAnswer.name);
    }

    if(userCount % 2 !== 0) {
        users.push("X")
    }

    for(let round=0; round < users.length-1; round++) {
        console.log(`Round ${round+1}:`);
        printRound(getRoundCombos(users))
        users = rotateNextRound(users)
        if(round < users.length -2) {
            await prompts({message: 'Ready for the next round?...', type: 'confirm', initial:true})
        }
    }

})();

const printRound = (pairs) => {
    for(let pair of pairs) {
        if(pair.right === 'X') {
            console.log(`${pair.left} sits out!`)
        } else {
            console.log(`${pair.left} meets ${pair.right}`)
        }
    }
}