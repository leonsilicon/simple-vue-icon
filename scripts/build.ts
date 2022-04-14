import { execaCommandSync as exec } from 'execa';
import { chProjectDir, copyPackageFiles, rmDist } from 'lion-system';
import fs from 'node:fs';

chProjectDir(import.meta.url);
rmDist();
exec('tsc');
await copyPackageFiles({ commonjs: { external: [/(.*).css$/, 'vue'] } });
fs.copyFileSync('src/icons.css', 'dist/icons.css');
