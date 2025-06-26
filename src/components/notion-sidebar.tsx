'use client';

import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  FileText, 
  Plus, 
  Search, 
  Settings,
  Home,
  Calendar,
  Users,
  Trash2
} from 'lucide-react';

interface SidebarItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  children?: SidebarItem[];
  isExpanded?: boolean;
}

const defaultPages: SidebarItem[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: 'quick-notes',
    title: 'Quick Notes',
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: 'project-ideas',
    title: 'Project Ideas',
    icon: <FileText className="h-4 w-4" />,
    children: [
      {
        id: 'web-app',
        title: 'Web App',
        icon: <FileText className="h-4 w-4" />,
      },
      {
        id: 'mobile-app',
        title: 'Mobile App',
        icon: <FileText className="h-4 w-4" />,
      }
    ]
  },
];

export function NotionSidebar() {
  const [pages, setPages] = useState<SidebarItem[]>(defaultPages);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleExpanded = (id: string) => {
    setPages(prev => prev.map(page => 
      page.id === id 
        ? { ...page, isExpanded: !page.isExpanded }
        : page
    ));
  };

  const addNewPage = () => {
    const newPage: SidebarItem = {
      id: `page-${Date.now()}`,
      title: 'Untitled',
      icon: <FileText className="h-4 w-4" />,
    };
    setPages(prev => [...prev, newPage]);
  };

  const renderSidebarItem = (item: SidebarItem, level = 0) => (
    <div key={item.id} className="w-full">
      <div 
        className={`
          flex items-center gap-2 px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 
          cursor-pointer rounded-md group
          ${level > 0 ? 'ml-6' : ''}
        `}
        onClick={() => item.children && toggleExpanded(item.id)}
      >
        {item.children && (
          <button className="flex items-center justify-center w-4 h-4">
            {item.isExpanded ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </button>
        )}
        {!item.children && <div className="w-4" />}
        {item.icon}
        <span className="flex-1 truncate">{item.title}</span>
        <Plus className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      {item.children && item.isExpanded && (
        <div className="mt-1">
          {item.children.map(child => renderSidebarItem(child, level + 1))}
        </div>
      )}
    </div>
  );

  if (isCollapsed) {
    return (
      <div className="w-12 h-full bg-gray-50 border-r border-gray-200 flex flex-col items-center py-4">
        <button 
          onClick={() => setIsCollapsed(false)}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="w-64 h-full bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">My Workspace</h2>
          <button 
            onClick={() => setIsCollapsed(true)}
            className="p-1 hover:bg-gray-100 rounded-md"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="p-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">
            <Calendar className="h-4 w-4" />
            <span>Calendar</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">
            <Users className="h-4 w-4" />
            <span>Shared</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">
            <Trash2 className="h-4 w-4" />
            <span>Trash</span>
          </div>
        </div>
      </div>

      {/* Pages Section */}
      <div className="flex-1 p-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Pages
          </span>
          <button 
            onClick={addNewPage}
            className="p-1 hover:bg-gray-100 rounded-md"
          >
            <Plus className="h-3 w-3 text-gray-500" />
          </button>
        </div>
        <div className="space-y-1">
          {pages
            .filter(page => 
              searchQuery === '' || 
              page.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(page => renderSidebarItem(page))
          }
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
            U
          </div>
          <span>User Workspace</span>
        </div>
      </div>
    </div>
  );
} 