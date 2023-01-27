function CalculateCompoundInterest(initialCapital, annualInterest, timeYears, monthlyAddition) {
  const monthlyInterest = (1 + annualInterest / 100) ** (1/12);
  let amount = initialCapital;
  for (let i = 0; i < timeYears * 12; i++) {
    amount *= monthlyInterest;
    amount += monthlyAddition;
  }
  amount = `Final result: ${amount.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
  return amount;
}

console.log(CalculateCompoundInterest(3000, 13, 5, 150)); // R$ 17.871,47
console.log(CalculateCompoundInterest(5000, 15, 9, 200)); //  R$ 60.575,20