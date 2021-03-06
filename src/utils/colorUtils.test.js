const {
  getBaseAndHarmonies,
  getAnalogousColors,
  getInverses,
  getLighters,
  getDarkers,
  getDesaturateds
} = require('./colorUtils');

describe('tests for getBaseAndHarmonies function', () => {
  it('should return a single color for complements of 0', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 0;
    expect(getBaseAndHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 180, s: 1, l: 0.5, a: 1, matchRelationship: 'base', step: '' }]);
  });

  it('should return base plus 1 color with hue of 0 for 1 harmonyQuantity and base color with h:180', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 1;
    expect(getBaseAndHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 180, s: 1, l: 0.5, a: 1, matchRelationship: 'base', step: '' }, { h: 0, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony1', step: '' }]);
  });

  it('should return 3 colors with equidistant hues above and below for 2 harmonies and color with h:180', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 2;
    expect(getBaseAndHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 180, s: 1, l: 0.5, a: 1, matchRelationship: 'base', step: '' }, { h: 60, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony1', step: '' }, { h: 300, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony2', step: '' }]);
  });
  it('should return 4 colors with equidistant hues for color with h:180 and 3 harmonies', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 3;
    expect(getBaseAndHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 180, s: 1, l: 0.5, a: 1, matchRelationship: 'base', step: '' }, { h: 90, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony1', step: '' }, { h: 0, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony2', step: '' }, { h: 270, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony3', step: '' }]);
  });


  it('should return base + color of hue 180 for 1 harmonyQuantity and a base color with h:0', () => {
    const hsl = { h: 0, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 1;
    expect(getBaseAndHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 0, s: 1, l: 0.5, a: 1, matchRelationship: 'base', step: '' }, { a: 1, h: 180, l: 0.5, s: 1, matchRelationship: 'harmony1', step: '' }]);
  });
  it('should return base + 2 colors with hues above 0 for 2 harmonies and base color with h:0', () => {
    const hsl = { h: 0, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 2;
    expect(getBaseAndHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 0, s: 1, l: 0.5, a: 1, matchRelationship: 'base', step: '' }, { h: 120, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony1', step: '' }, { h: 240, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony2', step: '' }]);
  });
  it('should return base + 3 colors with hues above 0 for 3 harmonies and base color with h:0', () => {
    const hsl = { h: 0, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 3;
    expect(getBaseAndHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 0, s: 1, l: 0.5, a: 1, matchRelationship: 'base', step: '' }, { h: 90, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony1', step: '' }, { h: 180, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony2', step: '' }, { h: 270, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony3', step: '' }]);
  });

  it('should return base + color with hue 179 for 1 harmonyQuantity and base color with h:359', () => {
    const hsl = { h: 359, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 1;
    expect(getBaseAndHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 359, s: 1, l: 0.5, a: 1, matchRelationship: 'base', step: '' }, { a: 1, h: 179, l: 0.5, s: 1, matchRelationship: 'harmony1', step: '' }]);
  });
  it('should return base + colors of hues 119 and 239 for 2 harmonies and base color with h:359', () => {
    const hsl = { h: 359, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 2;
    expect(getBaseAndHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 359, s: 1, l: 0.5, a: 1, matchRelationship: 'base', step: '' }, { h: 239, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony1', step: '' }, { h: 119, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony2', step: '' }]);
  });
  it('should return three colors with hues below 359 for 3 harmonies and base color with h:359', () => {
    const hsl = { h: 359, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 3;
    expect(getBaseAndHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 359, s: 1, l: 0.5, a: 1, matchRelationship: 'base', step: '' }, { h: 269, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony1', step: '' }, { h: 179, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony2', step: '' }, { h: 89, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony3', step: '' }]);
  });
});

describe('tests for getAnalogousColors function', () => {
  it('should return an empty array for analogousQuantity of 0', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const analogousQuantity = 0;
    expect(getAnalogousColors(hsl, analogousQuantity)).toEqual([]);
  });
  it('should return a single color for analogousQuantity of 1', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const analogousQuantity = 1;
    expect(getAnalogousColors(hsl, analogousQuantity)).toEqual([{ a: 1, h: 150, l: 0.5, matchRelationship: 'analogous1', s: 1, step: 1 }]);
  });
});

