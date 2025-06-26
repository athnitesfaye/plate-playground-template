# Notion Clone - Open Source Rich Text Editor

A modern, open-source Notion-like editor built with [Plate](https://platejs.org/) and Next.js 15. Experience the power of collaborative rich-text editing with AI assistance, all in your browser.

![Notion Clone](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60)

## ✨ Features

- **🎨 Rich Text Editing**: Full-featured editor with blocks, marks, and formatting
- **🤖 AI-Powered Writing**: Integrated AI assistance for content generation and editing
- **📝 Notion-Like Interface**: Familiar sidebar navigation and page organization
- **⚡ Real-time Collaboration**: Comments, suggestions, and collaborative editing
- **🎯 Slash Commands**: Quick access to blocks and elements with `/` command
- **📱 Responsive Design**: Works seamlessly on desktop and mobile
- **🎨 Beautiful UI**: Modern design with shadcn/ui components
- **🔧 Customizable**: Built with TypeScript and fully customizable

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd notion-clone
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Configure your `.env.local` file:
- `OPENAI_API_KEY` – OpenAI API key for AI features ([get one here](https://platform.openai.com/account/api-keys))
- `UPLOADTHING_TOKEN` – UploadThing API key for file uploads ([get one here](https://uploadthing.com/dashboard))

4. Start the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Usage

### Basic Writing
- Click anywhere in the editor and start typing
- Use **bold**, *italic*, `code`, and other formatting options
- Create headings with `# `, `## `, `### `
- Make lists with `* ` or `1. `

### AI Features
- Press `⌘+J` (Mac) or `Ctrl+J` (Windows/Linux) in an empty line for AI assistance
- Press `Space` in an empty line for quick AI suggestions
- Ask AI to continue writing, summarize, improve text, and more

### Slash Commands
- Type `/` to open the command menu
- Quick access to headings, lists, code blocks, quotes, and more
- Insert images, tables, and other rich content blocks

### Page Organization
- Use the sidebar to create and organize pages
- Create nested page hierarchies
- Search through all your content
- Access recently edited pages

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Editor**: Plate.js (React rich-text editor)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **AI**: Vercel AI SDK with OpenAI
- **Icons**: Lucide React
- **Language**: TypeScript

## 📁 Project Structure

```
notion-clone/
├── src/
│   ├── app/
│   │   ├── editor/              # Main editor page
│   │   ├── globals.css          # Global styles
│   │   └── layout.tsx           # Root layout
│   ├── components/
│   │   ├── editor/              # Plate editor components
│   │   ├── ui/                  # UI components
│   │   ├── notion-sidebar.tsx   # Sidebar navigation
│   │   └── notion-header.tsx    # Page header
│   └── lib/
│       └── utils.ts             # Utility functions
├── components.json              # shadcn/ui configuration
└── package.json
```

## 🎨 Customization

### Adding New Block Types
1. Create a new plugin in `src/components/editor/plugins/`
2. Add it to the `EditorKit` in `src/components/editor/editor-kit.tsx`
3. Style it with Tailwind CSS

### Customizing the UI
- Modify `src/components/notion-sidebar.tsx` for sidebar changes
- Update `src/components/notion-header.tsx` for header modifications
- Customize colors and styling in `src/app/globals.css`

### Adding AI Features
- Extend AI prompts in the editor plugins
- Add new AI commands to the slash menu
- Integrate additional AI providers through the Vercel AI SDK

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Plate.js](https://platejs.org/) - The foundation of our rich-text editor
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful and accessible UI components
- [Vercel AI SDK](https://sdk.vercel.ai/) - AI integration made simple
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [Plate.js documentation](https://platejs.org/docs)
- Join the community discussions

---

Built with ❤️ using Plate.js and Next.js
