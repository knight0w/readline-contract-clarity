import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Send, Upload as UploadIcon } from 'lucide-react';

const Upload = () => {
  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        <Tabs defaultValue="contract" className="h-full flex flex-col">
          <div className="border-b border-gray-800 bg-readline-darker">
            <div className="container py-2">
              <TabsList className="bg-gray-800/50">
                <TabsTrigger value="contract">Contract Analysis</TabsTrigger>
                <TabsTrigger value="negotiation">Negotiation</TabsTrigger>
                <TabsTrigger value="review">Legal Review</TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value="contract" className="flex-1 mt-0">
            <div className="h-full flex flex-col items-center justify-center p-6 space-y-8">
              <div className="text-center space-y-4 max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight">
                  How can we <span className="text-readline-teal">assist</span> you today?
                </h1>
                <p className="text-gray-400 text-lg">
                  Get expert guidance powered by AI for contract analysis, negotiation strategies, 
                  and legal review. Upload your document or start a conversation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
                <Card className="bg-readline-dark border-gray-800 hover:border-readline-teal/50 transition-colors cursor-pointer group">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-readline-teal">Contract Analysis</h3>
                    <p className="text-sm text-gray-400">Upload your contract for detailed AI analysis and recommendations.</p>
                  </CardContent>
                </Card>

                <Card className="bg-readline-dark border-gray-800 hover:border-readline-teal/50 transition-colors cursor-pointer group">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-readline-teal">Negotiation Help</h3>
                    <p className="text-sm text-gray-400">Get strategic advice for better contract negotiations.</p>
                  </CardContent>
                </Card>

                <Card className="bg-readline-dark border-gray-800 hover:border-readline-teal/50 transition-colors cursor-pointer group">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-readline-teal">Legal Review</h3>
                    <p className="text-sm text-gray-400">AI-powered legal analysis and risk assessment.</p>
                  </CardContent>
                </Card>

                <Card className="bg-readline-dark border-gray-800 hover:border-readline-teal/50 transition-colors cursor-pointer group">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-readline-teal">Quick Chat</h3>
                    <p className="text-sm text-gray-400">Ask questions about music contracts and rights.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="border-t border-gray-800 bg-readline-darker p-4">
        <div className="container flex gap-4 items-center">
          <Button variant="outline" className="border-gray-700">
            <UploadIcon className="mr-2 h-4 w-4" />
            Upload File
          </Button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Type your question here or upload a document..."
              className="w-full px-4 py-2 bg-readline-dark border border-gray-800 rounded-lg focus:outline-none focus:border-readline-teal"
            />
            <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 bg-readline-teal text-readline-dark hover:bg-readline-teal/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
