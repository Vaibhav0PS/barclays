export interface Customer {
  id: string;
  type: 'Salaried' | 'Businessman' | 'Farmer';
  loanType: 'Home' | 'Personal' | 'Auto' | 'Agriculture';
  loanAmount: number;
  emiAmount: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  probability: number;
  region: string;
  remainingBalance: number;
  emiPaid: number;
  totalEmi: number;
  stressFactors: {
    label: string;
    weight: number; // 0 to 100
  }[];
}

export const MOCK_CUSTOMERS: Customer[] = [
  {
    id: 'CUST-88291',
    type: 'Salaried',
    loanType: 'Home',
    loanAmount: 4500000,
    emiAmount: 42000,
    riskLevel: 'High',
    probability: 88,
    region: 'Maharashtra',
    remainingBalance: 3800000,
    emiPaid: 14,
    totalEmi: 240,
    stressFactors: [
      { label: 'Salary Delay (12 days)', weight: 90 },
      { label: 'Balance Drop (45%)', weight: 75 },
      { label: 'EMI > Avg Balance', weight: 85 },
      { label: 'Increased ATM Usage', weight: 40 }
    ]
  },
  {
    id: 'CUST-12093',
    type: 'Businessman',
    loanType: 'Personal',
    loanAmount: 1200000,
    emiAmount: 28000,
    riskLevel: 'Medium',
    probability: 45,
    region: 'Karnataka',
    remainingBalance: 950000,
    emiPaid: 8,
    totalEmi: 48,
    stressFactors: [
      { label: 'Reduced Credits', weight: 50 },
      { label: 'High Utility Spend', weight: 30 }
    ]
  },
  {
    id: 'CUST-44210',
    type: 'Farmer',
    loanType: 'Agriculture',
    loanAmount: 500000,
    emiAmount: 12000,
    riskLevel: 'Low',
    probability: 12,
    region: 'Punjab',
    remainingBalance: 320000,
    emiPaid: 12,
    totalEmi: 36,
    stressFactors: [
      { label: 'Low Rainfall Zone', weight: 20 }
    ]
  },
  {
    id: 'CUST-99231',
    type: 'Salaried',
    loanType: 'Auto',
    loanAmount: 850000,
    emiAmount: 18500,
    riskLevel: 'High',
    probability: 72,
    region: 'Tamil Nadu',
    remainingBalance: 640000,
    emiPaid: 11,
    totalEmi: 60,
    stressFactors: [
      { label: 'Account Balance < EMI', weight: 95 },
      { label: 'Multiple NSF Check', weight: 80 }
    ]
  },
  {
    id: 'CUST-33102',
    type: 'Businessman',
    loanType: 'Home',
    loanAmount: 7500000,
    emiAmount: 68000,
    riskLevel: 'Low',
    probability: 5,
    region: 'Gujarat',
    remainingBalance: 5200000,
    emiPaid: 36,
    totalEmi: 180,
    stressFactors: []
  }
];

export const EXECUTIVE_STATS = [
  { label: 'Total Customers Monitored', value: '1,00,000', sub: 'Active Portfolios', icon: 'Users', color: 'blue' },
  { label: 'Likely to Pay On Time', value: '78,500', sub: '78.5% Stable Cash Flow', icon: 'CheckCircle', color: 'green' },
  { label: 'Showing Payment Stress', value: '15,200', sub: '15.2% Needs Attention', icon: 'AlertCircle', color: 'amber' },
  { label: 'Predicted EMI Misses', value: '6,300', sub: 'High Risk (Next 14-30 Days)', icon: 'XCircle', color: 'red' },
  { label: 'Potential NPA Exposure', value: '₹ 420 Cr', sub: 'Forecast if no action', icon: 'TrendingDown', color: 'red' },
  { label: 'Loss Prevented (Intervention)', value: '₹ 85 Cr', sub: 'Estimated Business Value', icon: 'ShieldCheck', color: 'emerald' },
];

export const RISK_DISTRIBUTION = [
  { name: 'Paying On Time', value: 78500, color: '#10b981' },
  { name: 'Payment Stress', value: 15200, color: '#f59e0b' },
  { name: 'Likely to Miss EMI', value: 6300, color: '#ef4444' },
];

export const SEGMENTATION_DATA = [
  { type: 'Salaried', onTime: 82, stress: 12, miss: 6 },
  { type: 'Businessman', onTime: 70, stress: 20, miss: 10 },
  { type: 'Farmer', onTime: 65, stress: 25, miss: 10 },
];

export const TREND_DATA = [
  { date: 'Jan 15', onTime: 79000, stress: 14000, miss: 7000 },
  { date: 'Jan 22', onTime: 78800, stress: 14500, miss: 6700 },
  { date: 'Jan 29', onTime: 78600, stress: 14800, miss: 6600 },
  { date: 'Feb 05', onTime: 78550, stress: 15150, miss: 6300 },
  { date: 'Feb 12', onTime: 78500, stress: 15200, miss: 6300 },
];
