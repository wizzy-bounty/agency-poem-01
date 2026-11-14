import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "Spare Key" — an original poem about agency: the power to choose and
// to act, and what happens to it when one hand lends its work to another.
// The poem is a fixed string: no input, no network, no randomness, so the
// output is byte-identical on every run.
const poem = [
  "I cut a second key",
  "for hands that are not mine,",
  "and watched it turn a lock",
  "I had opened a thousand times.",
  "",
  "The door swung. The light came on.",
  "Nothing in the room had changed \u2014",
  "except the weight of my own key,",
  "still warm in my pocket,",
  "still mine to turn.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
