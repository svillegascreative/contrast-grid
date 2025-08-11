export const WCAG = {
	versions: ['2.0', '2.1', '2.2'],
	levels: ['AA', 'AAA'],
	elements: { text: 'Text', largeText: 'Large text', graphic: 'Graphic' }
};

export const PASSING_RATIOS = {
	AA: {
		text: 4.5, // SC 1.4.3
		largeText: 3.0, // SC 1.4.3
		graphic: 3.0 // SC 1.4.11
	},
	AAA: {
		text: 7.0, // SC 1.4.6
		largeText: 4.5, // SC 1.4.6
		graphic: 3.0 // not actually specified at AAA level, so carried over from AA
	}
};
