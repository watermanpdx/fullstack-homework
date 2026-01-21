/** Exercise 01 - Coins **/

// Add your function here
const calculateChange = function calculateChangeAndLogToConsole(
  total,
  maxTotal = 100.0,
) {
  // Denominations data-structure to support repetitive operations
  const denominations = [
    { single: 'dollar', plural: 'dollars', valueCents: 100 },
    { single: 'quarter', plural: 'quarters', valueCents: 25 },
    { single: 'dime', plural: 'dimes', valueCents: 10 },
    { single: 'nickel', plural: 'nickels', valueCents: 5 },
    { single: 'penny', plural: 'pennies', valueCents: 1 },
  ];

  // Check that 'total' and 'maxTotal' are a numbers
  if (typeof total !== 'number' || typeof maxTotal !== 'number') {
    return 'Error: provided input was not a number';
  }

  // Scale to cents and round (discard any fractional cents)
  let scaledTotal = Math.floor(total * 100);

  // Prepare starting string and jump to error-text if out of range
  let response = `$${scaledTotal / 100} ==> `;
  if (total > maxTotal) {
    response += 'Error: the number is too large';
    return response;
  } else if (total < 0) {
    response += 'Error: the number is negative!';
    return response;
  }

  // Loop over denominations and calculate sub-strings
  for (const d of denominations) {
    const count = Math.floor(scaledTotal / d.valueCents);
    if (count === 1) {
      response += `${count} ${d.single}, `;
    } else if (count > 1) {
      response += `${count} ${d.plural}, `;
    }
    scaledTotal %= d.valueCents;
  }

  // Discard trailing ', ' from loop and return
  return response.slice(0, -2);
};

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
console.log(calculateChange(-13.21));
// $-13.21 ==> Error: the number is negative!
console.log(calculateChange('Hoover Dam'));
// Error: provided input was not a number
console.log(calculateChange(11.1111111111));
// $11.11 ==> 11 dollars, 1 dime, 1 penny
