# Mannan - Angular Personal Website

## Project Overview
This is an Angular 20.3.4 personal website/portfolio application with Firebase integration for deployment.

## Technology Stack
- **Framework**: Angular 20.3.4
- **Language**: TypeScript 5.8.3
- **Styling**: SCSS
- **Deployment**: Firebase Hosting
- **Testing**: Karma with Jasmine
- **Linting**: ESLint with Prettier integration
- **Package Manager**: npm

## Project Structure
```
mannan/
├── src/
│   ├── app/
│   │   ├── components/         # Feature components
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── header/
│   │   │   ├── home/
│   │   │   └── resume/
│   │   ├── forms/              # Form-related utilities
│   │   │   ├── form.ts
│   │   │   └── view.ts
│   │   ├── app.component.*     # Root component
│   │   └── app.module.ts       # Root module
│   ├── assets/                  # Static assets
│   ├── index.html              # Entry HTML
│   └── styles.scss             # Global styles
├── dist/                       # Build output (git-ignored)
├── node_modules/               # Dependencies (git-ignored)
└── Configuration files...
```

## Key Configuration

### Angular Configuration
- **Prefix**: `app` for components and directives
- **Style**: SCSS with inline style support
- **Build Output**: `dist/mannan`
- **Production Budgets**:
  - Initial: 500kb warning, 1mb error
  - Component styles: 2kb warning, 4kb error

### Development Scripts
```bash
npm start          # Start dev server (ng serve) on http://localhost:4200
npm run build      # Production build
npm run watch      # Development build with watch mode
npm test           # Run unit tests with Karma
ng generate        # Generate components/services/etc.
```

### Code Quality Tools

#### ESLint Configuration
- TypeScript and Angular ESLint plugins
- Prettier integration for formatting
- Max line length: 120 characters
- Component selector: kebab-case with 'app' prefix
- Directive selector: camelCase with 'app' prefix

#### Prettier Configuration
- Print width: 120
- Tab width: 2
- Single quotes
- Trailing commas: ES5
- Bracket spacing: true

### Firebase Deployment
```bash
ng deploy          # Deploy to Firebase Hosting
```

## Component Architecture
The application follows a modular component structure with these main sections:
- **HomeComponent**: Landing/home page
- **AboutComponent**: About section
- **ResumeComponent**: Resume/CV display
- **ContactComponent**: Contact information/form
- **HeaderComponent**: Navigation header

## Development Guidelines

### Component Generation
```bash
ng generate component components/[name]/[name]
```

### File Naming Conventions
- Components: `[name].component.ts|html|scss|spec.ts`
- Services: `[name].service.ts`
- Models/Interfaces: `[name].model.ts` or `[name].interface.ts`

### Code Style
- Follow Angular style guide
- Use SCSS for component styles
- Keep components focused and single-responsibility
- Write unit tests for components and services

### Testing
- Unit tests use Karma + Jasmine
- Test files: `*.spec.ts`
- Run tests: `npm test`

## Build & Deployment

### Local Development
```bash
npm install        # Install dependencies
npm start          # Start development server
```

### Production Build
```bash
npm run build      # Creates optimized build in dist/mannan
```

### Firebase Deployment
```bash
ng deploy          # Deploy to Firebase (requires auth)
```

## Important Notes
- Angular Fire is integrated for Firebase services
- The project uses standalone TypeScript configuration files for app and test environments
- ESLint and Prettier are configured to work together for consistent code formatting
- The project follows Angular's recommended folder structure and naming conventions