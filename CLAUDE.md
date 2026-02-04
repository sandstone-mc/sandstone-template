# Sandstone Template Project

Starter template for creating Minecraft datapacks and resource packs with [Sandstone](https://github.com/sandstone-mc/sandstone).

## Commands

```bash
bun dev:build    # Build the pack (outputs to `.sandstone/output/`)
bun dev:watch    # Watch mode - rebuilds on file changes, run this in a background shell and read from `.sandstone/watch.log` rather than your own background shell log
```

## Project Structure

```
src/
├── index.ts              # Entry point - import your files here
└── *.ts                  # Your datapack code files
sandstone.config.ts       # Pack configuration (name, namespace, formats)
.sandstone/output/        # Generated packs (created on build)
├── datapack/             # Generated datapack
│   ├── pack.mcmeta
│   └── data/<namespace>/function/*.mcfunction
└── resourcepack/         # Generated resource pack (if used)
```

The `datapack/` folder can be copied directly to `.minecraft/saves/<world>/datapacks/` or linked via config.

## Quick Start

```typescript
import { MCFunction, say, execute, Selector } from 'sandstone'

// Create a function that runs on load
MCFunction('hello', () => {
  say('Hello from Sandstone!')
}, { runOnLoad: true })

// Create a function that runs every tick
MCFunction('tick_loop', () => {
  execute.as(Selector('@a')).run(() => {
    // Commands here run as each player
  })
}, { runOnTick: true })
```

## Documentation

Full documentation: https://sandstone.dev

### Commands
[docs/features/commands.md](https://github.com/sandstone-mc/sandstone-documentation/blob/master/docs/features/commands.md)

Import commands directly: `import { give, effect, execute } from 'sandstone'`
- Subcommands accessed as properties: `effect.give(...)`, `effect.clear(...)`
- Commands with args called as functions: `give('@a', 'minecraft:diamond', 64)`
- Execute uses `.run()` for single commands or `.run(() => {...})` for multiple
```typescript
execute.as('@a').at('@s').run.setblock(rel(0, -1, 0), 'minecraft:dirt')
execute.as('@a').at('@s').run(() => {
  setblock(rel(0, 0, 0), 'minecraft:air')
  say('Hello!')
})
```

### Functions
[docs/features/functions.md](https://github.com/sandstone-mc/sandstone-documentation/blob/master/docs/features/functions.md)

- `MCFunction('name', () => {...})` - Creates a .mcfunction file
- `MCFunction('name', () => {...}, { runOnLoad: true })` - Runs on datapack load
- `MCFunction('name', () => {...}, { runOnTick: true })` - Runs every tick
- `{ lazy: true }` - Only creates file if called from another function
- Async functions with `sleep()`: `MCFunction('name', async () => { await sleep('1s') })`
- Inline functions (JS functions) don't create files, commands are inlined

### Selectors
[docs/features/selectors.md](https://github.com/sandstone-mc/sandstone-documentation/blob/master/docs/features/selectors.md)

```typescript
import { Selector } from 'sandstone'
Selector('@e', { type: 'minecraft:cow', limit: 1, sort: 'random' })
Selector('@a', { scores: { kills: [10, Infinity] } })  // kills >= 10
Selector('@a', { tag: ['winner', 'alive'] })
```

### Variables & Scores
[docs/features/variables](https://github.com/sandstone-mc/sandstone-documentation/tree/master/docs/features/variables)

```typescript
import { Objective, Selector } from 'sandstone'
const kills = Objective.create('kills', 'playerKillCount')
const myKills = kills('@s')
myKills.add(1)
myKills.set(0)
myKills.greaterThan(10)  // Returns condition for use in _.if()
```

### Flow Control
[docs/features/flow](https://github.com/sandstone-mc/sandstone-documentation/tree/master/docs/features/flow)

```typescript
import { _ } from 'sandstone'
_.if(myKills.greaterThan(10), () => {
  say('On a rampage!')
}).elseIf(myKills.equalTo(0), () => {
  say('No kills yet')
}).else(() => {
  say('Keep going!')
})
```
- Conditions: score comparisons, `_.data.entity()`, `_.data.block()`, `_.block()`
- Loops: `_.forScore()`, `_.while()`, `_.doWhile()`
- Switch: `_.switch(score, [{case: 0, body: () => {...}}])`

### Resources
[docs/features/resources](https://github.com/sandstone-mc/sandstone-documentation/tree/master/docs/features/resources)

Create datapack resources with type-safe builders:
- `Advancement('name', {...})` - Advancements
- `LootTable('name', {...})` - Loot tables
- `Predicate('name', {...})` - Predicates
- `Recipe('name', {...})` - Recipes
- `Tag('type', 'name', [...])` - Tags (blocks, items, functions, etc.)
- Many more

### Configuration
[docs/features/config.md](https://github.com/sandstone-mc/sandstone-documentation/blob/master/docs/features/config.md)

## Configuration

Edit `sandstone.config.ts` to change:
- `name`: Pack folder name
- `namespace`: Default namespace for resources
- `packs.datapack.packFormat`: Data pack format version
- `packs.resourcepack.packFormat`: Resource pack format version
- `mcmeta`: Minecraft version for type generation (`'latest'` or specific version)

### Pack Formats

**Always check [Pack format](https://minecraft.wiki/w/Pack_format) for current version numbers** - these change frequently with snapshots.

26.1.x will be the first supported stable release. Until 26.1.0 is released, use the latest snapshot pack formats from the wiki.
