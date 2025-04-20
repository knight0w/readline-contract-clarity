
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowDown, CheckCircle, Download, Edit } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Analysis = () => {
  const { id } = useParams();
  // In a real app, we would fetch the document details using this id
  
  // Let's assume the analysis is complete for this demo
  const analysisComplete = true;
  
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Record Deal - Universal Music</h1>
          <p className="text-gray-400 mt-1">Uploaded on April 15, 2023</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-700">
            <Download className="mr-2" size={18} />
            Download
          </Button>
          
          {analysisComplete && (
            <Button asChild>
              <Link to={`/studio/editor/${id}`}>
                <Edit className="mr-2" size={18} />
                Edit Contract
              </Link>
            </Button>
          )}
        </div>
      </div>
      
      {!analysisComplete ? (
        <Card className="bg-readline-dark border-gray-800">
          <CardHeader>
            <CardTitle>Analyzing Contract</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Progress value={65} className="h-3" />
            <div className="text-gray-400">
              <p>Our AI is analyzing your contract. This may take a few minutes for complex documents.</p>
              <p className="mt-2">We're identifying key clauses, risks, and opportunities for negotiation.</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <Card className="bg-readline-dark border-gray-800">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="text-xl">Executive Summary</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-gray-400 text-sm">Advance/Fee</h3>
                  <p className="text-2xl font-bold mt-1">$25,000</p>
                  <div className="flex items-center mt-2 text-yellow-400 text-sm">
                    <CheckCircle size={16} className="mr-1" />
                    Average for industry
                  </div>
                </div>
                
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-gray-400 text-sm">Master Royalty</h3>
                  <p className="text-2xl font-bold mt-1">18%</p>
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <CheckCircle size={16} className="mr-1" />
                    Below industry standard
                  </div>
                </div>
                
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-gray-400 text-sm">Publishing Percentage</h3>
                  <p className="text-2xl font-bold mt-1">75/25</p>
                  <div className="flex items-center mt-2 text-green-400 text-sm">
                    <CheckCircle size={16} className="mr-1" />
                    Above industry average
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-yellow-400 mb-2">Risk Assessment</h3>
                <p>This contract contains several medium-risk clauses, primarily around royalty terms and territorial rights. The master royalty percentage is below industry standard for an artist at this stage.</p>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="breakdown" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="breakdown">Clause Breakdown</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="document">Full Document</TabsTrigger>
            </TabsList>
            
            <TabsContent value="breakdown" className="mt-6">
              <Card className="bg-readline-dark border-gray-800">
                <CardHeader className="border-b border-gray-800">
                  <CardTitle className="text-xl">Clause-by-Clause Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 px-0">
                  <div className="space-y-6">
                    {/* Clause item */}
                    <div className="border-b border-gray-800 px-6 pb-6">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-white">Section 3.2 - Royalty Rates</h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-400">
                          High Risk
                        </span>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-gray-400 font-medium">Original Text:</h4>
                        <p className="text-sm text-gray-300 mt-1 italic">
                          "Artist shall receive a royalty of eighteen percent (18%) of the suggested retail list price for each record sold and paid for in the United States..."
                        </p>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-gray-400 font-medium">Plain Language:</h4>
                        <p className="text-sm text-gray-300 mt-1">
                          You will receive 18% of the suggested retail price for each record sold in the US. This is below the industry standard of 20-25% for established artists.
                        </p>
                      </div>
                    </div>
                    
                    {/* Clause item */}
                    <div className="border-b border-gray-800 px-6 pb-6">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-white">Section 5.1 - Recording Budget</h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400">
                          Medium Risk
                        </span>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-gray-400 font-medium">Original Text:</h4>
                        <p className="text-sm text-gray-300 mt-1 italic">
                          "Company shall provide Artist with a recording budget not to exceed Twenty-Five Thousand Dollars ($25,000) per album, which shall be recoupable from royalties..."
                        </p>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-gray-400 font-medium">Plain Language:</h4>
                        <p className="text-sm text-gray-300 mt-1">
                          The label will give you $25,000 to record your album, but this is an advance against your royalties. You won't receive royalty payments until this amount is fully recouped from your earnings.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-center pt-4 pb-6">
                      <Button variant="ghost" className="flex items-center gap-2 text-readline-teal">
                        <ArrowDown size={18} />
                        Load more clauses
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="recommendations" className="mt-6">
              <Card className="bg-readline-dark border-gray-800">
                <CardHeader className="border-b border-gray-800">
                  <CardTitle className="text-xl">Suggested Improvements</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="bg-readline-teal/5 border border-readline-teal/20 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-readline-teal">Royalty Rate Negotiation</h3>
                      <p className="mt-2 text-gray-300">
                        We recommend negotiating for a royalty rate of at least 22%. This is more in line with industry standards for an artist with your profile and streaming numbers.
                      </p>
                      <div className="flex gap-3 mt-4">
                        <Button size="sm">Accept Change</Button>
                        <Button variant="outline" size="sm" className="border-gray-700">Decline</Button>
                      </div>
                    </div>
                    
                    <div className="bg-readline-teal/5 border border-readline-teal/20 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-readline-teal">Digital Royalty Clarification</h3>
                      <p className="mt-2 text-gray-300">
                        Add specific language about streaming royalties to ensure they're treated as licensing income (50% royalty) rather than sales income (18% royalty).
                      </p>
                      <div className="flex gap-3 mt-4">
                        <Button size="sm">Accept Change</Button>
                        <Button variant="outline" size="sm" className="border-gray-700">Decline</Button>
                      </div>
                    </div>
                    
                    <div className="bg-readline-teal/5 border border-readline-teal/20 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-readline-teal">Advance Increase</h3>
                      <p className="mt-2 text-gray-300">
                        Request an increase in the recording budget/advance to $35,000, which better reflects the actual costs of producing a professional album in today's market.
                      </p>
                      <div className="flex gap-3 mt-4">
                        <Button size="sm">Accept Change</Button>
                        <Button variant="outline" size="sm" className="border-gray-700">Decline</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="document" className="mt-6">
              <Card className="bg-readline-dark border-gray-800 min-h-[400px]">
                <CardHeader className="border-b border-gray-800">
                  <CardTitle className="text-xl">Full Document</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center text-gray-400 py-12">
                    Document preview would be displayed here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default Analysis;
