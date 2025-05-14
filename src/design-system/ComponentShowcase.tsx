
import React, { useState } from 'react';
import ComponentExamples from './ComponentExamples';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MicroGuideModal, ModalFooter } from '@/components/ui/micro-guide-modal';
import { Button } from '@/components/ui/button';
import { MicroGuideSidebar } from '@/components/layouts/MicroGuideSidebar';
import { useToast } from '@/hooks/use-toast';

export default function ComponentShowcase() {
  const { toast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Demo functions
  const showSuccessToast = () => {
    toast({
      title: "Success!",
      description: "Your guide has been published.",
    });
  };

  const showErrorToast = () => {
    toast({
      title: "Error!",
      description: "There was a problem publishing your guide.",
      variant: "destructive",
    });
  };
  
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div>
        <h2 className="text-2xl font-semibold mb-4">MicroGuide Components</h2>
        <p className="text-muted-foreground mb-8">
          UI components designed for the MicroGuide platform.
        </p>
      </div>

      <Tabs defaultValue="common">
        <TabsList className="mb-6">
          <TabsTrigger value="common">Common Components</TabsTrigger>
          <TabsTrigger value="specialized">Specialized Components</TabsTrigger>
          <TabsTrigger value="layout">Layout & Navigation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="common" className="space-y-8">
          <ComponentExamples />
        </TabsContent>
        
        <TabsContent value="specialized" className="space-y-8">
          <div className="space-y-6">
            <div className="bg-card rounded-lg border p-6 space-y-4">
              <h3 className="text-xl font-semibold">Modals</h3>
              <p className="text-muted-foreground">Modal dialogs for important actions.</p>
              
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                
                <MicroGuideModal
                  isOpen={modalOpen}
                  onClose={() => setModalOpen(false)}
                  title="Publish Guide"
                  description="Are you sure you want to publish this guide? It will be visible to everyone."
                  footer={
                    <ModalFooter 
                      onCancel={() => setModalOpen(false)} 
                      onConfirm={() => {
                        showSuccessToast();
                        setModalOpen(false);
                      }}
                      cancelText="Cancel"
                      confirmText="Publish Guide"
                    />
                  }
                >
                  <div className="space-y-4">
                    <p>Publishing this guide will make it visible to all MicroGuide users.</p>
                    <div className="rounded-md bg-muted p-4">
                      <p className="text-sm font-medium">Guide Details</p>
                      <ul className="mt-2 text-sm">
                        <li><strong>Title:</strong> Coffee Spots in SoHo</li>
                        <li><strong>Locations:</strong> 5 places</li>
                        <li><strong>Category:</strong> Food & Drink</li>
                      </ul>
                    </div>
                  </div>
                </MicroGuideModal>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border p-6 space-y-4">
              <h3 className="text-xl font-semibold">Toast Notifications</h3>
              <p className="text-muted-foreground">Temporary notifications for user feedback.</p>
              
              <div className="flex flex-wrap gap-4">
                <Button onClick={showSuccessToast}>Success Toast</Button>
                <Button variant="destructive" onClick={showErrorToast}>Error Toast</Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="layout" className="space-y-8">
          <div className="bg-card rounded-lg border p-6 space-y-4">
            <h3 className="text-xl font-semibold">Sidebar Navigation</h3>
            <p className="text-muted-foreground">Collapsible sidebar for desktop navigation.</p>
            
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
                  {sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => setSidebarCollapsed(false)}
                >
                  Reset
                </Button>
              </div>
              
              <div className="border rounded-lg overflow-hidden h-96">
                <div className="flex h-full">
                  <MicroGuideSidebar 
                    isCollapsed={sidebarCollapsed}
                    toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
                    role="user"
                  />
                  <div className="flex-1 p-4 bg-background">
                    <h4 className="text-lg font-medium mb-2">Main Content Area</h4>
                    <p className="text-muted-foreground text-sm">
                      This is where your main app content would appear.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden h-96 mt-8">
                <div className="flex h-full">
                  <MicroGuideSidebar 
                    isCollapsed={sidebarCollapsed}
                    toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
                    role="admin"
                  />
                  <div className="flex-1 p-4 bg-background">
                    <h4 className="text-lg font-medium mb-2">Admin Content Area</h4>
                    <p className="text-muted-foreground text-sm">
                      This is where admin-specific content would appear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
