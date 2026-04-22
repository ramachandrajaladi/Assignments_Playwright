"use strict";
// Student Marks and Average calculation
let studentNames = ["Suresh", "Mahesh", "Naresh"];
let studentMarks = [75, 80, 82];
let updatedMarks = [];
let sum = 0;
for (let i = 0; i < studentMarks.length; i++) {
    updatedMarks[i] = studentMarks[i] + 10;
    sum = sum + updatedMarks[i];
    console.log(`${studentNames[i]} = ${updatedMarks[i]}`);
}
let average = sum / studentMarks.length;
console.log(`Average: ${average.toFixed(1)}`);
// Bank Transactions
let amount = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let creditedAmount = [];
let debitAmount = [];
let noofCredittrans = 0;
let noofdebitTrans = 0;
let totalCreditAmount = 0;
let totalDebitAmount = 0;
let suspeciousTransAmount = 0;
let noofsuspeciousTrans = [];
let sumofTrans = 0;
// 🔁 Loop through all transactions
for (let i = 0; i < amount.length; i++) {
    let current = amount[i];
    // ➕ Add to overall balance
    sumofTrans += current;
    // ⚖️ Check Credit or Debit
    if (current > 0) {
        noofCredittrans++;
        creditedAmount.push(current);
        totalCreditAmount += current;
    }
    else {
        noofdebitTrans++;
        debitAmount.push(current);
        totalDebitAmount += current;
    }
    // 🚨 Check Suspicious
    if (current > 10000 || current < -10000) {
        noofsuspeciousTrans.push(current);
    }
}
// 🖨️ Final Output (outside loop)
console.log("Total Credit Transactions: " + noofCredittrans);
console.log("Total Debit Transactions: " + noofdebitTrans);
console.log("Total Credit Amount: " + totalCreditAmount);
console.log("Total Debit Amount: " + totalDebitAmount);
console.log("Suspicious Transactions: " + noofsuspeciousTrans);
console.log("Final Balance: " + sumofTrans);
