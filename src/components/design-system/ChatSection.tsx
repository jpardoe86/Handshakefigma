import { useState } from 'react';
import { ArrowRight, Sparkles, User } from 'lucide-react';
import { Avatar } from '../ui/avatar';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
}

interface Milestone {
  id: string;
  label: string;
  completed: boolean;
}

export function ChatSection() {
  const [messages] = useState<Message[]>([
    {
      id: '1',
      sender: 'assistant',
      content: 'Hello! I\'m here to help you get started. What would you like to accomplish today?',
    },
    {
      id: '2',
      sender: 'user',
      content: 'I need help setting up my account.',
    },
    {
      id: '3',
      sender: 'assistant',
      content: 'Perfect! I\'ll guide you through the account setup process. We\'ll verify your email, set up your profile, and get you ready to go.',
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [progress] = useState(33);

  const milestones: Milestone[] = [
    { id: '1', label: 'Start', completed: true },
    { id: '2', label: 'Verify Email', completed: true },
    { id: '3', label: 'Profile Setup', completed: false },
    { id: '4', label: 'Complete', completed: false },
  ];

  const handleSend = () => {
    if (inputValue.trim()) {
      setInputValue('');
    }
  };

  return (
    <section id="chat">
      <div className="mb-12">
        <h2 className="text-gray-900 mb-2">Chat Interfaces</h2>
        <p className="text-gray-600">
          Modern, minimal chat interfaces with clean layouts and floating elements.
        </p>
      </div>

      <div className="space-y-24">
        {/* Full-Screen Chat - Clean & Minimal */}
        <div>
          <h3 className="text-gray-900 mb-8">Full-Screen Message Layout</h3>
          
          <div className="min-h-screen -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-b from-gray-50 to-white relative pb-32">
            {/* Messages - Free flowing */}
            <div className="max-w-3xl mx-auto px-6 pt-12 space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'assistant' && (
                    <Avatar className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </Avatar>
                  )}
                  
                  {message.sender === 'assistant' ? (
                    <div className="max-w-[70%]">
                      <p className="text-gray-700">
                        {message.content}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-[#0EA5E9] text-white px-6 py-4 rounded-3xl max-w-[70%]">
                      <p className="text-white">{message.content}</p>
                    </div>
                  )}

                  {message.sender === 'user' && (
                    <Avatar className="w-10 h-10 bg-gradient-to-br from-[#FF6B2C] to-[#F97316] flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </Avatar>
                  )}
                </div>
              ))}
            </div>

            {/* Floating Input */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6">
              <div className="bg-white rounded-full shadow-lg border border-gray-200 px-6 py-4 flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 bg-[#0EA5E9] hover:bg-[#0284C7] rounded-full flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chat with Progress at Top */}
        <div>
          <h3 className="text-gray-900 mb-8">Chat with Progress at Top</h3>
          
          <div className="min-h-screen -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-b from-blue-50/30 to-white relative pb-32">
            {/* Progress Bar - At the top */}
            <div className="sticky top-0 z-10 bg-gradient-to-b from-blue-50/30 to-transparent pb-8 pt-6">
              <div className="max-w-2xl mx-auto px-12">
                <div className="relative py-4">
                  {/* Background line */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -translate-y-1/2" />
                  
                  {/* Progress line */}
                  <div 
                    className="absolute top-1/2 left-0 h-px bg-[#0EA5E9] -translate-y-1/2 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                  
                  {/* Circles with hover labels */}
                  <div className="relative flex justify-between">
                    {milestones.map((milestone) => (
                      <div key={milestone.id} className="group relative flex flex-col items-center">
                        <div
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            milestone.completed
                              ? 'bg-[#0EA5E9]'
                              : 'bg-gray-300'
                          }`}
                        />
                        {/* Tooltip on hover */}
                        <div className="absolute top-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg whitespace-nowrap">
                            {milestone.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Fade gradient at bottom of progress area */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
            </div>

            {/* Messages with fade effect */}
            <div className="max-w-3xl mx-auto px-6 space-y-6 mb-32 relative">
              {/* Top fade overlay */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
              
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </Avatar>
                <div className="max-w-[70%]">
                  <p className="text-gray-700">
                    Great progress! You've completed email verification. Let's set up your profile next.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <div className="bg-[#0EA5E9] text-white px-6 py-4 rounded-3xl max-w-[70%]">
                  <p className="text-white">Sounds good! What information do you need?</p>
                </div>
                <Avatar className="w-10 h-10 bg-gradient-to-br from-[#FF6B2C] to-[#F97316] flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </Avatar>
              </div>

              <div className="flex gap-4">
                <Avatar className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </Avatar>
                <div className="max-w-[70%]">
                  <p className="text-gray-700">
                    Just your name and a brief bio to personalize your experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Input - Separate from progress */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6">
              <div className="bg-white rounded-full shadow-lg border border-gray-200 px-6 py-4 flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Continue the conversation..."
                  className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400"
                />
                <button className="w-10 h-10 bg-[#0EA5E9] hover:bg-[#0284C7] rounded-full flex items-center justify-center transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Progress Variant */}
        <div>
          <h3 className="text-gray-900 mb-8">Minimal Progress with Active State</h3>
          
          <div className="min-h-screen -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-b from-orange-50/20 to-white relative pb-32">
            {/* Progress at top */}
            <div className="sticky top-0 z-10 bg-gradient-to-b from-orange-50/20 to-transparent pb-8 pt-6">
              <div className="max-w-2xl mx-auto px-12">
                <div className="relative py-4">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -translate-y-1/2" />
                  <div 
                    className="absolute top-1/2 left-0 h-px bg-[#0EA5E9] -translate-y-1/2"
                    style={{ width: '66%' }}
                  />
                  
                  <div className="relative flex justify-between">
                    <div className="group relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9]" />
                      <div className="absolute top-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg whitespace-nowrap">
                          Started
                        </div>
                      </div>
                    </div>
                    
                    <div className="group relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9]" />
                      <div className="absolute top-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg whitespace-nowrap">
                          In Progress
                        </div>
                      </div>
                    </div>
                    
                    <div className="group relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B2C] ring-4 ring-[#FF6B2C]/20" />
                      <div className="absolute top-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg whitespace-nowrap">
                          Active Now
                        </div>
                      </div>
                    </div>
                    
                    <div className="group relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                      <div className="absolute top-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg whitespace-nowrap">
                          Upcoming
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
            </div>

            {/* Messages */}
            <div className="max-w-2xl mx-auto px-6 space-y-6 mb-32 relative">
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
              
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </Avatar>
                <div className="max-w-[70%]">
                  <p className="text-gray-700">You're on step 3 of 4. Almost there!</p>
                </div>
              </div>
            </div>

            {/* Floating Input */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6">
              <div className="bg-white rounded-full shadow-lg border border-gray-200 px-6 py-4 flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Type your response..."
                  className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400"
                />
                <button className="w-10 h-10 bg-[#0EA5E9] hover:bg-[#0284C7] rounded-full flex items-center justify-center transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Chat Widget */}
        <div>
          <h3 className="text-gray-900 mb-8">Floating Chat Widget</h3>
          
          <div className="bg-gray-100 rounded-3xl p-8 relative" style={{ height: '500px' }}>
            <p className="text-gray-400 text-center">Main application content...</p>
            
            {/* Floating chat - bottom right */}
            <div className="absolute bottom-8 right-8 w-96">
              {/* Messages bubble up */}
              <div className="mb-4 space-y-3">
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </Avatar>
                  <div className="max-w-[80%]">
                    <p className="text-gray-700">Hi! Need any help?</p>
                  </div>
                </div>
                
                <div className="flex gap-3 justify-end">
                  <div className="bg-[#0EA5E9] text-white px-4 py-3 rounded-2xl shadow-lg max-w-[80%]">
                    <p className="text-white">Yes, quick question!</p>
                  </div>
                  <Avatar className="w-8 h-8 bg-gradient-to-br from-[#FF6B2C] to-[#F97316] flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </Avatar>
                </div>
              </div>

              {/* Input */}
              <div className="bg-white rounded-full shadow-xl border border-gray-200 px-5 py-3 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Type here..."
                  className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400"
                />
                <button className="w-9 h-9 bg-[#0EA5E9] hover:bg-[#0284C7] rounded-full flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 rounded-3xl p-8">
          <h4 className="text-white mb-4">Implementation Example</h4>
          <pre className="text-gray-300 overflow-x-auto text-sm">
            <code>{`// Modern Chat with Progress at Top
function ChatWithProgress() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white pb-32">
      {/* Progress Bar - Sticky at top */}
      <div className="sticky top-0 z-10 bg-gradient-to-b from-blue-50/30 to-transparent pb-8 pt-6">
        <div className="max-w-2xl mx-auto px-12">
          <div className="relative py-4">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200" />
            <div className="absolute top-1/2 left-0 h-px bg-blue-500" style={{ width: '50%' }} />
            
            {/* Circles with hover tooltips */}
            <div className="relative flex justify-between">
              <div className="group relative">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <div className="absolute top-6 opacity-0 group-hover:opacity-100">
                  <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg">
                    Step 1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Messages with top fade */}
      <div className="max-w-3xl mx-auto px-6 space-y-6 relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10" />
        
        <div className="flex gap-4">
          <Avatar className="w-10 h-10 bg-blue-500">
            <Sparkles />
          </Avatar>
          <p className="text-gray-700">Message content</p>
        </div>
      </div>

      {/* Floating Input */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 max-w-2xl w-full px-6">
        <div className="bg-white rounded-full shadow-lg px-6 py-4 flex gap-4">
          <input className="flex-1 bg-transparent outline-none" />
          <button className="w-10 h-10 bg-blue-500 rounded-full">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}`}</code>
          </pre>
        </div>

        {/* Design Guidelines */}
        <div className="bg-blue-50/50 rounded-3xl p-8">
          <h4 className="text-gray-900 mb-4">Design Principles</h4>
          <ul className="space-y-3 text-gray-600">
            <li>• Progress bar: sticky at top of screen for constant visibility</li>
            <li>• Messages fade out with gradient as they approach progress bar</li>
            <li>• ArrowRight icon for send action (cleaner than paper plane)</li>
            <li>• Agent messages: no container, text directly on background</li>
            <li>• User messages: blue (#0EA5E9) rounded containers</li>
            <li>• Milestone labels: hover-only tooltips below circles</li>
            <li>• Ultra-minimal circles: 2.5px diameter</li>
            <li>• Active milestone: orange (#FF6B2C) with ring effect</li>
            <li>• Floating input: separate from progress, near bottom</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
