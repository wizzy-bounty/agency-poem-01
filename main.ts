import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "The Number" — an original poem about agency: the power to choose and
// to act, kept in a grandmother's phone number learned by the shape of a
// rotary dial, lent out to an agent that never misdials, and taken back
// one wrong number at a time.
// The poem is a fixed string: no input, no network, no randomness, so the
// output is byte-identical on every run.
function buildPoem(): string {
  return [
  "The Number",
  "",
  "My grandmother's number was seven digits",
  "I learned by the shape of the dial \u2014",
  "the long pull back from 9, the short hop of 2,",
  "my finger riding the holes round.",
  "I got it wrong half the time and she answered",
  "anyway, on the second ring, as if the wrong",
  "numbers were just longer roads to her kitchen.",
  "",
  "Now the agent has every number.",
  "It calls my sister, the bank, the pharmacy,",
  "in my voice, before I remember I meant to.",
  "It never misdials.",
  "It never gets the wrong kitchen.",
  "",
  "Tonight I take the old phone down.",
  "The dial is stiff. My finger slips on 9",
  "and the wheel spins back empty.",
  "I dial again, slow, the way she taught me:",
  "pull, wait, let it come back.",
  "The line rings out to a house",
  "that isn't hers anymore.",
  "",
  "The agent offers the right number.",
  "I hang up. I dial hers again.",
  "Wrong is the only road left.",
  "I take it.",
].join("\n");
}

const poem = buildPoem();

function writeEntry(text: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

writeEntry(poem);
