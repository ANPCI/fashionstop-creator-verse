
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft,
  TrendingUp,
  Eye,
  MousePointer,
  DollarSign,
  Users,
  Calendar,
  Target
} from 'lucide-react';

interface AnalyticsProps {
  onBack: () => void;
}

const Analytics = ({ onBack }: AnalyticsProps) => {
  const performanceData = [
    { name: 'Vintage Leather Jacket', views: 2840, clicks: 156, conversions: 23, earnings: '$299' },
    { name: 'Designer Sneakers', views: 1920, clicks: 89, conversions: 12, earnings: '$144' },
    { name: 'Silk Summer Dress', views: 1560, clicks: 94, conversions: 18, earnings: '$216' }
  ];

  const audienceInsights = [
    { age: '18-24', percentage: 35, color: 'bg-purple-500' },
    { age: '25-34', percentage: 42, color: 'bg-pink-500' },
    { age: '35-44', percentage: 18, color: 'bg-blue-500' },
    { age: '45+', percentage: 5, color: 'bg-gray-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-3">
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Views</p>
                <p className="text-2xl font-bold">45.2K</p>
                <p className="text-blue-200 text-xs">+12% vs last month</p>
              </div>
              <Eye size={24} className="text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Click Rate</p>
                <p className="text-2xl font-bold">8.9%</p>
                <p className="text-green-200 text-xs">+2.1% vs last month</p>
              </div>
              <MousePointer size={24} className="text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Conversion</p>
                <p className="text-2xl font-bold">3.4%</p>
                <p className="text-purple-200 text-xs">+0.8% vs last month</p>
              </div>
              <Target size={24} className="text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm">Revenue</p>
                <p className="text-2xl font-bold">$2.8K</p>
                <p className="text-pink-200 text-xs">+18% vs last month</p>
              </div>
              <DollarSign size={24} className="text-pink-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Products */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <TrendingUp className="mr-2 text-green-600" size={20} />
            Top Performing Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {performanceData.map((product, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-3">{product.name}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Views: <span className="font-medium">{product.views.toLocaleString()}</span></p>
                    <p className="text-gray-600">Clicks: <span className="font-medium">{product.clicks}</span></p>
                  </div>
                  <div>
                    <p className="text-gray-600">Sales: <span className="font-medium">{product.conversions}</span></p>
                    <p className="text-green-600 font-medium">Earned: {product.earnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audience Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Users className="mr-2 text-purple-600" size={20} />
            Audience Demographics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {audienceInsights.map((segment, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{segment.age} years</span>
                <div className="flex items-center space-x-3 flex-1 ml-4">
                  <Progress value={segment.percentage} className="flex-1" />
                  <span className="text-sm text-gray-600 w-10">{segment.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
