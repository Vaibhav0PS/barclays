import { motion } from 'framer-motion';
import type { ComponentType, ReactNode } from 'react';
import { Cpu, BellRing, Shield, Link2, SlidersHorizontal, Database } from 'lucide-react';

const modelConfigs = [
  { name: 'Default Risk Model', version: 'v2.4.1', lastUpdated: 'Feb 12, 2026', status: 'Active' },
  { name: 'SME Stress Model', version: 'v1.9.3', lastUpdated: 'Feb 10, 2026', status: 'Staging' },
  { name: 'Rural Segment Model', version: 'v1.3.0', lastUpdated: 'Feb 08, 2026', status: 'Active' },
];

const SettingCard = ({ title, subtitle, icon: Icon, children }: { title: string; subtitle: string; icon: ComponentType<{ size?: number; className?: string }>; children: ReactNode }) => (
  <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
    <div className="flex items-start justify-between mb-6">
      <div>
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-1">{title}</h3>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{subtitle}</p>
      </div>
      <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
        <Icon size={16} />
      </div>
    </div>
    {children}
  </section>
);

const SettingsView = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
            System <span className="text-blue-600">Settings</span>
          </h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Models, Alerts, Integrations, and Governance</p>
        </div>
        <button className="bg-slate-900 text-white rounded-2xl px-7 py-4 text-[10px] font-black uppercase tracking-[0.25em] shadow-xl shadow-slate-900/20">
          Save Configuration
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-7 space-y-8">
          <SettingCard title="Model Governance" subtitle="Deployment and version control" icon={Cpu}>
            <div className="space-y-4">
              {modelConfigs.map((model) => (
                <div key={model.name} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/70 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-slate-900">{model.name}</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{model.version} • Updated {model.lastUpdated}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest ${model.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                    {model.status}
                  </span>
                </div>
              ))}
            </div>
          </SettingCard>

          <SettingCard title="Risk Thresholds" subtitle="Alerts and escalation levels" icon={SlidersHorizontal}>
            <div className="space-y-5">
              {[
                { name: 'High-Risk Trigger', value: '>= 0.78', color: 'bg-red-500', pct: '78%' },
                { name: 'Delinquency Alert', value: '>= 15 DPD', color: 'bg-amber-500', pct: '65%' },
                { name: 'Exposure Escalation', value: '>= ₹50L', color: 'bg-blue-500', pct: '54%' },
              ].map((threshold) => (
                <div key={threshold.name}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-black text-slate-900 uppercase tracking-wider">{threshold.name}</p>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{threshold.value}</p>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className={`h-full ${threshold.color}`} style={{ width: threshold.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </SettingCard>
        </div>

        <div className="xl:col-span-5 space-y-8">
          <SettingCard title="Notification Policy" subtitle="Who gets alerted and when" icon={BellRing}>
            <div className="space-y-4">
              {[
                'Critical cases notify CRO + Collections Lead instantly',
                'Medium-risk summaries sent every 2 hours',
                'Low-risk digest delivered at 9:00 AM daily',
              ].map((rule) => (
                <label key={rule} className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/70 cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-1 accent-blue-600" />
                  <span className="text-xs font-bold text-slate-700 leading-relaxed">{rule}</span>
                </label>
              ))}
            </div>
          </SettingCard>

          <SettingCard title="Integrations" subtitle="Connected external systems" icon={Link2}>
            <div className="space-y-4">
              {[
                { name: 'Core Banking API', status: 'Connected', icon: Database },
                { name: 'CRM Sync', status: 'Connected', icon: Shield },
                { name: 'Message Gateway', status: 'Degraded', icon: BellRing },
              ].map((integration) => (
                <div key={integration.name} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/70">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-slate-100 text-slate-600">
                      <integration.icon size={14} />
                    </div>
                    <p className="text-sm font-black text-slate-900">{integration.name}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest ${integration.status === 'Connected' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                    {integration.status}
                  </span>
                </div>
              ))}
            </div>
          </SettingCard>
        </div>
      </div>
    </motion.main>
  );
};

export default SettingsView;
