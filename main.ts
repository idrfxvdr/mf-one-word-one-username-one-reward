import { mkdirSync, writeFileSync } from 'node:fs';

// The entrant's own make.fun handle, sent as one word with no gloss.
const ENTRY = 'idrfxvdr';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY, 'utf8');
