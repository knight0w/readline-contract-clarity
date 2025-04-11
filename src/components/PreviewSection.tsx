
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
            {/* Document panel */}
            <div className="flex-1 p-6 border-r border-readline-teal/20">
              <div className="text-sm mb-4 text-gray-400">Employment Agreement.pdf</div>
              
              <div className="space-y-4">
                <p className="text-sm">
                  This <span className="bg-readline-teal/20 text-readline-teal px-1 rounded">Employment Agreement</span> (the "Agreement") is entered into as of [Date] by and between [Employer Name], a [State] corporation ("Employer"), and [Employee Name] ("Employee").
                </p>
                
                <p className="text-sm">
                  <span className="bg-readline-teal/20 text-readline-teal px-1 rounded">Term of Employment</span>. Employee's employment under this Agreement shall commence on [Start Date] and continue until terminated pursuant to Section 5 of this Agreement.
                </p>
                
                <p className="text-sm">
                  <span className="bg-readline-teal/20 text-readline-teal px-1 rounded">Compensation</span>. As compensation for the services to be rendered by Employee, Employer shall pay Employee an annual salary of [Salary Amount] ("Base Salary"), payable in accordance with Employer's normal payroll practices.
                </p>
                
                <p className="text-sm">
                  <span className="bg-yellow-500/20 text-yellow-400 px-1 rounded">Non-Compete Clause</span>. During the term of employment and for a period of [Time Period] following termination of employment, Employee shall not directly or indirectly engage in any business that competes with Employer.
                </p>
              </div>
            </div>
            
            {/* Analysis panel */}
            <div className="w-full md:w-[300px] p-6 bg-readline-darker/50">
              <h3 className="text-readline-teal text-lg font-medium mb-4">AI Analysis</h3>
              
              <div className="space-y-4">
                <div className="p-3 bg-readline-dark/60 rounded-lg">
                  <div className="text-readline-teal text-sm font-medium mb-1">Employment Agreement</div>
                  <p className="text-xs text-gray-300">Standard employment agreement structure identifying parties and purpose.</p>
                </div>
                
                <div className="p-3 bg-readline-dark/60 rounded-lg">
                  <div className="text-readline-teal text-sm font-medium mb-1">Term of Employment</div>
                  <p className="text-xs text-gray-300">Open-ended employment term with reference to termination conditions in Section 5.</p>
                </div>
                
                <div className="p-3 bg-readline-dark/60 rounded-lg">
                  <div className="text-readline-teal text-sm font-medium mb-1">Compensation</div>
                  <p className="text-xs text-gray-300">Defines base salary payment structure and schedule.</p>
                </div>
                
                <div className="p-3 bg-readline-dark/60 rounded-lg">
                  <div className="text-yellow-400 text-sm font-medium mb-1">⚠️ Non-Compete Clause</div>
                  <p className="text-xs text-gray-300">Potentially restrictive clause. Consider limiting scope by geography or specific industry.</p>
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
