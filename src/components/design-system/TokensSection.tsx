import { Card } from '../ui/card';

export function TokensSection() {
  const colorTokens = [
    { name: 'Primary Blue', value: '#0EA5E9', class: 'bg-[#0EA5E9]', usage: 'Main CTAs, primary actions' },
    { name: 'Dark Blue', value: '#0284C7', class: 'bg-[#0284C7]', usage: 'Hover states for blue' },
    { name: 'Accent Orange', value: '#FF6B2C', class: 'bg-[#FF6B2C]', usage: 'Highlights, special features' },
    { name: 'Dark Orange', value: '#FF5A1A', class: 'bg-[#FF5A1A]', usage: 'Hover states for orange' },
    { name: 'Gray 900', value: '#111827', class: 'bg-gray-900', usage: 'Primary text' },
    { name: 'Gray 600', value: '#4B5563', class: 'bg-gray-600', usage: 'Secondary text' },
    { name: 'Gray 400', value: '#9CA3AF', class: 'bg-gray-400', usage: 'Placeholder text' },
    { name: 'Gray 200', value: '#E5E7EB', class: 'bg-gray-200', usage: 'Borders, dividers' },
    { name: 'Gray 100', value: '#F3F4F6', class: 'bg-gray-100', usage: 'Backgrounds' },
    { name: 'Gray 50', value: '#F9FAFB', class: 'bg-gray-50', usage: 'Page backgrounds' },
    { name: 'Success', value: '#10B981', class: 'bg-green-500', usage: 'Success states' },
    { name: 'Warning', value: '#F59E0B', class: 'bg-yellow-500', usage: 'Warning states' },
    { name: 'Error', value: '#EF4444', class: 'bg-red-500', usage: 'Error states' },
  ];

  const spacingTokens = [
    { name: '0.5', value: '2px', class: 'w-[2px] h-4' },
    { name: '1', value: '4px', class: 'w-1 h-4' },
    { name: '1.5', value: '6px', class: 'w-1.5 h-4' },
    { name: '2', value: '8px', class: 'w-2 h-4' },
    { name: '3', value: '12px', class: 'w-3 h-4' },
    { name: '4', value: '16px', class: 'w-4 h-4' },
    { name: '6', value: '24px', class: 'w-6 h-4' },
    { name: '8', value: '32px', class: 'w-8 h-4' },
    { name: '12', value: '48px', class: 'w-12 h-4' },
    { name: '16', value: '64px', class: 'w-16 h-4' },
    { name: '24', value: '96px', class: 'w-24 h-4' },
  ];

  const borderRadius = [
    { name: 'none', value: '0px', class: 'rounded-none' },
    { name: 'sm', value: '2px', class: 'rounded-sm' },
    { name: 'default', value: '4px', class: 'rounded' },
    { name: 'md', value: '6px', class: 'rounded-md' },
    { name: 'lg', value: '8px', class: 'rounded-lg' },
    { name: 'xl', value: '12px', class: 'rounded-xl' },
    { name: '2xl', value: '16px', class: 'rounded-2xl' },
    { name: 'full', value: '9999px', class: 'rounded-full' },
  ];

  const shadows = [
    { name: 'sm', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)', class: 'shadow-sm' },
    { name: 'default', value: '0 1px 3px 0 rgb(0 0 0 / 0.1)', class: 'shadow' },
    { name: 'md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1)', class: 'shadow-md' },
    { name: 'lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1)', class: 'shadow-lg' },
    { name: 'xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1)', class: 'shadow-xl' },
  ];

  return (
    <section id="tokens">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Design Tokens</h2>
        <p className="text-gray-600">
          Quick reference for design tokens including colors, spacing, and other values.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Color Tokens</h3>
          <div className="space-y-3">
            {colorTokens.map((token, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className={`${token.class} w-12 h-12 rounded-lg border border-gray-200`} />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-900">{token.name}</span>
                    <code className="text-gray-600 bg-white px-2 py-0.5 rounded border">{token.value}</code>
                  </div>
                  <p className="text-gray-600 mt-1">{token.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8">
            <h3 className="text-gray-900 mb-6">Spacing Scale</h3>
            <div className="space-y-3">
              {spacingTokens.map((token, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-16 text-gray-900">
                    <code>{token.name}</code>
                  </div>
                  <div className={`${token.class} bg-[#0EA5E9]`} />
                  <div className="text-gray-600">{token.value}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-gray-900 mb-6">Border Radius</h3>
            <div className="space-y-3">
              {borderRadius.map((token, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-16 text-gray-900">
                    <code>{token.name}</code>
                  </div>
                  <div className={`${token.class} w-12 h-12 bg-[#0EA5E9]`} />
                  <div className="text-gray-600">{token.value}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Shadows</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {shadows.map((token, idx) => (
              <div key={idx} className="space-y-3">
                <div className={`${token.class} bg-white rounded-lg p-6 border`}>
                  <div className="text-center text-gray-900">{token.name}</div>
                </div>
                <div className="text-gray-600">
                  <code className="text-xs break-all">{token.value}</code>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">CSS Variables Reference</h3>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-gray-100">
              <code>{`/* Primary Color (Blue) */
.bg-primary { background-color: #0EA5E9; }
.text-primary { color: #0EA5E9; }
.border-primary { border-color: #0EA5E9; }
.hover\\:bg-primary-dark:hover { background-color: #0284C7; }

/* Accent Color (Orange) */
.bg-accent { background-color: #FF6B2C; }
.text-accent { color: #FF6B2C; }
.border-accent { border-color: #FF6B2C; }
.hover\\:bg-accent-dark:hover { background-color: #FF5A1A; }

/* Text Colors */
.text-default { color: #111827; }
.text-secondary { color: #4B5563; }
.text-muted { color: #9CA3AF; }

/* Usage in Tailwind */
<Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
  Primary Action
</Button>

<Button className="bg-[#FF6B2C] hover:bg-[#FF5A1A]">
  Accent Action
</Button>

<div className="bg-[#0EA5E9] text-white px-4 py-2 rounded-lg">
  Primary Badge
</div>`}</code>
            </pre>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Responsive Breakpoints</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <code className="text-gray-900">sm:</code>
                <span className="text-gray-600 ml-3">640px and up</span>
              </div>
              <span className="text-gray-500">Small devices (mobile landscape)</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <code className="text-gray-900">md:</code>
                <span className="text-gray-600 ml-3">768px and up</span>
              </div>
              <span className="text-gray-500">Medium devices (tablets)</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <code className="text-gray-900">lg:</code>
                <span className="text-gray-600 ml-3">1024px and up</span>
              </div>
              <span className="text-gray-500">Large devices (laptops)</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <code className="text-gray-900">xl:</code>
                <span className="text-gray-600 ml-3">1280px and up</span>
              </div>
              <span className="text-gray-500">Extra large devices (desktops)</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <code className="text-gray-900">2xl:</code>
                <span className="text-gray-600 ml-3">1536px and up</span>
              </div>
              <span className="text-gray-500">2X large devices (large desktops)</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
