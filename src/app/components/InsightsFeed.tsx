import { TrendingUp, Leaf, BarChart3, ShieldCheck } from 'lucide-react';

const insights = [
  {
    icon: TrendingUp,
    title: 'Real Estate Stability',
    description: 'Real Estate remains steady despite interest rate shifts. Your residential holdings provided a 4% yield this quarter.',
    time: '2 hours ago',
    color: '#3B82F6',
  },
  {
    icon: Leaf,
    title: 'New Opportunity',
    description: 'A sustainable energy fund has been added to our vetted list. It aligns with your "Green Growth" preference.',
    time: '5 hours ago',
    color: '#10B981',
  },
  {
    icon: BarChart3,
    title: 'Market Update',
    description: 'Private credit markets are seeing increased demand. This strengthens your projected annual returns by 0.5%.',
    time: '1 day ago',
    color: '#8B5CF6',
  },
  {
    icon: ShieldCheck,
    title: 'Security Check',
    description: 'All quarterly audits for your Venture Capital holdings are now complete and verified.',
    time: '2 days ago',
    color: '#0F172A',
  },
];

export function InsightsFeed() {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 h-full">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-[#0F172A] mb-2">
          Market Insights for You
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          Complex market events translated into simple actions
        </p>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div 
              key={index} 
              className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
            >
              <div className="flex gap-3">
                <div 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${insight.color}15` }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: insight.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#0F172A]">
                      {insight.title}
                    </h3>
                    <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                      {insight.time}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 sm:mt-6 py-2.5 text-xs sm:text-sm font-medium text-[#3B82F6] hover:bg-blue-50 rounded-lg transition-colors">
        View All Insights
      </button>
    </div>
  );
}