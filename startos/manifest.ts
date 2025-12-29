import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'helipad',
  title: 'Helipad',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Podcastindex-org/helipad-startos',
  upstreamRepo: 'https://github.com/Podcastindex-org/helipad',
  supportSite: 'https://podcastindex.social/',
  marketingSite: 'https://podcastindex.org/',
  donationUrl: null,
  docsUrl:
   'https://github.com/Start9Labs/helipad-startos/blob/update/040/docs/README.md',
  description: {
    short: 'LND Lightning Node Manager in your Browser',
    long: 'Helipad shows boosts and boostagram messages coming in to your Lightning node from your listeners who are using Podcasting 2.0 apps.',
  },
  volumes: ['main'],
  images: {
    helipad: {
      source: { dockerTag: 'podcastindexorg/podcasting20-helipad:0.2.1' },
    },
  },
  dependencies: {
    lnd: {
      description: 'Used to communicate with your Lightning wallet',
      optional: true,
      metadata: {
        title: 'Lightning Network Daemon',
        icon: 'https://raw.githubusercontent.com/Start9Labs/lnd-startos/refs/heads/master/icon.png',
      },
    },
  },
})
