
import React, { useState } from 'react';
import AuthModeSelector from '@/components/AuthModeSelector';
import CreatorDashboard from '@/components/CreatorDashboard';
import ShopperDashboard from '@/components/ShopperDashboard';
import ProductUpload from '@/components/ProductUpload';
import Analytics from '@/components/Analytics';

type AppMode = 'auth' | 'creator' | 'shopper';
type CreatorView = 'dashboard' | 'upload' | 'analytics';

const Index = () => {
  const [mode, setMode] = useState<AppMode>('auth');
  const [creatorView, setCreatorView] = useState<CreatorView>('dashboard');

  const handleModeSelect = (selectedMode: 'creator' | 'shopper') => {
    setMode(selectedMode);
  };

  const handleCreatorNavigation = (view: CreatorView) => {
    setCreatorView(view);
  };

  if (mode === 'auth') {
    return <AuthModeSelector onModeSelect={handleModeSelect} />;
  }

  if (mode === 'creator') {
    switch (creatorView) {
      case 'upload':
        return <ProductUpload onBack={() => setCreatorView('dashboard')} />;
      case 'analytics':
        return <Analytics onBack={() => setCreatorView('dashboard')} />;
      default:
        return (
          <div>
            <CreatorDashboard />
            {/* Navigation buttons for demo - in real app these would be in a proper navigation */}
            <div className="fixed bottom-4 left-4 right-4 flex justify-center space-x-4">
              <button 
                onClick={() => handleCreatorNavigation('upload')}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                Upload
              </button>
              <button 
                onClick={() => handleCreatorNavigation('analytics')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                Analytics
              </button>
              <button 
                onClick={() => setMode('auth')}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                Switch Mode
              </button>
            </div>
          </div>
        );
    }
  }

  return (
    <div>
      <ShopperDashboard />
      {/* Navigation button for demo */}
      <div className="fixed bottom-4 left-4 right-4 flex justify-center">
        <button 
          onClick={() => setMode('auth')}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Switch Mode
        </button>
      </div>
    </div>
  );
};

export default Index;
