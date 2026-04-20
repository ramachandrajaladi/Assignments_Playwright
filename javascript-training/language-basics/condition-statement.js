"use strict";
function checkLoanEligibility(applicant) {
    if (applicant.creditScore > 750) {
        return `${applicant.customerName} is eligible for the loan. Credit score is high enough for automatic approval.`;
    }
    if (applicant.creditScore < 650) {
        return `${applicant.customerName} is not eligible for the loan. Credit score is below 650.`;
    }
    if (applicant.income < 50000) {
        return `${applicant.customerName} is not eligible for the loan. Income must be at least 50000.`;
    }
    if (!applicant.isEmployed) {
        return `${applicant.customerName} is not eligible for the loan. Customer is unemployed.`;
    }
    if (applicant.debtToIncomeRatio > 40) {
        return `${applicant.customerName} is not eligible for the loan. Debt-to-income ratio is greater than 40%.`;
    }
    return `${applicant.customerName} is eligible for the loan. All additional checks passed.`;
}
const applicant = {
    customerName: "John Doe",
    creditScore: 720,
    income: 55000,
    isEmployed: true,
    debtToIncomeRatio: 35,
};
console.log(checkLoanEligibility(applicant));
