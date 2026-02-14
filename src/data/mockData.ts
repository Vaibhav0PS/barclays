// src/data/mockData.ts

export const DASHBOARD_METRICS = {
  totalCustomers: 100000,
  likelyToPay: 78500,
  likelyToPayPct: 78.5,
  paymentStress: 15200,
  paymentStressPct: 15.2,
  predictedMisses: 6300,
  predictedMissesPct: 6.3,
  potentialNPAExposure: 45.2, // Crores
  lossPrevented: 12.8, // Crores
};

export const RISK_DISTRIBUTION = [
  { name: 'Paying On Time', value: 78500, color: '#10B981' }, // Green-500
  { name: 'Payment Stress', value: 15200, color: '#F59E0B' }, // Amber-500
  { name: 'Likely to Miss EMI', value: 6300, color: '#EF4444' }, // Red-500
];

export const CUSTOMER_SEGMENTS = [
  {
    name: 'Salaried',
    total: 60000,
    onTime: 50000,
    stress: 8000,
    miss: 2000,
  },
  {
    name: 'Business',
    total: 30000,
    onTime: 20000,
    stress: 6000,
    miss: 4000,
  },
  {
    name: 'Farmer',
    total: 10000,
    onTime: 8500,
    stress: 1200,
    miss: 300,
  },
];

// Generate 30 days of trend data
export const PAYMENT_TRENDS = Array.from({ length: 30 }, (_, i) => {
  const day = i + 1;
  // Simulate a slight increase in misses towards the end of the month
  const baseMiss = 150 + (i * 2); 
  const baseStress = 400 + (i * 5);
  return {
    day: `Day ${day}`,
    onTime: 3000 - baseMiss - baseStress,
    delayed: baseStress,
    defaults: baseMiss,
  };
});

export interface Customer {
  id: string;
  name: string;
  type: 'Salaried' | 'Business' | 'Farmer';
  loanType: 'Home' | 'Auto' | 'Personal';
  loanAmount: number;
  emiAmount: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  missProbability: number;
  action: 'None' | 'Soft Reminder' | 'Payment Holiday' | 'Restructuring' | 'Immediate Call';
  // Details for drill-down
  region: string;
  remainingBalance: number;
  paidEmis: number;
  totalEmis: number;
  creditScore: number;
  reasons: { label: string; severity: number }[]; // severity 0-100
  cashFlow: {
    income: number;
    expenses: number;
    balanceTrend: number[]; // simple trend points
  };
}

