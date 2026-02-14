import { motion } from 'framer-motion';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, Tooltip, XAxis, YAxis, BarChart, Bar, Cell } from 'recharts';
import { Megaphone, PhoneCall, Mail, MessageSquare, Rocket, Clock3 } from 'lucide-react';

const interventionTrend = [
  { week: 'W1', initiated: 1800, recovered: 620 },
  { week: 'W2', initiated: 2400, recovered: 940 },
  { week: 'W3', initiated: 2700, recovered: 1210 },
  { week: 'W4', initiated: 3200, recovered: 1540 },
  { week: 'W5', initiated: 3500, recovered: 1800 },
];

const channelPerformance = [
  { channel: 'SMS', conversion: 28, color: '#3b82f6' },
  { channel: 'Email', conversion: 19, color: '#6366f1' },
  { channel: 'Call', conversion: 41, color: '#10b981' },
  { channel: 'WhatsApp', conversion: 33, color: '#f59e0b' },
];

const priorityQueue = [
  { name: 'Rajesh Kumar', action: 'Restructure Offer', sla: '2h', owner: 'Collections Pod A' },
  { name: 'Anjali Gupta', action: 'Supervisor Callback', sla: '45m', owner: 'Retention Desk' },
  { name: 'Priya Sharma', action: 'Payment Holiday Review', sla: '4h', owner: 'Recovery Ops' },
  { name: 'Vikram Singh', action: 'Soft Reminder Sequence', sla: '6h', owner: 'Digital Engagement' },
];

const InterventionView = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Intervention <span className="text-blue-600">Orchestrator</span>
          </h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Campaigns, Follow-ups, and Recovery Actions</p>
        </div>
        <button className="bg-slate-900 text-white rounded-2xl px-7 py-4 text-[10px] font-black uppercase tracking-[0.25em] shadow-xl shadow-slate-900/20 flex items-center gap-3">
          Launch Campaign <Rocket size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Active Campaigns', value: '24', icon: Megaphone, colorClass: 'bg-blue-50 text-blue-600' },
          { label: 'Today Calls', value: '1,280', icon: PhoneCall, colorClass: 'bg-emerald-50 text-emerald-600' },
          { label: 'Queued Notices', value: '8,940', icon: Mail, colorClass: 'bg-indigo-50 text-indigo-600' },
          { label: 'Avg Response', value: '42m', icon: Clock3, colorClass: 'bg-amber-50 text-amber-600' },
        ].map((item) => (
          <div key={item.label} className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className={`p-3 rounded-2xl w-fit mb-5 ${item.colorClass}`}>
              <item.icon size={18} />
            </div>
            <p className="text-3xl font-black text-slate-900 tracking-tight">{item.value}</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Intervention Throughput</h3>
          <div className="h-[360px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={interventionTrend}>
                <defs>
                  <linearGradient id="initiatedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.18} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} />
                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '11px', fontWeight: 800 }} />
                <Area type="monotone" dataKey="initiated" stroke="#3b82f6" fill="url(#initiatedGradient)" strokeWidth={3} />
                <Area type="monotone" dataKey="recovered" stroke="#10b981" fill="transparent" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="xl:col-span-4 bg-[#0f172a] p-10 rounded-[3rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-24" />
          <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-500">Channel Conversion</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelPerformance} margin={{ left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.15)" />
                <XAxis dataKey="channel" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10, fontWeight: 800 }} />
                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.3)', fontSize: '11px', fontWeight: 800 }} />
                <Bar dataKey="conversion" radius={[10, 10, 0, 0]} barSize={36}>
                  {channelPerformance.map((item) => (
                    <Cell key={item.channel} fill={item.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white mt-8 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          <MessageSquare size={14} className="text-blue-600" />
          Priority Action Queue
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {priorityQueue.map((item) => (
            <div key={item.name} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/70">
              <p className="text-sm font-black text-slate-900">{item.name}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{item.owner}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs font-black text-blue-600 uppercase tracking-wider">{item.action}</span>
                <span className="px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest bg-amber-50 text-amber-600">SLA {item.sla}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default InterventionView;
