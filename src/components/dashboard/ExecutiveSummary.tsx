import { Activity, CheckCircle, ShieldAlert, TrendingUp, Users, Waves } from 'lucide-react';
import { motion } from 'framer-motion';
import type { BehavioralKpis } from '../../utils/behavioralSignals';

const COLOR_STYLES = {
  blue: { icon: 'group-hover:bg-blue-50 group-hover:text-blue-600', text: 'text-blue-600' },
  emerald: { icon: 'group-hover:bg-emerald-50 group-hover:text-emerald-600', text: 'text-emerald-600' },
  cyan: { icon: 'group-hover:bg-cyan-50 group-hover:text-cyan-600', text: 'text-cyan-600' },
} as const;

interface ExecutiveSummaryProps {
  kpis: BehavioralKpis;
}

const ExecutiveSummary = ({ kpis }: ExecutiveSummaryProps) => {
  const metrics = [
    {
      label: 'Customers Under Monitoring',
      value: kpis.customersUnderMonitoring.toLocaleString(),
      sub: 'Behavioral Watchlist',
      icon: Users,
      color: 'blue',
    },
    {
      label: 'Early Stress Signals',
      value: `${kpis.earlyStressPct}%`,
      sub: 'Behavioral Triggered',
      icon: Activity,
      color: 'cyan',
    },
    {
      label: 'Predicted 30-Day Delinquency',
      value: `${kpis.delinquency30dPct}%`,
      sub: 'Forward Probability',
      icon: ShieldAlert,
      color: 'blue',
    },
    {
      label: 'Liquidity Stability Score',
      value: `${kpis.liquidityStabilityScore}`,
      sub: '15-Day Liquidity Lens',
      icon: Waves,
      color: 'blue',
    },
    {
      label: 'Behavioral Risk Index',
      value: `${kpis.behavioralRiskIndex}`,
      sub: 'Composite Signal',
      icon: TrendingUp,
      color: 'cyan',
    },
    {
      label: 'Early Intervention Success',
      value: `${kpis.interventionSuccessRate}%`,
      sub: 'Mitigation Efficiency',
      icon: CheckCircle,
      color: 'emerald',
    },
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
