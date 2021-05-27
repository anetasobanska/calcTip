const calcTip = function(bill){
    return (bill > 50 && bill < 300) ? (bill * 0.15) : (bill * 0.20)
}

const bills = [100, 1000, 40];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, bills);
console.log(totalBills);