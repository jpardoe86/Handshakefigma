import { Bot, Target, Zap, BarChart3, MessageSquare, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Personalization',
      description: 'Advanced AI analyzes prospects and crafts unique, personalized messages that resonate.',
      color: 'bg-blue-500'
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'Identify and reach the right prospects at the right time with intelligent targeting algorithms.',
      color: 'bg-orange-500'
    },
    {
      icon: Zap,
      title: 'Scale Without Sacrifice',
      description: 'Send thousands of personalized messages while maintaining authenticity and quality.',
      color: 'bg-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track performance, engagement, and ROI with comprehensive analytics dashboards.',
      color: 'bg-orange-500'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Outreach',
      description: 'Reach prospects across email, LinkedIn, and other channels from one platform.',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team, share templates, and coordinate campaigns.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Everything You Need to Scale Outreach
          </h2>
          <p className="text-gray-600">
            Powerful features designed to help agencies and teams deliver exceptional results for their clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
