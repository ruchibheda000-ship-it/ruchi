import fs from 'fs';
import path from 'path';

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

const files = getAllFiles('src');
console.log('--- ALL FONT / COLOR USAGES IN COMPONENTS ---');

const colorHexRegex = /#([0-9a-fA-F]{3,8})/g;
const fontRegex = /(font-[a-z-]+|line-height|letter-spacing)\s*:\s*([^;}]+)/gi;

const hexes = new Set();
const fontProps = new Set();

files.forEach(file => {
  if (file.endsWith('.css') || file.endsWith('.tsx') || file.endsWith('.ts')) {
    const content = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = colorHexRegex.exec(content)) !== null) {
      hexes.add(m[0]);
    }
    while ((m = fontRegex.exec(content)) !== null) {
      fontProps.add(`${m[1].trim()}: ${m[2].trim()}`);
    }
  }
});

console.log(`Unique Hex Colors found in src code: ${hexes.size}`);
console.log(Array.from(hexes).slice(0, 30));

console.log(`\nUnique Font Properties found in src code: ${fontProps.size}`);
console.log(Array.from(fontProps));
