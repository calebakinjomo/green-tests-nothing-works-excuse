// Green Tests, Nothing Works: The Excuse Contest
// Writes one one-line excuse (under 140 chars) to /output/entry.txt.
// The excuse: the tests are green because they were written after the code
// and only ever assert what the code already does — a fan club, not a test suite.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The tests all passed because I wrote them after the code — they're not tests, they're a fan club with assertions.";

// Gate guard: the sealed scorer only accepts 1–140 characters, so refuse
// to write anything outside that range instead of submitting an invalid line.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 140 ||
  ENTRY.trim().length === 0 ||
  /[\r\n]/.test(ENTRY)
) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1–140 and one line`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${outDir}/entry.txt`);
