
import React from 'react';
import { PageLayout, PageHeader } from '@/components/layouts/PageLayout';
import AdminLayout from './layout/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';

const AdminSettings = () => {
  return (
    <AdminLayout>
      <PageLayout>
        <PageHeader 
          title="Platform Settings" 
          description="Configure platform-wide settings"
        />
        
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-muted-foreground">Platform settings interface will be implemented here</p>
          </CardContent>
        </Card>
      </PageLayout>
    </AdminLayout>
  );
};

export default AdminSettings;
