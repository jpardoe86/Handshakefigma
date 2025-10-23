import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Search, Mail, Lock } from 'lucide-react';

export function InputsSection() {
  return (
    <section id="inputs">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Inputs & Text Fields</h2>
        <p className="text-gray-600">
          Text inputs, text areas, and input variations for forms.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Text Inputs</h3>
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label>Default Input</Label>
              <Input placeholder="Enter text here..." />
            </div>

            <div className="space-y-2">
              <Label>Email Input</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="email" placeholder="email@example.com" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Password Input</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="password" placeholder="Enter password" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Search Input</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search..." className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Disabled Input</Label>
              <Input placeholder="Disabled input" disabled />
            </div>

            <div className="space-y-2">
              <Label>Input with Error</Label>
              <Input placeholder="Invalid input" className="border-red-500 focus-visible:ring-red-500" />
              <p className="text-red-500">This field is required</p>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Text Area</h3>
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label>Default Textarea</Label>
              <Textarea placeholder="Enter your message here..." rows={4} />
            </div>

            <div className="space-y-2">
              <Label>Textarea with Character Count</Label>
              <Textarea placeholder="Maximum 500 characters..." rows={4} />
              <p className="text-gray-500">0 / 500 characters</p>
            </div>

            <div className="space-y-2">
              <Label>Disabled Textarea</Label>
              <Textarea placeholder="Disabled textarea" disabled rows={3} />
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Input Sizes</h3>
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label>Small Input</Label>
              <Input placeholder="Small size" className="h-8" />
            </div>
            <div className="space-y-2">
              <Label>Default Input</Label>
              <Input placeholder="Default size" />
            </div>
            <div className="space-y-2">
              <Label>Large Input</Label>
              <Input placeholder="Large size" className="h-12" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
