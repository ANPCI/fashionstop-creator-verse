
import { CapacitorConfig } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'app.lovable.58de80cd417a44629f567e69f1b03f96',
  appName: 'FashionStop Creator',
  webDir: 'dist',
  server: {
    url: 'https://58de80cd-417a-4462-9f56-7e69f1b03f96.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#8B5CF6',
      showSpinner: false
    }
  }
};

export default config;
