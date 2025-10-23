import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Star, Send } from 'lucide-react';

export function ColorsSection() {
  const colorGroups = [
    {
      title: 'Primary Colors',
      colors: [
        { name: 'Primary Blue', value: '#0EA5E9', class: 'bg-[#0EA5E9]' },
        { name: 'Dark Blue', value: '#0284C7', class: 'bg-[#0284C7]' }
      ]
    },
    {
      title: 'Accent Colors',
      colors: [
        { name: 'Accent Orange', value: '#FF6B2C', class: 'bg-[#FF6B2C]' },
        { name: 'Dark Orange', value: '#FF5A1A', class: 'bg-[#FF5A1A]' }
      ]
    },
    {
      title: 'Neutral Colors',
      colors: [
        { name: 'Gray 900', value: '#111827', class: 'bg-gray-900' },
        { name: 'Gray 700', value: '#374151', class: 'bg-gray-700' },
        { name: 'Gray 600', value: '#4B5563', class: 'bg-gray-600' },
        { name: 'Gray 400', value: '#9CA3AF', class: 'bg-gray-400' },
        { name: 'Gray 200', value: '#E5E7EB', class: 'bg-gray-200' },
        { name: 'Gray 100', value: '#F3F4F6', class: 'bg-gray-100' },
        { name: 'Gray 50', value: '#F9FAFB', class: 'bg-gray-50' },
        { name: 'White', value: '#FFFFFF', class: 'bg-white border border-gray-200' }
      ]
    },
    {
      title: 'Semantic Colors',
      colors: [
        { name: 'Success', value: '#10B981', class: 'bg-green-500' },
        { name: 'Warning', value: '#F59E0B', class: 'bg-yellow-500' },
        { name: 'Error', value: '#EF4444', class: 'bg-red-500' },
        { name: 'Info', value: '#0EA5E9', class: 'bg-blue-500' }
      ]
    }
  ];

  return (
    <section id="colors">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Colors</h2>
        <p className="text-gray-600">
          The Handshake color palette uses blue as the primary brand color with orange as an energetic accent.
        </p>
      </div>

      <div className="space-y-8">
        {colorGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-gray-900 mb-4">{group.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {group.colors.map((color, colorIdx) => (
                <Card key={colorIdx} className="p-4">
                  <div className={`${color.class} w-full h-20 rounded-lg mb-3`} />
                  <div className="space-y-1">
                    <p className="text-gray-900">{color.name}</p>
                    <p className="text-gray-500">{color.value}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl border border-blue-200">
          <h3 className="text-gray-900 mb-4">Color Usage in Practice</h3>
          <p className="text-gray-600 mb-6">
            Blue is your primary brand color for main actions and CTAs. Orange serves as an accent to highlight special features and draw attention.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="text-gray-900 mb-4">Primary Actions (Blue)</h4>
              <div className="space-y-3">
                <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7]">
                  <Send className="mr-2 h-4 w-4" />
                  Send Campaign
                </Button>
                <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7]">
                  Create New
                </Button>
                <p className="text-gray-600 mt-4">Use for: Main CTAs, primary navigation, core features</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="text-gray-900 mb-4">Accent Highlights (Orange)</h4>
              <div className="space-y-3">
                <Button className="w-full bg-[#FF6B2C] hover:bg-[#FF5A1A]">
                  <Star className="mr-2 h-4 w-4" />
                  Upgrade to Pro
                </Button>
                <Button className="w-full bg-[#FF6B2C] hover:bg-[#FF5A1A]">
                  Get Started Free
                </Button>
                <p className="text-gray-600 mt-4">Use for: Special offers, highlights, premium features, important call-outs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
