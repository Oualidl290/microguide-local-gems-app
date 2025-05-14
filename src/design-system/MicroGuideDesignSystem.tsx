
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ThemeToggle } from '@/components/theme-toggle';
import DesignTokens from './DesignTokens';
import ComponentShowcase from './ComponentShowcase';
import RoleBasedUI from './RoleBasedUI';
import { PageLayout, PageHeader } from '@/components/layouts/PageLayout';

export default function MicroGuideDesignSystem() {
  return (
    <PageLayout>
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-semibold">MicroGuide Design System</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-6">
        <Tabs defaultValue="overview">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tokens">Design Tokens</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="ui-flows">UI Flows</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview">
            <div className="max-w-3xl space-y-8 py-8">
              <section>
                <h2 className="text-3xl font-semibold mb-4">MicroGuide Design System</h2>
                <p className="text-lg mb-4">
                  A comprehensive design system for creating consistent, accessible, and visually appealing interfaces for the MicroGuide platform.
                </p>
                <p className="mb-4">
                  This design system is inspired by Meta's clean and modern aesthetic, featuring a focused component library built on Tailwind CSS and shadcn/ui.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Design Principles</h3>
                <ul className="grid gap-4 sm:grid-cols-2">
                  <li className="bg-card p-4 rounded-lg border">
                    <h4 className="font-medium mb-2">Clean & Minimal</h4>
                    <p className="text-sm text-muted-foreground">Uncluttered interfaces with ample whitespace that focus on content.</p>
                  </li>
                  <li className="bg-card p-4 rounded-lg border">
                    <h4 className="font-medium mb-2">Consistent</h4>
                    <p className="text-sm text-muted-foreground">Predictable patterns and behaviors across all interfaces.</p>
                  </li>
                  <li className="bg-card p-4 rounded-lg border">
                    <h4 className="font-medium mb-2">Responsive</h4>
                    <p className="text-sm text-muted-foreground">Mobile-first approach ensuring great experiences on all devices.</p>
                  </li>
                  <li className="bg-card p-4 rounded-lg border">
                    <h4 className="font-medium mb-2">Accessible</h4>
                    <p className="text-sm text-muted-foreground">Designed for users of all abilities, following WCAG guidelines.</p>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Role-Based Architecture</h3>
                <div className="bg-card p-4 rounded-lg border">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="border border-border p-4 rounded-lg">
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded">User Role</span>
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Create and monetize local mini-guides</li>
                        <li>Track earnings from ads</li>
                        <li>Manage personal content</li>
                        <li>Public profile settings</li>
                      </ul>
                    </div>
                    <div className="border border-border p-4 rounded-lg">
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Admin Role</span>
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Full control over all guides</li>
                        <li>User management</li>
                        <li>Earnings data access</li>
                        <li>Ad approval system</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Usage Guidelines</h3>
                <div className="bg-card p-4 rounded-lg border">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Use primary buttons sparingly, only for the main action on a page.</li>
                    <li>Maintain consistent spacing using the provided spacing scale.</li>
                    <li>Use appropriate text colors for light and dark modes.</li>
                    <li>Keep interfaces simple and focused on the task at hand.</li>
                    <li>Ensure all interactive elements have appropriate hover and focus states.</li>
                    <li>Use semantic HTML elements and proper ARIA roles for accessibility.</li>
                    <li>Test designs across different screen sizes and devices.</li>
                  </ul>
                </div>
              </section>
            </div>
          </TabsContent>

          <TabsContent value="tokens">
            <DesignTokens />
          </TabsContent>

          <TabsContent value="components">
            <ComponentShowcase />
          </TabsContent>
          
          <TabsContent value="ui-flows">
            <RoleBasedUI />
          </TabsContent>
        </Tabs>
      </main>
    </PageLayout>
  );
}
