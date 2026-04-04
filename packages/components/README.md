<!-- omit from toc -->
# ![React Components](https://img.shields.io/badge/React-%40tutods%2Fcomponents-61DAFB?logo=react&logoSize=auto&style=for-the-badge)

![npm version](https://img.shields.io/npm/v/@tutods/components?style=for-the-badge) ![npm downloads](https://img.shields.io/npm/dm/@tutods/components?style=for-the-badge) ![License](https://img.shields.io/npm/l/@tutods/components?style=for-the-badge)

---

> Reusable React components built with accessibility, performance, and type safety in mind

## 📄 Goal

This package provides a collection of generic, reusable React components that can be used across different projects. Each component is built with:

- ♿ **Accessibility** - WCAG compliant components
- ⚡ **Performance** - Optimized with React best practices
- 🔒 **Type Safety** - Full TypeScript support
- 🎨 **Customizable** - Easy to style and extend

## ✨ Features

- 📦 **Tree-shakeable** - Import only what you need
- 🎯 **Zero Runtime Config** - Works out of the box
- 🧩 **Composable** - Build complex UIs from simple components
- 📱 **Responsive** - Mobile-first design approach
- 🌗 **Theme Agnostic** - Use with any styling solution

## ❓ How to install and use it?

### Installation

```bash
# Using pnpm
pnpm add @tutods/components

# Using npm
npm install @tutods/components

# Using yarn
yarn add @tutods/components
```

### Peer Dependencies

This package requires React 19.2.4 or higher:

```bash
pnpm add react react-dom
```

## 📚 Usage

### Basic Example

```tsx
import { Button } from '@tutods/components';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  );
}
```

### With Custom Styles

```tsx
import { Button } from '@tutods/components';
import './App.css';

function App() {
  return (
    <Button className="my-custom-button" variant="secondary">
      Custom Styled Button
    </Button>
  );
}
```

## Available Components

This package is currently in early development. More components will be added in future releases.

**Planned Components:**
- Button
- Input
- Modal
- Select
- Checkbox
- Radio
- And more...

## 🏗️ Development

```bash
# Install dependencies
pnpm install

# Build the package
pnpm build

# Run in watch mode
pnpm dev
```

## 📋 Requirements

- **React**: >=19.2.4
- **React DOM**: >=19.2.4
- **TypeScript**: >=5.0.0

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](../../CONTRIBUTING.md) for details.

## 📄 License

MIT © [Daniel Sousa](https://github.com/tutods)

---

For more information, visit the [main repository](https://github.com/tutods/lib).
