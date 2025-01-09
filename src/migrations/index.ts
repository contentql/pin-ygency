import * as migration_20241213_094230 from './20241213_094230'
import * as migration_20250107_091534 from './20250107_091534'
import * as migration_20250107_104212 from './20250107_104212'
import * as migration_20250107_105053 from './20250107_105053'

export const migrations = [
  {
    up: migration_20241213_094230.up,
    down: migration_20241213_094230.down,
    name: '20241213_094230',
  },
  {
    up: migration_20250107_091534.up,
    down: migration_20250107_091534.down,
    name: '20250107_091534',
  },
  {
    up: migration_20250107_104212.up,
    down: migration_20250107_104212.down,
    name: '20250107_104212',
  },
  {
    up: migration_20250107_105053.up,
    down: migration_20250107_105053.down,
    name: '20250107_105053',
  },
]
