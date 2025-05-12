
import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

const StudioHeader = () => {
  return (
    <header className="border-b border-gray-800/50 bg-readline-dark/80 py-3 px-4">
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-7 text-xs text-gray-400 hover:text-white">
            <HelpCircle className="mr-1" size={14} />
            Help
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-readline-teal flex items-center justify-center">
              <span className="font-medium text-readline-dark text-xs">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StudioHeader;
