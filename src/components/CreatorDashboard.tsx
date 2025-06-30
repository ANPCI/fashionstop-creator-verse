
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  Eye, 
  Heart, 
  Gift, 
  Crown,
  Upload,
  Link2,
  BarChart3
} from 'lucide-react';

const CreatorDashboard = () => {
  const [streak, setStreak] = useState(7);
  const [hasSpunToday, setHasSpunToday] = useState(false);

  const handleDailySpin = () => {
    if (!hasSpunToday) {
      setHasSpunToday(true);
      // Animate spin reward
      const rewards = ['$5', '$10', '$2', '100 points', '$15'];
      const reward = rewards[Math.floor(Math.random() * rewards.length)];
      alert(`🎉 You won ${reward}!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Creator Hub</h1>
          <div className="flex items-center space-x-2 mt-1">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Crown size={12} className="mr-1" />
              Gold Tier
            </Badge>
            <span className="text-sm text-gray-600">🔥 {streak} day streak</span>
          </div>
        </div>
        <Button 
          onClick={handleDailySpin}
          disabled={hasSpunToday}
          className={`${hasSpunToday ? 'bg-gray-400' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'} text-white`}
        >
          <Gift size={16} className="mr-2" />
          {hasSpunToday ? 'Spun Today!' : 'Daily Spin'}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Total Earnings</p>
                <p className="text-2xl font-bold">$2,847</p>
              </div>
              <DollarSign size={24} className="text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">This Month</p>
                <p className="text-2xl font-bold">$456</p>
              </div>
              <TrendingUp size={24} className="text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Total Views</p>
                <p className="text-2xl font-bold">45.2K</p>
              </div>
              <Eye size={24} className="text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm">Engagement</p>
                <p className="text-2xl font-bold">8.9%</p>
              </div>
              <Heart size={24} className="text-pink-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress to Next Tier */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Progress to Diamond Tier</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={75} className="h-3" />
            <p className="text-sm text-gray-600">75% complete • $650 more in earnings needed</p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4">
        <Button className="h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white justify-start">
          <Upload size={20} className="mr-3" />
          <div className="text-left">
            <p className="font-medium">Upload New Product</p>
            <p className="text-xs text-purple-100">Share your latest finds</p>
          </div>
        </Button>

        <Button className="h-14 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white justify-start">
          <Link2 size={20} className="mr-3" />
          <div className="text-left">
            <p className="font-medium">Generate Affiliate Links</p>
            <p className="text-xs text-blue-100">Create earning opportunities</p>
          </div>
        </Button>

        <Button className="h-14 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white justify-start">
          <BarChart3 size={20} className="mr-3" />
          <div className="text-left">
            <p className="font-medium">View Analytics</p>
            <p className="text-xs text-green-100">Track your performance</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default CreatorDashboard;