// Generate some dummy customers for the table
export const CUSTOMERS: Customer[] = [
  {
    id: 'CUST-001',
    name: 'Rajesh Kumar',
    type: 'Salaried',
    loanType: 'Home',
    loanAmount: 5000000,
    emiAmount: 45000,
    riskLevel: 'High',
    missProbability: 85,
    action: 'Immediate Call',
    region: 'Mumbai',
    remainingBalance: 4200000,
    paidEmis: 24,
    totalEmis: 180,
    creditScore: 650,
    reasons: [
      { label: 'Salary Delayed > 15 Days', severity: 90 },
      { label: 'Avg Balance < EMI', severity: 80 },
      { label: 'Credit Card Utilization > 90%', severity: 60 },
    ],
    cashFlow: {
      income: 80000,
      expenses: 75000,
      balanceTrend: [5000, 4800, 4200, 3000, 1500, 500],
    },
  },
  {
    id: 'CUST-002',
    name: 'Priya Sharma',
    type: 'Business',
    loanType: 'Personal',
    loanAmount: 1000000,
    emiAmount: 25000,
    riskLevel: 'Medium',
    missProbability: 45,
    action: 'Soft Reminder',
    region: 'Delhi',
    remainingBalance: 800000,
    paidEmis: 12,
    totalEmis: 48,
    creditScore: 710,
    reasons: [
      { label: 'Irregular Cash Flow', severity: 50 },
      { label: 'High Withdrawal Rate', severity: 40 },
    ],
    cashFlow: {
      income: 120000,
      expenses: 100000,
      balanceTrend: [25000, 22000, 28000, 15000, 18000, 12000],
    },
  },
  {
    id: 'CUST-003',
    name: 'Amit Patel',
    type: 'Farmer',
    loanType: 'Auto',
    loanAmount: 800000,
    emiAmount: 18000,
    riskLevel: 'Low',
    missProbability: 12,
    action: 'None',
    region: 'Gujarat',
    remainingBalance: 400000,
    paidEmis: 30,
    totalEmis: 60,
    creditScore: 780,
    reasons: [],
    cashFlow: {
      income: 50000,
      expenses: 20000,
      balanceTrend: [30000, 32000, 31000, 33000, 34000, 35000],
    },
  },
    {
    id: 'CUST-004',
    name: 'Sneha Gupta',
    type: 'Salaried',
    loanType: 'Home',
    loanAmount: 7500000,
    emiAmount: 62000,
    riskLevel: 'High',
    missProbability: 78,
    action: 'Restructuring',
    region: 'Bangalore',
    remainingBalance: 7000000,
    paidEmis: 10,
    totalEmis: 240,
    creditScore: 620,
    reasons: [
      { label: 'Job Change Detected', severity: 70 },
      { label: 'Missed Utility Payments', severity: 60 },
    ],
    cashFlow: {
      income: 110000,
      expenses: 105000,
      balanceTrend: [12000, 10000, 8000, 6000, 4000, 2000],
    },
  },
  {
    id: 'CUST-005',
    name: 'Vikram Singh',
    type: 'Business',
    loanType: 'Personal',
    loanAmount: 2000000,
    emiAmount: 48000,
    riskLevel: 'Medium',
    missProbability: 55,
    action: 'Payment Holiday',
    region: 'Jaipur',
    remainingBalance: 1500000,
    paidEmis: 15,
    totalEmis: 60,
    creditScore: 690,
    reasons: [
      { label: 'Vendor Payments Delayed', severity: 55 },
      { label: 'Seasonal Dip', severity: 45 },
    ],
    cashFlow: {
      income: 150000,
      expenses: 130000,
      balanceTrend: [40000, 35000, 25000, 30000, 20000, 15000],
    },
  },
];

export const BANK_HEALTH = {
  npaRatio: 2.8,
  npaTrend: 'Increasing', // vs last quarter
  stressIndex: 65, // 0-100
  reputationRisk: 'Medium',
};

export interface RiskCustomer {
  id: string;
  name: string;
  category: string;
  riskLevel: string;
  riskScore: number;
  amount: number;
  dpd: number;
  location: string;
  phone: string;
  email: string;
}

// Adding specific high-priority customers for the table
export const RISK_CUSTOMERS: RiskCustomer[] = [
  {
    id: 'CUST-001',
    name: 'Rajesh Kumar',
    category: 'SME / Manufacturing',
    riskLevel: 'High',
    riskScore: 0.85,
    amount: 45000,
    dpd: 32,
    location: 'Mumbai, MH',
    phone: '+91 98765-43210',
    email: 'r.kumar@sme-ind.com'
  },
  {
    id: 'CUST-002',
    name: 'Priya Sharma',
    category: 'Retail / Service',
    riskLevel: 'High',
    riskScore: 0.78,
    amount: 62000,
    dpd: 28,
    location: 'Delhi, DL',
    phone: '+91 87654-32109',
    email: 'priya.s@retailcore.in'
  },
  {
    id: 'CUST-003',
    name: 'Vikram Singh',
    category: 'Corporate / IT',
    riskLevel: 'Medium',
    riskScore: 0.55,
    amount: 88000,
    dpd: 15,
    location: 'Bangalore, KA',
    phone: '+91 76543-21098',
    email: 'v.singh@it-systems.net'
  },
  {
    id: 'CUST-004',
    name: 'Anjali Gupta',
    category: 'SME / Logistics',
    riskLevel: 'High',
    riskScore: 0.92,
    amount: 35000,
    dpd: 45,
    location: 'Pune, MH',
    phone: '+91 65432-10987',
    email: 'a.gupta@logi-express.com'
  },
  {
    id: 'CUST-005',
    name: 'Karan Malhotra',
    category: 'Professional / Legal',
    riskLevel: 'Medium',
    riskScore: 0.48,
    amount: 52000,
    dpd: 12,
    location: 'Chandigarh, PB',
    phone: '+91 54321-09876',
    email: 'k.malhotra@legal.in'
  }
];
