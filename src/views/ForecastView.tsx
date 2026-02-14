import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  AlertTriangle,
  Banknote,
  LineChart as LineIcon,
  Percent,
  ShieldCheck,
  TrendingDown,
  WalletCards,
  Wallet,
} from 'lucide-react';

const npaTrendData = [
  { year: '2019-20', netNpa: 2.2, grossNpa: 7.5 },
  { year: '2020-21', netNpa: 1.5, grossNpa: 4.9 },
  { year: '2021-22', netNpa: 1.02, grossNpa: 4.2 },
  { year: '2022-23', netNpa: 0.67, grossNpa: 3.1 },
  { year: '2023-24', netNpa: 0.57, grossNpa: 2.6 },
  { year: '2024-25', netNpa: 0.47, grossNpa: 2.3 },
];

const forecastData = [
  { year: '2024-25', baseline: 2.3, stress: 2.8 },
  { year: '2025-26', baseline: 2.1, stress: 3.2 },
  { year: '2026-27', baseline: 1.9, stress: 3.6 },
  { year: '2027-28', baseline: 1.7, stress: 3.9 },
  { year: '2028-29', baseline: 1.6, stress: 4.1 },
];

const sectorNpaData = [
  { sector: 'Agriculture', contribution: 28 },
  { sector: 'Manufacturing', contribution: 24 },
  { sector: 'SME Retail', contribution: 21 },
  { sector: 'Services', contribution: 17 },
  { sector: 'Others', contribution: 10 },
];

const topCards = [
  {
    title: 'Total Loan Book',
    value: 'Rs 14,200 Cr',
    subtitle: 'Portfolio Outstanding',
    icon: Wallet,
    iconClass: 'bg-orange-50 text-orange-600',
    subtitleClass: 'text-orange-600',
  },
  {
    title: 'Total NPA Exposure',
    value: 'Rs 45.2 Cr',
    subtitle: 'Current Exposure',
    icon: AlertTriangle,
    iconClass: 'bg-red-50 text-red-600',
    subtitleClass: 'text-red-600',
  },
  {
    title: 'Net NPA %',
    value: '0.47%',
    subtitle: 'Improving Trend',
    icon: LineIcon,
    iconClass: 'bg-orange-50 text-orange-700',
    subtitleClass: 'text-orange-700',
  },
  {
    title: 'Gross NPA %',
    value: '2.30%',
    subtitle: '5Y Decline',
    icon: Banknote,
    iconClass: 'bg-red-50 text-red-700',
    subtitleClass: 'text-red-700',
  },
];

type RegulatoryMetric = {
  key: string;
  title: string;
  description: string;
  value: number;
  suffix: string;
  icon: ComponentType<{ size?: number }>;
  iconClass: string;
};

// API-driven metric list; add new cards here without changing the UI layout.
const regulatoryMetrics: RegulatoryMetric[] = [
  {
    key: 'pcr',
    title: 'Provision Coverage Ratio (PCR)',
    description: '% of NPAs covered by provisions',
    value: 75,
    suffix: '%',
    icon: WalletCards,
    iconClass: 'bg-orange-50 text-orange-700',
  },
  {
    key: 'car',
    title: 'Capital Adequacy Ratio (CAR)',
    description: 'Capital buffer against risk-weighted assets',
    value: 14.2,
    suffix: '%',
    icon: ShieldCheck,
    iconClass: 'bg-red-50 text-red-700',
  },
  {
    key: 'credit-cost',
    title: 'Credit Cost (%)',
    description: 'Provision expense as % of average loans',
    value: 1.18,
    suffix: '%',
    icon: Percent,
    iconClass: 'bg-orange-50 text-orange-700',
  },
  {
    key: 'slippage-ratio',
    title: 'Slippage Ratio',
    description: 'Fresh loans turning into NPAs during period',
    value: 2.4,
    suffix: '%',
    icon: TrendingDown,
    iconClass: 'bg-red-50 text-red-700',
  },
];

