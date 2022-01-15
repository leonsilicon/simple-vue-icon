import * as fs from 'node:fs';
import { execaCommandSync as exec } from 'execa';

fs.rmSync('dist', { recursive: true, force: true });
exec('tsc');
exec('cp src/icons.css readme.md package.json dist');
