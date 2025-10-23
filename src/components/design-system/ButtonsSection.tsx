import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight, Download, Plus, Trash2, Settings } from 'lucide-react';

export function ButtonsSection() {
  return (
    <section id="buttons">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Buttons</h2>
        <p className="text-gray-600">
          Button variants, sizes, and states for different use cases.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Primary Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
              Primary Action
            </Button>
            <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
              <Plus className="mr-2 h-4 w-4" />
              With Icon
            </Button>
            <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
              Action
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Accent Buttons</h3>
          <p className="text-gray-600 mb-4">Use orange for special actions, highlights, or call-outs that need extra attention.</p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#FF6B2C] hover:bg-[#FF5A1A]">
              Special Action
            </Button>
            <Button className="bg-[#FF6B2C] hover:bg-[#FF5A1A]">
              <Plus className="mr-2 h-4 w-4" />
              Create New
            </Button>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Secondary Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">
              Outline Button
            </Button>
            <Button variant="outline" className="border-2 border-gray-900">
              Bold Outline
            </Button>
            <Button variant="ghost">
              Ghost Button
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Button Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" className="bg-[#0EA5E9] hover:bg-[#0284C7]">
              Small
            </Button>
            <Button size="default" className="bg-[#0EA5E9] hover:bg-[#0284C7]">
              Default
            </Button>
            <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0284C7]">
              Large
            </Button>
            <Button size="icon" className="bg-[#0EA5E9] hover:bg-[#0284C7]">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Button States</h3>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
              Default
            </Button>
            <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]" disabled>
              Disabled
            </Button>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Destructive
            </Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Full Width Buttons</h3>
          <div className="space-y-3 max-w-md">
            <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7]">
              Full Width Primary
            </Button>
            <Button className="w-full bg-[#FF6B2C] hover:bg-[#FF5A1A]">
              Full Width Accent
            </Button>
            <Button className="w-full" variant="outline">
              Full Width Outline
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
