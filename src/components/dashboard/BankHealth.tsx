import { AlertOctagon, ShieldAlert, TrendingUp, Zap } from 'lucide-react';
import { BANK_HEALTH } from '../../data/mockData';

const BankHealth = () => {
  return (
    <div className="bg-[#0f172a] p-8 rounded-[2.5rem] text-white h-full relative overflow-hidden group">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-10">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-3">
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            Vulnerability Index
          </h3>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Institutional Health Assessment</p>
        </div>
        
        <div className="space-y-8 flex-grow">
          {/* NPA Ratio */}
          <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Forecast NPA</p>
                <div className="flex items-end gap-2">
                   <p className="text-3xl font-black">{BANK_HEALTH.npaRatio}%</p>
                   <span className="text-[10px] font-black text-red-400 mb-1 flex items-center gap-1 uppercase tracking-widest">
                      <TrendingUp size={10} /> High
                   </span>
                </div>
              </div>
              <div className="p-3 bg-red-400/20 text-red-400 rounded-2xl">
                 <ShieldAlert size={18} />
              </div>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1">
              <div className="bg-red-400 h-1 rounded-full" style={{ width: `${BANK_HEALTH.npaRatio * 10}%` }} />
            </div>
          </div>

          {/* Stress Index */}
          <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Portfolio Stress</p>
                <div className="flex items-end gap-2">
                   <p className="text-3xl font-black">{BANK_HEALTH.stressIndex}</p>
                   <span className="text-[10px] font-black text-amber-400 mb-1 flex items-center gap-1 uppercase tracking-widest">
                      Level 4
                   </span>
                </div>
              </div>
              <div className="p-3 bg-amber-400/20 text-amber-400 rounded-2xl">
                 <AlertOctagon size={18} />
              </div>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1">
              <div className="bg-amber-400 h-1 rounded-full" style={{ width: `${BANK_HEALTH.stressIndex}%` }} />
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5">
           <div className="bg-blue-600/10 border border-blue-500/20 p-5 rounded-[2rem] flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-2xl shadow-xl shadow-blue-900/40">
                 <Zap size={18} className="text-white" fill="currentColor" />
              </div>
              <div>
                 <p className="text-[11px] font-black text-white uppercase tracking-widest mb-0.5">Protect Equity</p>
                 <p className="text-[10px] font-bold text-slate-400 leading-tight">Intervening early reduces risk provisions by up to 22%.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BankHealth;
