
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  Star, 
  Filter,
  Sparkles,
  TrendingUp,
  Flame,
  Crown,
  Timer,
  MapPin,
  Bell,
  User,
  Gift,
  Zap
} from 'lucide-react';

const ShopperDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleLike = (id: number) => {
    setLikedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const trendingProducts = [
    {
      id: 1,
      name: "Vintage Leather Jacket",
      price: "$129",
      originalPrice: "$180",
      image: "🧥",
      rating: 4.8,
      discount: "28% OFF",
      isHot: true,
      timeLeft: "2h 15m",
      creator: "Sarah Style",
      location: "New York"
    },
    {
      id: 2,
      name: "Designer Sneakers",
      price: "$89",
      originalPrice: "$120",
      image: "👟",
      rating: 4.9,
      discount: "26% OFF",
      isHot: false,
      timeLeft: "5h 30m",
      creator: "Fashion Mike",
      location: "Los Angeles"
    },
    {
      id: 3,
      name: "Silk Summer Dress",
      price: "$75",
      originalPrice: "$95",
      image: "👗",
      rating: 4.7,
      discount: "21% OFF",
      isHot: true,
      timeLeft: "1h 45m",
      creator: "Trendy Tina",
      location: "Miami"
    }
  ];

  const creators = [
    { name: "Sarah Style", followers: "45K", image: "👩‍🦱", tier: "Diamond", isOnline: true, speciality: "Vintage" },
    { name: "Fashion Mike", followers: "32K", image: "👨‍🦲", tier: "Gold", isOnline: false, speciality: "Streetwear" },
    { name: "Trendy Tina", followers: "28K", image: "👩‍🦳", tier: "Gold", isOnline: true, speciality: "Casual" }
  ];

  const categories = [
    { name: "All", id: "all", icon: "✨", color: "from-purple-500 to-pink-600", items: "12.4K items" },
    { name: "Clothing", id: "clothing", icon: "👕", color: "from-blue-500 to-cyan-600", items: "2.4K items" },
    { name: "Shoes", id: "shoes", icon: "👠", color: "from-purple-500 to-pink-600", items: "1.8K items" },
    { name: "Accessories", id: "accessories", icon: "👜", color: "from-pink-500 to-rose-600", items: "3.1K items" },
    { name: "Beauty", id: "beauty", icon: "💄", color: "from-rose-500 to-orange-500", items: "1.2K items" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-4">
      {/* Enhanced Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="animate-slide-in-left">
            <h1 className="text-4xl font-black text-gray-900 mb-2">Discover Fashion</h1>
            <p className="text-gray-600 flex items-center text-lg">
              <Sparkles size={18} className="mr-2 text-pink-500" />
              Curated by top creators worldwide
            </p>
          </div>
          <div className="flex items-center space-x-3 animate-slide-in-right">
            <Button size="sm" variant="outline" className="relative">
              <Bell size={16} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </Button>
            <Button size="sm" variant="outline">
              <User size={16} />
            </Button>
            <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2">
              <Flame size={16} className="mr-2" />
              Hot Deals
            </Badge>
          </div>
        </div>
        
        {/* Enhanced Search Bar */}
        <div className="relative animate-slide-in-up mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={22} />
          <Input
            placeholder="Search trends, creators, or products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-20 h-16 bg-white/90 backdrop-blur-sm border-gray-200 focus:border-pink-400 focus:ring-pink-400 rounded-2xl text-lg shadow-xl"
          />
          <Button size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl px-6">
            <Filter size={18} className="mr-2" />
            Filter
          </Button>
        </div>

        {/* Category Pills */}
        <div className="flex space-x-3 overflow-x-auto pb-2 animate-slide-in-up animation-delay-200">
          {categories.map((category) => (
            <Button
              key={category.id}
              size="sm"
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'hover:shadow-md hover:scale-105'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Enhanced Featured Creators */}
      <Card className="mb-8 animate-slide-in-up animation-delay-200 hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold">
            <Crown className="mr-3 text-yellow-500" size={26} />
            Top Creators
            <Badge className="ml-3 bg-yellow-100 text-yellow-800">Live Now</Badge>
            <div className="ml-auto flex items-center text-sm text-gray-600">
              <Zap size={16} className="mr-1" />
              12 online
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-6 overflow-x-auto pb-2">
            {creators.map((creator, index) => (
              <div key={index} className="flex-shrink-0 text-center group hover:scale-105 transition-transform duration-300 bg-white rounded-2xl p-4 shadow-md hover:shadow-lg">
                <div className="relative mb-3">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {creator.image}
                  </div>
                  {creator.isOnline && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-3 border-white animate-pulse flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                  <Badge className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs ${
                    creator.tier === 'Diamond' ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-yellow-400 to-orange-500'
                  } text-white`}>
                    {creator.tier}
                  </Badge>
                </div>
                <p className="text-sm font-bold text-gray-900">{creator.name}</p>
                <p className="text-xs text-gray-500 mb-1">{creator.followers} followers</p>
                <Badge variant="outline" className="text-xs">{creator.speciality}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Trending Products */}
      <Card className="mb-8 animate-slide-in-up animation-delay-400 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold">
            <TrendingUp className="mr-3 text-pink-600" size={26} />
            Trending Now
            <Badge className="ml-3 bg-red-100 text-red-800 animate-pulse">
              <Timer size={14} className="mr-1" />
              Limited Time
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {trendingProducts.map((product) => (
              <div key={product.id} className="flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                    {product.image}
                  </div>
                  {product.isHot && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full animate-bounce shadow-lg">
                      🔥 HOT
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-3xl font-black text-gray-900">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    <Badge className="text-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1">
                      {product.discount}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1 font-medium">{product.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <User size={14} className="mr-1" />
                        {product.creator}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {product.location}
                      </div>
                    </div>
                    <div className="flex items-center text-red-600 text-sm font-bold bg-red-50 px-3 py-1 rounded-full">
                      <Timer size={14} className="mr-1" />
                      {product.timeLeft} left
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className={`border-2 transition-all duration-300 ${
                      likedItems.includes(product.id) 
                        ? 'border-pink-500 text-pink-600 bg-pink-50' 
                        : 'border-gray-300 text-gray-600 hover:border-pink-400 hover:text-pink-600'
                    }`}
                    onClick={() => handleLike(product.id)}
                  >
                    <Heart size={18} className={likedItems.includes(product.id) ? 'fill-current' : ''} />
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 px-6">
                    <ShoppingCart size={18} className="mr-2" />
                    Buy
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Categories Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-in-up animation-delay-600">
        {categories.slice(1).map((category, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-0">
              <Button 
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full h-28 bg-gradient-to-r ${category.color} hover:opacity-90 text-white border-0 transition-all duration-300 rounded-2xl`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <p className="text-lg font-bold">{category.name}</p>
                  <p className="text-sm opacity-90">{category.items}</p>
                </div>
              </Button>
            </CardContent>
          </Card>
        ))}
        
        {/* Special Offers Card */}
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-yellow-400 to-orange-500">
          <CardContent className="p-6 text-center text-white">
            <Gift size={36} className="mx-auto mb-3" />
            <p className="text-lg font-bold mb-1">Special Offers</p>
            <p className="text-sm opacity-90">Up to 70% OFF</p>
            <Badge className="mt-2 bg-white/20 text-white">
              Today Only
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShopperDashboard;
