import type { BehavioralTransactionEvent } from '../../utils/behavioralSignals';

interface BehavioralTransactionsProps {
  events: BehavioralTransactionEvent[];
}

const TAG_STYLES: Record<BehavioralTransactionEvent['stressTag'], string> = {
  Positive: 'bg-emerald-50 text-emerald-600',
  Neutral: 'bg-cyan-50 text-cyan-600',
  Stress: 'bg-blue-50 text-blue-600',
};

const BehavioralTransactions = ({ events }: BehavioralTransactionsProps) => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-1">
          Recent Behavioral Transactions (6-Month Window)
        </h3>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Key behavior events only
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70">
              <th className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
              <th className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction Type</th>
              <th className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
              <th className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
              <th className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Stress Signal Tag</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {events.map((event) => (
              <tr key={`${event.date}-${event.type}-${event.amount}`} className="hover:bg-slate-50/70 transition-colors">
                <td className="px-4 py-3 text-[11px] font-bold text-slate-700">{event.date}</td>
                <td className="px-4 py-3 text-[11px] font-black text-slate-900">{event.type}</td>
                <td className="px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wide">{event.category}</td>
                <td className="px-4 py-3 text-[11px] font-black text-slate-900">Rs {event.amount.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest ${TAG_STYLES[event.stressTag]}`}>
                    {event.stressTag}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BehavioralTransactions;
