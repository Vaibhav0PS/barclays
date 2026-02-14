import { motion } from 'framer-motion';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { ShieldAlert, MessageCircleWarning, Smile, Frown, TrendingUp } from 'lucide-react';

const sentimentTrend = [
  { day: 'Mon', positive: 74, negative: 18 },
  { day: 'Tue', positive: 72, negative: 19 },
  { day: 'Wed', positive: 76, negative: 16 },
  { day: 'Thu', positive: 75, negative: 17 },
  { day: 'Fri', positive: 78, negative: 14 },
  { day: 'Sat', positive: 80, negative: 12 },
];

const issueRadar = [
  { issue: 'Call Wait', score: 62 },
  { issue: 'Notice Tone', score: 48 },
  { issue: 'Agent Conduct', score: 35 },
  { issue: 'Dispute Delay', score: 56 },
  { issue: 'Digital UX', score: 41 },
];

const alerts = [
  { title: 'Escalation Spike', detail: 'SME segment complaints up 14% in Mumbai cluster', severity: 'High' },
  { title: 'Template Risk', detail: '2 email templates exceed legal tone threshold', severity: 'Medium' },
  { title: 'Call SLA Drift', detail: 'Average callback crossing 55 minutes in Pod C', severity: 'Medium' },
];

const ReputationView = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Reputation <span className="text-blue-600">Watchtower</span>
          </h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Brand Safety, Complaints, and Conduct Signals</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Brand Health', value: '78 / 100', icon: ShieldAlert, colorClass: 'bg-blue-50 text-blue-600' },
          { label: 'Open Complaints', value: '1,904', icon: MessageCircleWarning, colorClass: 'bg-amber-50 text-amber-600' },
          { label: 'Positive Sentiment', value: '80%', icon: Smile, colorClass: 'bg-emerald-50 text-emerald-600' },
          { label: 'Negative Mentions', value: '12%', icon: Frown, colorClass: 'bg-red-50 text-red-600' },
        ].map((card) => (
          <div key={card.label} className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className={`p-3 rounded-2xl w-fit mb-5 ${card.colorClass}`}>
              <card.icon size={18} />
            </div>
            <p className="text-3xl font-black text-slate-900 tracking-tight">{card.value}</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
            <TrendingUp size={14} className="text-blue-600" />
            Sentiment Momentum
          </h3>
          <div className="h-[340px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sentimentTrend} margin={{ left: -10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} />
                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '11px', fontWeight: 800 }} />
                <Line dataKey="positive" type="monotone" stroke="#10b981" strokeWidth={3} dot={false} />
                <Line dataKey="negative" type="monotone" stroke="#ef4444" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="xl:col-span-4 bg-[#0f172a] p-10 rounded-[3rem] text-white">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-500">Issue Heat Profile</h3>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={issueRadar}>
                <PolarGrid stroke="rgba(148, 163, 184, 0.2)" />
                <PolarAngleAxis dataKey="issue" tick={{ fill: '#cbd5e1', fontSize: 10, fontWeight: 800 }} />
                <PolarRadiusAxis tick={{ fill: '#64748b', fontSize: 9 }} />
                <Radar dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.45} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white mt-8 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Live Conduct Alerts</h3>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.title} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/70 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-sm font-black text-slate-900">{alert.title}</p>
                <p className="text-[11px] font-bold text-slate-500 mt-1">{alert.detail}</p>
              </div>
              <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest ${alert.severity === 'High' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>
                {alert.severity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default ReputationView;
