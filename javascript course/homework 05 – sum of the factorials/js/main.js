

do {
    a = +prompt('Enter number a', '1');
} while (isNaN(a) || !a);

document.write('a = ' + a + '<br>');

do {
    b = +prompt('Enter number b', '5');
} while (isNaN(b) || !b || b <= a); 

document.write('b = ' + b + '<br>');

do {
    h = +prompt('Enter step', '1');
} while (isNaN(h) || !h || h < 0);

document.write('h = ' + h + '<br>');

sumOfFactorials = 0;
for (a; a <= b; a += h) {
    for (j = 1, factorial = 1; j <= a; j++) {
        factorial = factorial * j;
    }
    sumOfFactorials += factorial;
}

document.write('<br>', `${sumOfFactorials} is the sum of the factorials.`);