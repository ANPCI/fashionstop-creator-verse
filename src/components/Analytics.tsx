
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  TrendingUp,
  Eye,
  MousePointer,
  DollarSign,
  Users,
  Calendar,
  Target,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Star,
  Heart,
  Share2,
  Download
} from 'lucide-react';

interface AnalyticsProps {
  onBack: () => void;
}

const Analytics = ({ onBack }: AnalyticsProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const performanceData = [
    { 
      name: 'Vintage Leather Jacket', 
      views: 2840, 
      clicks: 156, 
      conversions: 23, 
      earnings: '$299',
      ctr: '5.5%',
      conversionRate: '14.7%',
      trend: '+12%'
    },
    { 
      name: 'Designer Sneakers', 
      views: 1920, 
      clicks: 89, 
      conversions: 12, 
      earnings: '$144',
      ctr: '4.6%',
      conversionRate: '13.5%',
      trend: '+8%'
    },
    { 
      name: 'Silk Summer Dress', 
      views: 1560, 
      clicks: 94, 
      conversions: 18, 
      earnings: '$216',
      ctr: '6.0%',
      conversionRate: '19.1%',
      trend: '+25%'
    }
  ];

  const audienceInsights = [
    { age: '18-24', percentage: 35, color: 'bg-purple-500', growth: '+5%' },
    { age: '25-34', percentage: 42, color: 'bg-pink-500', growth: '+12%' },
    { age: '35-44', percentage: 18, color: 'bg-blue-500', growth: '-2%' },
    { age: '45+', percentage: 5, color: 'bg-gray-500', growth: '+3%' }
  ];

  const timeFrames = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'quarter', label: 'This Quarter' },
    { id: 'year', label: 'This Year' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      {/* Enhanced Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Button variant="ghost" onClick={onBack} className="mr-4 hover:bg-white/50">
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600">Track your performance and insights</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex bg-white rounded-lg p-1 shadow-md">
            {timeFrames.map((frame) => (
              <Button
                key={frame.id}
                size="sm"
                variant={selectedPeriod === frame.id ? "default" : "ghost"}
                onClick={() => setSelectedPeriod(frame.id)}
                className={selectedPeriod === frame.id ? "bg-purple-600 text-white" : ""}
              >
                {frame.label}
              </Button>
            ))}
          </div>
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <Download size={16} className="mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Enhanced Key Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white/20 rounded-xl">
                <Eye size={28} className="text-white" />
              </div>
              <Badge className="bg-white/20 text-white">+12%</Badge>
            </div>
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Views</p>
              <p className="text-3xl font-black mb-1">45.2K</p>
              <p className="text-blue-200 text-xs flex items-center">
                <TrendingUp size={12} className="mr-1" />
                vs last {selectedPeriod}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white/20 rounded-xl">
                <MousePointer size={28} className="text-white" />
              </div>
              <Badge className="bg-white/20 text-white">+2.1%</Badge>
            </div>
            <div>
              <p className="text-green-100 text-sm font-medium">Click Rate</p>
              <p className="text-3xl font-black mb-1">8.9%</p>
              <p className="text-green-200 text-xs flex items-center">
                <MousePointer size={12} className="mr-1" />
                Industry avg: 6.2%
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white/20 rounded-xl">
                <Target size={28} className="text-white" />
              </div>
              <Badge className="bg-white/20 text-white">+0.8%</Badge>
            </div>
            <div>
              <p className="text-purple-100 text-sm font-medium">Conversion</p>
              <p className="text-3xl font-black mb-1">3.4%</p>
              <p className="text-purple-200 text-xs flex items-center">
                <Target size={12} className="mr-1" />
                Above average
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white/20 rounded-xl">
                <DollarSign size={28} className="text-white" />
              </div>
              <Badge className="bg-white/20 text-white">+18%</Badge>
            </div>
            <div>
              <p className="text-pink-100 text-sm font-medium">Revenue</p>
              <p className="text-3xl font-black mb-1">$2.8K</p>
              <p className="text-pink-200 text-xs flex items-center">
                <DollarSign size={12} className="mr-1" />
                This {selectedPeriod}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Enhanced Top Performing Products */}
        <div className="lg:col-span-2">
          <Card className="shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <TrendingUp className="mr-3 text-green-600" size={24} />
                Top Performing Products
                <Badge className="ml-3 bg-green-100 text-green-800">Live Data</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {performanceData.map((product, index) => (
                  <div key={index} className="p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
                      <Badge className={`${
                        product.trend.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {product.trend}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Eye size={20} className="mx-auto mb-1 text-blue-600" />
                        <p className="font-bold text-lg">{product.views.toLocaleString()}</p>
                        <p className="text-gray-600">Views</p>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <MousePointer size={20} className="mx-auto mb-1 text-purple-600" />
                        <p className="font-bold text-lg">{product.clicks}</p>
                        <p className="text-gray-600">Clicks ({product.ctr})</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <Target size={20} className="mx-auto mb-1 text-green-600" />
                        <p className="font-bold text-lg">{product.conversions}</p>
                        <p className="text-gray-600">Sales ({product.conversionRate})</p>
                      </div>
                      <div className="text-center p-3 bg-pink-50 rounded-lg">
                        <DollarSign size={20} className="mx-auto mb-1 text-pink-600" />
                        <p className="font-bold text-lg text-green-600">{product.earnings}</p>
                        <p className="text-gray-600">Earned</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Audience Insights */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Users className="mr-3 text-purple-600" size={24} />
              Audience Demographics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {audienceInsights.map((segment, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-700">{segment.age} years</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{segment.percentage}%</span>
                      <Badge className={`text-xs ${
                        segment.growth.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {segment.growth}
                      </Badge>
                    </div>
                  </div>
                  <div className="relative">
                    <Progress value={segment.percentage} className="h-3" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" 
                         style={{width: `${segment.percentage}%`}} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <h4 className="font-bold text-sm text-gray-800 mb-3 flex items-center">
                <Activity size={16} className="mr-2" />
                Engagement Metrics
              </h4>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <Heart size={16} className="mx-auto mb-1 text-pink-500" />
                  <p className="text-xs font-bold">4.2K</p>
                  <p className="text-xs text-gray-600">Likes</p>
                </div>
                <div>
                  <Share2 size={16} className="mx-auto mb-1 text-blue-500" />
                  <p className="text-xs font-bold">892</p>
                  <p className="text-xs text-gray-600">Shares</p>
                </div>
                <div>
                  <Star size={16} className="mx-auto mb-1 text-yellow-500" />
                  <p className="text-xs font-bold">4.8</p>
                  <p className="text-xs text-gray-600">Rating</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <BarChart3 className="mr-3 text-blue-600" size={24} />
              Performance Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-bold text-blue-900">Best Performing Day</p>
                  <p className="text-sm text-blue-700">Saturday</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-900">+45%</p>
                  <p className="text-sm text-blue-700">above average</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <p className="font-bold text-green-900">Peak Hours</p>
                  <p className="text-sm text-green-700">7-9 PM</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-900">3.2x</p>
                  <p className="text-sm text-green-700">higher engagement</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <PieChart className="mr-3 text-pink-600" size={24} />
              Revenue Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Direct Sales</span>
                </div>
                <div className="text-right">
                  <span className="font-bold">$1,680</span>
                  <span className="text-sm text-gray-500 ml-2">60%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Affiliate Links</span>
                </div>
                <div className="text-right">
                  <span className="font-bold">$840</span>
                  <span className="text-sm text-gray-500 ml-2">30%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Bonuses</span>
                </div>
                <div className="text-right">
                  <span className="font-bold">$280</span>
                  <span className="text-sm text-gray-500 ml-2">10%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
