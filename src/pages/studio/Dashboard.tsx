
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, BarChart, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import RecentDocumentTable from '@/components/studio/RecentDocumentTable';
import StatCard from '@/components/studio/StatCard';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Welcome back, John</h1>
          <p className="text-gray-400 mt-1">Here's what's happening with your documents.</p>
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <Link to="/studio/upload" className="bg-readline-teal text-readline-dark hover:bg-readline-teal/90">
              <Upload className="mr-2" size={18} />
              Upload Document
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <StatCard 
          title="Documents Analyzed"
          value="1,415"
          change="+89"
          trend="up"
          icon={<LineChart className="text-readline-teal" />}
        />
        <StatCard 
          title="Money Saved"
          value="$24,500"
          change="+$3,840"
          trend="up"
          icon={<BarChart className="text-readline-teal" />}
        />
        <StatCard 
          title="Success Rate"
          value="52%"
          change="+5%"
          trend="up"
          icon={<BarChart className="text-readline-teal" />}
          className="glass-gradient"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="bg-readline-dark border-gray-800">
          <CardHeader className="border-b border-gray-800">
            <CardTitle className="text-xl text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <RecentDocumentTable limit={5} />
          </CardContent>
        </Card>

        <Card className="bg-readline-dark border-gray-800">
          <CardHeader className="border-b border-gray-800">
            <CardTitle className="text-xl text-white">Contract Analysis</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[300px] flex items-center justify-center">
              {/* Placeholder for chart */}
              <div className="text-gray-500">Chart coming soon</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
