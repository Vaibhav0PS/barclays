import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExecutiveSummary from '../components/dashboard/ExecutiveSummary';
import RiskDistribution from '../components/dashboard/RiskDistribution';
import CustomerSegments from '../components/dashboard/CustomerSegments';
import PaymentTrend from '../components/dashboard/PaymentTrend';
import BankHealth from '../components/dashboard/BankHealth';
import RiskTable from '../components/dashboard/RiskTable';
import CustomerDetail from '../components/dashboard/CustomerDetail';
import { RISK_CUSTOMERS } from '../data/mockData';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';

const DashboardView = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const selectedCustomer = selectedCustomerId 
    ? RISK_CUSTOMERS.find((c) => c.id === selectedCustomerId) ?? null
    : null;

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-[1600px] mx-auto px-8 py-12"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
           <div className="flex items-center gap-2 mb-2">
              <div className="p-1 px-2 bg-blue-100 rounded text-[10px] font-black text-blue-600 uppercase tracking-widest">
                Platform v2.4
              </div>
              <div className="flex items-center gap-1 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                <ShieldCheck size={12} /> Encrypted
              </div>
           </div>
           <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
             Intelligence <span className="text-blue-600 italic">Center</span>
           </h1>
           <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">
             Real-time Portfolio Risk & Early Warning System
           </p>
        </div>
        
        <div className="flex gap-4">
           <div className="bg-slate-900 rounded-3xl p-5 px-8 text-white flex items-center gap-6 shadow-2xl shadow-slate-900/20">
              <div>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Risk Appetite</p>
                 <div className="flex items-center gap-2">
                    <span className="text-xl font-black">Moderate</span>
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                 </div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Exposure Limit</p>
                 <p className="text-xl font-black tracking-tight">₹840 Cr</p>
              </div>
           </div>
        </div>
      </div>

      <ExecutiveSummary />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-3">
          <RiskDistribution />
        </div>
        <div className="lg:col-span-5">
          <PaymentTrend />
        </div>
        <div className="lg:col-span-4">
          <BankHealth />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-4">
          <CustomerSegments />
        </div>
        
        <div className="lg:col-span-8 group relative overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[3rem] p-12 text-white shadow-2xl shadow-blue-500/20">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 rounded-full blur-[80px] -ml-24 -mb-24" />
           
           <div className="relative z-10 h-full flex flex-col">
              <div className="mb-auto">
                 <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl w-fit mb-6">
                    <Sparkles className="text-white" />
                 </div>
                 <h2 className="text-3xl font-black tracking-tighter mb-4 max-w-md">
                    Automate Your Early Intervention Workflow
                 </h2>
                 <p className="text-blue-100 text-sm font-bold leading-relaxed max-w-sm mb-8">
                    Our AI models have detected a patterns in SME sector defaults. Deploy 25,000 automated SMS notifications to prevent ₹14 Cr in expected losses.
                 </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                 <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-black/10 hover:translate-y-[-2px] transition-all flex items-center gap-3">
                    Trigger Mass Campaign <Zap size={16} fill="currentColor" />
                 </button>
                 <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                    Export Analysis Report
                 </button>
              </div>
           </div>
        </div>
      </div>

      <div className="mb-12">
        <RiskTable onSelectCustomer={(id) => setSelectedCustomerId(id)} />
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedCustomerId && (
          <CustomerDetail 
            customer={selectedCustomer} 
            onClose={() => setSelectedCustomerId(null)} 
          />
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default DashboardView;
