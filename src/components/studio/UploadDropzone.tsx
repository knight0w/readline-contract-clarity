
import React, { useState } from 'react';
import { Upload } from 'lucide-react';

export const UploadDropzone = () => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // In a real app, we would handle the file upload here
  };
  
  return (
    <div 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-all
        ${isDragging 
          ? 'border-readline-teal bg-readline-teal/5' 
          : 'border-gray-700 hover:border-readline-teal/50 hover:bg-gray-800/50'}
      `}
    >
      <div className="mx-auto flex flex-col items-center">
        <div className="h-12 w-12 rounded-full bg-readline-teal/10 flex items-center justify-center mb-4">
          <Upload className="h-6 w-6 text-readline-teal" />
        </div>
        <h3 className="text-white text-lg font-medium">Drop your file here</h3>
        <p className="text-gray-400 mt-1">Or click to browse</p>
        <p className="text-gray-500 text-sm mt-3">
          Supports PDF, DOCX, JPG, PNG (max 50MB)
        </p>
        <input 
          type="file" 
          className="hidden" 
          accept=".pdf,.docx,.doc,.jpg,.jpeg,.png" 
        />
      </div>
    </div>
  );
};
