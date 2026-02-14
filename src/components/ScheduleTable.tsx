import * as React from 'react';
import { useState } from 'react';
import { formatCurrency, type AmortizationEntry } from '../utils/calculations';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ScheduleTableProps {
  schedule: AmortizationEntry[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedule }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayCount = isExpanded ? schedule.length : 12;

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-lg overflow-hidden">
      <div className="p-6 border-b border-slate-700 flex justify-between items-center">
        <h3 className="text-white font-semibold">Amortization Schedule</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm transition-colors"
        >
          {isExpanded ? (
            <>Show Less <ChevronUp size={16} /></>
          ) : (
            <>Show All <ChevronDown size={16} /></>
          )}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-900 border-b border-slate-700">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Month</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Principal Paid</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Interest Paid</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Remaining Balance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {schedule.slice(0, displayCount).map((row) => (
              <tr key={row.month} className="hover:bg-slate-700/50 transition-colors">
                <td className="px-6 py-4 text-sm text-slate-300">Month {row.month}</td>
                <td className="px-6 py-4 text-sm text-emerald-400 font-medium">{formatCurrency(row.principalPaid)}</td>
                <td className="px-6 py-4 text-sm text-amber-400 font-medium">{formatCurrency(row.interestPaid)}</td>
                <td className="px-6 py-4 text-sm text-white font-bold">{formatCurrency(row.remainingBalance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!isExpanded && schedule.length > 12 && (
        <div className="p-4 bg-slate-900/50 text-center text-slate-500 text-sm">
          Showing first 12 months only
        </div>
      )}
    </div>
  );
};

export default ScheduleTable;
