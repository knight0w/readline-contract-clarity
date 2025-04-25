
import React from "react";
import { Button } from "@/components/ui/button";

const PreviewSection = () => {
  return (
    <section id="preview" className="py-20 bg-readline-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,250,202,0.05)_0,transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Readline in Action</h2>
          <div className="w-20 h-1 bg-readline-teal mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience how Readline transforms complex legal documents into clear, actionable insights
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto glass rounded-xl overflow-hidden border border-readline-teal/20 shadow-[0_0_30px_rgba(10,250,202,0.15)]">
          <div className="bg-readline-darker p-3 flex items-center gap-2 border-b border-readline-teal/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-400">Contract Analysis</div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-6 border-r border-readline-teal/20">
              <div className="text-sm mb-4 text-gray-400">ArtistName.ProducerName.Son......025.docx</div>
              
              <div className="space-y-4">
                <div className="relative">
                  <p className="text-sm">
                    <span className="bg-readline-teal/20 text-readline-teal px-1 rounded">Advance</span>: Employer shall pay an Advance to Producer, non-recoupable from Producer's Royalties payable hereunder (excluding mechanical royalties) in the amount of <span className="line-through text-red-400">One Thousand Five Hundred ($1,500)</span> <span className="text-readline-teal">Four Thousand ($4,000) Dollars</span>. The Advance shall be paid promptly upon the complete execution of this Agreement.
                  </p>
                </div>
                
                <div className="relative">
                  <p className="text-sm">
                    <span className="bg-readline-teal/20 text-readline-teal px-1 rounded">Royalty</span>: Employer shall pay to Producer <span className="line-through text-red-400">Two percent (2%)</span> <span className="text-readline-teal">Ten percent (10%)</span> of Employer's net receipts on all commercial exploitations and licenses of the Master by any and all methods and means, whether now known or hereafter devised, in any and all media through the world in perpetuity in connection with audio embodying the Master.
                  </p>
                </div>
                
                <div className="relative">
                  <p className="text-sm">
                    <span className="bg-readline-teal/20 text-readline-teal px-1 rounded">Credit</span>: <span className="line-through text-red-400">If possible,</span> Producer shall <span className="text-readline-teal">always</span> receive credit in substantially the following form: "Produced by [Producer Name]" on all configurations of the Master and in all promotional materials where production credits are customarily provided.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-[300px] p-6 bg-readline-darker/50">
              <h3 className="text-readline-teal text-lg font-medium mb-4">AI Analysis</h3>
              
              <div className="space-y-4">
                <div className="p-3 bg-readline-dark/60 rounded-lg">
                  <div className="text-readline-teal text-sm font-medium mb-1">Advance</div>
                  <p className="text-xs text-gray-300">Increased advance payment from $1,500 to $4,000, maintained non-recoupable clause.</p>
                </div>
                
                <div className="p-3 bg-readline-dark/60 rounded-lg">
                  <div className="text-readline-teal text-sm font-medium mb-1">Royalty</div>
                  <p className="text-xs text-gray-300">Significant increase in royalty rate from 2% to 10% of net receipts.</p>
                </div>
                
                <div className="p-3 bg-readline-dark/60 rounded-lg">
                  <div className="text-readline-teal text-sm font-medium mb-1">Credit</div>
                  <p className="text-xs text-gray-300">Strengthened credit clause by removing conditional language and ensuring mandatory credit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-readline-teal hover:bg-readline-teal-dark text-readline-dark font-medium px-8"
          >
            Try Readline Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
