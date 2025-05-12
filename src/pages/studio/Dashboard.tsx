
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Upload, Search, FileText, FilePlus, ClockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import RecentDocumentTable from '@/components/studio/RecentDocumentTable';
import ContractRiskChart from '@/components/studio/ContractRiskChart';
import TermsOverviewCard from '@/components/studio/TermsOverviewCard';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-xl font-semibold text-white">Welcome back John</h1>
          <p className="text-gray-400 text-xs mt-0.5">Here's what's happening with your documents</p>
        </div>
        <div className="flex gap-2">
          <Button asChild size="sm">
            <Link to="/studio/upload" className="bg-readline-teal text-readline-dark hover:bg-readline-teal/90 text-xs">
              <Upload className="mr-1.5" size={14} />
              Upload Contract
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="border-readline-teal text-readline-teal text-xs">
            <FilePlus className="mr-1.5" size={14} />
            Draft Contract
            <span className="ml-1.5 text-xs bg-gray-700 px-1 py-0.5 rounded">PRO</span>
          </Button>
        </div>
      </div>
      
      {/* Global Search - Made more compact */}
      <div className="relative mb-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
        <Input 
          className="pl-9 bg-gray-800/50 border-gray-700 text-white w-full text-xs py-1.5 h-auto" 
          placeholder="Search across all contracts, artists, labels, or contract text..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Main Dashboard Cards - Better grid layout */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="bg-readline-dark/80 border-gray-800/50 shadow-lg">
            <CardHeader className="border-b border-gray-800/50 py-3 px-4">
              <CardTitle className="text-sm font-medium text-white">Recent Contracts</CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <RecentDocumentTable limit={5} />
              <div className="mt-2 flex justify-end">
                <Button variant="ghost" asChild size="sm" className="h-7">
                  <Link to="/studio/contracts" className="text-readline-teal hover:text-readline-teal/90 text-xs">
                    View All Contracts
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <ContractRiskChart />
          <TermsOverviewCard />
        </div>
      </div>

      {/* Bottom Section - 3-column grid */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {/* Subscription Status */}
        <Card className="bg-readline-dark/80 border-gray-800/50 shadow-lg">
          <CardHeader className="border-b border-gray-800/50 py-3 px-4">
            <CardTitle className="text-sm font-medium text-white">Subscription Status</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs">Current Plan</p>
                <p className="text-sm text-white font-medium">Professional</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Usage This Month</p>
                <div className="h-1.5 w-full bg-gray-800 rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-readline-teal rounded-full" style={{ width: '65%' }} />
                </div>
                <p className="text-xs text-gray-400 mt-1">65% (13/20 contracts)</p>
              </div>
              <Button variant="outline" size="sm" className="w-full border-readline-teal text-readline-teal text-xs h-7">
                Upgrade Plan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help & Resources */}
        <Card className="bg-readline-dark/80 border-gray-800/50 shadow-lg">
          <CardHeader className="border-b border-gray-800/50 py-3 px-4">
            <CardTitle className="text-sm font-medium text-white">Help & Resources</CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            <div className="space-y-0.5">
              <Button variant="ghost" size="sm" className="w-full justify-start text-white text-xs h-7">
                <FileText className="mr-2 text-readline-teal" size={12} />
                Documentation
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-white text-xs h-7">
                <FileText className="mr-2 text-readline-teal" size={12} />
                Tutorial Videos
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-white text-xs h-7">
                <FileText className="mr-2 text-readline-teal" size={12} />
                Contract Templates
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-white text-xs h-7">
                <FileText className="mr-2 text-readline-teal" size={12} />
                Support Center
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Artist Management - Pro Feature */}
        <Card className="bg-readline-dark/80 border-gray-800/50 shadow-lg relative">
          <div className="absolute -top-2 -right-2 bg-readline-teal text-readline-dark px-1.5 py-0.5 rounded text-[10px] font-medium">
            EXECUTIVE TIER
          </div>
          <CardHeader className="border-b border-gray-800/50 py-3 px-4">
            <CardTitle className="text-sm font-medium text-white">Artist Management</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between p-2 bg-gray-800/30 rounded">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-xs">JS</div>
                  <span className="ml-2 text-white text-xs">John Smith</span>
                </div>
                <Badge className="bg-green-500/20 text-green-400 text-[10px] h-4 px-1.5">8 Contracts</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-800/30 rounded">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium text-xs">TW</div>
                  <span className="ml-2 text-white text-xs">The Weekenders</span>
                </div>
                <Badge className="bg-green-500/20 text-green-400 text-[10px] h-4 px-1.5">5 Contracts</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-800/30 rounded">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white font-medium text-xs">EJ</div>
                  <span className="ml-2 text-white text-xs">Emily Johnson</span>
                </div>
                <Badge className="bg-green-500/20 text-green-400 text-[10px] h-4 px-1.5">3 Contracts</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-3 border-gray-700 text-gray-300 text-xs h-7">
              Manage Artists
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