const ForecastView = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
            NPA <span className="text-red-600">Statistics</span>
          </h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
            Net/Gross NPA Trends, Forecast, Coverage And Exposure
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {topCards.map((card) => (
          <section key={card.title} className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all">
            <div className={`p-3 rounded-2xl w-fit mb-5 ${card.iconClass}`}>
              <card.icon size={18} />
            </div>
            <p className="text-3xl font-black text-slate-900 tracking-tight">{card.value}</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">{card.title}</p>
            <p className={`text-[10px] font-black uppercase tracking-widest mt-5 ${card.subtitleClass}`}>{card.subtitle}</p>
          </section>
        ))}
      </div>

      <section className="mb-10">
        <div className="mb-6">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-2">
            Regulatory Asset Quality Indicators
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {regulatoryMetrics.map((metric) => (
            <article
              key={metric.key}
              className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all"
            >
              <div className={`p-3 rounded-2xl w-fit mb-5 ${metric.iconClass}`}>
                <metric.icon size={18} />
              </div>
              <p className="text-3xl font-black text-slate-900 tracking-tight">
                {metric.value}
                {metric.suffix}
              </p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.12em] mt-2">
                {metric.title}
              </p>
              <p className="text-[11px] font-bold text-slate-400 mt-4 leading-relaxed">{metric.description}</p>
            </article>
          ))}
        </div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.18em] mt-6">
          Regulatory Asset-Quality Metrics for Portfolio Risk Assessment
        </p>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-10">
        <section className="xl:col-span-7 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6">5-Year NPA Trend</h3>
          <div className="h-[340px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={npaTrendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#fde2e2" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} label={{ value: 'NPA (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip contentStyle={{ borderRadius: '16px', border: '1px solid #fee2e2', fontSize: '11px', fontWeight: 800 }} formatter={(value: number) => `${value.toFixed(2)}%`} />
                <Legend />
                <Line type="monotone" dataKey="netNpa" name="Net NPA %" stroke="#ea580c" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="grossNpa" name="Gross NPA %" stroke="#dc2626" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="xl:col-span-5 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Forecast NPA: Baseline vs Stress</h3>
          <div className="h-[340px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={forecastData}>
                <defs>
                  <linearGradient id="baselineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ea580c" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#ea580c" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="stressGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#dc2626" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#dc2626" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#fee2e2" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} label={{ value: 'NPA (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip contentStyle={{ borderRadius: '16px', border: '1px solid #fee2e2', fontSize: '11px', fontWeight: 800 }} formatter={(value: number) => `${value.toFixed(1)}%`} />
                <Legend />
                <Area type="monotone" dataKey="baseline" name="Baseline" stroke="#ea580c" fill="url(#baselineGradient)" strokeWidth={3} />
                <Area type="monotone" dataKey="stress" name="Stress Scenario" stroke="#dc2626" fill="url(#stressGradient)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <section className="xl:col-span-5 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6">PCR & CAR Indicators</h3>
          <div className="space-y-6 mb-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] font-black text-slate-700 uppercase tracking-widest">Provision Coverage Ratio (PCR)</p>
                <p className="text-xs font-black text-orange-700">75%</p>
              </div>
              <div className="h-2 rounded-full bg-orange-100 overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] font-black text-slate-700 uppercase tracking-widest">Capital Adequacy Ratio (CAR)</p>
                <p className="text-xs font-black text-red-700">14.2%</p>
              </div>
              <div className="h-2 rounded-full bg-red-100 overflow-hidden">
                <div className="h-full bg-red-500" style={{ width: '71%' }} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100">
              <p className="text-[10px] font-black text-orange-700 uppercase tracking-widest">Total Stressed Loans</p>
              <p className="text-2xl font-black text-slate-900 mt-2">Rs 1,860 Cr</p>
            </div>
            <div className="p-5 rounded-2xl bg-red-50 border border-red-100">
              <p className="text-[10px] font-black text-red-700 uppercase tracking-widest">Credit Cost</p>
              <p className="text-2xl font-black text-slate-900 mt-2">1.18%</p>
            </div>
            <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100 md:col-span-2 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black text-orange-700 uppercase tracking-widest">Loss Prevented</p>
                <p className="text-2xl font-black text-slate-900 mt-2">Rs 12.8 Cr</p>
              </div>
              <div className="p-3 rounded-2xl bg-white text-orange-600 border border-orange-100">
                <ShieldCheck size={18} />
              </div>
            </div>
          </div>
        </section>

        <section className="xl:col-span-7 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Sector-wise NPA Contribution</h3>
          <div className="h-[360px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sectorNpaData} layout="vertical" margin={{ left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#fee2e2" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} unit="%" />
                <YAxis type="category" dataKey="sector" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11, fontWeight: 800 }} width={110} />
                <Tooltip contentStyle={{ borderRadius: '16px', border: '1px solid #fee2e2', fontSize: '11px', fontWeight: 800 }} formatter={(value: number) => `${value}%`} />
                <Bar dataKey="contribution" fill="#dc2626" radius={[0, 10, 10, 0]} barSize={26} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default ForecastView;
