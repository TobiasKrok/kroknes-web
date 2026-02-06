import * as migration_20260127_201803 from './20260127_201803'
import * as migration_20260127_202848 from './20260127_202848'

export const migrations = [
    {
        up: migration_20260127_201803.up,
        down: migration_20260127_201803.down,
        name: '20260127_201803',
    },
    {
        up: migration_20260127_202848.up,
        down: migration_20260127_202848.down,
        name: '20260127_202848',
    },
]
