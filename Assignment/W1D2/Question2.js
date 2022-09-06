/**
 * Make a defining table and function that will return the balance of a savings account that
compounds interest monthly. Parameters for the function will be:
• initial amount
• annual interest rate
• number of years to compound
Do not look up mathematical formulas for how to compute compound interest. Use a for loop that will
add the appropriate interest each month.
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
 */


function compoundInterest(inAmount,intRate,nYearsToCom){
    let balance=0;
   let  monthlyRate = intRate / 12 / 100;
    let months = nYearsToCom * 12;

    for ( i = 1; i <= months; i++ ) {
        balance = (balance + inAmount) * (1 + monthlyRate);
     }
     return balance;

}
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
