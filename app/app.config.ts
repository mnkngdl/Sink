export default defineAppConfig({
  title: 'JKT48 Lives',
  github: 'https://github.com/miantiao-me/sink',
  coffee: 'https://sink.cool/coffee',
  twitter: 'https://link.jkt48live.com/twitter',
  telegram: 'https://link.jkt48live.com/telegram',
  whatsapp: 'https://link.jkt48live.com/whatsapp',
  youtube: 'https://link.jkt48live.com/youtube',
  description: 'Powered by manekingidol',
  image: '',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
