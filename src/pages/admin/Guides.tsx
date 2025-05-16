
import React from 'react';
import { PageLayout, PageHeader } from '@/components/layouts/PageLayout';
import AdminLayout from './layout/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';

const AdminGuides = () => {
  return (
    <AdminLayout>
      <PageLayout>
        <PageHeader 
          title="Guide Management" 
          description="View and manage all guides on the platform"
        />
        
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-muted-foreground">Guide management interface will be implemented here</p>
          </CardContent>
        </Card>
      </PageLayout>
    </AdminLayout>
  );
};

export default AdminGuides;
