// main reference: https://github.com/typst/typst/blob/96dd67e011bb317cf78683bcf1edfdfca5e7b6b3/crates/typst-layout/src/math/text.rs#L185

const LatinAlphabets = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
};

const LatinExceptions = {
  upper: {
    B: {
      cal: { normal: 'ℬ' },
    },
    C: {
      frak: { normal: 'ℭ' },
      bb: { normal: 'ℂ' },
    },
    D: {
      bb: { italic: 'ⅅ' },
    },
    E: {
      cal: { normal: 'ℰ' },
    },
    F: {
      cal: { normal: 'ℱ' },
    },
    H: {
      cal: { normal: 'ℋ' },
      frak: { normal: 'ℌ' },
      bb: { normal: 'ℍ' },
    },
    I: {
      cal: { normal: 'ℐ' },
      frak: { normal: 'ℑ' },
    },
    L: {
      cal: { normal: 'ℒ' },
    },
    M: {
      cal: { normal: 'ℳ' },
    },
    N: {
      bb: { normal: 'ℕ' },
    },
    P: {
      bb: { normal: 'ℙ' },
    },
    Q: {
      bb: { normal: 'ℚ' },
    },
    R: {
      cal: { normal: 'ℛ' },
      frak: { normal: 'ℜ' },
      bb: { normal: 'ℝ' },
    },
    Z: {
      frak: { normal: 'ℨ' },
      bb: { normal: 'ℤ' },
    },
  },
  lower: {
    d: {
      bb: { italic: 'ⅆ' },
    },
    e: {
      bb: { italic: 'ⅇ' },
      cal: { normal: 'ℯ' },
    },
    g: {
      cal: { normal: 'ℊ' },
    },
    h: {
      serif: { italic: 'ℎ' },
    },
    i: {
      bb: { italic: 'ⅈ' },
    },
    j: {
      bb: { italic: 'ⅉ' },
    },
    o: {
      cal: { normal: 'ℴ' },
    },
  },
} as const;

const variants = {
  'latin.upper': [
    [
      'serif',
      { normal: 0x0041, bold: 0x1d400, italic: 0x1d434, boldItalic: 0x1d468 },
    ],
    [
      'sans',
      { normal: 0x1d5a0, bold: 0x1d5d4, italic: 0x1d608, boldItalic: 0x1d63c },
    ],
    ['cal', { normal: 0x1d49c, bold: 0x1d4d0 }],
    ['frak', { normal: 0x1d504, bold: 0x1d56c }],
    ['mono', { normal: 0x1d670 }],
    ['bb', { normal: 0x1d538 }],
  ],
  'latin.lower': [
    [
      'serif',
      { normal: 0x0061, bold: 0x1d41a, italic: 0x1d44e, boldItalic: 0x1d482 },
    ],
    [
      'sans',
      { normal: 0x1d5ba, bold: 0x1d5ee, italic: 0x1d622, boldItalic: 0x1d656 },
    ],
    ['cal', { normal: 0x1d4b6, bold: 0x1d4ea }],
    ['frak', { normal: 0x1d51e, bold: 0x1d586 }],
    ['mono', { normal: 0x1d68a }],
    ['bb', { normal: 0x1d552 }],
  ],
} as const;

for (const cases of ['upper', 'lower'] as const) {
  let exceptionsForCase = LatinExceptions[cases];
  for (const latin of LatinAlphabets[cases]) {
    let exceptionsForAlphabet =
      latin in exceptionsForCase
        ? exceptionsForCase[latin as keyof typeof exceptionsForCase]
        : null;
    const index = LatinAlphabets[cases].indexOf(latin);
    console.log(latin);
    for (const [variantName, variant] of variants[`latin.${cases}`]) {
      for (const state of ['normal', 'bold', 'italic', 'boldItalic'] as const) {
        const names = {
          normal: [`.${variantName}`],
          bold: [`.${variantName}.b`],
          italic: [`.${variantName}.i`],
          boldItalic: [`.${variantName}.bi`, `.${variantName}.ib`],
        } as const;
        const value =
          exceptionsForAlphabet?.[variantName]?.[state] ??
          (state in variant
            ? String.fromCodePoint(
                variant[state as keyof typeof variant] + index,
              )
            : null);
        if (typeof value !== 'string') continue;
        for (const name of names[state]) {
          console.log(`  ${name} ${value}`);
        }
      }
    }
  }
}
