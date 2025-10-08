# Mannan - Personal Portfolio Website

A modern, responsive personal portfolio website built with Angular 15 and deployed on Firebase.

## 🚀 Live Demo

Visit: [https://mannan-javid.web.app](https://mannan-javid.web.app)

## 🛠️ Tech Stack

- **Framework:** Angular 15.2.6
- **Language:** TypeScript 4.9.4
- **Styling:** SCSS
- **Hosting:** Firebase
- **Testing:** Karma & Jasmine
- **Code Quality:** ESLint & Prettier

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mannan.git

# Navigate to project directory
cd mannan

# Install dependencies
npm install

# Start development server
npm start
```

Navigate to `http://localhost:4200/` to view the application.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/          # About section
│   │   ├── contact/        # Contact information
│   │   ├── header/         # Navigation header
│   │   ├── home/           # Landing page
│   │   └── resume/         # Resume/CV section
│   ├── forms/              # Form utilities
│   └── app.module.ts       # Root module
├── assets/                 # Static assets
└── styles.scss            # Global styles
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on port 4200 |
| `npm run build` | Build for production |
| `npm run watch` | Build in watch mode |
| `npm test` | Run unit tests with Karma |
| `ng generate component [name]` | Generate new component |

## 🚀 Deployment

### Deploy to Firebase (Primary)

```bash
# Build the project
npm run build

# Deploy to Firebase
ng deploy
```

Your site will be live at: https://mannan-javid.web.app

### Alternative Deployment Options

**GitHub Pages:**
```bash
ng add angular-cli-ghpages
ng deploy --base-href=/mannan/
```

**Netlify:**
1. Run `npm run build`
2. Drag `dist/mannan` folder to [Netlify Drop](https://app.netlify.com/drop)

**Vercel:**
```bash
npm i -g vercel
npm run build
vercel --prod
```

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests in headless mode
ng test --browsers=ChromeHeadless --watch=false
```

## 📏 Code Quality

The project uses ESLint and Prettier for code consistency:

```bash
# Check linting
ng lint

# Format code with Prettier
npx prettier --write .
```

### Configuration
- **Max line length:** 120 characters
- **Component prefix:** `app-`
- **Style:** SCSS with component encapsulation
- **Quote style:** Single quotes

## 🔧 Development

### Generate Components

```bash
# Generate a new component
ng generate component components/[name]

# Generate a service
ng generate service services/[name]

# Generate other artifacts
ng generate directive|pipe|class|guard|interface|enum|module
```

### Build Configuration

**Production Build:**
- Optimized bundles
- Tree shaking
- Ahead-of-Time (AOT) compilation
- Build budget warnings (500kb initial, 1mb max)

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal project. Pull requests are not accepted.

## 📧 Contact

For any inquiries, please reach out through the contact form on the website.

---

Built with Angular CLI version 15.2.6
