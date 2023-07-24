import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: <span><img src='/static/pipilika/logo-small.png' /></span>,
  logoLink: '/',
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Pipilika Search Engine - The Untold Story" />
      <meta property="og:description" content="Revealing the unspoken dirty manipulation of Dr. Ruhul Amin during early days of the Pipilika Search Engine" />
      <link rel="icon" type="image/x-icon" href="/static/pipilika/favicon.ico"></link>
    </>
  ),
  footer: {
    text: 'Pipilika Search Engine: A Hidden Tale of Deception and Betrayal',
  },
  useNextSeoProps() {
    const { asPath, defaultLocale, locale } = useRouter()

    const bn_title = '%s | পিপীলিকা সার্চ ইঞ্জিন: প্রতারণা এবং বেইমানির অপ্রকাশিত ইতিহাস'
    const en_title = '%s | Pipilika Search Engine: A Hidden Tale of Deception and Betrayal'

    let title_template = locale == 'bn' ? bn_title : en_title;

    return {
      titleTemplate: title_template,
    }
  },
  feedback:{ content: null }, 
  editLink: { text: null },
  search: {
    placeholder: () => {
      const { asPath, defaultLocale, locale } = useRouter()
      return locale == 'bn' ? 'অনুসন্ধান...': 'Search...';
    }
  },

  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'bn', text: 'বাংলা' }
  ]
}

export default config
