
// function sumavimas(numbers) {
//     let ats = 0;

//     for (let i=0; i<numbers.length; i++) {
//         const num = numbers[i];

//         ats += num;
//     }

//     return ats;
// }

function daugyba(numbers) {
    let ats = 1;

    for (let i=0; i<numbers.length; i++) {
        const num = numbers[i];

        ats *= num;
    }

    return ats;
}

export { daugyba };