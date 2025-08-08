# Vite + React + TypeScript + TailwindCSS + shadcn/ui Starter Pack

This is a starter pack for building modern web applications with Vite, React, TypeScript, TailwindCSS, and shadcn/ui.

## 🚀 Getting Started

To get started, clone this repository and install the dependencies:

```bash
git clone https://github.com/Lil-Code30/Vite-React-TypeScript-TailwindCSS-shadcn-ui-_Starter-Pack.git
cd Vite-React-TypeScript-TailwindCSS-shadcn-ui-_Starter-Pack
npm install
```

Then, start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

## ✨ Features

- ⚡️ [Vite](https://vitejs.dev/) for fast development and builds
- ⚛️ [React](https://reactjs.org/) for building user interfaces
- 🔵 [TypeScript](https://www.typescriptlang.org/) for static typing
- 💨 [TailwindCSS](https://tailwindcss.com/) for utility-first styling
- 🎨 [shadcn/ui](https://ui.shadcn.com/) for accessible and customizable components
- 📖 [ESLint](https://eslint.org/) for code linting
- 💅 [Prettier](https://prettier.io/) for code formatting

## 📁 Folder Structure

The folder structure is as follows:

```
.
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── ui
│   │       └── button.tsx
│   ├── lib
│   │   └── utils.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## 📦 Building for Production

To build the application for production, run the following command:

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

## 🎨 Using shadcn/ui

To add new components from shadcn/ui, run the following command:

```bash
npx shadcn-ui@latest add [component-name]
```

For example, to add the `input` component, run:

```bash
npx shadcn-ui@latest add input
```

This will add the `input.tsx` file to the `src/components/ui` directory.

## 📖 ESLint and Prettier

This starter pack is configured with ESLint and Prettier to ensure code quality and consistency.

To lint your code, run:

```bash
npm run lint
```

To format your code, run:

```bash
npm run format
```

## 🙌 Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any ideas or suggestions.

## 📄 License

This project is licensed under the MIT License.
