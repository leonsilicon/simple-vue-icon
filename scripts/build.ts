import fs from 'node:fs';
import { execaCommandSync as exec } from 'execa';
import { rmDist, copyPackageFiles } from 'lion-system';

rmDist();
exec('tsc');
copyPackageFiles();
fs.copyFileSync('src/icons.css', 'dist/icons.css');
