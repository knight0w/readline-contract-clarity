
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  className?: string;
}

const StatCard = ({ title, value, change, trend, icon, className }: StatCardProps) => {
  return (
    <Card className={`bg-readline-dark border-gray-800 ${className || ''}`}>
      <CardContent className="pt-6">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-400">{title}</p>
            <h3 className="text-2xl font-bold mt-1 text-white">{value}</h3>
            
            <div className="flex items-center mt-2">
              {trend === 'up' && (
                <span className="text-green-500 flex items-center text-sm">
                  <ArrowUp size={16} className="mr-1" />
                  {change}
                </span>
              )}
              {trend === 'down' && (
                <span className="text-red-500 flex items-center text-sm">
                  <ArrowDown size={16} className="mr-1" />
                  {change}
                </span>
              )}
              {trend === 'neutral' && (
                <span className="text-gray-400 text-sm">{change}</span>
              )}
              <span className="text-gray-500 text-xs ml-2">vs last month</span>
            </div>
          </div>
          
          <div className="h-12 w-12 rounded-lg bg-readline-teal/10 flex items-center justify-center">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
