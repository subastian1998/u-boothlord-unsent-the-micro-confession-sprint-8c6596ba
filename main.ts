import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "To: my ex\n" +
  "I never told you I kept your spare key because giving it back meant admitting you were really gone.";

if (entry.length < 1 || entry.length > 260 || entry.trim().length === 0) {
  throw new Error("entry fails gate: must be 1-260 chars, not only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
