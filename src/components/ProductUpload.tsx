
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  Camera, 
  Tag, 
  DollarSign, 
  Link2, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';

interface ProductUploadProps {
  onBack: () => void;
}

const ProductUpload = ({ onBack }: ProductUploadProps) => {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    tags: '',
    affiliateLink: ''
  });

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleSubmit = () => {
    // Simulate upload
    alert('Product uploaded successfully! 🎉');
    onBack();
  };

  const categories = [
    'Clothing', 'Shoes', 'Accessories', 'Beauty', 'Jewelry', 'Bags'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-3">
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Upload Product</h1>
      </div>

      <div className="space-y-6">
        {/* Image Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Camera className="mr-2 text-purple-600" size={20} />
              Product Photos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
              <Upload className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600 mb-2">Click to upload photos</p>
              <p className="text-sm text-gray-500">JPG, PNG up to 10MB each</p>
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                Choose Files
              </Button>
            </div>
            
            {uploadedImages.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded-lg"></div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Product Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Tag className="mr-2 text-pink-600" size={20} />
              Product Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Product Title</Label>
              <Input
                id="title"
                placeholder="Enter product title..."
                value={productData.title}
                onChange={(e) => setProductData({...productData, title: e.target.value})}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your product..."
                value={productData.description}
                onChange={(e) => setProductData({...productData, description: e.target.value})}
                className="mt-1 h-24"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Price</Label>
                <div className="relative mt-1">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    id="price"
                    placeholder="0.00"
                    value={productData.price}
                    onChange={(e) => setProductData({...productData, price: e.target.value})}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label>Category</Label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={productData.category === category ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setProductData({...productData, category})}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="fashion, trending, summer..."
                value={productData.tags}
                onChange={(e) => setProductData({...productData, tags: e.target.value})}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Affiliate Link */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Link2 className="mr-2 text-blue-600" size={20} />
              Affiliate Link
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="affiliateLink">Store Link</Label>
              <Input
                id="affiliateLink"
                placeholder="https://store.com/product..."
                value={productData.affiliateLink}
                onChange={(e) => setProductData({...productData, affiliateLink: e.target.value})}
                className="mt-1"
              />
              <p className="text-sm text-gray-500 mt-1">
                We'll automatically generate your affiliate link
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button 
          onClick={handleSubmit}
          className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-medium"
        >
          <Sparkles className="mr-2" size={20} />
          Upload Product
        </Button>
      </div>
    </div>
  );
};

export default ProductUpload;
