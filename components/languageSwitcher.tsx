import Link from 'next/link'
import { useRouter } from 'next/router'
import {Component} from 'react'
import styles from './LanguageNavbarSwitcher.module.css'
import { Button } from 'nextra/components'

export function LanguageTextSwitcher() {
  const { locale, pathname } = useRouter()

  let url = "/"
  let text = "English Version →"
  let targetLocate = "en"

  if (locale == "bn" && pathname.endsWith(".bn")){
      url = pathname.substring(0, pathname.length - 3);
      targetLocate = "en"
  } else if(locale == "en" && pathname.endsWith(".en")){
      url = pathname.substring(0, pathname.length - 3);
      targetLocate = "bn"
      text = "বাংলা সংস্করণ →"
  }

  return (
      <Link href={url} locale={targetLocate} className='nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50'>
        {text}
      </Link>
    )
}


export function LanguageNavbarSwitcher() {
  const { locale, pathname } = useRouter()

  let url = "/"
  let text = "English"
  let targetLocate = "en"

  if (locale == "bn" && pathname.endsWith(".bn")){
      url = pathname.substring(0, pathname.length - 3);
      targetLocate = "en"
  } else if(locale == "en" && pathname.endsWith(".en")){
      url = pathname.substring(0, pathname.length - 3);
      targetLocate = "bn"
      text = "বাংলা"
  }

  return (
    <nav>
      <Link className="nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100 nx-relative -nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block nx-font-medium nx-subpixel-antialiased" href={url} locale={targetLocate}>
      <span style={{border: '1px solid rgba(107,114,128); padding: 6px 15px', borderRadius: '10px', color: 'rgba(107,114,128)'}}>{text}</span>
      </Link>
    </nav>    
    )
}
