"use strict"

/*  1. Print odds 1-20  */
for(var i=1; i<20; i+=2) {
    console.log(i);
}


/*  2. Decreasing multiples of 3 */
for(var i=100; i>-1; i--) {
    if(i % 3 == 0) {
        console.log(i);
    }
}

/*  3. Print the sequence */
for(var i=4; i>-4; i-=1.5) {
    console.log(i);
}

/*  4. Sigma */
var sum = 0;
for(var i=1; i<= 100; i++) {
    sum += i;
}
console.log(sum);


/*  5. Factorial */
var factorial = 1;
for(var i=1; i<13; i++) {
    factorial *= i;
}
console.log(factorial);