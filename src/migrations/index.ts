import * as migration_20241213_094230 from './20241213_094230';

export const migrations = [
  {
    up: migration_20241213_094230.up,
    down: migration_20241213_094230.down,
    name: '20241213_094230'
  },
];
