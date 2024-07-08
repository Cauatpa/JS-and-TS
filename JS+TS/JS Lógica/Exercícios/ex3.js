function num (x) {
    if (x % 3 === 0 && x %5 === 0)return 'FizzBuzz';
    if (x % 3 === 0)return 'Fizz';
    if (x % 5 === 0)return 'Buzz';
    return x;
}

for (let i = 0; i <= 20; i++){
    console.log(i, num(i));
}
