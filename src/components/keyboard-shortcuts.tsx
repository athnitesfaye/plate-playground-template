'use client';

import React, { useState } from 'react';
import { X, Keyboard } from 'lucide-react';

interface Shortcut {
  keys: string[];
  description: string;
  category: string;
}

const shortcuts: Shortcut[] = [
  // Text Formatting
  { keys: ['⌘', 'B'], description: 'Bold', category: 'Text Formatting' },
  { keys: ['⌘', 'I'], description: 'Italic', category: 'Text Formatting' },
  { keys: ['⌘', 'U'], description: 'Underline', category: 'Text Formatting' },
  { keys: ['⌘', 'Shift', 'S'], description: 'Strikethrough', category: 'Text Formatting' },
  { keys: ['⌘', 'E'], description: 'Code', category: 'Text Formatting' },
  
  // Blocks
  { keys: ['⌘', 'Alt', '1'], description: 'Heading 1', category: 'Blocks' },
  { keys: ['⌘', 'Alt', '2'], description: 'Heading 2', category: 'Blocks' },
  { keys: ['⌘', 'Alt', '3'], description: 'Heading 3', category: 'Blocks' },
  { keys: ['⌘', 'Shift', '7'], description: 'Numbered list', category: 'Blocks' },
  { keys: ['⌘', 'Shift', '8'], description: 'Bulleted list', category: 'Blocks' },
  { keys: ['⌘', 'Shift', '9'], description: 'Toggle list', category: 'Blocks' },
  
  // AI & Commands
  { keys: ['⌘', 'J'], description: 'Open AI assistant', category: 'AI & Commands' },
  { keys: ['Space'], description: 'AI suggestions (empty line)', category: 'AI & Commands' },
  { keys: ['/'], description: 'Slash commands', category: 'AI & Commands' },
  { keys: ['⌘', 'K'], description: 'Quick find', category: 'Navigation' },
  
  // Navigation
  { keys: ['⌘', '['], description: 'Go back', category: 'Navigation' },
  { keys: ['⌘', ']'], description: 'Go forward', category: 'Navigation' },
  { keys: ['⌘', 'Shift', 'L'], description: 'Toggle sidebar', category: 'Navigation' },
  
  // Actions
  { keys: ['⌘', 'Enter'], description: 'Follow link', category: 'Actions' },
  { keys: ['⌘', 'Shift', 'D'], description: 'Duplicate block', category: 'Actions' },
  { keys: ['⌘', 'Shift', 'K'], description: 'Delete block', category: 'Actions' },
];

interface KeyboardShortcutsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KeyboardShortcuts({ isOpen, onClose }: KeyboardShortcutsProps) {
  if (!isOpen) return null;

  const categories = [...new Set(shortcuts.map(s => s.category))];

  const renderKey = (key: string) => (
    <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md">
      {key}
    </kbd>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Keyboard className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Keyboard Shortcuts</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          {categories.map(category => (
            <div key={category} className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wider">
                {category}
              </h3>
              <div className="space-y-2">
                {shortcuts
                  .filter(shortcut => shortcut.category === category)
                  .map((shortcut, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <span className="text-sm text-gray-600">{shortcut.description}</span>
                      <div className="flex items-center gap-1">
                        {shortcut.keys.map((key, keyIndex) => (
                          <React.Fragment key={keyIndex}>
                            {keyIndex > 0 && (
                              <span className="text-xs text-gray-400 mx-1">+</span>
                            )}
                            {renderKey(key)}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-xs text-gray-500 text-center">
            Press <kbd className="px-1 py-0.5 text-xs bg-gray-200 rounded">⌘ + /</kbd> to open this menu
          </p>
        </div>
      </div>
    </div>
  );
}

// Hook to show shortcuts
export function useKeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === '/') {
        event.preventDefault();
        setIsOpen(true);
      }
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return {
    isOpen,
    openShortcuts: () => setIsOpen(true),
    closeShortcuts: () => setIsOpen(false),
  };
} 