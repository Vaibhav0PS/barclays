import {
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Users,
} from 'lucide-react';

type NpaMetric = {
  key: string;
  label: string;
  value: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  subtitleClass: string;
  iconClass: string;
};

const npaMetrics: NpaMetric[] = [
  {
    key: 'total-accounts',
    label: 'Total Portfolio Accounts',
    value: '100,000',
    subtitle: 'Active Monitoring',
    icon: Users,
    subtitleClass: 'text-blue-600',
    iconClass: 'bg-blue-50 text-blue-600',
  },
  {
    key: 'stable-portfolio',
    label: 'Likely To Pay',
    value: '78,500',
    subtitle: '78.5% Stable',
    icon: CheckCircle2,
    subtitleClass: 'text-emerald-600',
    iconClass: 'bg-emerald-50 text-emerald-600',
  },
  {
    key: 'payment-stress',
    label: 'Payment Stress',
    value: '15,200',
    subtitle: '15.2% At Risk',
    icon: AlertTriangle,
    subtitleClass: 'text-amber-600',
    iconClass: 'bg-amber-50 text-amber-600',
  },
  {
    key: 'critical-npa',
    label: 'Predicted NPA',
    value: '6,300',
    subtitle: '6.3% Critical',
    icon: TrendingDown,
    subtitleClass: 'text-red-600',
    iconClass: 'bg-red-50 text-red-600',
  },
  {
    key: 'npa-exposure',
    label: 'Potential Exposure',
    value: 'Rs 45.2 Cr',
    subtitle: 'Projected NPA',
    icon: TrendingUp,
    subtitleClass: 'text-violet-600',
    iconClass: 'bg-violet-50 text-violet-600',
  },
  {
    key: 'loss-prevented',
    label: 'Loss Prevented',
    value: 'Rs 12.8 Cr',
    subtitle: 'Intervention ROI',
    icon: ShieldCheck,
    subtitleClass: 'text-blue-600',
    iconClass: 'bg-blue-50 text-blue-600',
  },
];

const NPASummaryCards = () => {
  return (
    <section className="mb-12">
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-5 min-w-max">
          {/* Data mapping: each NPA metric entry renders one card */}
          {npaMetrics.map((metric) => (
            <article
              key={metric.key}
              className="w-[230px] shrink-0 bg-white rounded-[2rem] border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className={`w-fit p-2.5 rounded-xl mb-5 ${metric.iconClass}`}>
                <metric.icon size={18} />
              </div>
              <p className="text-[2rem] leading-none font-black text-slate-900 tracking-tight mb-2">
                {metric.value}
              </p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.12em]">
                {metric.label}
              </p>
              <p className={`mt-6 text-[10px] font-black uppercase tracking-[0.16em] ${metric.subtitleClass}`}>
                {metric.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NPASummaryCards;
