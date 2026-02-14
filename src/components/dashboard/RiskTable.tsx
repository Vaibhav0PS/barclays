import { motion } from 'framer-motion';
import { Search, Filter, PhoneCall, Mail, ChevronRight, ExternalLink } from 'lucide-react';
import { RISK_CUSTOMERS } from '../../data/mockData';
import type { RiskCustomer } from '../../data/mockData';

const RiskTable = ({ onSelectCustomer }: { onSelectCustomer: (id: string) => void }) => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden mb-12">
      <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-sm font-black text-slate-900 flex items-center gap-3 uppercase tracking-widest">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
            High Priority Intervention Queue
          </h3>
          <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest leading-none">AI-Ranked customers requiring immediate action</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search by ID, Name, or Sector..." 
              className="pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-[11px] font-black focus:ring-2 focus:ring-blue-500/20 w-full md:w-80 transition-all placeholder:text-slate-300"
            />
          </div>
          <button className="flex items-center gap-2 px-5 py-3 bg-slate-50 border-none rounded-2xl text-[10px] font-black text-slate-600 hover:bg-slate-100 transition-all uppercase tracking-widest">
            <Filter size={14} />
            Filters
          </button>
          <button className="flex items-center gap-1.5 px-5 py-3 bg-slate-900 border-none rounded-2xl text-[10px] font-black text-white hover:bg-black transition-all uppercase tracking-widest shadow-lg shadow-black/10">
            <ExternalLink size={14} />
            Export Batch
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Customer Profile</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Risk Index</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">EMI Details</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Probability</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Intervention</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {RISK_CUSTOMERS.map((customer: RiskCustomer, i: number) => (
              <motion.tr 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                key={customer.id} 
                className="hover:bg-slate-50/80 transition-all group cursor-pointer"
                onClick={() => onSelectCustomer(customer.id)}
              >
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 font-black text-xs ring-4 ring-white group-hover:ring-slate-100 transition-all">
                      {customer.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 leading-tight">{customer.name}</p>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">{customer.category}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                       <div 
                         className={`h-full rounded-full ${customer.riskLevel === 'High' ? 'bg-red-500' : 'bg-amber-500'}`} 
                         style={{ width: `${customer.riskScore * 100}%` }} 
                       />
                    </div>
                    <span className={`text-[11px] font-black ${customer.riskLevel === 'High' ? 'text-red-500' : 'text-amber-500'}`}>
                      {(customer.riskScore * 100).toFixed(0)}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div>
                    <p className="text-sm font-black text-slate-900 tracking-tighter">₹{customer.amount.toLocaleString()}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monthly Installment</p>
                  </div>
                </td>
                <td className="px-6 py-5">
                   <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${
                      customer.riskLevel === 'High' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {customer.riskLevel} Case
                    </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-all">
                    <button 
                      className="p-2.5 bg-white text-blue-600 rounded-xl border border-slate-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                      title="Call Customer"
                      onClick={(e) => { e.stopPropagation(); }}
                    >
                      <PhoneCall size={14} />
                    </button>
                    <button 
                      className="p-2.5 bg-white text-blue-600 rounded-xl border border-slate-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                      title="Email Notice"
                      onClick={(e) => { e.stopPropagation(); }}
                    >
                      <Mail size={14} />
                    </button>
                    <button 
                      className="ml-2 pl-4 pr-3 py-2.5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-black transition-all"
                    >
                      Analyze
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-8 bg-slate-50/50 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Showing 10 Priority Leads out of 1,242 High Risk Profiles</p>
         <div className="flex gap-2">
            {[1, 2, 3, '...', 72].map((p, i) => (
              <button 
                key={i} 
                className={`w-9 h-9 rounded-xl text-[10px] font-black transition-all ${
                  p === 1 ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-400 border border-slate-100 hover:bg-slate-50'
                }`}
              >
                {p}
              </button>
            ))}
         </div>
      </div>
    </div>
  );
};

export default RiskTable;
