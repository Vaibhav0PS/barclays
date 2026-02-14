import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { PAYMENT_TRENDS } from '../../data/mockData';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const PaymentTrend = () => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm h-full flex flex-col group">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h3 className="text-sm font-black text-slate-900 flex items-center gap-2 uppercase tracking-widest">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            PAYMENT VELOCITY TREND
          </h3>
          <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest leading-none">Real-time behavior tracking & 30-Day Forecast</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-xl">
           <TrendingUp size={14} />
           <span className="text-[10px] font-black uppercase tracking-widest">+12.4% Recovery</span>
        </div>
      </div>
      
      <div className="flex-grow min-h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={PAYMENT_TRENDS} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} 
            />
            <Tooltip
              contentStyle={{ 
                borderRadius: '16px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                fontSize: '11px',
                fontWeight: 800
              }}
            />
            <Line 
              type="monotone" 
              dataKey="onTime" 
              name="Resolved" 
              stroke="#10B981" 
              strokeWidth={4} 
              dot={false} 
              activeDot={{ r: 8, strokeWidth: 0 }} 
            />
            <Line 
              type="monotone" 
              dataKey="delayed" 
              name="In-Arrears" 
              stroke="#F59E0B" 
              strokeWidth={4} 
              dot={false} 
            />
            <Line 
              type="monotone" 
              dataKey="defaults" 
              name="Predicted" 
              stroke="#EF4444" 
              strokeWidth={4} 
              strokeDasharray="8 8" 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
         <div className="flex gap-8">
            <div className="flex items-center gap-2">
               <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">On-Time</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Delayed</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Forecasted Default</span>
            </div>
         </div>
         <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
            Download Raw Logs <ArrowUpRight size={14} />
         </button>
      </div>
    </div>
  );
};

export default PaymentTrend;
