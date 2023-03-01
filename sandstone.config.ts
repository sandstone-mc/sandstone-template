import type { DatapackConfig, SandstoneConfig } from 'sandstone'

export default {
  name: 'template',
  packs: {
    datapack: {
      description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' data pack.' ],
      packFormat: 11
    } as DatapackConfig
  },
  namespace: 'default',
  packUid: 'kZZpDK67',
  saveOptions: {},
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
