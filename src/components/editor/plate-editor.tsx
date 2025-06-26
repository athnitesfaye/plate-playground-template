'use client';

import * as React from 'react';

import { Plate, usePlateEditor } from 'platejs/react';

import { EditorKit } from '@/components/editor/editor-kit';
import { SettingsDialog } from '@/components/editor/settings-dialog';
import { Editor, EditorContainer } from '@/components/ui/editor';

export function PlateEditor() {
  const editor = usePlateEditor({
    plugins: EditorKit,
    value: notionLikeValue,
  });

  return (
    <div className="w-full max-w-none p-8">
      <Plate editor={editor}>
        <EditorContainer>
          <Editor className="p-0 border-none shadow-none" />
        </EditorContainer>

        <SettingsDialog />
      </Plate>
    </div>
  );
}

const notionLikeValue = [
  {
    children: [{ text: '🚀 Welcome to Your Notion Clone' }],
    type: 'h1',
  },
  {
    children: [
      { text: 'This is a powerful, open-source editor built with ' },
      { children: [{ text: 'Plate' }], type: 'a', url: 'https://platejs.org' },
      { text: ' that gives you the same editing experience as Notion. Start writing and see the magic happen!' },
    ],
    type: 'p',
  },
  {
    children: [{ text: '' }],
    type: 'p',
  },
  {
    children: [{ text: '✨ What You Can Do' }],
    type: 'h2',
  },
  {
    children: [
      { text: 'Create beautiful documents with rich formatting' },
    ],
    indent: 1,
    listStyleType: 'disc',
    type: 'p',
  },
  {
    children: [
      { text: 'Use AI-powered writing assistance (press ' },
      { kbd: true, text: '⌘+J' },
      { text: ' or ' },
      { kbd: true, text: 'Space' },
      { text: ' in an empty line)' },
    ],
    indent: 1,
    listStyleType: 'disc',
    type: 'p',
  },
  {
    children: [
      { text: 'Add blocks with slash commands (type ' },
      { kbd: true, text: '/' },
      { text: ')' },
    ],
    indent: 1,
    listStyleType: 'disc',
    type: 'p',
  },
  {
    children: [
      { text: 'Collaborate with comments and suggestions' },
    ],
    indent: 1,
    listStyleType: 'disc',
    type: 'p',
  },
  {
    children: [{ text: '' }],
    type: 'p',
  },
  {
    children: [{ text: '📝 Try These Features' }],
    type: 'h3',
  },
  {
    children: [
      { text: 'Type ' },
      { kbd: true, text: '**bold**' },
      { text: ' for ' },
      { bold: true, text: 'bold text' },
    ],
    type: 'p',
  },
  {
    children: [
      { text: 'Type ' },
      { kbd: true, text: '*italic*' },
      { text: ' for ' },
      { italic: true, text: 'italic text' },
    ],
    type: 'p',
  },
  {
    children: [
      { text: 'Type ' },
      { kbd: true, text: '`code`' },
      { text: ' for ' },
      { code: true, text: 'inline code' },
    ],
    type: 'p',
  },
  {
    children: [{ text: '' }],
    type: 'p',
  },
  {
    children: [
      {
        children: [
          {
            text: 'This is a quote block. Great for highlighting important information or citing sources.',
          },
        ],
        type: 'p',
      },
    ],
    type: 'blockquote',
  },
  {
    children: [{ text: '' }],
    type: 'p',
  },
  {
    children: [
      { children: [{ text: 'function createAwesome() {' }], type: 'code_line' },
      {
        children: [{ text: "  return 'This is a code block!';" }],
        type: 'code_line',
      },
      { children: [{ text: '}' }], type: 'code_line' },
    ],
    lang: 'javascript',
    type: 'code_block',
  },
  {
    children: [{ text: '' }],
    type: 'p',
  },
  {
    children: [{ text: '🎯 Get Started' }],
    type: 'h3',
  },
  {
    children: [
      { text: '1. Click anywhere and start typing' },
    ],
    type: 'p',
  },
  {
    children: [
      { text: '2. Use the sidebar to organize your pages' },
    ],
    type: 'p',
  },
  {
    children: [
      { text: '3. Try the AI features and slash commands' },
    ],
    type: 'p',
  },
  {
    children: [
      { text: '4. Share your work with the share button' },
    ],
    type: 'p',
  },
  {
    children: [{ text: '' }],
    type: 'p',
  },
  {
    children: [
      { text: 'Happy writing! 🎉' },
    ],
    type: 'p',
  },
];
