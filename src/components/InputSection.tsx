import * as React from 'react';
import { DollarSign, Percent, Calendar } from 'lucide-react';

interface InputSectionProps {
  principal: number;
  setPrincipal: (v: number) => void;
  interestRate: number;
  setInterestRate: (v: number) => void;
  tenure: number;
  setTenure: (v: number) => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  principal, setPrincipal,
  interestRate, setInterestRate,
  tenure, setTenure
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
        <label className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-3">
          <DollarSign size={16} className="text-blue-400" />
          Loan Amount
        </label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />
        <input
          type="range"
          min="100000"
          max="10000000"
          step="50000"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          className="w-full mt-4 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
        <label className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-3">
          <Percent size={16} className="text-emerald-400" />
          Interest Rate (% p.a.)
        </label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
        />
        <input
          type="range"
          min="1"
          max="20"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full mt-4 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
      </div>

      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
        <label className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-3">
          <Calendar size={16} className="text-purple-400" />
          Tenure (Years)
        </label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all"
        />
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          className="w-full mt-4 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
        />
      </div>
    </div>
  );
};

export default InputSection;
