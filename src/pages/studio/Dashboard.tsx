
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Upload, BarChart, LineChart, Search, FileText, FilePlus, ClockIcon, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import RecentDocumentTable from '@/components/studio/RecentDocumentTable';
import StatCard from '@/components/studio/StatCard';
import ContractRiskChart from '@/components/studio/ContractRiskChart';
import TermsOverviewCard from '@/components/studio/TermsOverviewCard';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Welcome back John</h1>
          <p className="text-gray-400 mt-1">Here's what's happening with your documents</p>
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <Link to="/studio/upload" className="bg-readline-teal text-readline-dark hover:bg-readline-teal/90">
              <Upload className="mr-2" size={18} />
              Upload Contract
            </Link>
          </Button>
          <Button variant="outline" className="border-readline-teal text-readline-teal">
            <FilePlus className="mr-2" size={18} />
            Draft Contract
            <span className="ml-2 text-xs bg-gray-700 px-1.5 py-0.5 rounded">PRO</span>
          </Button>
        </div>
      </div>
      
      {/* Global Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input 
          className="pl-10 bg-gray-800 border-gray-700 text-white w-full" 
          placeholder="Search across all contracts, artists, labels, or contract text..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
          value="$707,500"
          change="+$44,500"
          trend="up"
          icon={<BarChart className="text-readline-teal" />}
        />
        <StatCard 
          title="Success Rate"
          value="52%"
          change="+5%"
          trend="up"
          icon={<BarChart className="text-readline-teal" />}
        />
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <ContractRiskChart />
        <TermsOverviewCard />
      </div>

      <div className="grid gap-6 grid-cols-1">
        <Card className="bg-readline-dark border-gray-800">
          <CardHeader className="border-b border-gray-800 flex flex-row justify-between items-center">
            <CardTitle className="text-xl text-white">Recent Contracts</CardTitle>
            <Button variant="outline" size="sm" className="border-readline-teal text-readline-teal">
              <ClockIcon className="mr-1" size={16} />
              Pending Contracts
            </Button>
          </CardHeader>
          <CardContent className="pt-6">
            <RecentDocumentTable limit={5} />
            <div className="mt-4 flex justify-end">
              <Button variant="ghost" asChild>
                <Link to="/studio/contracts" className="text-readline-teal hover:text-readline-teal/90">
                  View All Contracts
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {/* Subscription Status */}
        <Card className="bg-readline-dark border-gray-800">
          <CardHeader className="border-b border-gray-800">
            <CardTitle className="text-xl text-white">Subscription Status</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Current Plan</p>
                <p className="text-lg text-white font-semibold">Professional</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Usage This Month</p>
                <div className="h-2 w-full bg-gray-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-readline-teal rounded-full" style={{ width: '65%' }} />
                </div>
                <p className="text-sm text-gray-400 mt-1">65% (13/20 contracts)</p>
              </div>
              <Button variant="outline" className="w-full border-readline-teal text-readline-teal">
                Upgrade Plan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help & Resources */}
        <Card className="bg-readline-dark border-gray-800">
          <CardHeader className="border-b border-gray-800">
            <CardTitle className="text-xl text-white">Help & Resources</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start text-white">
                <FileText className="mr-2 text-readline-teal" size={16} />
                Documentation
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white">
                <FileText className="mr-2 text-readline-teal" size={16} />
                Tutorial Videos
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white">
                <FileText className="mr-2 text-readline-teal" size={16} />
                Contract Templates
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white">
                <FileText className="mr-2 text-readline-teal" size={16} />
                Support Center
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Artist Management - Pro Feature */}
        <Card className="bg-readline-dark border-gray-800 relative">
          <div className="absolute -top-2 -right-2 bg-readline-teal text-readline-dark px-2 py-1 rounded text-xs font-medium">
            EXECUTIVE TIER
          </div>
          <CardHeader className="border-b border-gray-800">
            <CardTitle className="text-xl text-white">Artist Management</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">JS</div>
                  <span className="ml-2 text-white">John Smith</span>
                </div>
                <Badge className="bg-green-500/20 text-green-400">8 Contracts</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium">TW</div>
                  <span className="ml-2 text-white">The Weekenders</span>
                </div>
                <Badge className="bg-green-500/20 text-green-400">5 Contracts</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-medium">EJ</div>
                  <span className="ml-2 text-white">Emily Johnson</span>
                </div>
                <Badge className="bg-green-500/20 text-green-400">3 Contracts</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4 border-gray-700 text-gray-300">
              <Users className="mr-2" size={16} />
              Manage Artists
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
