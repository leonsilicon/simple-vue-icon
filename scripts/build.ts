import { execaCommandSync as exec } from 'execa';
import { chProjectDir, copyPackageFiles, rmDist } from 'lion-system';

chProjectDir(import.meta.url);
rmDist();
exec('tsc');
exec('rollup -c', { stdio: 'inherit' });
await copyPackageFiles({ commonjs: false });
