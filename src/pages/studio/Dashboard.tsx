
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, FileText, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import RecentDocumentTable from '@/components/studio/RecentDocumentTable';
import StatCard from '@/components/studio/StatCard';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="flex gap-3">
          <Button asChild>
            <Link to="/studio/upload">
              <Upload className="mr-2" size={18} />
              Upload Document
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Documents Analyzed" 
          value="42" 
          change="+8" 
          trend="up" 
          icon={<FileText className="text-readline-teal" />} 
        />
        
        <StatCard 
          title="Money Saved" 
          value="$12,450" 
          change="+$3,200" 
          trend="up" 
          icon={<BarChart className="text-readline-teal" />} 
        />
        
        <StatCard 
          title="Royalty Improvement" 
          value="15%" 
          change="+3%" 
          trend="up" 
          icon={<BarChart className="text-readline-teal" />} 
        />
      </div>

      <Card className="bg-readline-dark border-gray-800">
        <CardHeader className="border-b border-gray-800">
          <CardTitle className="text-xl text-white">Recent Documents</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Documents</TabsTrigger>
              <TabsTrigger value="record">Record Deals</TabsTrigger>
              <TabsTrigger value="publishing">Publishing</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <RecentDocumentTable />
            </TabsContent>
            <TabsContent value="record">
              <RecentDocumentTable filter="record" />
            </TabsContent>
            <TabsContent value="publishing">
              <RecentDocumentTable filter="publishing" />
            </TabsContent>
            <TabsContent value="management">
              <RecentDocumentTable filter="management" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
