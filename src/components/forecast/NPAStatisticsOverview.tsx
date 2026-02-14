import { useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type NPADataPoint = {
  year: string;
  netNpa: number;
  grossNpa: number;
  pcr: number;
  car: number;
};

const npaData: NPADataPoint[] = [
  { year: '2019-20', netNpa: 2.2, grossNpa: 7.5, pcr: 65, car: 12.5 },
  { year: '2020-21', netNpa: 1.5, grossNpa: 4.9, pcr: 68, car: 13.0 },
  { year: '2021-22', netNpa: 1.02, grossNpa: 4.2, pcr: 70, car: 13.3 },
  { year: '2022-23', netNpa: 0.67, grossNpa: 3.1, pcr: 72, car: 13.6 },
  { year: '2023-24', netNpa: 0.57, grossNpa: 2.6, pcr: 74, car: 14.0 },
  { year: '2024-25', netNpa: 0.47, grossNpa: 2.3, pcr: 75, car: 14.2 },
];

const years = npaData.map((d) => d.year);

const NPAStatisticsOverview = () => {
  // Allow a year-range focus without losing the full-series context.
  const [fromYear, setFromYear] = useState(years[0]);
  const [toYear, setToYear] = useState(years[years.length - 1]);

  const filteredData = useMemo(() => {
    const fromIndex = years.indexOf(fromYear);
    const toIndex = years.indexOf(toYear);

    if (fromIndex <= toIndex) {
      return npaData.slice(fromIndex, toIndex + 1);
    }

    return npaData.slice(toIndex, fromIndex + 1);
  }, [fromYear, toYear]);

  return (
    <section className="mb-12">
      <div className="bg-white border border-slate-100 rounded-[2.25rem] shadow-sm p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              NPA Statistics Overview
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">
              Net NPA, Gross NPA, Provision Coverage Ratio and Capital Adequacy Trend
            </p>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              From
            </label>
            <select
              value={fromYear}
              onChange={(e) => setFromYear(e.target.value)}
              className="h-10 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white outline-none focus:ring-2 focus:ring-blue-100"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              To
            </label>
            <select
              value={toYear}
              onChange={(e) => setToYear(e.target.value)}
              className="h-10 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white outline-none focus:ring-2 focus:ring-blue-100"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Top comparative chart: Net NPA vs Gross NPA */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 mb-8">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-4">
            Comparative Net + Gross NPA
          </h3>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis
                  dataKey="year"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
                  label={{ value: 'Financial Year', position: 'insideBottom', offset: -4 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
                  label={{ value: 'NPA (%)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip
                  formatter={(value: number, name: string) => [`${value.toFixed(2)}%`, name]}
                  contentStyle={{
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="netNpa"
                  name="Net NPA %"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="grossNpa"
                  name="Gross NPA %"
                  stroke="#ef4444"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom charts: PCR and CAR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-4">
              PCR Trend
            </h3>
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={filteredData}>
                  <defs>
                    <linearGradient id="pcrGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.04} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
                    label={{ value: 'Financial Year', position: 'insideBottom', offset: -4 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
                    label={{ value: 'PCR (%)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip
                    formatter={(value: number) => [`${value.toFixed(0)}%`, 'PCR']}
                    contentStyle={{
                      borderRadius: '14px',
                      border: '1px solid #e2e8f0',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="pcr"
                    name="Provision Coverage Ratio (PCR)"
                    stroke="#0f766e"
                    strokeWidth={2.5}
                    fill="url(#pcrGradient)"
                    dot={{ r: 3 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-4">
              CAR Trend
            </h3>
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
                    label={{ value: 'Financial Year', position: 'insideBottom', offset: -4 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
                    label={{ value: 'CAR (%)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip
                    formatter={(value: number) => [`${value.toFixed(1)}%`, 'CAR']}
                    contentStyle={{
                      borderRadius: '14px',
                      border: '1px solid #e2e8f0',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="car"
                    name="Capital Adequacy Ratio (CAR)"
                    fill="#7c3aed"
                    radius={[8, 8, 0, 0]}
                    barSize={34}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NPAStatisticsOverview;
