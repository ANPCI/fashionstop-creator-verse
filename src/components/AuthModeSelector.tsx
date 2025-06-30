
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, ShoppingBag } from 'lucide-react';

interface AuthModeSelectorProps {
  onModeSelect: (mode: 'creator' | 'shopper') => void;
}

const AuthModeSelector = ({ onModeSelect }: AuthModeSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-2">FashionStop</h1>
          <p className="text-purple-100">Choose your journey</p>
        </div>
        
        <div className="space-y-4">
          <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-0">
              <Button 
                onClick={() => onModeSelect('creator')}
                className="w-full h-24 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Crown size={32} className="text-yellow-300" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold">Creator Mode</h3>
                    <p className="text-purple-200 text-sm">Earn & influence</p>
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-0">
              <Button 
                onClick={() => onModeSelect('shopper')}
                className="w-full h-24 bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white border-0 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <ShoppingBag size={32} className="text-pink-200" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold">Shopper Mode</h3>
                    <p className="text-pink-200 text-sm">Discover & shop</p>
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthModeSelector;
