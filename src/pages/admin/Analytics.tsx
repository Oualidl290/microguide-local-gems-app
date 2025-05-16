
import React from 'react';
import { PageLayout, PageHeader } from '@/components/layouts/PageLayout';
import AdminLayout from './layout/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';

const AdminAnalytics = () => {
  return (
    <AdminLayout>
      <PageLayout>
        <PageHeader 
          title="Analytics" 
          description="Platform-wide analytics and statistics"
        />
        
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-muted-foreground">Analytics dashboard will be implemented here</p>
          </CardContent>
        </Card>
      </PageLayout>
    </AdminLayout>
  );
};

export default AdminAnalytics;
