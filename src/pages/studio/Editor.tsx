
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Save } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

const Editor = () => {
  const { id } = useParams();
  // In a real app, we would fetch the document details using this id
  
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Edit: Record Deal - Universal Music</h1>
          <p className="text-gray-400 mt-1">Applying suggested changes with track changes</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-700">
            <Download className="mr-2" size={18} />
            Export DOCX
          </Button>
          
          <Button>
            <Save className="mr-2" size={18} />
            Save Changes
          </Button>
        </div>
      </div>
      
      <Card className="bg-readline-dark border-gray-800">
        <CardHeader className="border-b border-gray-800">
          <CardTitle className="text-xl">Changes in Progress</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <Progress value={65} className="h-3" />
          <div className="text-gray-400">
            <p>We're applying your requested changes to the document with track changes enabled.</p>
            <p className="mt-2">You'll be able to review all edits before finalizing the document.</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-readline-dark border-gray-800 min-h-[500px]">
        <CardHeader className="border-b border-gray-800">
          <CardTitle className="text-xl">Document Preview</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="bg-gray-900 p-6 rounded-lg min-h-[500px]">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">EXCLUSIVE RECORDING AGREEMENT</h2>
              <p className="text-gray-300 mb-2">This Agreement made as of April 15, 2023.</p>
              <p className="text-gray-300 mb-2">BETWEEN: UNIVERSAL MUSIC GROUP ("Company")</p>
              <p className="text-gray-300">AND: JOHN SMITH ("Artist")</p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-bold mb-2 text-white">1. TERM</h3>
              <p className="text-gray-300">The term of this Agreement shall commence upon execution and shall continue for a period of...</p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-bold mb-2 text-white">2. RECORDING COMMITMENT</h3>
              <p className="text-gray-300">During the Term, Artist shall record and deliver to Company...</p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-bold mb-2 text-white">3. ROYALTIES</h3>
              <div className="relative">
                <p className="text-gray-300">
                  Artist shall receive a royalty of <span className="line-through text-red-400">eighteen percent (18%)</span> 
                  <span className="text-green-400 ml-1">twenty-two percent (22%)</span> of the suggested retail list price for 
                  each record sold and paid for in the United States...
                </p>
                <div className="absolute right-0 top-0 bg-gray-800 p-2 rounded text-xs text-readline-teal border border-readline-teal/20">
                  Adjusted royalty rate to industry standard
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-bold mb-2 text-white">4. ADVANCES</h3>
              <div className="relative">
                <p className="text-gray-300">
                  Company shall pay Artist a non-returnable advance of <span className="line-through text-red-400">Twenty-Five Thousand 
                  Dollars ($25,000)</span> <span className="text-green-400 ml-1">Thirty-Five Thousand Dollars ($35,000)</span> upon 
                  execution of this Agreement...
                </p>
                <div className="absolute right-0 top-0 bg-gray-800 p-2 rounded text-xs text-readline-teal border border-readline-teal/20">
                  Increased advance to market rate
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Editor;
