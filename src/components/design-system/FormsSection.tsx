import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Switch } from '../ui/switch';

export function FormsSection() {
  return (
    <section id="forms">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Form Examples</h2>
        <p className="text-gray-600">
          Complete form layouts and patterns for common use cases.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Contact Form</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Company Name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="How can we help you?" rows={4} />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="contact-terms" />
              <Label htmlFor="contact-terms" className="cursor-pointer">
                I agree to the privacy policy
              </Label>
            </div>

            <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7]">
              Send Message
            </Button>
          </form>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Sign Up Form</h3>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email Address</Label>
              <Input id="signup-email" type="email" placeholder="you@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input id="signup-password" type="password" placeholder="••••••••" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" placeholder="••••••••" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="marketer">Marketer</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="founder">Founder</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="signup-terms" />
              <Label htmlFor="signup-terms" className="cursor-pointer">
                I agree to the terms and conditions
              </Label>
            </div>

            <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7]">
              Create Account
            </Button>

            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <a href="#" className="text-[#0EA5E9] hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Campaign Settings</h3>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="campaign-name">Campaign Name</Label>
              <Input id="campaign-name" placeholder="Q1 Outreach Campaign" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="target-audience">Target Audience</Label>
              <Select>
                <SelectTrigger id="target-audience">
                  <SelectValue placeholder="Select audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech-founders">Tech Founders</SelectItem>
                  <SelectItem value="marketers">Marketing Directors</SelectItem>
                  <SelectItem value="sales">Sales Leaders</SelectItem>
                  <SelectItem value="agencies">Agency Owners</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="daily-limit">Daily Send Limit</Label>
              <Input id="daily-limit" type="number" placeholder="50" />
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-followup">Enable Auto Follow-up</Label>
                <Switch id="auto-followup" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="personalization">AI Personalization</Label>
                <Switch id="personalization" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="analytics">Track Analytics</Label>
                <Switch id="analytics" defaultChecked />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1 bg-[#0EA5E9] hover:bg-[#0284C7]">
                Save Campaign
              </Button>
            </div>
          </form>
        </Card>

        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">Profile Settings</h3>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="display-name">Display Name</Label>
              <Input id="display-name" defaultValue="John Doe" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                placeholder="Tell us about yourself" 
                rows={3}
                defaultValue="Helping businesses grow through personalized outreach."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select>
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                  <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                  <SelectItem value="cst">Central Time (CT)</SelectItem>
                  <SelectItem value="est">Eastern Time (ET)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7]">
              Update Profile
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
