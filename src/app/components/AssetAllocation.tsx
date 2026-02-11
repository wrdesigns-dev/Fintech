import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Private Equity', description: 'Innovative Startups', value: 35, color: '#0F172A' },
  { name: 'Real Estate', description: 'Residential & Commercial Property', value: 25, color: '#3B82F6' },
  { name: 'Private Credit', description: 'Direct Business Lending', value: 20, color: '#10B981' },
  { name: 'Venture Capital', description: 'Early-Stage Tech', value: 20, color: '#8B5CF6' },
];

export function AssetAllocation() {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-[#0F172A] mb-2">
          Asset Allocation
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          Your diversified alternative asset portfolio
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
        {/* Pie Chart */}
        <div className="w-full lg:w-1/2">
          <ResponsiveContainer width="100%" height={280} className="sm:h-[300px]">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }}
                formatter={(value: any) => [`${value}%`, 'Allocation']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-start gap-3">
              <div 
                className="w-4 h-4 rounded-full mt-1 flex-shrink-0" 
                style={{ backgroundColor: item.color }}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs sm:text-sm font-semibold text-[#0F172A]">{item.name}</p>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">{item.value}%</span>
                </div>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}