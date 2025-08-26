# 🍾 Typsi

[Typst](https://typst.app/docs/reference/symbols/sym/)-y Preset for Symbols, Indeed.

## Installation

This package doesn't get published to Espanso Hub because I do this by hobby. Not much passion for it yet.

Anyway you can install this if you really want to do.

```sh
espanso install typsi --git https://github.com/RanolP/typsi --external
```

Also if you liked my symbol set, also try nannosym by

```sh
espanso install nannosym --git https://github.com/RanolP/typsi --external
```

## Features

### Typst Symbols

Refer the [typst docs](https://typst.app/docs/reference/symbols/sym/). By wrapping them with `\`. You can use the symbols.

For example: `\subset.eq\` will gives you `⊆`.

We need the trailing `\` because of disambiguation between names such as `subset` and `subset.eq`.

### Typst Emojis

Also refer the [typst docs](https://typst.app/docs/reference/symbols/emoji/) for emojis. This time we use `:` instead of `\`.

For example: `:arm.mech:` will gives you `🦾`.

### Hard-coded Symbols

You can play with natural arrows hard-coded to Typst. like `<->\ = ↔ or !=\ = ≠`. Ends with `\` for conversion.

### Latin Alphabet Variants

We support latin alphabet variants such as

| LaTeX equivalent | Syntax                                     | Result |
| ---------------- | ------------------------------------------ | ------ |
| `\textrm`        | `\A.serif\`                                | A      |
| `\textsf`        | `\A.sans\`                                 | 𝖠      |
| `\texttt`        | `\A.mono\`                                 | 𝙰      |
| `\textbf`        | `\A.serif.b\` or `\A.sans.b\`              | 𝐀 or 𝗔 |
| `\textit`        | `\A.serif.i\` or `\A.sans.i\`              | 𝐴 or 𝘈 |
| `\mathfrak`      | `\A.frak\`                                 | 𝔄      |
| `\mathbb`        | `\A.bb\` or just `\AA\` from Typst symbols | 𝔸      |
| `\mathcal`       | `\A.cal\`                                  | 𝒜      |

### Superscript and Subscripts

Just use `^` or `_`, ends with `\` like `x^42\` = x⁴² or `A_ij\` = Aᵢⱼ

## Contributing

Most of our symbols are based on [typst/codex](https://github.com/typst/codex). We parse the symbols and generate yaml files for Espanso.

And several hard-coded symbols from [here](https://github.com/typst/typst/blob/efdb75558f20543af39f75fb88b3bae59b20e2e8/crates/typst-syntax/src/ast.rs#L905-L944).

You'll need to setup those tools for contributing.

- Mise (for managing runtimes like Bun)
- Git (for fetching typst/codex)
