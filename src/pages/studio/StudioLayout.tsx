
import React from 'react';
import { Outlet } from 'react-router-dom';
import StudioHeader from '@/components/studio/StudioHeader';
import StudioSidebar from '@/components/studio/StudioSidebar';

const StudioLayout = () => {
  return (
    <div className="flex h-screen bg-[#080A12] text-white">
      <StudioSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <StudioHeader />
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StudioLayout;
