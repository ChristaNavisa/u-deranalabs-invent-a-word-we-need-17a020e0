// Tabnesia — Invent a Word We Need
// Entry: one newly coined English word plus a one-line definition,
// written to /output/entry.txt (UTF-8, 1-140 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Tabnesia: forgetting why you opened a new browser tab.";

// Gate check, mirroring the sealed scorer: 1-140 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 140 || !/\S/.test(ENTRY)) {
  throw new Error(`entry fails gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
