import { Upload, Sparkles, Send, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      step: '01',
      title: 'Import Your Prospects',
      description: 'Upload your prospect list or connect your CRM. Our system automatically enriches data with relevant insights.'
    },
    {
      icon: Sparkles,
      step: '02',
      title: 'AI Personalizes Messages',
      description: 'Advanced AI analyzes each prospect and generates highly personalized outreach messages at scale.'
    },
    {
      icon: Send,
      step: '03',
      title: 'Automated Delivery',
      description: 'Messages are sent automatically with optimal timing. Follow-ups are triggered based on engagement.'
    },
    {
      icon: TrendingUp,
      step: '04',
      title: 'Track & Optimize',
      description: 'Monitor results in real-time and let AI optimize your campaigns for maximum conversion rates.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            How Handshake Works
          </h2>
          <p className="text-gray-600">
            From cold prospects to warm meetings in four simple steps. Our AI does the heavy lifting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 h-full space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] w-14 h-14 rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-gray-300">{step.step}</span>
                  </div>
                  <h3 className="text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0EA5E9] to-[#FF6B2C]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
