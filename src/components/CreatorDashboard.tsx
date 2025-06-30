
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
  Target
} from 'lucide-react';

const CreatorDashboard = () => {
  const [streak, setStreak] = useState(7);
  const [hasSpunToday, setHasSpunToday] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rewardAmount, setRewardAmount] = useState('');
  const [showReward, setShowReward] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-4">
      {/* Reward Animation Overlay */}
      {showReward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 text-center animate-scale-in shadow-2xl">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Congratulations!</h3>
            <p className="text-4xl font-black text-green-600 mb-4">{rewardAmount}</p>
            <p className="text-gray-600">Added to your earnings!</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="animate-slide-in-left">
          <h1 className="text-3xl font-black text-gray-900 mb-2">Creator Hub</h1>
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold px-3 py-1">
              <Crown size={14} className="mr-1" />
              Gold Tier
            </Badge>
            <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
              <Zap size={14} className="mr-1" />
              <span className="font-semibold">{streak} day streak</span>
            </div>
          </div>
        </div>
        <Button 
          onClick={handleDailySpin}
          disabled={hasSpunToday || isSpinning}
          className={`${
            hasSpunToday 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 hover:scale-105 hover:shadow-lg'
          } text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 animate-slide-in-right`}
        >
          <Gift size={18} className={`mr-2 ${isSpinning ? 'animate-spin' : ''}`} />
          {isSpinning ? 'Spinning...' : hasSpunToday ? 'Spun Today!' : 'Daily Spin'}
        </Button>
      </div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white transform hover:scale-105 transition-all duration-300 animate-slide-in-up">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Total Earnings</p>
                <p className="text-3xl font-black">$2,847</p>
                <p className="text-green-200 text-xs flex items-center mt-1">
                  <TrendingUp size={12} className="mr-1" />
                  +18% this month
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-full">
                <DollarSign size={28} className="text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white transform hover:scale-105 transition-all duration-300 animate-slide-in-up animation-delay-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">This Month</p>
                <p className="text-3xl font-black">$456</p>
                <p className="text-blue-200 text-xs flex items-center mt-1">
                  <Target size={12} className="mr-1" />
                  84% of goal
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-full">
                <TrendingUp size={28} className="text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white transform hover:scale-105 transition-all duration-300 animate-slide-in-up animation-delay-400">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Total Views</p>
                <p className="text-3xl font-black">45.2K</p>
                <p className="text-purple-200 text-xs flex items-center mt-1">
                  <Eye size={12} className="mr-1" />
                  +2.1K today
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-full">
                <Eye size={28} className="text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white transform hover:scale-105 transition-all duration-300 animate-slide-in-up animation-delay-600">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm font-medium">Engagement</p>
                <p className="text-3xl font-black">8.9%</p>
                <p className="text-pink-200 text-xs flex items-center mt-1">
                  <Heart size={12} className="mr-1" />
                  Above average
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-full">
                <Heart size={28} className="text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Progress Card */}
      <Card className="mb-8 animate-slide-in-up animation-delay-800 hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center">
            <Award className="mr-3 text-purple-600" size={24} />
            Progress to Diamond Tier
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Current: Gold Tier</span>
              <span className="text-sm font-medium text-purple-600">Next: Diamond Tier</span>
            </div>
            <Progress value={75} className="h-4 bg-gradient-to-r from-purple-200 to-pink-200" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">75% complete</span>
              <span className="font-semibold text-purple-600">$650 more needed</span>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-purple-800 font-medium">🎯 Diamond Tier Benefits:</p>
              <ul className="text-xs text-purple-700 mt-2 space-y-1">
                <li>• 15% higher commission rates</li>
                <li>• Early access to new products</li>
                <li>• Monthly bonus rewards</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Quick Actions */}
      <div className="grid grid-cols-1 gap-4 animate-slide-in-up animation-delay-1000">
        <Button className="h-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white justify-start transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          <div className="p-2 bg-white/20 rounded-lg mr-4">
            <Upload size={24} />
          </div>
          <div className="text-left">
            <p className="font-bold text-lg">Upload New Product</p>
            <p className="text-sm text-purple-100">Share your latest fashion finds</p>
          </div>
        </Button>

        <Button className="h-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-600 text-white justify-start transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          <div className="p-2 bg-white/20 rounded-lg mr-4">
            <Link2 size={24} />
          </div>
          <div className="text-left">
            <p className="font-bold text-lg">Generate Affiliate Links</p>
            <p className="text-sm text-blue-100">Create earning opportunities</p>
          </div>
        </Button>

        <Button className="h-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white justify-start transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          <div className="p-2 bg-white/20 rounded-lg mr-4">
            <BarChart3 size={24} />
          </div>
          <div className="text-left">
            <p className="font-bold text-lg">View Analytics</p>
            <p className="text-sm text-green-100">Track your performance metrics</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default CreatorDashboard;
