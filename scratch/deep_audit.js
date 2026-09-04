import fs from 'fs';
import path from 'path';

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, ''));
}

const baseTokens = readJson('base-palette-tokens.json');
const foundationalTokens = readJson('foundational-tokens.json');
const tokenMap = readJson('src/styles/token-map.json');

// Let's inspect figma-tokens.css
const cssContent = fs.readFileSync('src/styles/figma-tokens.css', 'utf8');

// Parse CSS vars from figma-tokens.css
const cssVarRegex = /(--[a-zA-Z0-9_-]+):\s*([^;]+);/g;
let match;
const cssVars = [];
while ((match = cssVarRegex.exec(cssContent)) !== null) {
  cssVars.push({ name: match[1], value: match[2].trim() });
}

console.log(`Total CSS vars in figma-tokens.css: ${cssVars.length}`);

// Check duplicate CSS var names in figma-tokens.css
const seenNames = new Map();
const dupCssVars = [];
cssVars.forEach((v, idx) => {
  if (seenNames.has(v.name)) {
    dupCssVars.push({ name: v.name, first: seenNames.get(v.name), second: v, idx });
  } else {
    seenNames.set(v.name, v);
  }
});
console.log(`Duplicate CSS var names in figma-tokens.css: ${dupCssVars.length}`);
if (dupCssVars.length > 0) {
  console.log(dupCssVars);
}

// Check duplicate values or near-identical color definitions or misnamed tokens
const opacityVars = cssVars.filter(v => v.name.includes('opacity'));
console.log('\nOpacity CSS Vars sample:');
console.log(opacityVars.slice(0, 10));

// Search for all CSS files in src/
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const srcFiles = getAllFiles('src');
console.log(`\nTotal src files: ${srcFiles.length}`);

// Check component files for typography and CSS variable usages
const cssFiles = srcFiles.filter(f => f.endsWith('.css'));
console.log(`CSS files in src:`, cssFiles);

// Inspect all component css files for typography and color usage
cssFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const vars = [];
  let m;
  const re = /(--[a-zA-Z0-9_-]+)/g;
  while ((m = re.exec(content)) !== null) {
    vars.push(m[1]);
  }
  // Check typography references
  const fontMatches = content.match(/font-[a-z]+:[^;]+/gi) || [];
  console.log(`\nFile ${f}: ${vars.length} var usages, ${fontMatches.length} font properties`);
});

