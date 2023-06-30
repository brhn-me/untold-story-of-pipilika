import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><img src='/static/pipilika/logo-small.png' /></span>,
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
    text: 'Pipilika Search Engine - The Untold Story',
  },
  feedback:{ content: null }, 
  editLink: { text: null }
}

export default config
