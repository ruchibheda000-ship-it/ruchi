import fs from 'fs';

const baseTokens = JSON.parse(fs.readFileSync('base-palette-tokens.json', 'utf8').replace(/^\uFEFF/, ''));
const foundationalTokens = JSON.parse(fs.readFileSync('foundational-tokens.json', 'utf8').replace(/^\uFEFF/, ''));
const tokenMap = JSON.parse(fs.readFileSync('src/styles/token-map.json', 'utf8').replace(/^\uFEFF/, ''));

console.log('--- BASE PALETTE TOP KEYS ---');
console.log(Object.keys(baseTokens));

console.log('\n--- FOUNDATIONAL TOKENS TOP KEYS ---');
console.log(Object.keys(foundationalTokens));

// Check for duplicate keys/paths in foundationalTokens
function flattenKeys(obj, prefix = '') {
  let res = [];
  for (const k in obj) {
    if (k.startsWith('$')) continue;
    const path = prefix ? `${prefix}.${k}` : k;
    if (obj[k].$value !== undefined) {
      res.push({ path, value: obj[k].$value, type: obj[k].$type, varId: obj[k].$extensions?.['com.figma.variableId'] });
    } else if (typeof obj[k] === 'object' && obj[k] !== null) {
      res = res.concat(flattenKeys(obj[k], path));
    }
  }
  return res;
}

const baseFlat = flattenKeys(baseTokens);
const foundFlat = flattenKeys(foundationalTokens);

console.log(`\nBase tokens count: ${baseFlat.length}`);
console.log(`Foundational tokens count: ${foundFlat.length}`);

// Check duplicate variable IDs
const baseVarIds = new Map();
baseFlat.forEach(t => { if (t.varId) baseVarIds.set(t.varId, t.path); });

const foundVarIds = new Map();
foundFlat.forEach(t => { if (t.varId) foundVarIds.set(t.varId, t.path); });

console.log('\n--- DUPLICATE VAR IDs BETWEEN BASE & FOUNDATIONAL ---');
let dupVarIdCount = 0;
for (const [varId, path] of baseVarIds.entries()) {
  if (foundVarIds.has(varId)) {
    console.log(`Duplicate VarID ${varId}: Base (${path}) <-> Foundational (${foundVarIds.get(varId)})`);
    dupVarIdCount++;
  }
}
console.log(`Total duplicate Var IDs: ${dupVarIdCount}`);

// Check duplicates within foundational tokens itself
const foundPaths = new Map();
const foundDuplicates = [];
foundFlat.forEach(t => {
  const normName = t.path.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (foundPaths.has(normName)) {
    foundDuplicates.push({ orig: foundPaths.get(normName), dup: t });
  } else {
    foundPaths.set(normName, t);
  }
});
console.log('\n--- DUPLICATES WITHIN FOUNDATIONAL TOKENS ---');
console.log(foundDuplicates);
