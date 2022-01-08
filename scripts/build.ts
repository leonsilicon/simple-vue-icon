import { execaCommandSync as exec } from 'execa';
import * as fs from 'fs';

fs.rmSync('dist', { recursive: true, force: true });
exec('tsc');
exec('cp src/icons.css readme.md package.json dist');
