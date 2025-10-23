import { DesignSystemHeader } from './components/design-system/DesignSystemHeader';
import { ColorsSection } from './components/design-system/ColorsSection';
import { TypographySection } from './components/design-system/TypographySection';
import { ButtonsSection } from './components/design-system/ButtonsSection';
import { InputsSection } from './components/design-system/InputsSection';
import { SelectorsSection } from './components/design-system/SelectorsSection';
import { FormsSection } from './components/design-system/FormsSection';
import { DataDisplaySection } from './components/design-system/DataDisplaySection';
import { FeedbackSection } from './components/design-system/FeedbackSection';
import { NavigationSection } from './components/design-system/NavigationSection';
import { ModalsSection } from './components/design-system/ModalsSection';
import { AdvancedSection } from './components/design-system/AdvancedSection';
import { LayoutSection } from './components/design-system/LayoutSection';
import { CodeExamples } from './components/design-system/CodeExamples';
import { TokensSection } from './components/design-system/TokensSection';
import { IconsSection } from './components/design-system/IconsSection';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DesignSystemHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Introduction */}
          <section>
            <div className="mb-8">
              <h1 className="text-gray-900 mb-4">Handshake Design System</h1>
              <p className="text-gray-600 max-w-3xl mb-6">
                A comprehensive UI component library and design system for building modern SaaS applications. 
                Built with React, Tailwind CSS, and shadcn/ui components. Features a primary blue color scheme 
                with vibrant orange accents for highlights, perfect for creating engaging user experiences.
              </p>
              <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-3xl">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#0EA5E9] rounded"></div>
                  <span className="text-gray-900">Primary Blue</span>
                </div>
                <span className="text-gray-400">+</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#FF6B2C] rounded"></div>
                  <span className="text-gray-900">Accent Orange</span>
                </div>
                <span className="text-gray-600 ml-auto">= Professional & Engaging</span>
              </div>
            </div>
          </section>

          {/* Color System */}
          <ColorsSection />

          {/* Design Tokens */}
          <TokensSection />

          {/* Typography */}
          <TypographySection />

          {/* Icons */}
          <IconsSection />

          {/* Components Section */}
          <section id="components">
            <div className="mb-12">
              <h2 className="text-gray-900 mb-2">Components</h2>
              <p className="text-gray-600">
                A complete collection of UI components for building SaaS applications.
              </p>
            </div>

            <div className="space-y-16">
              <ButtonsSection />
              <InputsSection />
              <SelectorsSection />
            </div>
          </section>

          {/* Forms */}
          <FormsSection />

          {/* Data Display */}
          <DataDisplaySection />

          {/* Feedback Components */}
          <FeedbackSection />

          {/* Navigation */}
          <NavigationSection />

          {/* Modals & Overlays */}
          <ModalsSection />

          {/* Advanced Components */}
          <AdvancedSection />

          {/* Layout Patterns */}
          <LayoutSection />

          {/* Code Examples */}
          <CodeExamples />

          {/* Usage Guidelines */}
          <section>
            <div className="mb-8">
              <h2 className="text-gray-900 mb-2">Usage Guidelines</h2>
              <p className="text-gray-600">
                Best practices for using this design system.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-gray-900 mb-3">Color Usage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Use Primary Blue (#0EA5E9) for main CTAs and primary actions</li>
                  <li>• Use Accent Orange (#FF6B2C) for highlights and special features</li>
                  <li>• Mix blue and orange icons for visual variety</li>
                  <li>• Maintain consistent color contrast ratios for accessibility</li>
                  <li>• Use semantic colors (success, warning, error) appropriately</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-gray-900 mb-3">Typography</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• H1 for page titles and hero sections only</li>
                  <li>• H2 for major section headings</li>
                  <li>• H3 for subsections and card titles</li>
                  <li>• Maintain consistent hierarchy throughout your application</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-gray-900 mb-3">Spacing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Use consistent padding: 4, 6, 8, 12, 16, 24px</li>
                  <li>• Maintain 16px spacing between related form elements</li>
                  <li>• Use 24-32px spacing between major sections</li>
                  <li>• Keep consistent margins across similar components</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-gray-900 mb-3">Accessibility</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Always include proper labels for form inputs</li>
                  <li>• Provide clear error messages and validation</li>
                  <li>• Ensure keyboard navigation works for all components</li>
                  <li>• Test with screen readers for critical user flows</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Component Status */}
          <section>
            <div className="mb-8">
              <h2 className="text-gray-900 mb-2">Component Status</h2>
              <p className="text-gray-600">
                All components are production-ready and fully tested.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-900">Component</th>
                    <th className="px-6 py-3 text-left text-gray-900">Status</th>
                    <th className="px-6 py-3 text-left text-gray-900">Accessibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { name: 'Buttons', status: 'Stable', a11y: 'Full' },
                    { name: 'Inputs', status: 'Stable', a11y: 'Full' },
                    { name: 'Select & Dropdowns', status: 'Stable', a11y: 'Full' },
                    { name: 'Checkboxes & Radio', status: 'Stable', a11y: 'Full' },
                    { name: 'Forms', status: 'Stable', a11y: 'Full' },
                    { name: 'Tables', status: 'Stable', a11y: 'Full' },
                    { name: 'Alerts', status: 'Stable', a11y: 'Full' },
                    { name: 'Toasts', status: 'Stable', a11y: 'Full' },
                    { name: 'Tabs', status: 'Stable', a11y: 'Full' },
                    { name: 'Pagination', status: 'Stable', a11y: 'Full' },
                  ].map((component, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 text-gray-900">{component.name}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">
                          {component.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                          {component.a11y}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-8 mt-16">
            <div className="text-center text-gray-600">
              <p>© 2025 Handshake Design System. Built for modern SaaS applications.</p>
              <p className="mt-2">Version 1.0.0</p>
            </div>
          </footer>
        </div>
      </main>

      {/* Toast notifications container */}
      <Toaster />
    </div>
  );
}
