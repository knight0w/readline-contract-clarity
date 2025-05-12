
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TermItem {
  label: string;
  value: string;
}

const TermsOverviewCard = () => {
  const terms: TermItem[] = [
    { label: 'Average Advance', value: '$4,250' },
    { label: 'Average Royalty %', value: '8.5%' },
    { label: 'Average Publishing %', value: '22%' },
    { label: 'Average Term Length', value: '3.2 years' },
  ];

  return (
    <Card className="bg-readline-dark/80 border-gray-800/50 shadow-lg">
      <CardHeader className="border-b border-gray-800/50 py-3 px-4">
        <CardTitle className="text-sm font-medium text-white">Average Key Terms</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {terms.map((term, index) => (
            <div key={index} className="space-y-0.5">
              <p className="text-gray-400 text-[10px]">{term.label}</p>
              <p className="text-base font-semibold text-white">{term.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TermsOverviewCard;
