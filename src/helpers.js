/**
 * Check whether colour contrast is sufficient to satisfy WCAG criteria at
 * AA or AAA level for text, large text, or graphic/UI elements.
 * @param {string} concern 'text', 'largeText', 'graphic'
 * @param {string} level 'AA', 'AAA'
 * @param {number} contrast contrast level
 * @returns {boolean}
 */
export const passingContrast = (concern, level, contrast) => {
	switch (concern) {
		case 'text':
			return (level === 'AA' && contrast > 4.5) || (level === 'AAA' && contrast > 7);
		case 'largeText':
			return (level === 'AA' && contrast > 3) || (level === 'AAA' && contrast > 4.5);
		case 'graphic':
			return (level === 'AA' && contrast > 3) || (level === 'AAA' && contrast > 4.5);
		default:
			return false;
	}
};
