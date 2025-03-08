export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
  },
  seo: {
    siteName: 'Plateforme de formation - Fourny Valentin',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: '',
    },
    search: true,
    links: [
      {
        label: 'NodeJS',
        to: '/node',
      },
      {
        label: 'VueJS',
        to: '/vue',
      },
      {
        label: 'CI/CD',
        to: '/ci-cd',
      },
      {
        label: 'Git',
        to: '/git',
      },
    ],
    externalLinks: [
      {
        icon: 'i-mdi-github',
        to: 'https://github.com/vfourny',
        target: '_blank',
      },
      {
        icon: 'i-mdi-linkedin ',
        to: 'https://www.linkedin.com/in/valentin-fourny-879a23117/',
        target: '_blank',
      },
    ],
  },
  toc: {
    title: 'Sur cette page',
  },
})
