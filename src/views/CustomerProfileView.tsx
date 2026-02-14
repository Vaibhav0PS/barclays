import { motion } from 'framer-motion';
import { ArrowLeft, Activity, Zap, Wallet, Phone, Mail } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { RiskCustomer } from '../data/mockData';

interface CustomerProfileViewProps {
  customer: RiskCustomer | null;
  onBack: () => void;
}

const CustomerProfileView = ({ customer, onBack }: CustomerProfileViewProps) => {
  if (!customer) {
    return (
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-[1600px] mx-auto px-8 py-12">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest"
        >
          <ArrowLeft size={14} />
          Back To Overview
        </button>
        <div className="bg-white border border-slate-100 rounded-[2rem] p-10 text-center text-slate-500 font-bold">
          Customer not found.
        </div>
      </motion.main>
    );
  }

  const cashFlowData = [
    { month: 'Apr', balance: 45000 },
    { month: 'May', balance: 42000 },
    { month: 'Jun', balance: 38000 },
    { month: 'Jul', balance: 15000 },
    { month: 'Aug', balance: 8000 },
    { month: 'Sep', balance: 2400 },
  ];

  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-[1600px] mx-auto px-8 py-12">
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-colors"
      >
        <ArrowLeft size={14} />
        Back To Overview
      </button>

      <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="flex justify-between items-start relative z-10">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-[2rem] bg-slate-900 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-slate-900/20">
              {customer.name[0]}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[10px] font-black bg-blue-600 text-white px-3 py-1 rounded-full uppercase tracking-widest">
                  Priority Case
                </span>
                <span className="text-[10px] font-black bg-red-100 text-red-600 px-3 py-1 rounded-full uppercase tracking-widest">
                  High Severity
                </span>
              </div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tighter">{customer.name}</h1>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">ID: CID-{customer.id}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <section className="xl:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl w-fit mb-4">
                <Activity size={18} />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Risk Score</p>
              <p className="text-2xl font-black text-slate-900">{(customer.riskScore * 100).toFixed(1)}%</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl w-fit mb-4">
                <Zap size={18} />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Delinquency</p>
              <p className="text-2xl font-black text-amber-600">{customer.dpd}-Dpd</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl w-fit mb-4">
                <Wallet size={18} />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">EMI Amount</p>
              <p className="text-2xl font-black text-slate-900">Rs {customer.amount.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              Predictive Stress Analysis
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest mb-3 text-slate-400">
                  <span>Liquidity Crunch</span>
                  <span className="text-blue-400">Significant</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full bg-blue-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest mb-3 text-slate-400">
                  <span>Sector Volatility</span>
                  <span className="text-amber-400">Extreme</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} className="h-full bg-amber-500 rounded-full" />
                </div>
              </div>
              <div className="pt-4">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Recommendation</p>
                  <p className="text-xs font-bold leading-relaxed text-slate-200 uppercase tracking-wide">
                    System suggests immediate restructuring of loan tenure by 12 months.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Savings & Exposure Trend</h3>
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={cashFlowData}>
                  <defs>
                    <linearGradient id="colorBalancePage" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} />
                  <YAxis hide />
                  <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '11px', fontWeight: 800 }} />
                  <Area type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorBalancePage)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <aside className="xl:col-span-4">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm sticky top-8">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Contact & Case Details</h3>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Category</p>
                <p className="text-sm font-black text-slate-900">{customer.category}</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Location</p>
                <p className="text-sm font-black text-slate-900">{customer.location}</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Risk Level</p>
                <p className="text-sm font-black text-red-600 uppercase">{customer.riskLevel}</p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full bg-slate-900 text-white rounded-2xl py-4 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/20">
                <Phone size={16} />
                Intake Call
              </button>
              <button className="w-full bg-white text-slate-900 border-2 border-slate-100 rounded-2xl py-4 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
                <Mail size={16} />
                Dispatch Notice
              </button>
            </div>
          </div>
        </aside>
      </div>
    </motion.main>
  );
};

export default CustomerProfileView;
