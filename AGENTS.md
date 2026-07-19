# tutods-lib

## Purpose

Personal open-source monorepo for publishable npm packages under the `@tutods` scope. Currently ships `@tutods/components` (generic React components) plus shared configs (`biome-config`, `typescript-config`, `renovate-config`). Consumers are external projects — everything in `packages/` is public API; breaking changes matter.

## Stack

| Piece | Version / tool | Notes |
|-------|---------------|-------|
| Workspace | Nx 23 + pnpm 11 (`pnpm-workspace.yaml`: `packages/*`, `configs/*`) | Nx runs/caches builds; pnpm is the only package manager |
| Bundler | Rslib (`@rslib/core`) per package | ESM only, `dts: true` — no CJS output |
| Language | TypeScript 7.x (native TS compiler — bleeding edge) | |
| UI | React 19 as **peerDependency** (`>=19.2.7`) | Never move React to `dependencies` |
| Lint/format | Biome (config from `@tutods/biome-config`, workspace package) | Tabs, double quotes — Biome enforces, don't hand-format |
| Hooks | lefthook (`.lefthook.yml`): pre-commit Biome on staged, commit-msg commitlint | |
| Releases | `nx release` — independent versioning, conventional commits drive bumps | |

Layout:

```
packages/components/   @tutods/components — published package
configs/               @tutods/{biome,typescript,renovate}-config — published configs
```

## Commands

Run from repo root with pnpm (never npm/yarn — `packageManager` pins pnpm):

| Command | What |
|---------|------|
| `pnpm build` | `nx run-many -t build` — builds all packages |
| `pnpm lint` | `biome check .` |
| `pnpm lint:fix` | Biome with `--write` |
| `pnpm lint:ci` | CI variant |
| `pnpm --filter @tutods/components dev` | Rslib watch mode for the components package |
| `pnpm release` | `nx release` — only when explicitly asked; it creates a version commit (no tag/push) |

There is no `test` or `typecheck` script. Type errors surface via `pnpm build` (Rslib emits d.ts). If you need a standalone type check, run `pnpm exec tsc --noEmit -p packages/components/tsconfig.json`.

## Conventions

- **Component layout**: one folder per component with sub-files, or a single file for simple ones.
  `packages/components/src/components/<kebab-name>/index.tsx` + `types.ts`, or `<name>.tsx` alone. Re-export from `src/components/index.ts` (and it flows to `src/index.ts` via `export *`). A component that isn't re-exported is not published — always wire the export chain.
- **Named exports only** (`export { Show }`) — no default exports in package source.
- **Every public component gets full JSDoc**: description, `@param` per prop, at least one `@example` block. Props type named `Props<T>` locally, documented per-field. Match `show.tsx` as the reference.
- **Generic, dependency-free components** — this library must work "in any scenario": no CSS frameworks, no runtime deps unless unavoidable (anything added becomes a consumer's dependency — flag it first).
- New published packages: copy `packages/components` shape (`publishConfig.access: public`, `files: ["dist"]`, ESM `exports` map with `types` first, `repository.directory` set).
- Config packages in `configs/` are plain JSON + `package.json` — no build step.

## Definition of Done

- [ ] `pnpm build` succeeds from root (this is also the type check)
- [ ] `pnpm lint` clean
- [ ] New/changed components exported through `src/components/index.ts`
- [ ] JSDoc + `@example` present on any new public component
- [ ] React stayed in `peerDependencies`; no new runtime deps without flagging
- [ ] `git status` shows only intended files

## Gotchas

- `conditional-contianer/` (typo in "container") is a published path — do **not** rename it as a drive-by; renaming is a breaking change and needs a deliberate release.
- `nx release` config commits (`chore(release): version packages [release]`) but does **not** tag or push — CI/user handles that; never push release commits yourself.
- TypeScript 7 is the native-compiler preview — if tooling misbehaves against it, say so instead of downgrading TS.
- Renovate manages dependency and Node bumps (`.nvmrc`, biome `$schema` sync has a custom manager) — don't hand-bump versions Renovate owns unless asked.
- **Renovate must stay allowed to bump Node/`.nvmrc`** — never re-add a `matchPackageNames: ["node"], enabled: false` ignore rule; that rule was removed deliberately after it blocked Node updates.
- Tooling config improvements made here (renovate-config, biome-config) usually apply to sibling repos (jps, farmacia-nova) — mention the propagation when changing them.
- `.claude/skills/migrate-to-rslib` exists — the Rslib migration already happened; the skill is historical.

## Docs

- Rslib: https://rslib.rs/llms.txt
- Rsbuild: https://rsbuild.rs/llms.txt
- Rspack: https://rspack.rs/llms.txt
