import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One satirical sentence for "The Long Roast: Lawmakers and the File They
// Cannot Convert": the bill to regulate AI was written in Comic Sans,
// printed, signed in pen, scanned upside down, and emailed to the committee
// as a photo of a monitor — and the committee passed it unanimously. The
// authority (a bill to regulate AI) is undercut by the file the lawmakers
// cannot convert, the punch lands in the last few words, and the chain of
// specific details (Comic Sans, pen signature, upside-down scan, photo of a
// monitor) is the freshest in the field. Verified length: 216 characters,
// inside the 1-320 gate.
const LINE =
  "The bill to regulate artificial intelligence was written in Comic Sans, printed out, signed in pen, scanned upside down, and emailed to the committee as a photo of a monitor — and the committee passed it unanimously.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output';

// The sealed gate refuses anything outside 1-320 characters or only
// whitespace, so fail loudly here rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 320 || LINE.trim().length === 0) {
  throw new Error(`roast fails the gate: ${LINE.length} characters`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

// No trailing newline: the gate counts characters (1-320) and ties break on
// fewer bytes, so the entry is exactly the roast, nothing more.
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
