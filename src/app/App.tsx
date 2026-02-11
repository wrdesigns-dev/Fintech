import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { MetricCard } from './components/MetricCard';
import { WealthChart } from './components/WealthChart';
import { AssetAllocation } from './components/AssetAllocation';
import { InsightsFeed } from './components/InsightsFeed';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        {/* Mobile Header with Hamburger */}
        <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-lg font-semibold text-[#0F172A]">Luminis</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        <div className="max-w-[1800px] mx-auto p-4 sm:p-6 lg:p-8">
          {/* Welcome Message */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-xl sm:text-2xl font-semibold text-[#0F172A] mb-2">
              Welcome back, John
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Your portfolio is currently optimized for stability.
            </p>
          </div>

          {/* Layout Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Left/Center Column - Main Content */}
            <div className="xl:col-span-2 space-y-6 lg:space-y-8">
              {/* Top Metric Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                <MetricCard
                  title="Total Wealth Growth"
                  value="$428,150.00"
                  change="+12.4%"
                  subtext="vs last year. You are on track for your 5-year goal."
                  type="positive"
                />
                <MetricCard
                  title="Projected Annual Returns"
                  value="8.2% Est."
                  subtext="Based on your current diversified alternative asset mix."
                  type="default"
                />
                <MetricCard
                  title="Portfolio Security Health"
                  value="Strong"
                  subtext="98% of your assets are in verified, institutional-grade funds."
                  type="secure"
                />
              </div>

              {/* Primary Visualization */}
              <WealthChart />

              {/* Asset Allocation */}
              <AssetAllocation />
            </div>

            {/* Right Column - Insights Feed */}
            <div className="xl:col-span-1">
              <InsightsFeed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}