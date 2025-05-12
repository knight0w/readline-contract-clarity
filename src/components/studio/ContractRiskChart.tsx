
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from 'lucide-react';

interface RiskData {
  name: string;
  value: number;
  color: string;
}

const ContractRiskChart = () => {
  const data: RiskData[] = [
    { name: 'High Risk', value: 5, color: '#ea384c' },
    { name: 'Medium Risk', value: 8, color: '#f59e0b' },
    { name: 'Low Risk', value: 12, color: '#10b981' },
  ];

  const totalSavings = 707500;
  const formattedSavings = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(totalSavings);

  return (
    <Card className="bg-readline-dark border-gray-800">
      <CardHeader className="border-b border-gray-800">
        <CardTitle className="text-lg text-white">Contract Risk Snapshot</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="40%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    stroke="transparent"
                  />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} contracts`, 'Count']}
                contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', borderRadius: '4px', fontSize: '12px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                formatter={(value) => <span style={{ color: '#ccc', fontSize: '12px' }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-3 border-t border-gray-800 pt-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-gray-400 text-xs">Money Saved</p>
              <p className="text-xl font-semibold text-white">{formattedSavings}</p>
            </div>
            <div className="h-10 w-10 rounded-lg bg-readline-teal/10 flex items-center justify-center">
              <BarChart className="text-readline-teal" size={18} />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center text-xs">
              <span className="text-green-500">+$44,500</span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContractRiskChart;
