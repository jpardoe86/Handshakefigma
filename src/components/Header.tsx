import logoImage from 'figma:asset/e215a791d06638d25ab0c6628fa4219a3e9dd10a.png';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <img src={logoImage} alt="Handshake by gro.bot" className="h-8 sm:h-10" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <a href="#white-label" className="text-gray-700 hover:text-gray-900 transition-colors">
              White Label
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
