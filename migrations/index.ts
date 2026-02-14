import * as migration_20260127_201803 from './20260127_201803'
import * as migration_20260127_202848 from './20260127_202848'
import * as migration_20260210_204644 from './20260210_204644'
import * as migration_20260214_145312 from './20260214_145312'

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
    {
        up: migration_20260210_204644.up,
        down: migration_20260210_204644.down,
        name: '20260210_204644',
    },
    {
        up: migration_20260214_145312.up,
        down: migration_20260214_145312.down,
        name: '20260214_145312',
    },
]
