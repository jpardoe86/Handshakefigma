import logoImage from 'figma:asset/e215a791d06638d25ab0c6628fa4219a3e9dd10a.png';

export function DesignSystemHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <img src={logoImage} alt="Handshake" className="h-10 mb-2" />
            <h1 className="text-gray-900">UI Design System</h1>
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#colors" className="text-gray-600 hover:text-gray-900 transition-colors">Colors</a>
            <a href="#typography" className="text-gray-600 hover:text-gray-900 transition-colors">Typography</a>
            <a href="#components" className="text-gray-600 hover:text-gray-900 transition-colors">Components</a>
            <a href="#forms" className="text-gray-600 hover:text-gray-900 transition-colors">Forms</a>
            <a href="#data-display" className="text-gray-600 hover:text-gray-900 transition-colors">Data</a>
            <a href="#layouts" className="text-gray-600 hover:text-gray-900 transition-colors">Layouts</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
