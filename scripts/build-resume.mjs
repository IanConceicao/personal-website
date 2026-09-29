// Compiles resume/resume.typ to public/Ian-Conceicao-Resume.pdf.
// Runs before `next build` / `next dev` so the site always ships the current resume.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { NodeCompiler } from "@myriaddreamin/typst-ts-node-compiler";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const resumeDir = resolve(root, "resume");
const output = resolve(root, "public/Ian-Conceicao-Resume.pdf");

const compiler = NodeCompiler.create({
  workspace: resumeDir,
  fontArgs: [{ fontPaths: [resolve(resumeDir, "fonts")] }],
});

mkdirSync(dirname(output), { recursive: true });
writeFileSync(
  output,
  compiler.pdf({ mainFilePath: resolve(resumeDir, "resume.typ") }),
);
console.log(`Built resume -> ${output}`);
