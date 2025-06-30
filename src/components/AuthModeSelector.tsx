
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, ShoppingBag, Sparkles, TrendingUp, Users, Star, Zap } from 'lucide-react';

interface AuthModeSelectorProps {
  onModeSelect: (mode: 'creator' | 'shopper') => void;
}

const AuthModeSelector = ({ onModeSelect }: AuthModeSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-1000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="text-center text-white mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-yellow-400 mr-3 animate-pulse" size={36} />
            <h1 className="text-6xl font-black bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
              FashionStop
            </h1>
            <Sparkles className="text-yellow-400 ml-3 animate-pulse animation-delay-200" size={36} />
          </div>
          <p className="text-xl text-purple-200 font-medium mb-4">Your style, your story, your success</p>
          <div className="flex justify-center items-center space-x-6 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users size={16} className="mr-2 text-green-400" />
              <span>50K+ creators</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star size={16} className="mr-2 text-yellow-400" />
              <span>4.9★ rated</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card className="overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group animate-slide-in-left bg-white/95 backdrop-blur-sm">
            <CardContent className="p-0">
              <Button 
                onClick={() => onModeSelect('creator')}
                className="w-full h-32 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-800 text-white border-0 rounded-xl relative overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="flex items-center space-x-6 relative z-10">
                  <div className="p-4 bg-yellow-400 rounded-full group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <Crown size={36} className="text-purple-900" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">Creator Mode</h3>
                    <p className="text-purple-200 text-sm flex items-center mb-1">
                      <TrendingUp size={16} className="mr-2" />
                      Earn & influence the fashion world
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-purple-300">
                      <span>• Commission up to 25%</span>
                      <span>• Daily rewards</span>
                    </div>
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 group animate-slide-in-right bg-white/95 backdrop-blur-sm">
            <CardContent className="p-0">
              <Button 
                onClick={() => onModeSelect('shopper')}
                className="w-full h-32 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 hover:from-pink-700 hover:via-rose-700 hover:to-red-700 text-white border-0 rounded-xl relative overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="flex items-center space-x-6 relative z-10">
                  <div className="p-4 bg-pink-200 rounded-full group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <ShoppingBag size={36} className="text-pink-900" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">Shopper Mode</h3>
                    <p className="text-pink-200 text-sm flex items-center mb-1">
                      <Sparkles size={16} className="mr-2" />
                      Discover trends & exclusive deals
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-pink-300">
                      <span>• Exclusive discounts</span>
                      <span>• Early access</span>
                    </div>
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-purple-300 text-sm mt-8 animate-fade-in animation-delay-1000">
          <p className="mb-3">Join thousands of fashion enthusiasts worldwide</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <div className="text-left">
                <p className="font-semibold">12.5K</p>
                <p className="text-xs opacity-75">active creators</p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              <div className="text-left">
                <p className="font-semibold">48K</p>
                <p className="text-xs opacity-75">happy shoppers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModeSelector;
