export interface AmortizationEntry {
  month: number;
  emi: number;
  principalPaid: number;
  interestPaid: number;
  remainingBalance: number;
}

export const calculateEMI = (principal: number, annualRate: number, tenureYears: number) => {
  const monthlyRate = annualRate / 12 / 100;
  const numberOfMonths = tenureYears * 12;
  
  if (monthlyRate === 0) {
    return {
      emi: principal / numberOfMonths,
      totalAmount: principal,
      totalInterest: 0,
      amortizationSchedule: []
    };
  }

  const emi = 
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / 
    (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
  
  const totalAmount = emi * numberOfMonths;
  const totalInterest = totalAmount - principal;

  let remainingBalance = principal;
  const amortizationSchedule: AmortizationEntry[] = [];

  for (let i = 1; i <= numberOfMonths; i++) {
    const interestPaid = remainingBalance * monthlyRate;
    const principalPaid = emi - interestPaid;
    remainingBalance = Math.max(0, remainingBalance - principalPaid);

    amortizationSchedule.push({
      month: i,
      emi,
      principalPaid,
      interestPaid,
      remainingBalance,
    });
  }

  return {
    emi,
    totalAmount,
    totalInterest,
    amortizationSchedule,
  };
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};
