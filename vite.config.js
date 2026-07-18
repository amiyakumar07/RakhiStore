import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

const rootDir = __dirname;
const files = fs.readdirSync(rootDir);
const htmlFiles = files.filter(f => f.endsWith('.html'));

const inputs = {};
htmlFiles.forEach(file => {
  const name = file.replace('.html', '');
  inputs[name] = resolve(rootDir, file);
});

export default defineConfig({
  build: {
    rollupOptions: {
      input: inputs
    }
  }
});