describe('tests for getInverses function', () => {
  it('should return an empty array for getInverses with inverseQuantity: 0', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const hslHarmonies = [{ h: 180, s: 1, l: 0.5, a: 1, matchRelationship: 'base', step: '' }, { h: 0, s: 1, l: 0.5, a: 1 }];
    const inverseQuantity = 0;
    expect(getInverses(hsl, hslHarmonies, inverseQuantity)).toEqual([]);
  });

  it('should return a single color with h:0 for a base color with h:180, harmonies:1, and inverseQuantity: 1', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const hslHarmonies = [{ h: 180, s: 1, l: 0.5, a: 1, matchRelationship: 'base', step: '' }, { h: 0, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony1', step: '' }];
    const inverseQuantity = 1;
    expect(getInverses(hsl, hslHarmonies, inverseQuantity)).toEqual([{ h: 0, s: 1, l: 0.5, a: 1, matchRelationship: 'inverse-of-base', step: '' }]);
  });
  it('should return a single color with h:0 for a base color with h:180, harmonies:0, and inverseQuantity: 1', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const hslHarmonies = [{ h: 180, s: 1, l: 0.5, a: 1 }];
    const inverseQuantity = 1;
    expect(getInverses(hsl, hslHarmonies, inverseQuantity)).toEqual([{ h: 0, s: 1, l: 0.5, a: 1, matchRelationship: 'inverse-of-base', step: '' }]);
  });
  it('should return two colors for a base color with h:180, harmonies:2, and inverseQuantity: 2', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const hslHarmonies = [{ h: 180, s: 1, l: 0.5, a: 1 }, { h: 60, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony1', step: '' }, { h: 300, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony2', step: '' }];
    const inverseQuantity = 2;
    expect(getInverses(hsl, hslHarmonies, inverseQuantity)).toEqual([{ h: 0, s: 1, l: 0.5, a: 1, matchRelationship: 'inverse-of-base', step: '' }, { h: 240, s: 1, l: 0.5, a: 1, matchRelationship: 'inverse-of-harmony1', step: '' }]);
  });
  it('should return three colors for a base color with h:180, harmonies:2, and inverseQuantity: 3', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const hslHarmonies = [{ h: 180, s: 1, l: 0.5, a: 1, matchRelationship: 'base' }, { h: 60, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony1' }, { h: 300, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony2' }];
    const inverseQuantity = 3;
    expect(getInverses(hsl, hslHarmonies, inverseQuantity)).toEqual([{ h: 0, s: 1, l: 0.5, a: 1, matchRelationship: 'inverse-of-base', step: '' }, { h: 240, s: 1, l: 0.5, a: 1, matchRelationship: 'inverse-of-harmony1', step: '' }, { h: 120, s: 1, l: 0.5, a: 1, matchRelationship: 'inverse-of-harmony2', step: '' }]);
  });
});

describe('tests for getLighters function', () => {
  it('should return an empty array for getLighters with lighterQuantity: 0', () => {
    const baseHarmoniesAndInversesColorList = [];
    const lighterQuantity = 0;
    expect(getLighters(baseHarmoniesAndInversesColorList, lighterQuantity)).toEqual([]);
  });
  it('should return 1 color for getLighters with darkerQuantity: 1 and a list of length 1', () => {
    const baseHarmoniesAndInversesColorList = [{ h: 0, s: 1, l: 0.5, a: 1, step: 1 }];
    const lighterQuantity = 1;
    expect(getLighters(baseHarmoniesAndInversesColorList, lighterQuantity)).toEqual([{ a: 1, h: 0, l: 0.75, s: 1, matchRelationship: 'lighter-base-step1', step: 1 }]);
  });

  it('should return 2 colors for getLighters with darkerQuantity: 1 and a list of length 2', () => {
    const baseHarmoniesAndInversesColorList = [{ h: 60, s: 1, l: 0.5, a: 1 }, { h: 300, s: 1, l: 0.5, a: 1, matchRelationship: 'harmony1' }];
    const lighterQuantity = 1;
    expect(getLighters(baseHarmoniesAndInversesColorList, lighterQuantity)).toEqual([{ a: 1, h: 60, l: 0.75, s: 1, matchRelationship: 'lighter-base-step1', step: 1 }, { h: 300, s: 1, l: 0.75, a: 1, matchRelationship: 'lighter-harmony1-step1', step: 1 }]);
  });

  it('should return 2 colors for getLighters with darkerQuantity: 1 and a list of length 2', () => {
    const baseHarmoniesAndInversesColorList = [{ h: 0, s: 1, l: 0.5, a: 1 }];
    const lighterQuantity = 1;
    expect(getLighters(baseHarmoniesAndInversesColorList, lighterQuantity)).toEqual([{ a: 1, h: 0, l: 0.75, s: 1, matchRelationship: 'lighter-base-step1', step: 1 }]);
  });
});

describe('tests for getDarkers function', () => {
  it('should return an empty array for getDarkers with darkerQuantity: 0', () => {
    const baseHarmoniesAndInversesColorList = [];
    const darkerQuantity = 0;
    expect(getDarkers(baseHarmoniesAndInversesColorList, darkerQuantity)).toEqual([]);
  });
  it('should return a single color for getDarkers with darkerQuantity: 1 and a list of length 1', () => {
    const baseHarmoniesAndInversesColorList = [{ h: 0, s: 1, l: 0.5, a: 1 }];
    const darkerQuantity = 1;
    expect(getDarkers(baseHarmoniesAndInversesColorList, darkerQuantity)).toEqual([{ a: 1, h: 0, l: 0.25, s: 1, matchRelationship: 'darker-base-step1', step: 1 }]);
  });
});

describe('tests for getDesaturateds function', () => {
  it('should return an empty array for getDesaturateds with desaturatedQuantity 0', () => {
    const baseHarmoniesAndInversesColorList = [{ h: 0, s: 1, l: 0.5, a: 1 }];
    const desaturatedQuantity = 0;
    expect(getDesaturateds(baseHarmoniesAndInversesColorList, desaturatedQuantity)).toEqual([]);
  });
  it('should return a single grayscale color for getDesaturateds with desaturatedQuantity: 1 and a list of length 1', () => {
    const baseHarmoniesAndInversesColorList = [{ h: 0, s: 1, l: 0.5, a: 1, matchRelationship: 'base' }];
    const desaturatedQuantity = 1;
    expect(getDesaturateds(baseHarmoniesAndInversesColorList, desaturatedQuantity)).toEqual([{ a: 1, h: 0, l: 0.5, s: 0.5, matchRelationship: 'desaturated-base-step1', step: 1 }]);
  });
});
