import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v_0_2_2_0_b0 = VersionInfo.of({
  version: '0.2.2:0-beta.0',
  releaseNotes: {
    en_US: 'Update Helipad to 0.2.2',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
