function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

//let d20 = random(1, 20);
//console.log(d20);

const min = 1;
const max = 20;
let rand = random(max, min);

while (rand !== 5) {
    rand = random(max, min);
    console.log(rand);
}

console.log('#########')

do {
    rand = random(max, min);
    console.log(rand);
} while(rand !== 5);