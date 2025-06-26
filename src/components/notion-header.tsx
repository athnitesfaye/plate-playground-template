'use client';

import React from 'react';
import { 
  Share, 
  MoreHorizontal, 
  Star,
  MessageSquare,
  Clock,
  User,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

interface NotionHeaderProps {
  pageTitle?: string;
  lastEditedBy?: string;
  lastEditedTime?: string;
  onShowShortcuts?: () => void;
}

export function NotionHeader({ 
  pageTitle = "Untitled", 
  lastEditedBy = "You",
  lastEditedTime = "now",
  onShowShortcuts
}: NotionHeaderProps) {
  return (
    <div className="h-12 border-b border-gray-200 bg-white flex items-center justify-between px-4">
      {/* Left side - Breadcrumbs */}
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <span className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
          My Workspace
        </span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-gray-900 font-medium">
          {pageTitle}
        </span>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center space-x-2">
        {/* Last edited info */}
        <div className="flex items-center space-x-1 text-xs text-gray-500 mr-4">
          <Clock className="h-3 w-3" />
          <span>Edited {lastEditedTime} by</span>
          <User className="h-3 w-3" />
          <span>{lastEditedBy}</span>
        </div>

        {/* Action buttons */}
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <MessageSquare className="h-4 w-4 text-gray-600" />
        </button>
        
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <Star className="h-4 w-4 text-gray-600" />
        </button>

        {onShowShortcuts && (
          <button 
            onClick={onShowShortcuts}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            title="Keyboard shortcuts (⌘ + /)"
          >
            <HelpCircle className="h-4 w-4 text-gray-600" />
          </button>
        )}

        <button className="flex items-center space-x-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors">
          <Share className="h-3 w-3" />
          <span>Share</span>
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <MoreHorizontal className="h-4 w-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
} 