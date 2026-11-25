// The 3 AM Excuse — make.fun entry (u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
//
// Writes one line (under 200 characters) to /output/entry.txt: the excuse a
// hardware wallet gives for refusing to sign a transaction at 3 AM, in the
// device's own voice — personality, reason, and joke in a single breath.
//
// Run: node main.ts            (writes /output/entry.txt)
//      OUTPUT_DIR=/tmp/out node main.ts   (local test into another directory)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Declined: it's 3 AM, my secure element is off the clock, and your judgment left the building hours ago. Ask me again after coffee.";

const MAX_CHARS = 200;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function main(): void {
  // Gate checks, mirroring the competition gate: UTF-8 text of 1-200
  // characters, not only whitespace, exactly one line.
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > MAX_CHARS) {
    fail(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (ENTRY.trim().length === 0) {
    fail("entry is only whitespace");
  }
  if (/[\r\n]/.test(ENTRY)) {
    fail("entry must be exactly one line");
  }
  // Printable ASCII only, so one character is one byte and the count the
  // gate sees is exactly the count checked here.
  if (!/^[\x20-\x7e]*$/.test(ENTRY)) {
    fail("entry must be printable ASCII");
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outFile = join(outDir, "entry.txt");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, ENTRY, "utf8"); // no trailing newline: exactly the line
  console.log(`wrote ${chars} chars to ${outFile}`);
  console.log(ENTRY);
}

main();
