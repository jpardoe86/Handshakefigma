import heroImage from 'figma:asset/2f3bdce8a3906189228af9ca323c96ff3f3dd565.png';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-gray-900">
                Turn Cold Prospects into Warm Meetings
              </h1>
              <p className="text-gray-600 max-w-xl">
                AI-powered outreach platform that delivers highly personalized messages at scale. 
                Build genuine relationships and expand your network with ease.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-8"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-50 px-8"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-gray-900">10,000+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-gray-900">2.5M+</div>
                <div className="text-gray-600">Messages Sent</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-gray-900">87%</div>
                <div className="text-gray-600">Response Rate</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <img 
              src={heroImage} 
              alt="Authentic Connections" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF6B2C]/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
