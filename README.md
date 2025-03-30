# 🍾 Typsi

[Typst](https://typst.app/docs/reference/symbols/sym/)-y Preset for Symbols, Indeed.

## Installation

This package doesn't get published to Espanso Hub because I do this by hobby. Not much passion for it yet.

Anyway you can install this if you really want to do.

```sh
espanso install typsi --git https://github.com/RanolP/typsi --external
```

## Usage

Refer the [typst docs](https://typst.app/docs/reference/symbols/sym/) for symbols. By wrapping them with `\`. You can use the symbols.

For example: `\subset.eq\` will gives you `⊆`.

You can play with natural arrows hard-coded to Typst. like `<->`.

## Contributing

Most of our symbols are based on [typst/codex](https://github.com/typst/codex). We parse the symbols and generate yaml files for Espanso.

And several hard-coded symbols.

You'll need to setup those files for contributing.

- Mise (for managing runtimes like Bun)
- Git (for fetching typst/codex)
- Bash or Nushell compatible shell environment
