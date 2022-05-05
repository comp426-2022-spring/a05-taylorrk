// The files in this directory contain functions that handle requests coming to different routes
// Flip one coin
function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
// Flip many coins
function coinFlips(flips) {
    let array = [];
    for (let i = 1; i <= flips; i++) {
        array.push(coinFlip());
    }
    return array;
}
// Count coin flips
function countFlips(array) {
    let counter = {};
    array.forEach(item => {
        if (counter[item]) {
            counter[item]++;
        } else {
            counter[item] = 1;
        }
    });
    return counter;
}
// Call a coin flip
function flipACoin(call) {
    let flip = coinFlip();
    let result;
    if ( flip == call ) {
        result = 'win'
    } else {
        result = 'lose'
    }
    let game = {
        call: call,
        flip: flip,
        result: result
    }
    return game
}