
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

  return (
    <Card className="bg-readline-dark border-gray-800">
      <CardHeader className="border-b border-gray-800">
        <CardTitle className="text-xl text-white">Contract Risk Snapshot</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} contracts`, 'Count']}
                contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                formatter={(value) => <span style={{ color: '#ccc' }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContractRiskChart;
