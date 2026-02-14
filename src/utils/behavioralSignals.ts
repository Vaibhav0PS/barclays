export type StressTag = 'Positive' | 'Neutral' | 'Stress';

export interface BehavioralMonthlySignal {
  month: string;
  salaryCreditDelayDays: number;
  savingsDrawdownPct: number;
  expenseVolatility: number;
  emiDelayProbability: number;
  liquidityStress15d: number;
  interventionLift: number;
}

export interface BehavioralTransactionEvent {
  date: string;
  type: string;
  category: string;
  amount: number;
  stressTag: StressTag;
}

export interface BehavioralKpis {
  customersUnderMonitoring: number;
  earlyStressPct: number;
  delinquency30dPct: number;
  liquidityStabilityScore: number;
  behavioralRiskIndex: number;
  interventionSuccessRate: number;
}

export interface BehavioralDistributionPoint {
  name: string;
  value: number;
  color: string;
}

export interface BehavioralTrendPoint {
  month: string;
  consistency: number;
  stressProjection: number;
}

export interface PortfolioEarlyRiskIndicators {
  earlyStressIndex: number;
  liquidityRiskMomentum: number;
  interventionImpactScore: number;
}

export interface BehavioralEngineOutput {
  kpis: BehavioralKpis;
  distribution: BehavioralDistributionPoint[];
  trend: BehavioralTrendPoint[];
  indicators: PortfolioEarlyRiskIndicators;
  recentTransactions: BehavioralTransactionEvent[];
}

const monthlySignals: BehavioralMonthlySignal[] = [
  { month: 'Sep', salaryCreditDelayDays: 0.8, savingsDrawdownPct: 6.2, expenseVolatility: 13, emiDelayProbability: 8.5, liquidityStress15d: 11, interventionLift: 79 },
  { month: 'Oct', salaryCreditDelayDays: 1.1, savingsDrawdownPct: 7.4, expenseVolatility: 15, emiDelayProbability: 9.2, liquidityStress15d: 13, interventionLift: 80 },
  { month: 'Nov', salaryCreditDelayDays: 1.3, savingsDrawdownPct: 8.1, expenseVolatility: 17, emiDelayProbability: 10.4, liquidityStress15d: 15, interventionLift: 81 },
  { month: 'Dec', salaryCreditDelayDays: 1.7, savingsDrawdownPct: 9.5, expenseVolatility: 20, emiDelayProbability: 11.8, liquidityStress15d: 18, interventionLift: 82 },
  { month: 'Jan', salaryCreditDelayDays: 2.2, savingsDrawdownPct: 10.3, expenseVolatility: 22, emiDelayProbability: 12.9, liquidityStress15d: 20, interventionLift: 83 },
  { month: 'Feb', salaryCreditDelayDays: 2.6, savingsDrawdownPct: 11.2, expenseVolatility: 24, emiDelayProbability: 14.1, liquidityStress15d: 23, interventionLift: 84 },
];

const recentTransactions: BehavioralTransactionEvent[] = [
  { date: '2026-02-11', type: 'Salary Credit', category: 'Income', amount: 64000, stressTag: 'Positive' },
  { date: '2026-02-08', type: 'ATM Withdrawal', category: 'Cash Outflow', amount: 18000, stressTag: 'Neutral' },
  { date: '2026-02-03', type: 'Utility Payment', category: 'Recurring Bills', amount: 9200, stressTag: 'Neutral' },
  { date: '2026-01-29', type: 'EMI Debit Retry', category: 'Loan Repayment', amount: 45000, stressTag: 'Stress' },
  { date: '2026-01-26', type: 'UPI Transfer Burst', category: 'Discretionary Spend', amount: 23000, stressTag: 'Stress' },
  { date: '2026-01-22', type: 'Savings Transfer', category: 'Buffer Build', amount: 12000, stressTag: 'Positive' },
  { date: '2026-01-16', type: 'Card Settlement', category: 'Credit Card', amount: 14000, stressTag: 'Neutral' },
];

const avg = (values: number[]) => values.reduce((sum, value) => sum + value, 0) / values.length;

const clamp = (value: number, min = 0, max = 100) => Math.max(min, Math.min(max, value));

export const computeBehavioralEngine = (totalCustomers = 100000): BehavioralEngineOutput => {
  const avgSalaryDelay = avg(monthlySignals.map((m) => m.salaryCreditDelayDays));
  const avgSavingsDrawdown = avg(monthlySignals.map((m) => m.savingsDrawdownPct));
  const avgExpenseVolatility = avg(monthlySignals.map((m) => m.expenseVolatility));
  const avgEmiDelayProb = avg(monthlySignals.map((m) => m.emiDelayProbability));
  const avgLiquidityStress = avg(monthlySignals.map((m) => m.liquidityStress15d));
  const avgInterventionLift = avg(monthlySignals.map((m) => m.interventionLift));

  // Signal blending model for early-risk scoring.
  const behavioralRiskIndex = clamp(
    avgSalaryDelay * 6 + avgSavingsDrawdown * 1.8 + avgExpenseVolatility * 1.1 + avgEmiDelayProb * 2.2 + avgLiquidityStress * 1.7
  );
  const liquidityStabilityScore = clamp(100 - avgLiquidityStress * 2.1 - avgExpenseVolatility * 0.9);
  const delinquency30dPct = clamp(avgEmiDelayProb * 1.35, 0, 40);
  const earlyStressPct = clamp((avgSavingsDrawdown * 1.1 + avgSalaryDelay * 7 + avgLiquidityStress) / 2.3, 0, 100);
  const interventionSuccessRate = clamp(avgInterventionLift - avgEmiDelayProb * 0.5, 0, 100);

  const earlyStressCustomers = Math.round((totalCustomers * earlyStressPct) / 100);
  const highPreDelinquencyCustomers = Math.round((totalCustomers * delinquency30dPct) / 100);
  const stableCustomers = Math.max(0, totalCustomers - earlyStressCustomers - highPreDelinquencyCustomers);

  const trend = monthlySignals.map((m) => {
    const consistency = clamp(100 - (m.expenseVolatility * 1.1 + m.liquidityStress15d * 1.3 + m.salaryCreditDelayDays * 6));
    const stressProjection = clamp(consistency - m.emiDelayProbability * 0.9);
    return {
      month: m.month,
      consistency: Number(consistency.toFixed(1)),
      stressProjection: Number(stressProjection.toFixed(1)),
    };
  });

  return {
    kpis: {
      customersUnderMonitoring: totalCustomers,
      earlyStressPct: Number(earlyStressPct.toFixed(1)),
      delinquency30dPct: Number(delinquency30dPct.toFixed(1)),
      liquidityStabilityScore: Number(liquidityStabilityScore.toFixed(1)),
      behavioralRiskIndex: Number(behavioralRiskIndex.toFixed(1)),
      interventionSuccessRate: Number(interventionSuccessRate.toFixed(1)),
    },
    distribution: [
      { name: 'Stable Customers', value: stableCustomers, color: '#10b981' },
      { name: 'Emerging Stress', value: earlyStressCustomers, color: '#06b6d4' },
      { name: 'High Pre-Delinquency Risk', value: highPreDelinquencyCustomers, color: '#3b82f6' },
    ],
    trend,
    indicators: {
      earlyStressIndex: Number((behavioralRiskIndex * 0.82).toFixed(1)),
      liquidityRiskMomentum: Number((avgLiquidityStress * 2.9).toFixed(1)),
      interventionImpactScore: Number((interventionSuccessRate * 0.88).toFixed(1)),
    },
    recentTransactions,
  };
};
