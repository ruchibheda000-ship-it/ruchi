import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Initiating Vercel Build & Deployment Checks...');

try {
  // Step 1: Run compilation check
  console.log('\n📦 Running TypeScript Compilation Check...');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ TypeScript check passed cleanly!');

  // Step 2: Run Storybook Build
  console.log('\n🎨 Building Storybook static site output...');
  execSync('npm run build-storybook', { stdio: 'inherit' });
  
  const outputDir = path.join(process.cwd(), 'storybook-static');
  if (fs.existsSync(outputDir)) {
    console.log(`✅ storybook-static built successfully at: ${outputDir}`);
  } else {
    throw new Error('storybook-static directory not found after build!');
  }

  console.log('\n🎉 Ready for Vercel deployment! Push repository or execute `npx vercel --prod`.');
} catch (err) {
  console.error('\n❌ Deployment check failed:', err.message);
  process.exit(1);
}
