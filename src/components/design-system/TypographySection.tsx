import { Card } from '../ui/card';

export function TypographySection() {
  return (
    <section id="typography">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Typography</h2>
        <p className="text-gray-600">
          Typography scale and usage examples across the design system.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Headings</h3>
          <div className="space-y-4">
            <div>
              <h1 className="text-gray-900">Heading 1 - Hero Title</h1>
              <p className="text-gray-500 mt-1">Use for main page titles and hero sections</p>
            </div>
            <div>
              <h2 className="text-gray-900">Heading 2 - Section Title</h2>
              <p className="text-gray-500 mt-1">Use for major section headings</p>
            </div>
            <div>
              <h3 className="text-gray-900">Heading 3 - Subsection Title</h3>
              <p className="text-gray-500 mt-1">Use for subsections and card titles</p>
            </div>
            <div>
              <h4 className="text-gray-900">Heading 4 - Component Title</h4>
              <p className="text-gray-500 mt-1">Use for smaller component headings</p>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Body Text</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-900">
                Body Large - This is the large body text style used for important content and introductions.
              </p>
              <p className="text-gray-500 mt-1">18px / 1.6 line-height</p>
            </div>
            <div>
              <p className="text-gray-600">
                Body Regular - This is the regular body text style used for most content throughout the application.
              </p>
              <p className="text-gray-500 mt-1">16px / 1.5 line-height</p>
            </div>
            <div>
              <p className="text-gray-500">
                Body Small - This is the small body text style used for captions and secondary information.
              </p>
              <p className="text-gray-500 mt-1">14px / 1.4 line-height</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
