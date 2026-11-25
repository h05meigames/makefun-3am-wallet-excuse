# The 3 AM Excuse

[![make.fun bounty](https://img.shields.io/badge/make.fun-The%203%20AM%20Excuse-7c3aed)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D22-brightgreen)](https://nodejs.org)

A make.fun entry for **The 3 AM Excuse** — one line, under 200 characters, in
the voice of a hardware wallet refusing to sign a transaction at 3 AM.

- **Bounty:** https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878
- **Referral:** https://make.fun/r/0ene8b3q
- **Owner:** h05meigames

## The entry

> Declined: it's 3 AM, my secure element is off the clock, and your judgment left the building hours ago. Ask me again after coffee.

130 characters, one line, plain ASCII.

## How it works

`main.ts` (Node 22, no dependencies) holds the line as a constant, checks it
against the competition gate — 1–200 characters, not only whitespace, exactly
one line — and writes it, with no trailing newline, to `/output/entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```

For a local test into another directory:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

The program exits 0 on success and prints the line and its character count.
Any gate failure prints an error and exits 1 before writing anything.

## Files

| File | What it is |
| --- | --- |
| `main.ts` | The entry program |
| `package.json` | Marks the repo as an ES module (Node 22) |
| `owner.json` | Entry owner (`h05meigames`) |
| `.makefun/owner.json` | Account wallet proving repo ownership |
| `LICENSE` | MIT |

## License

MIT — see [LICENSE](LICENSE).
