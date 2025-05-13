
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ColorSwatch = ({ name, color, textColor = "text-white" }: { name: string; color: string; textColor?: string }) => (
  <div className="flex flex-col gap-2">
    <div className={`h-16 w-full rounded-md ${color} flex items-end p-2`}>
      <span className={`text-xs font-medium ${textColor}`}>{name}</span>
    </div>
  </div>
);

const TypographySample = ({ name, className }: { name: string; className: string }) => (
  <div className="flex items-center justify-between py-2">
    <span className={`${className}`}>The quick brown fox jumps over the lazy dog</span>
    <span className="text-sm text-muted-foreground">{name}</span>
  </div>
);

const RadiusSample = ({ name, radius }: { name: string; radius: string }) => (
  <div className="flex flex-col items-center gap-1">
    <div className={`h-16 w-16 bg-blue-500 ${radius}`}></div>
    <span className="text-xs">{name}</span>
  </div>
);

export function DesignTokens() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div>
        <h2 className="text-2xl font-semibold mb-4">MicroGuide Design System</h2>
        <p className="text-muted-foreground mb-8">
          A clean, modern design system inspired by Meta UI.
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold mb-4">Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Primary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ColorSwatch name="primary" color="bg-primary" />
              <ColorSwatch name="primary-foreground" color="bg-primary-foreground" textColor="text-primary" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Secondary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ColorSwatch name="secondary" color="bg-secondary" textColor="text-secondary-foreground" />
              <ColorSwatch name="secondary-foreground" color="bg-secondary-foreground" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Accent</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ColorSwatch name="accent" color="bg-accent" textColor="text-accent-foreground" />
              <ColorSwatch name="accent-foreground" color="bg-accent-foreground" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Destructive</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ColorSwatch name="destructive" color="bg-destructive" />
              <ColorSwatch name="destructive-foreground" color="bg-destructive-foreground" textColor="text-destructive" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Muted</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ColorSwatch name="muted" color="bg-muted" textColor="text-muted-foreground" />
              <ColorSwatch name="muted-foreground" color="bg-muted-foreground" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Card</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ColorSwatch name="card" color="bg-card" textColor="text-card-foreground" />
              <ColorSwatch name="card-foreground" color="bg-card-foreground" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Blue Scale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-5 gap-1">
                <div className="h-8 bg-blue-50 rounded-l-md"></div>
                <div className="h-8 bg-blue-200"></div>
                <div className="h-8 bg-blue-400"></div>
                <div className="h-8 bg-blue-600"></div>
                <div className="h-8 bg-blue-800 rounded-r-md"></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Gray Scale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-5 gap-1">
                <div className="h-8 bg-gray-50 rounded-l-md"></div>
                <div className="h-8 bg-gray-200"></div>
                <div className="h-8 bg-gray-400"></div>
                <div className="h-8 bg-gray-600"></div>
                <div className="h-8 bg-gray-800 rounded-r-md"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section>
        <h3 className="text-xl font-semibold mb-4">Typography</h3>
        <Card>
          <CardHeader>
            <CardTitle>Font Scale</CardTitle>
            <CardDescription>Inter font with various size options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <TypographySample name="text-xs" className="text-xs" />
            <TypographySample name="text-sm" className="text-sm" />
            <TypographySample name="text-base" className="text-base" />
            <TypographySample name="text-lg" className="text-lg" />
            <TypographySample name="text-xl" className="text-xl" />
            <TypographySample name="text-2xl" className="text-2xl" />
            <TypographySample name="text-3xl" className="text-3xl" />
            <TypographySample name="text-4xl" className="text-4xl" />
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section>
        <h3 className="text-xl font-semibold mb-4">Border Radius</h3>
        <div className="flex flex-wrap gap-6">
          <RadiusSample name="rounded-sm" radius="rounded-sm" />
          <RadiusSample name="rounded-md" radius="rounded-md" />
          <RadiusSample name="rounded-lg" radius="rounded-lg" />
          <RadiusSample name="rounded-xl" radius="rounded-xl" />
          <RadiusSample name="rounded-2xl" radius="rounded-2xl" />
          <RadiusSample name="rounded-full" radius="rounded-full" />
        </div>
      </section>

      <Separator />

      <section>
        <h3 className="text-xl font-semibold mb-4">Shadows</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="h-24 w-24 bg-card rounded-xl shadow-sm flex items-center justify-center">shadow-sm</div>
            <span className="text-xs">shadow-sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-24 w-24 bg-card rounded-xl shadow flex items-center justify-center">shadow</div>
            <span className="text-xs">shadow (default)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-24 w-24 bg-card rounded-xl shadow-md flex items-center justify-center">shadow-md</div>
            <span className="text-xs">shadow-md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-24 w-24 bg-card rounded-xl shadow-lg flex items-center justify-center">shadow-lg</div>
            <span className="text-xs">shadow-lg</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DesignTokens;
