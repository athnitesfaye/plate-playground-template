'use client';

import { Toaster } from 'sonner';

import { PlateEditor } from '@/components/editor/plate-editor';
import { NotionSidebar } from '@/components/notion-sidebar';
import { NotionHeader } from '@/components/notion-header';
import { KeyboardShortcuts, useKeyboardShortcuts } from '@/components/keyboard-shortcuts';

export default function Page() {
  const { isOpen, openShortcuts, closeShortcuts } = useKeyboardShortcuts();

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Sidebar */}
      <NotionSidebar />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <NotionHeader 
          pageTitle="Getting Started" 
          onShowShortcuts={openShortcuts}
        />
        
        {/* Editor area */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <PlateEditor />
          </div>
        </div>
      </div>

      {/* Keyboard shortcuts modal */}
      <KeyboardShortcuts isOpen={isOpen} onClose={closeShortcuts} />

      <Toaster />
    </div>
  );
}
