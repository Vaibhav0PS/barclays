import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { Briefcase, Globe, IndianRupee, Map } from 'lucide-react';

const portfolioData = [
  { region: 'West', amount: 4500, growth: '+12%', color: '#3b82f6' },
  { region: 'North', amount: 3800, growth: '+8%', color: '#6366f1' },
  { region: 'South', amount: 5200, growth: '+15%', color: '#8b5cf6' },
  { region: 'East', amount: 2400, growth: '+3%', color: '#f43f5e' },
  { region: 'Central', amount: 3100, growth: '+6%', color: '#f59e0b' },
];

const PortfolioView = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-12 max-w-[1600px] mx-auto"
    >
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">Loan <span className="text-blue-600">Portfolio</span></h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Geographic Dispersion & Product Concentration</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mb-12">
        {[
          { label: 'Total AUM', value: '₹14,200 Cr', icon: IndianRupee, colorClass: 'bg-blue-50 text-blue-600' },
          { label: 'Asset Classes', value: '12 Categories', icon: Briefcase, colorClass: 'bg-indigo-50 text-indigo-600' },
          { label: 'Active Regions', value: '28 States', icon: Map, colorClass: 'bg-emerald-50 text-emerald-600' },
          { label: 'Yield on Assets', value: '11.4%', icon: IndianRupee, colorClass: 'bg-amber-50 text-amber-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <div className={`p-3 rounded-2xl w-fit mb-6 ${stat.colorClass}`}>
                <stat.icon size={20} />
             </div>
             <p className="text-3xl font-black text-slate-900 mb-1">{stat.value}</p>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
           <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-12 flex items-center gap-3">
              <Globe size={16} className="text-blue-600" />
              Regional Dispersion Analysis
           </h3>
           <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={portfolioData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                   <XAxis dataKey="region" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} dy={10} />
                   <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} dx={-10} />
                   <Tooltip 
                     cursor={{ fill: '#f8fafc' }}
                     contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontSize: '11px', fontWeight: 800 }}
                   />
                   <Bar dataKey="amount" radius={[12, 12, 0, 0]} barSize={60}>
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                   </Bar>
                </BarChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="col-span-4 bg-[#0f172a] p-10 rounded-[3rem] text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
           <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-10 text-slate-500">Market Dynamics</h3>
           
           <div className="space-y-8">
              {portfolioData.map((item, i) => (
                 <div key={i} className="flex justify-between items-center group">
                    <div className="flex flex-col">
                       <span className="text-xs font-black uppercase tracking-tighter">{item.region} Zone</span>
                       <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Institutional Exposure</span>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-black text-blue-400 mb-1 group-hover:scale-110 transition-transform">₹{item.amount} Cr</p>
                       <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">{item.growth} Growth</p>
                    </div>
                 </div>
              ))}
           </div>

           <div className="mt-12">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-500/20">
                 Explore Detailed Map
              </button>
           </div>
        </div>
      </div>
    </motion.main>
  );
};

export default PortfolioView;
