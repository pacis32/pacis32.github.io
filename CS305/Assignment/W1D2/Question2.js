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


Inputs:
. initial amount/number
• annual interest rate/number
• number of years to compound/number
 */


function compoundInterest(inAmount,intRate,nYearsToCom){

   let  monthlyRate = intRate / 1200;
    let months = nYearsToCom * 12;
   let balance= inAmount;
    for ( i = 1; i <= months; i++ ) {
      let  monthlybalance=monthlyRate*balance;
       balance =balance + monthlybalance;
     }
     return balance.toFixed(2);

}
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
