import { Button } from './ui/button';
import { Check, Crown, Shield, Palette, Headphones } from 'lucide-react';

export function WhiteLabel() {
  const benefits = [
    {
      icon: Crown,
      title: 'Your Brand, Our Technology',
      description: 'Complete white-label solution that looks and feels like your own product.'
    },
    {
      icon: Palette,
      title: 'Full Customization',
      description: 'Customize colors, logos, domains, and messaging to match your brand identity.'
    },
    {
      icon: Shield,
      title: 'Client Management',
      description: 'Dedicated portals for each client with role-based access and permissions.'
    },
    {
      icon: Headphones,
      title: 'Agency Support',
      description: 'Priority support, training resources, and dedicated success manager for agencies.'
    }
  ];

  const features = [
    'Custom domain and branding',
    'Client portal access',
    'Tiered pricing models',
    'White-glove onboarding',
    'API access for integrations',
    'Revenue sharing options'
  ];

  return (
    <section id="white-label" className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B2C]/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4">
            <span className="text-[#0EA5E9]">For Agencies</span>
          </div>
          <h2 className="mb-4">
            White-Label Solution for Your Agency
          </h2>
          <p className="text-gray-300">
            Offer Handshake as your own service. Deliver cutting-edge AI outreach to your clients under your brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-white mb-6">
              What's Included
            </h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-[#0EA5E9] rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              size="lg"
              className="w-full mt-8 bg-[#0EA5E9] hover:bg-[#0284C7] text-white"
            >
              Become a Partner
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-white mb-4">
            Ready to Add Handshake to Your Service Offering?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join 500+ agencies already using Handshake to deliver exceptional results to their clients.
          </p>
          <Button 
            size="lg"
            className="bg-white text-[#0EA5E9] hover:bg-gray-100"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
