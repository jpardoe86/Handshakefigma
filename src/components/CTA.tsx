import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-gray-900 mb-6">
          Ready to Transform Your Outreach?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of teams using Handshake to turn cold prospects into warm meetings. 
          Start your free trial today, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-8"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-gray-900 text-gray-900 hover:bg-gray-50 px-8"
          >
            Book a Demo
          </Button>
        </div>
        <p className="text-gray-500 mt-6">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
