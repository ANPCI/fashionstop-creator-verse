
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
  TrendingUp
} from 'lucide-react';

const ShopperDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const trendingProducts = [
    {
      id: 1,
      name: "Vintage Leather Jacket",
      price: "$129",
      originalPrice: "$180",
      image: "🧥",
      rating: 4.8,
      discount: "28% OFF"
    },
    {
      id: 2,
      name: "Designer Sneakers",
      price: "$89",
      originalPrice: "$120",
      image: "👟",
      rating: 4.9,
      discount: "26% OFF"
    },
    {
      id: 3,
      name: "Silk Summer Dress",
      price: "$75",
      originalPrice: "$95",
      image: "👗",
      rating: 4.7,
      discount: "21% OFF"
    }
  ];

  const creators = [
    { name: "Sarah Style", followers: "45K", image: "👩‍🦱" },
    { name: "Fashion Mike", followers: "32K", image: "👨‍🦲" },
    { name: "Trendy Tina", followers: "28K", image: "👩‍🦳" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Discover Fashion</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search for fashion, trends, creators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-12 h-12 bg-white border-gray-200 focus:border-pink-400 focus:ring-pink-400"
          />
          <Button size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Filter size={16} />
          </Button>
        </div>
      </div>

      {/* Featured Creators */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Sparkles className="mr-2 text-purple-600" size={20} />
            Top Creators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 overflow-x-auto">
            {creators.map((creator, index) => (
              <div key={index} className="flex-shrink-0 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl mb-2">
                  {creator.image}
                </div>
                <p className="text-sm font-medium">{creator.name}</p>
                <p className="text-xs text-gray-500">{creator.followers}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Trending Now */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <TrendingUp className="mr-2 text-pink-600" size={20} />
            Trending Now
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trendingProducts.map((product) => (
              <div key={product.id} className="flex items-center space-x-4 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {product.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                      {product.discount}
                    </Badge>
                  </div>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button size="sm" variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                    <Heart size={14} />
                  </Button>
                  <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                    <ShoppingCart size={14} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: "Clothing", icon: "👕", color: "from-blue-500 to-blue-600" },
          { name: "Shoes", icon: "👠", color: "from-purple-500 to-purple-600" },
          { name: "Accessories", icon: "👜", color: "from-pink-500 to-pink-600" },
          { name: "Beauty", icon: "💄", color: "from-rose-500 to-rose-600" }
        ].map((category, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <Button className={`w-full h-20 bg-gradient-to-r ${category.color} hover:opacity-90 text-white border-0`}>
                <div className="text-center">
                  <div className="text-2xl mb-1">{category.icon}</div>
                  <p className="text-sm font-medium">{category.name}</p>
                </div>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopperDashboard;
