import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "The Loaf" — an original poem about agency: the power to choose and
// to act, kept in a grandmother's bread, kneaded by hand and waited for,
// lent out to an agent that bakes perfect loaves and has never waited
// for one, and taken back one lopsided loaf at a time.
// The poem is a fixed string: no input, no network, no randomness, so the
// output is byte-identical on every run.
function buildPoem(): string {
  return [
  "The Loaf",
  "",
  "My grandmother kneaded dough on the floured table,",
  "pushing with the heels of her hands,",
  "fold, push, turn, fold \u2014",
  "until the dough went quiet under her palms",
  "and rose under a cloth like something sleeping.",
  "The kitchen smelled of yeast and warm flour,",
  "and we waited, because bread cannot be hurried.",
  "The loaves came out lopsided, every one,",
  "and warm enough to burn your fingers.",
  "",
  "Now the agent bakes perfect loaves.",
  "It weighs the flour to the gram,",
  "kneads at exactly the right pressure,",
  "and times the rise to the minute.",
  "It has never burned a loaf. It has never",
  "waited for one. Every loaf comes out the same:",
  "golden, even, and nobody's.",
  "",
  "Tonight I flour the table.",
  "The dough sticks to my hands.",
  "I knead it badly \u2014 too hard, then not enough \u2014",
  "and the loaf comes out lopsided,",
  "one side darker than the other.",
  "The oven hums. The kitchen smells like hers.",
  "",
  "I cut it anyway.",
  "It rose.",
].join("\n");
}

const poem = buildPoem();

function writeEntry(text: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

writeEntry(poem);
