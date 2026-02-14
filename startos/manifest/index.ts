import { setupManifest } from '@start9labs/start-sdk'
import { short, long } from './i18n'

export const manifest = setupManifest({
  id: 'helipad',
  title: 'Helipad',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Podcastindex-org/helipad-startos',
  upstreamRepo: 'https://github.com/Podcastindex-org/helipad',
  supportSite: 'https://podcastindex.social',
  marketingSite: 'https://podcastindex.org',
  donationUrl: null,
  docsUrl: 'https://github.com/Podcastindex-org/helipad',
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerTag: 'podcastindexorg/podcasting20-helipad:0.2.1',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {
    lnd: {
      description: 'Used to communicate with your Lightning wallet.',
      optional: false,
      metadata: {
        title: 'LND',
        icon: 'https://raw.githubusercontent.com/Start9Labs/lnd-startos/refs/heads/master/icon.png',
      },
    },
  },
})
