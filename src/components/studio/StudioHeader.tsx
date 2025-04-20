
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const StudioHeader = () => {
  return (
    <header className="border-b border-gray-800 bg-readline-dark p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              className="pl-10 bg-gray-800 border-gray-700 text-white" 
              placeholder="Search contracts, clauses, artists..." 
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-readline-teal text-readline-teal">
            Help
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-readline-teal flex items-center justify-center">
              <span className="font-medium text-readline-dark">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StudioHeader;
