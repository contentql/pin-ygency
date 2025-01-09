import * as migration_20241213_094230 from './20241213_094230';
import * as migration_20250109_064417 from './20250109_064417';
import * as migration_20250109_065656 from './20250109_065656';
import * as migration_20250109_070005 from './20250109_070005';
import * as migration_20250109_070217 from './20250109_070217';

export const migrations = [
  {
    up: migration_20241213_094230.up,
    down: migration_20241213_094230.down,
    name: '20241213_094230',
  },
  {
    up: migration_20250109_064417.up,
    down: migration_20250109_064417.down,
    name: '20250109_064417',
  },
  {
    up: migration_20250109_065656.up,
    down: migration_20250109_065656.down,
    name: '20250109_065656',
  },
  {
    up: migration_20250109_070005.up,
    down: migration_20250109_070005.down,
    name: '20250109_070005',
  },
  {
    up: migration_20250109_070217.up,
    down: migration_20250109_070217.down,
    name: '20250109_070217'
  },
];
