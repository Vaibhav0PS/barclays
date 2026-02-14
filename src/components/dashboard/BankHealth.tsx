import { Activity, Gauge, ShieldCheck, TrendingUp } from 'lucide-react';

interface BankHealthProps {
  indicators: {
    earlyStressIndex: number;
    liquidityRiskMomentum: number;
    interventionImpactScore: number;
  };
}

const BankHealth = ({ indicators }: BankHealthProps) => {
  return (
    <div className="bg-[#0f172a] p-8 rounded-[2.5rem] text-white h-full relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-10">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-3">
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            Portfolio Early-Risk Overview
          </h3>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">
            Operational Performance Snapshot
          </p>
        </div>

        <div className="space-y-8 flex-grow">
          <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Early Stress Index</p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-black">{indicators.earlyStressIndex}</p>
                  <span className="text-[10px] font-black text-cyan-300 mb-1 flex items-center gap-1 uppercase tracking-widest">
                    <TrendingUp size={10} /> Controlled
                  </span>
                </div>
              </div>
              <div className="p-3 bg-blue-400/20 text-blue-300 rounded-2xl">
                <Gauge size={18} />
              </div>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1">
              <div className="bg-blue-400 h-1 rounded-full" style={{ width: `${Math.min(indicators.earlyStressIndex, 100)}%` }} />
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Liquidity Risk Momentum</p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-black">{indicators.liquidityRiskMomentum}%</p>
                  <span className="text-[10px] font-black text-emerald-300 mb-1 uppercase tracking-widest">Mtd</span>
                </div>
              </div>
              <div className="p-3 bg-emerald-400/20 text-emerald-300 rounded-2xl">
                <Activity size={18} />
              </div>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1">
              <div className="bg-emerald-400 h-1 rounded-full" style={{ width: `${Math.min(indicators.liquidityRiskMomentum, 100)}%` }} />
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5">
          <div className="bg-blue-600/10 border border-blue-500/20 p-5 rounded-[2rem] flex items-center gap-4">
            <div className="p-3 bg-blue-600 rounded-2xl shadow-xl shadow-blue-900/40">
              <ShieldCheck size={18} className="text-white" />
            </div>
            <div>
              <p className="text-[11px] font-black text-white uppercase tracking-widest mb-0.5">Intervention Impact Score</p>
              <p className="text-[10px] font-bold text-slate-400 leading-tight">
                Current impact level: {indicators.interventionImpactScore}% with improving mitigation efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankHealth;
