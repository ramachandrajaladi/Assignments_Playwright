// Student Marks and Average calculation
let studentNames:string[] = ["Suresh", "Mahesh", "Naresh"]
let studentMarks:number[] = [75, 80, 82]
let updatedMarks:number [] = []
let sum:number = 0

for(let i =0; i<studentMarks.length; i++)
{
    updatedMarks[i] = studentMarks[i] + 10
    sum = sum + updatedMarks[i]
    console.log(`${studentNames[i]} = ${updatedMarks[i]}`)
}
let average:number = sum/studentMarks.length
console.log(`Average: ${average.toFixed(1)}`)


// Bank Transactions
let amount:number [] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000]

let creditedAmount:number[] = []
let debitAmount:number[] = []

let noofCredittrans:number = 0
let noofdebitTrans:number = 0

let totalCreditAmount: number = 0;
let totalDebitAmount: number = 0;

let suspeciousTransAmount:number = 0
let noofsuspeciousTrans: number[] = [];

let sumofTrans = 0

// 🔁 Loop through all transactions
for (let i = 0; i < amount.length; i++) {

    let current = amount[i];

    // ➕ Add to overall balance
    sumofTrans = sumofTrans + current;

    // ⚖️ Check Credit or Debit
    if (current > 0) {
        noofCredittrans++;
        creditedAmount.push(current);
        totalCreditAmount += current;
    } else {
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
console.log(`No.Of Credit Transactions:  ${noofCredittrans}`);
console.log(`No.Of Debit Transactions: ${noofdebitTrans}`)

console.log(`Total Credit Amount:  ${totalCreditAmount}`);
console.log(`Total Debit Amount: ${totalDebitAmount}`);

console.log(`Suspicious Transactions: " + noofsuspeciousTrans);
console.log("Final Balance: " + sumofTrans);











