import { Users, CheckCircle, AlertTriangle, XCircle, TrendingDown, ShieldCheck } from 'lucide-react';
import { DASHBOARD_METRICS } from '../../data/mockData';
import { motion } from 'framer-motion';

const COLOR_STYLES = {
  blue: { icon: 'group-hover:bg-blue-50 group-hover:text-blue-600', text: 'text-blue-600' },
  emerald: { icon: 'group-hover:bg-emerald-50 group-hover:text-emerald-600', text: 'text-emerald-600' },
  amber: { icon: 'group-hover:bg-amber-50 group-hover:text-amber-600', text: 'text-amber-600' },
  red: { icon: 'group-hover:bg-red-50 group-hover:text-red-600', text: 'text-red-600' },
  purple: { icon: 'group-hover:bg-purple-50 group-hover:text-purple-600', text: 'text-purple-600' },
} as const;

const ExecutiveSummary = () => {
  const metrics = [
    { label: 'Total Customers', value: DASHBOARD_METRICS.totalCustomers.toLocaleString(), sub: 'Active Monitoring', icon: Users, color: 'blue' },
    { label: 'Likely to Pay', value: DASHBOARD_METRICS.likelyToPay.toLocaleString(), sub: `${DASHBOARD_METRICS.likelyToPayPct}% Stable Portfolio`, icon: CheckCircle, color: 'emerald' },
    { label: 'Payment Stress', value: DASHBOARD_METRICS.paymentStress.toLocaleString(), sub: `${DASHBOARD_METRICS.paymentStressPct}% At Risk`, icon: AlertTriangle, color: 'amber' },
    { label: 'Predicted Misses', value: DASHBOARD_METRICS.predictedMisses.toLocaleString(), sub: `${DASHBOARD_METRICS.predictedMissesPct}% Critical`, icon: XCircle, color: 'red' },
    { label: 'Potential Exposure', value: `₹${DASHBOARD_METRICS.potentialNPAExposure} Cr`, sub: 'Projected Q3 NPA', icon: TrendingDown, color: 'purple' },
    { label: 'Loss Prevented', value: `₹${DASHBOARD_METRICS.lossPrevented} Cr`, sub: 'Intervention ROI', icon: ShieldCheck, color: 'blue' },
  ] as const;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-10">
      {metrics.map((m, idx) => (
        <motion.div 
          key={m.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group"
        >
          <div className={`p-2.5 rounded-xl bg-slate-50 text-slate-400 transition-colors w-fit mb-4 ${COLOR_STYLES[m.color].icon}`}>
            <m.icon size={18} />
          </div>
          <p className="text-2xl font-black text-slate-900 tracking-tighter mb-1">{m.value}</p>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">{m.label}</p>
          <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
              <span className={`text-[9px] font-black uppercase tracking-widest ${COLOR_STYLES[m.color].text}`}>
                {m.sub}
              </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExecutiveSummary;
