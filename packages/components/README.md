<!-- omit from toc -->
# ![React Components](https://img.shields.io/badge/React-%40tutods%2Fcomponents-61DAFB?logo=react&logoSize=auto&style=for-the-badge)

![npm version](https://img.shields.io/npm/v/@tutods/components?style=for-the-badge) ![npm downloads](https://img.shields.io/npm/dm/@tutods/components?style=for-the-badge) ![License](https://img.shields.io/npm/l/@tutods/components?style=for-the-badge)

---

> Small React helper components built with type safety and composition in mind

## 📄 Goal

This package provides generic React helpers used across projects. The current public API focuses on conditional rendering and conditional element composition:

- **`Show`** - Render children or a fallback when a value is truthy
- **`ConditionalContainer`** - Render one element/component or another based on a boolean condition

## ✨ Features

- 📦 **Tree-shakeable** - Import only what you need
- 🎯 **Zero runtime config** - Works out of the box
- 🧩 **Composable** - Use intrinsic elements or custom React components
- 🔒 **Type-safe** - TypeScript definitions are emitted with the package
- 🎨 **Style agnostic** - No bundled styles or theme assumptions

## ❓ How to install and use it

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

This package requires React 19.2.6 or higher:

```bash
pnpm add react react-dom
```

## 📚 Usage

### Show

```tsx
import { Show } from '@tutods/components';

type User = {
  name: string;
};

function ProfileGreeting({ user }: { user?: User }) {
  return (
    <Show
      when={user}
      fallback={<p>Welcome, guest.</p>}
      render={currentUser => <p>Welcome, {currentUser.name}.</p>}
    />
  );
}
```

`Show` treats `when` as a truthy check. Use `render` when you need type-safe access to the non-null value, or pass `children` for simple conditional output.

### ConditionalContainer

```tsx
import { ConditionalContainer } from '@tutods/components';
import type { ReactNode } from 'react';

type SmartActionProps = {
  href?: string;
  children: ReactNode;
};

function SmartAction({ href, children }: SmartActionProps) {
  return (
    <ConditionalContainer
      when={Boolean(href)}
      render={{
        element: 'a',
        props: { href },
      }}
      fallback={{
        element: 'button',
        props: { type: 'button' },
      }}
    >
      {children}
    </ConditionalContainer>
  );
}
```

## Available Components

| Component | Purpose |
|-----------|---------|
| `Show` | Conditional rendering with optional fallback and render-prop support |
| `ConditionalContainer` | Switches the rendered wrapper element/component while preserving children |

## 🏗️ Development

```bash
# Install dependencies
pnpm install

# Build the package
pnpm --filter @tutods/components build

# Run in watch mode
pnpm --filter @tutods/components dev
```

## 📋 Requirements

- **React**: >=19.2.6
- **React DOM**: >=19.2.6
- **TypeScript**: >=5.0.0

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](../../CONTRIBUTING.md) for details.

## 📄 License

MIT © [Daniel Sousa](https://github.com/tutods)

---

For more information, visit the [main repository](https://github.com/tutods/lib).
