
import React, { useState, useEffect } from 'react';
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
  BarChart3,
  Zap,
  Star,
  Award,
  Target,
  Users,
  Calendar,
  Trophy,
  Flame,
  Bell
} from 'lucide-react';

const CreatorDashboard = () => {
  const [streak, setStreak] = useState(7);
  const [hasSpunToday, setHasSpunToday] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rewardAmount, setRewardAmount] = useState('');
  const [showReward, setShowReward] = useState(false);
  const [notifications, setNotifications] = useState(3);

  const handleDailySpin = () => {
    if (!hasSpunToday && !isSpinning) {
      setIsSpinning(true);
      
      setTimeout(() => {
        const rewards = ['$5', '$10', '$2', '100 points', '$15', '$25', '$8'];
        const reward = rewards[Math.floor(Math.random() * rewards.length)];
        setRewardAmount(reward);
        setShowReward(true);
        setHasSpunToday(true);
        setIsSpinning(false);
        
        setTimeout(() => setShowReward(false), 3000);
      }, 2000);
    }
  };

  const recentActivity = [
    { action: 'Sale', product: 'Vintage Jacket', amount: '$45', time: '2 min ago', type: 'success' },
    { action: 'View', product: 'Designer Sneakers', amount: '+2.1K', time: '15 min ago', type: 'info' },
    { action: 'Like', product: 'Summer Dress', amount: '+156', time: '1 hour ago', type: 'heart' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-4">
      {/* Enhanced Reward Animation Overlay */}
      {showReward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-10 text-center animate-scale-in shadow-2xl border-4 border-yellow-300">
            <div className="text-8xl mb-6 animate-bounce">🎉</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Congratulations!</h3>
            <p className="text-5xl font-black text-green-600 mb-6 animate-pulse">{rewardAmount}</p>
            <p className="text-gray-600 text-lg">Added to your earnings!</p>
            <div className="mt-4 flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 animate-pulse" size={20} style={{animationDelay: `${i * 200}ms`}} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="animate-slide-in-left">
          <div className="flex items-center space-x-3 mb-3">
            <h1 className="text-4xl font-black text-gray-900">Creator Hub</h1>
            <Button size="sm" variant="outline" className="relative">
              <Bell size={16} />
              {notifications > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {notifications}
                </div>
              )}
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold px-4 py-2">
              <Crown size={16} className="mr-2" />
              Gold Tier Creator
            </Badge>
            <div className="flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
              <Flame size={16} className="mr-2" />
              <span className="font-semibold">{streak} day streak</span>
            </div>
            <div className="flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
              <Trophy size={16} className="mr-2" />
              <span className="font-semibold">Top 15%</span>
            </div>
          </div>
        </div>
        <Button 
          onClick={handleDailySpin}
          disabled={hasSpunToday || isSpinning}
          className={`${
            hasSpunToday 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 hover:scale-105 hover:shadow-xl'
          } text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 animate-slide-in-right shadow-lg`}
        >
          <Gift size={20} className={`mr-3 ${isSpinning ? 'animate-spin' : ''}`} />
          {isSpinning ? 'Spinning...' : hasSpunToday ? 'Spun Today!' : 'Daily Spin Reward'}
        </Button>
      </div>

      {/* Enhanced Stats Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white transform hover:scale-105 transition-all duration-300 animate-slide-in-up shadow-xl hover:shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-white/20 rounded-xl">
                <DollarSign size={28} className="text-white" />
              </div>
              <TrendingUp size={20} className="text-green-200" />
            </div>
            <div>
              <p className="text-green-100 text-sm font-medium">Total Earnings</p>
              <p className="text-3xl font-black mb-1">$2,847</p>
              <p className="text-green-200 text-xs flex items-center">
                <TrendingUp size={12} className="mr-1" />
                +18% vs last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white transform hover:scale-105 transition-all duration-300 animate-slide-in-up animation-delay-200 shadow-xl hover:shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-white/20 rounded-xl">
                <Calendar size={28} className="text-white" />
              </div>
              <Target size={20} className="text-blue-200" />
            </div>
            <div>
              <p className="text-blue-100 text-sm font-medium">This Month</p>
              <p className="text-3xl font-black mb-1">$456</p>
              <p className="text-blue-200 text-xs flex items-center">
                <Target size={12} className="mr-1" />
                84% of $540 goal
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white transform hover:scale-105 transition-all duration-300 animate-slide-in-up animation-delay-400 shadow-xl hover:shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-white/20 rounded-xl">
                <Eye size={28} className="text-white" />
              </div>
              <Users size={20} className="text-purple-200" />
            </div>
            <div>
              <p className="text-purple-100 text-sm font-medium">Total Views</p>
              <p className="text-3xl font-black mb-1">45.2K</p>
              <p className="text-purple-200 text-xs flex items-center">
                <Eye size={12} className="mr-1" />
                +2.1K today
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white transform hover:scale-105 transition-all duration-300 animate-slide-in-up animation-delay-600 shadow-xl hover:shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 bg-white/20 rounded-xl">
                <Heart size={28} className="text-white" />
              </div>
              <Zap size={20} className="text-pink-200" />
            </div>
            <div>
              <p className="text-pink-100 text-sm font-medium">Engagement</p>
              <p className="text-3xl font-black mb-1">8.9%</p>
              <p className="text-pink-200 text-xs flex items-center">
                <Heart size={12} className="mr-1" />
                Above average
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Enhanced Progress Card */}
        <div className="lg:col-span-2">
          <Card className="animate-slide-in-up animation-delay-800 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Award className="mr-3 text-purple-600" size={24} />
                Progress to Diamond Tier
                <Badge className="ml-3 bg-purple-100 text-purple-800">75% Complete</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Current: Gold Tier</span>
                  <span className="text-sm font-medium text-purple-600">Next: Diamond Tier</span>
                </div>
                <div className="relative">
                  <Progress value={75} className="h-6 bg-gradient-to-r from-purple-200 to-pink-200" />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    $2,847 / $3,500
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">75% complete</span>
                  <span className="font-semibold text-purple-600">$653 more needed</span>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <p className="text-sm text-purple-800 font-bold mb-3 flex items-center">
                    <Crown size={16} className="mr-2" />
                    Diamond Tier Benefits:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-purple-700">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      15% higher commission rates
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      Early access to new products
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      Monthly bonus rewards
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      Priority customer support
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Card */}
        <Card className="animate-slide-in-up animation-delay-1000 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center">
              <Zap className="mr-2 text-yellow-600" size={20} />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-100 text-green-600' :
                    activity.type === 'info' ? 'bg-blue-100 text-blue-600' :
                    'bg-pink-100 text-pink-600'
                  }`}>
                    {activity.type === 'success' ? <DollarSign size={16} /> :
                     activity.type === 'info' ? <Eye size={16} /> :
                     <Heart size={16} />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">{activity.amount}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in-up animation-delay-1000">
        <Button className="h-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white justify-start transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-2xl">
          <div className="p-3 bg-white/20 rounded-xl mr-4">
            <Upload size={28} />
          </div>
          <div className="text-left">
            <p className="font-bold text-lg">Upload Product</p>
            <p className="text-sm text-purple-100">Share your latest finds</p>
          </div>
        </Button>

        <Button className="h-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-600 text-white justify-start transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-2xl">
          <div className="p-3 bg-white/20 rounded-xl mr-4">
            <Link2 size={28} />
          </div>
          <div className="text-left">
            <p className="font-bold text-lg">Generate Links</p>
            <p className="text-sm text-blue-100">Create earning opportunities</p>
          </div>
        </Button>

        <Button className="h-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white justify-start transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-2xl">
          <div className="p-3 bg-white/20 rounded-xl mr-4">
            <BarChart3 size={28} />
          </div>
          <div className="text-left">
            <p className="font-bold text-lg">View Analytics</p>
            <p className="text-sm text-green-100">Track performance metrics</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default CreatorDashboard;
