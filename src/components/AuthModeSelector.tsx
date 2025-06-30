
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, ShoppingBag, Sparkles, TrendingUp } from 'lucide-react';

interface AuthModeSelectorProps {
  onModeSelect: (mode: 'creator' | 'shopper') => void;
}

const AuthModeSelector = ({ onModeSelect }: AuthModeSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="text-center text-white mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-yellow-400 mr-2" size={32} />
            <h1 className="text-5xl font-black bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              FashionStop
            </h1>
            <Sparkles className="text-yellow-400 ml-2" size={32} />
          </div>
          <p className="text-xl text-purple-200 font-medium">Your style, your story, your success</p>
        </div>
        
        <div className="space-y-6">
          <Card className="overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group animate-slide-in-left">
            <CardContent className="p-0">
              <Button 
                onClick={() => onModeSelect('creator')}
                className="w-full h-28 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-800 text-white border-0 rounded-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="flex items-center space-x-6 relative z-10">
                  <div className="p-3 bg-yellow-400 rounded-full group-hover:rotate-12 transition-transform duration-300">
                    <Crown size={32} className="text-purple-900" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-1">Creator Mode</h3>
                    <p className="text-purple-200 text-sm flex items-center">
                      <TrendingUp size={16} className="mr-1" />
                      Earn & influence the fashion world
                    </p>
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 group animate-slide-in-right">
            <CardContent className="p-0">
              <Button 
                onClick={() => onModeSelect('shopper')}
                className="w-full h-28 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 hover:from-pink-700 hover:via-rose-700 hover:to-red-700 text-white border-0 rounded-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="flex items-center space-x-6 relative z-10">
                  <div className="p-3 bg-pink-200 rounded-full group-hover:rotate-12 transition-transform duration-300">
                    <ShoppingBag size={32} className="text-pink-900" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-1">Shopper Mode</h3>
                    <p className="text-pink-200 text-sm flex items-center">
                      <Sparkles size={16} className="mr-1" />
                      Discover trends & exclusive deals
                    </p>
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-purple-300 text-sm mt-8 animate-fade-in animation-delay-1000">
          <p>Join thousands of fashion enthusiasts worldwide</p>
          <div className="flex justify-center items-center mt-2 space-x-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span>12.5K active creators</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              <span>48K happy shoppers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModeSelector;
