
export const getRoundCombos = (people) => {
    const results = [];
    const halfwayPoint = people.length/2;

    results.push({left: people[0], right: people[people.length-1]});

    for(let l=1; l < halfwayPoint; l++) {
        results.push({left: people[l], right: people[people.length-l-1]})
    }

    return results;
}

export const rotateNextRound = (people) => {
    let shortenedLength = people.length - 2;
    const result = [...people]
    result.unshift(people[shortenedLength]);
    result.splice(shortenedLength+1, 1);

    return result;
}