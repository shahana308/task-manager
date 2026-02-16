# Task Manager

A modern Kanban-style task management application built with Next.js 15, TypeScript, and Ant Design.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Ant Design](https://img.shields.io/badge/Ant%20Design-0170FE?style=flat&logo=ant-design&logoColor=white)

## Features

- Modern, responsive UI with Ant Design components
- Drag-and-drop task management with @dnd-kit
- Kanban board with customizable columns (Todo, In Progress, Done)
- Task prioritization (Low, Medium, High)
- Task assignment and due dates
- Tag support for categorization
- State management with Zustand
- Full TypeScript support

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 + Ant Design
- **State Management:** Zustand
- **Drag & Drop:** @dnd-kit
- **Icons:** Ant Design Icons

## Installation
```bash
# Clone the repository
git clone https://github.com/shahana308/task-manager.git
cd task-manager

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure
```
task-manager/
├── app/
│   ├── layout.tsx          # Root layout with Ant Design provider
│   ├── page.tsx            # Main board page
│   └── globals.css         # Global styles
├── components/
│   ├── Board.tsx           # Main board container
│   ├── Column.tsx          # Kanban column component
│   ├── TaskCard.tsx        # Individual task card
│   └── TaskModal.tsx       # Create/Edit task modal
├── lib/
│   ├── types.ts            # TypeScript type definitions
│   └── store.ts            # Zustand store
└── public/
```

## Roadmap

### Phase 1: MVP (In Progress)
- [x] Project setup and configuration
- [ ] Basic board with columns
- [ ] Drag-and-drop functionality
- [ ] Task creation and editing
- [ ] Basic task properties (title, description, priority)

### Phase 2: Core Features
- [ ] Task filtering and search
- [ ] Task assignment
- [ ] Due dates with calendar picker
- [ ] Tag system
- [ ] Task comments

### Phase 3: Collaboration
- [ ] Real-time updates (WebSocket)
- [ ] User authentication
- [ ] Activity log
- [ ] Notifications

### Phase 4: Advanced Features
- [ ] File attachments
- [ ] Keyboard shortcuts
- [ ] Mobile responsive design
- [ ] Dark mode
- [ ] Export to PDF/CSV

## Development
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Environment Variables

Create a `.env.local` file (for future backend integration):
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
DATABASE_URL=postgresql://...
```

## Contributing

Contributions are welcome! This is a learning project, so feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for learning and personal projects.

## Author

**Shahana Salam**
- GitHub: [@shahana308](https://github.com/shahana308)

## Acknowledgments

- Built as a learning project to master modern React patterns
- Inspired by JIRA and Trello
- Thanks to the Next.js, Ant Design, and dnd-kit teams


