
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
    <Card className="bg-readline-dark border-gray-800">
      <CardHeader className="border-b border-gray-800">
        <CardTitle className="text-lg text-white">Average Key Terms</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-6">
          {terms.map((term, index) => (
            <div key={index} className="space-y-1">
              <p className="text-gray-400 text-xs">{term.label}</p>
              <p className="text-xl font-semibold text-white">{term.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TermsOverviewCard;
