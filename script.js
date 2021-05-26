const bills = [100, 1000, 40];
const tips = [];

function calcTip(bill){
    return (bill > 50 && bill < 300) ? tips.push(bill * 0.15) : tips.push(bill * 0.20)
}

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);

console.log(tips);