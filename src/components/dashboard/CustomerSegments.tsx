import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CUSTOMER_SEGMENTS } from '../../data/mockData';
import { motion } from 'framer-motion';

const CustomerSegments = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm h-full flex flex-col group relative overflow-hidden"
    >
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="mb-8">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-1">Sector Exposure</h3>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Risk Analysis by Employment Type</p>
      </div>
      
      <div className="flex-grow min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={CUSTOMER_SEGMENTS} layout="vertical" margin={{ left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }}
              axisLine={false}
              tickLine={false}
              width={100}
            />
            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '11px', fontWeight: 800 }}
            />
            <Bar dataKey="total" radius={[0, 10, 10, 0]} barSize={24}>
              {CUSTOMER_SEGMENTS.map((_segment, index) => (
                <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#6366f1'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
         <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Max Vulnerability</span>
            <span className="text-xs font-black text-slate-900 uppercase tracking-tighter">Manufacturing Sector</span>
         </div>
         <div className="px-4 py-2 bg-red-50 text-red-600 rounded-xl text-[10px] font-black uppercase tracking-widest">
            +12.4% Risk
         </div>
      </div>
    </motion.div>
  );
};

export default CustomerSegments;
