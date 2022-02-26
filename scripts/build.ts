import fs from 'node:fs';
import { execaCommandSync as exec } from 'execa';
import { chProjectDir, rmDist, copyPackageFiles } from 'lion-system';

chProjectDir(import.meta.url);
rmDist();
exec('tsc');
copyPackageFiles();
fs.copyFileSync('src/icons.css', 'dist/icons.css');
