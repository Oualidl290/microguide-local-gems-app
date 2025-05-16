
import React from 'react';
import { PageLayout, PageHeader } from '@/components/layouts/PageLayout';
import AdminLayout from './layout/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const AdminUsers = () => {
  return (
    <AdminLayout>
      <PageLayout>
        <PageHeader 
          title="User Management" 
          description="View and manage all users on the platform"
        />
        
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search users..." className="pl-8" />
          </div>
          <Button>Export Users</Button>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left font-medium">User</th>
                    <th className="px-4 py-3 text-left font-medium">Email</th>
                    <th className="px-4 py-3 text-left font-medium">Guides</th>
                    <th className="px-4 py-3 text-left font-medium">Joined</th>
                    <th className="px-4 py-3 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3">John Doe</td>
                    <td className="px-4 py-3">john@example.com</td>
                    <td className="px-4 py-3">5</td>
                    <td className="px-4 py-3">May 15, 2025</td>
                    <td className="px-4 py-3">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Jane Smith</td>
                    <td className="px-4 py-3">jane@example.com</td>
                    <td className="px-4 py-3">3</td>
                    <td className="px-4 py-3">May 12, 2025</td>
                    <td className="px-4 py-3">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </PageLayout>
    </AdminLayout>
  );
};

export default AdminUsers;
