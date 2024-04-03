/*console.log("Hello World!\n==========\n");
/*
   x += 1
   x = x +1   these are the same
*/

//for version
/** 1. Initialization
 *  2. Conditional
 *  3. variable change (increment)
 
console.log("loop is about to begin");
for (let bottles = 100; bottles > 0; bottles--) {  // --decrement, s s -1, or s-= 1, or s-- (//something = something -1)
    console.log(`${bottles} bottles of the milk on the wall, ${bottles} bottles of the milk on the wall`);
    console.log("Take one down, pass it around");
    console.log(`${bottles- 1} bottles of the milk on the wall`);
}
console.log("aww, no more loop");


let wallet = 35.00;
let friendCount = 8;
const admissionPrice = 5.00;

// 0 < 8 true,  1<8 true, 2 < 8 true  till i becomes 8, 8 < 8 false
//subtracting many 5 times, i is  common variable name, incrementor

for (let i = 0; i < friendCount; i ++) {
    if (wallet % 10 == 0); {
    console.log("uh-oh");
    }
    wallet = wallet - admissionPrice;
    break;
}
console.log(wallet);

//while loop version
i = 0
while (i < friendCount) {
    wallet = wallet - admissionPrice;
    //make sure you still change the variable
    i ++;
}
console.log(wallet);

// scope - where does your variable live?
const x = 10;
let y = 11;
if (x > 5) {
  console.log("Hello");     //block
  console.log(y);
}
console.log(y);

for (let myNewFunVar = 13; myNewFunVar < 20; myNewFunVar++) {

  console/log(myNewFunVar);
}
  console/log(myNewFunVar);

// while and Do while
// the loop will continue as long as the condition is true
let classSize = 20;
let studentNUmber = 5;
while (studentNumber < classSize) {
    console.log("there are still more students!");
    studentNumber ++;
}

studentNumber = 5;
do {
    console.log("there are still more students...");
    studentNumber ++;
} while ( studentNumber < classSize )

 //while (/* condition */
    //the stuff to repeat}




// do {
    //the stuff to repeat
 //} while (/* condition */)

// Exercise 1 Section

for (let i = 1; i <= 100; i ++) {
    if (i % 2 != 0) {
    } else {
        console.log(i);
    }
}

/*
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i ++) {
    if (i % 3 == 0) {
        console.log("FIZZ", i);
    }
    if (i % 5 == 0) {
        console.log("BUZZ", i);
    }
   if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ", i);
    }
}
*/

// Exercise 3 Section

//initialize an iterator variable
let iterator = 1;
//condition
while (iterator <= 100) {
    if (iterator % 3 == 0 && iterator % 5 == 0) {
        console.log("FIZZBUZZ", iterator);
    } else if (iterator % 3 == 0) {
        console.log("FIZZ", iterator);
    } else if (iterator % 5 == 0) {
        console.log("BUZZ", iterator);
    }
        //update iterator variable to avoid infinite loops
        iterator++;
}

iterator = 1;
do {
    if (iterator % 3 == 0 && iterator % 5 == 0) {
        console.log("FIZZBUZZ", iterator);
    } else if (iterator % 3 == 0) {
        console.log("FIZZ", iterator);
    } else if (iterator % 5 == 0) {
        console.log("BUZZ", iterator);
    }
        //update iterator variable to avoid infinite loops
        iterator++;
} while (iterator <= 100)

// Exercise 4 Section
// create a random number between 0 and 500
let value = Math.round((Math.random() * 500)); 
// create a random number between 100 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); 
console.log("Value:", value);
console.log("N:", n);

for (let i = 0; i <= n; i ++ ) {  //n is the upper bound of the loop
   if (i == value) {
    console.log("Found Value!");
    break;
   } else if (i == n) {
    console.log("Did not find value!");
   }
}

// Exercise 5 Section

let FIZZDIVISOR = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let BUZZDIVISOR = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let i = start; i <end; i ++) {
    if (i % FIZZDIVISOR == 0 && i % BUZZDIVISOR == 0) {
        console.log("FIZZDIVISOR", i);
    } else if (i % FIZZDIVISOR == 0) {
        console.log("BUZZDIVISOR", i);
    }
    if (i % BUZZDIVISOR == 0) {
        console.log("BUZZDIVISOR", i);
    }
}

console.log("FIZZDIVISOR", FIZZDIVISOR);
console.log("BUZZDIVISOR", BUZZDIVISOR);