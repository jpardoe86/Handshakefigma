import { Card } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Switch } from '../ui/switch';
import { Slider } from '../ui/slider';
import { Label } from '../ui/label';
import { Calendar } from '../ui/calendar';
import { useState } from 'react';

export function SelectorsSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section id="selectors">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Selectors & Pickers</h2>
        <p className="text-gray-600">
          Dropdowns, checkboxes, radio buttons, switches, and date pickers.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Select Dropdown</h3>
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label>Default Select</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                  <SelectItem value="option4">Option 4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Industry</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Checkboxes</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer">
                Accept terms and conditions
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="marketing" defaultChecked />
              <Label htmlFor="marketing" className="cursor-pointer">
                Send me marketing emails
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled" className="cursor-not-allowed opacity-50">
                Disabled checkbox
              </Label>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Radio Groups</h3>
          <div className="space-y-4">
            <Label>Select your plan</Label>
            <RadioGroup defaultValue="pro">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="free" />
                <Label htmlFor="free" className="cursor-pointer">
                  Free Plan
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pro" id="pro" />
                <Label htmlFor="pro" className="cursor-pointer">
                  Pro Plan
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="enterprise" id="enterprise" />
                <Label htmlFor="enterprise" className="cursor-pointer">
                  Enterprise Plan
                </Label>
              </div>
            </RadioGroup>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Switches</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between max-w-md">
              <Label htmlFor="notifications">Enable notifications</Label>
              <Switch id="notifications" />
            </div>
            <div className="flex items-center justify-between max-w-md">
              <Label htmlFor="auto-reply">Auto-reply</Label>
              <Switch id="auto-reply" defaultChecked />
            </div>
            <div className="flex items-center justify-between max-w-md">
              <Label htmlFor="disabled-switch" className="opacity-50">Disabled switch</Label>
              <Switch id="disabled-switch" disabled />
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Slider</h3>
          <div className="space-y-6 max-w-md">
            <div className="space-y-2">
              <Label>Volume</Label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <Label>Price Range</Label>
              <Slider defaultValue={[25, 75]} max={100} step={1} />
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Date Picker</h3>
          <div className="inline-block">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
