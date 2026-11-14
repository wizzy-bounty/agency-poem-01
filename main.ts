import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "Taken Down" — an original poem about agency: the power to choose and
// to act, lent out one dictated letter at a time and handed back every
// night by the reading-back, even of the sentence she takes back.
// The poem is a fixed string: no input, no network, no randomness, so the
// output is byte-identical on every run.
const poem = [
  "She speaks, and my pencil keeps her voice",
  "the way a cup keeps water \u2014 briefly, and only to pour it back.",
  "",
  "Every evening I read the letters over,",
  "word for word, no smoothing:",
  "the thanks she meant, the terms she set,",
  "the name of the man she would not sell to.",
  "Where her meaning snagged, I stopped and asked.",
  "Where it ran clear, I let it run.",
  "",
  "Once, mid-sentence, she almost gave the orchard away \u2014",
  "tired, she said all of it, keep nothing \u2014",
  "and I read that back too, exactly as spoken.",
  "She heard herself. Her hand came down flat on the page:",
  "Not that. Strike it. My pen obeyed her, not the words.",
  "",
  "So this is the whole of my office:",
  "a voice borrowed each morning, returned each night,",
  "and nothing in it mine but the asking.",
].join("\n");

function writeEntry(text: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

writeEntry(poem);
