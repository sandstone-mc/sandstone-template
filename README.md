# Sandstone library template

[//]: # "If .disable is removed from .github/workflows/packbuild.yml.disable & the repo is published to GitHub."

To build the library, run:
```bash
bun dev:build
```

To test the library, run:
```bash
bun test
```

To automatically rebuild & test the library on each change, run:
```bash
bun dev:watch
```

TODO: figure out a non-scuffed watcher