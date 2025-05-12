
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Home, Settings, Upload, FilePlus } from 'lucide-react';

const menuItems = [
  {
    title: 'Dashboard',
    icon: Home,
    path: '/studio'
  },
  {
    title: 'Upload',
    icon: Upload,
    path: '/studio/upload'
  },
  {
    title: 'Documents',
    icon: FileText,
    path: '/studio/documents'
  },
  {
    title: 'Draft',
    icon: FilePlus,
    path: '/studio/draft'
  },
  {
    title: 'Settings',
    icon: Settings,
    path: '/studio/settings'
  }
];

const StudioSidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="w-64 border-r border-gray-800 bg-readline-dark/95 glass flex flex-col">
      <div className="p-5 border-b border-gray-800">
        <Link to="/studio" className="flex items-center">
          <span className="text-2xl font-bold text-white tracking-wider">READLINE</span>
        </Link>
      </div>
      <nav className="flex-1 pt-5">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm ${
                  location.pathname === item.path
                    ? 'bg-readline-teal/10 text-readline-teal'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon size={18} />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 text-gray-400 text-sm">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="font-medium text-white">JD</span>
          </div>
          <div>
            <div className="text-white text-sm">John Doe</div>
            <div className="text-gray-500 text-xs">Pro Plan</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default StudioSidebar;
