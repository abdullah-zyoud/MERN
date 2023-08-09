function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;

        function flipCoin() {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }

            if (headsCount === 5) {
                resolve(`It took ${attempts} tries to flip five "heads"`);
            } else {
                if (attempts > 100) {
                    reject("Exceeded 100 attempts without getting five consecutive heads");
                } else {
                    setTimeout(flipCoin, 0);
                }
            }
        }

        flipCoin();
    });
}

fiveHeads()
    .then(result => {
        console.log(result);
        console.log("This is run after the fiveHeads function completes");
    })
    .catch(error => {
        console.error(error);
    });
