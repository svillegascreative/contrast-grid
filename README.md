# Contrast Grid

A little experiment to build a dynamic colour contrast grid!

**Note:** I'm Canadian, so I prefer spelling "colour" with a "u". However, to avoid bugs, all functional use of the word will follow the web standard "color" spelling. I will insist on adding the "u" in all rendered/UI text, though, because 🍁.

## Stack

- [Svelte 5](https://svelte.dev/) & SvelteKit
- [ColorJS](https://colorjs.io/) for colour contrast calculation
- Some web components from [Shoelace](https://shoelace.style)

## Getting started

- `npm run dev` gets the dev server running 😉

## Roadmap

Just some brief notes to keep track of where I'm at and what I'm planning to do next.

1. Full a11y check as soon as I've got the basic functionality sorted out
1. "Help" page with basic info on contrast, WCAG, etc.
1. Publish (Github pages?)

### Issues

Bugs and features tracked in [issues](https://github.com/svillegascreative/contrast-grid/issues)

### Ideas

- Calculate "percent passing"
- Create collection of palettes
- Highlight tanble headers (colour values) when a swatch is hovered/focused
- hide swatches selectively
