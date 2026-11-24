// Usage: npm run check:links  (needs internet). Checks every https URL in lib/data.ts.
import { readFileSync } from "node:fs";
const urls = [...new Set(readFileSync("lib/data.ts", "utf8").match(/https?:\/\/[^"'\s)]+/g) ?? [])].filter((u) => !u.includes("<repo>"));
let bad = 0;
for (const u of urls) {
  try {
    const r = await fetch(u, { redirect: "follow", signal: AbortSignal.timeout(20000) });
    const ok = r.status < 400; if (!ok) bad++;
    console.log(`${ok ? "OK  " : "FAIL"} ${r.status} ${u}`);
  } catch (e) { bad++; console.log(`FAIL ERR ${u} (${e.message})`); }
}
console.log(bad ? `\n${bad} link(s) need attention (some sites block bots or sleep when idle; open them manually).` : "\nAll links responded.");
process.exit(bad ? 1 : 0);
