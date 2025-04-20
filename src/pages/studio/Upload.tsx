
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadDropzone } from '@/components/studio/UploadDropzone';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const Upload = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Upload Document</h1>
        <p className="text-gray-400 mt-2">
          Upload your contract for AI analysis. Your documents are processed securely and confidentially.
        </p>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList>
          <TabsTrigger value="upload">Upload File</TabsTrigger>
          <TabsTrigger value="template">Use Template</TabsTrigger>
          <TabsTrigger value="url">Import from URL</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="pt-6">
          <Card className="bg-readline-dark border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl">Upload Contract</CardTitle>
              <CardDescription>
                Drag and drop your file or click to browse. We support PDF, DOCX, and image files.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UploadDropzone />
              
              <div className="mt-6 bg-readline-teal/10 p-4 rounded-lg border border-readline-teal/20">
                <div className="flex items-start gap-3">
                  <div className="text-readline-teal mt-1">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Your data is secure</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      All documents are processed with bank-level encryption. Your contracts are never shared or stored 
                      beyond the analysis period, and we maintain strict confidentiality protocols.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="template">
          {/* Template content would go here */}
          <div className="text-center py-12 text-gray-400">
            Select from our library of pre-built contract templates
          </div>
        </TabsContent>
        
        <TabsContent value="url">
          {/* URL import content would go here */}
          <div className="text-center py-12 text-gray-400">
            Import a document from a URL
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" className="border-gray-700 text-gray-400">
          Cancel
        </Button>
        <Button disabled>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Upload;
