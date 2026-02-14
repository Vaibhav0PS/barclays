import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { RISK_DISTRIBUTION } from '../../data/mockData';
import { motion } from 'framer-motion';

const RiskDistribution = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm h-full flex flex-col relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
      
      <div className="relative z-10 mb-8">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-1">Risk Stratification</h3>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client Distribution by Probability</p>
      </div>
      
      <div className="flex-grow min-h-[250px] relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={RISK_DISTRIBUTION}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={8}
              dataKey="value"
              stroke="none"
            >
              {RISK_DISTRIBUTION.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '11px', fontWeight: 800 }}
              itemStyle={{ color: '#0f172a' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 space-y-3 relative z-10">
         {RISK_DISTRIBUTION.map((item, id) => (
            <div key={id} className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.name}</span>
               </div>
               <span className="text-xs font-black text-slate-900">{(item.value / 1000).toFixed(0)}k</span>
            </div>
         ))}
      </div>
    </motion.div>
  );
};

export default RiskDistribution;
