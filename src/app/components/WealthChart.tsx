import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { year: '2024', current: 380000, projected: 380000 },
  { year: '2025', current: 428150, projected: 428150 },
  { year: '2026', current: null, projected: 475000 },
  { year: '2027', current: null, projected: 525000 },
  { year: '2028', current: null, projected: 580000 },
];

export function WealthChart() {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-[#0F172A] mb-2">
          Your Path to Financial Stability
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          Long-term asset growth projection based on your current portfolio mix
        </p>
      </div>
      
      <ResponsiveContainer width="100%" height={300} className="sm:h-[350px]">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0F172A" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#0F172A" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis 
            dataKey="year" 
            stroke="#9CA3AF"
            style={{ fontSize: '12px' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#9CA3AF"
            style={{ fontSize: '12px' }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value: any) => [`$${value.toLocaleString()}`, '']}
            labelStyle={{ color: '#0F172A', fontWeight: 600 }}
          />
          <Legend 
            verticalAlign="top" 
            height={36}
            iconType="line"
            formatter={(value) => value === 'current' ? 'Current Holdings' : 'Projected Growth'}
          />
          <Area 
            type="monotone" 
            dataKey="current" 
            stroke="#0F172A" 
            strokeWidth={3}
            fill="url(#colorCurrent)" 
            connectNulls={false}
          />
          <Area 
            type="monotone" 
            dataKey="projected" 
            stroke="#10B981" 
            strokeWidth={3}
            strokeDasharray="5 5"
            fill="url(#colorProjected)" 
            connectNulls={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}