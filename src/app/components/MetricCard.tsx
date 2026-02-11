interface MetricCardProps {
  title: string;
  value: string;
  subtext: string;
  change?: string;
  type?: 'default' | 'positive' | 'secure';
}

export function MetricCard({ title, value, subtext, change, type = 'default' }: MetricCardProps) {
  const getAccentColor = () => {
    switch (type) {
      case 'positive':
        return 'text-[#10B981]';
      case 'secure':
        return 'text-[#3B82F6]';
      default:
        return 'text-[#0F172A]';
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <h3 className="text-xs sm:text-sm font-medium text-gray-600">{title}</h3>
        {change && (
          <span className={`text-xs sm:text-sm font-semibold ${getAccentColor()}`}>
            {change}
          </span>
        )}
      </div>
      <p className={`text-2xl sm:text-3xl font-semibold ${getAccentColor()} mb-1 sm:mb-2`}>
        {value}
      </p>
      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{subtext}</p>
    </div>
  );
}