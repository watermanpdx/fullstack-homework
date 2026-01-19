// 01-fizzbuzz.js

// About ================================================================================
/** Exercise 01 - Fizzbuzz

Write a program that writes all the numbers from 1 to 100, with some exceptions: 
- For numbers divisible by 3, print “fizz” 
- For numbers divisible by 5 (but not 3), print “buzz” 
- For numbers divisible by 3 and 5, print “fizzbuzz”

Use console.log() to write the proper output to the command line.

**/

// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// ...

// Implementation =======================================================================

const fizzbuzz = function fizzbuzzRange(a, b) {
  // Compute and print fizzbuzz for all integers from a to b (inclusive)

  for (let i = a; i <= b; i += 1) {
    let response = '';

    // Divisible by 3 and/or 5
    if (i % 3 === 0) {
      response += 'fizz';
    }
    if (i % 5 === 0) {
      response += 'buzz';
    }

    // Neither divisible by 3 nor 5
    if (response === '') {
      response = String(i);
    }

    console.log(response);
  }
};

fizzbuzz(1, 100);
