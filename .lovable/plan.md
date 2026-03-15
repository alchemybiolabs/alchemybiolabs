
Goal: update the site to a dark brand palette, remove the extra homepage copy, and simplify the lower focus section to a single “More Soon.” message.

Plan

1. Update the global color tokens
- Edit `src/index.css` and replace the main theme variables so the site uses:
  - background: `#2e3c4e`
  - accent/primary: `#f45151`
  - foreground text: `#ffffff`
- Rebalance the supporting tokens that the current design depends on (`--secondary`, `--muted`, `--text-subtle`, `--divider`, `--surface-elevated`, borders, ring) so sections, subtle text, and dividers still read clearly against the new dark background.
- Keep the existing Tailwind token structure so all current components continue to work without a broader refactor.

2. Remove the sentence in the approach section
- Edit `src/components/ApproachSection.tsx`.
- Delete the paragraph that begins with “Our platform focuses on preserving signal integrity...”
- Keep the remaining paragraph, animation behavior, layout, and background image treatment intact.

3. Replace the focus-area list with one message
- Edit `src/components/FocusSection.tsx`.
- Remove the mapped list for:
  - Barrier dysfunction
  - Immune dysregulation
  - Metabolic disease
- Replace that entire block with a single centered animated line: `More Soon.`
- Preserve the section spacing and in-view animation so it still fits the rest of the homepage.

Expected result
- The full site shifts to the new dark blue / coral / white palette.
- The Approach section becomes shorter and cleaner.
- The section below it no longer lists focus areas and instead shows only “More Soon.”

Technical notes
- The project is already driven by CSS custom properties, so the color change should mostly be centralized in `src/index.css`.
- Because `text-subtle`, `bg-surface-elevated`, and `border-divider` are used throughout the site, those derived tokens should be adjusted alongside the main three colors rather than changing only `background`, `primary`, and `foreground`.
- No routing or content structure changes are needed beyond the two homepage components.
