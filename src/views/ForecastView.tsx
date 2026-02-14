import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { AlertTriangle, ShieldCheck, LineChart as LineIcon } from 'lucide-react';

const forecastData = [
  { month: 'Oct 25', actual: 2.1, projected: 2.1 },
  { month: 'Nov 25', actual: 2.3, projected: 2.3 },
  { month: 'Dec 25', actual: 2.5, projected: 2.5 },
  { month: 'Jan 26', actual: 2.8, projected: 2.8 },
  { month: 'Feb 26', actual: null, projected: 3.1 },
  { month: 'Mar 26', actual: null, projected: 3.4 },
  { month: 'Apr 26', actual: null, projected: 3.6 },
];

const segmentImpact = [
  { name: 'Agriculture', impact: 1.2, color: '#ef4444' },
  { name: 'Manufacturing', impact: 0.8, color: '#f59e0b' },
  { name: 'Services', impact: 0.4, color: '#10b981' },
  { name: 'SME Retail', impact: 0.9, color: '#f59e0b' },
];

const ForecastView = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-12 max-w-[1600px] mx-auto"
    >
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">NPA Forecasting <span className="text-blue-600">Engine</span></h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Predictive Analysis & Stress Testing • Q3-Q4 2026</p>
        </div>
        
        <div className="flex gap-4">
           <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-6 shadow-sm">
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Baseline Forecast</p>
                 <p className="text-2xl font-black text-slate-900">3.2%</p>
              </div>
              <div className="w-px h-10 bg-slate-100" />
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Stress Scenario</p>
                 <p className="text-2xl font-black text-red-600">4.1%</p>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mb-12">
         {/* Main Chart */}
         <div className="col-span-8 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-12">
               <div>
                  <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                     <LineIcon size={14} className="text-blue-600" />
                     NPA Ratio Projection
                  </h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Confidence Interval: 94%</p>
               </div>
            </div>
            
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={forecastData}>
                  <defs>
                    <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} dx={-10} />
                  <Tooltip 
                     contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontSize: '11px', fontWeight: 800 }}
                  />
                  <Area type="monotone" dataKey="actual" stroke="#0f172a" strokeWidth={4} fill="transparent" dot={{ r: 6, fill: '#0f172a', strokeWidth: 3, stroke: '#fff' }} />
                  <Area type="monotone" dataKey="projected" stroke="#3b82f6" strokeDasharray="8 8" strokeWidth={3} fill="url(#colorProjected)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
         </div>

         {/* Sector Risk */}
         <div className="col-span-4 flex flex-col gap-8">
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex-1 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-blue-500/20 transition-all duration-700" />
               
               <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  Systemic Risk Drivers
               </h3>

               <div className="space-y-6">
                  {segmentImpact.map((item, i) => (
                    <div key={i}>
                       <div className="flex justify-between items-end mb-2">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.name}</span>
                          <span className="text-xs font-black">+{item.impact}% Contribution</span>
                       </div>
                       <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(item.impact / 1.5) * 100}%` }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                       </div>
                    </div>
                  ))}
               </div>

               <div className="mt-12 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-red-500/10 text-red-500 rounded-2xl">
                        <AlertTriangle size={20} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Critical Alert</p>
                        <p className="text-xs font-bold text-slate-100 uppercase tracking-wide">Agri-sector volatility up by 15%</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between">
               <div>
                  <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                     <ShieldCheck size={14} className="text-emerald-500" />
                     Mitigation Impact
                  </h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Early restructuring effectiveness</p>
               </div>
               
               <div className="mt-8">
                  <div className="flex items-baseline gap-2">
                     <span className="text-5xl font-black text-slate-900 tracking-tighter">-18.4%</span>
                     <span className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-2">Potential NPA</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 leading-relaxed">
                     Based on current intervention velocity and restructuring approvals.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </motion.main>
  );
};

export default ForecastView;
