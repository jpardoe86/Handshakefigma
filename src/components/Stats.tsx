export function Stats() {
  const stats = [
    {
      value: '3.5x',
      label: 'Higher Engagement',
      description: 'Compared to traditional outreach'
    },
    {
      value: '75%',
      label: 'Time Saved',
      description: 'On manual personalization'
    },
    {
      value: '92%',
      label: 'Client Satisfaction',
      description: 'From agency partners'
    },
    {
      value: '500+',
      label: 'Agencies',
      description: 'Using white-label solution'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-[#0EA5E9]">{stat.value}</div>
              <div className="text-gray-900">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
