import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'template',
  packs: {
    datapack: {
      description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' datapack.' ],
      packFormat: 121,
    },
    resourcepack: {
      description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' resource pack.' ],
      packFormat: 97,
    }
  },
  onConflict: {
    default: 'warn',
  },
  namespace: 'default',
  packUid: 'kZZpDK67',
  mcmeta: 'latest',
  saveOptions: {},
} as SandstoneConfig
