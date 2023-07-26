import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { PipilikaSmall } from './components/pipilika';
import { LanguageNavbarSwitcher, LanguageTextSwitcher } from './components/languageSwitcher';

const TITLE_BN = 'পিপীলিকা সার্চ ইঞ্জিনঃ প্রতারণা এবং বেইমানির অপ্রকাশিত ইতিহাস'
const TITLE_EN = 'Pipilika Search Engine: A Hidden Tale of Deception and Betrayal'

const DESC_BN = `পিপীলিকা সার্চ ইঞ্জিন বাংলাদেশের ও বাংলাভাষায় প্রথম সার্চ ইঞ্জিন। ২০১৩ সালে অফিসিয়ালি উদ্ভোদনের আগে পরে এই প্রযুক্তি নিয়ে মাতামাতি কম হয় নি। টেক্সট বইয়ে জায়গা করে নেয়া, কোটি টাকার ফান্ডিং, মিডিয়া কভারেজ, নাম-যশ, ব্র্যান্ডিং কোনো কিছুতেই কমতি ছিল না। অথচ সবার অগোচরে রয়ে গেছে পিপীলিকা সার্চ ইঞ্জিনের একটি কালো ইতিহাস। যেখানে অরিজিনাল ইনভেন্টর 'বুরহান' এবং 'চিশতি' কে কৌশলে আড়ালে রেখে এই প্রযুক্তির মেধাসত্ত্ব নাম যশ অর্থ একক ভাবে ভোগ করে গেছেন 'রুহুল আমিন সজীব' নামের একজন ভয়ঙ্কর একাডেমিক ম্যালপ্রাক্টিশিয়ান। আসল ইন্টভেন্টরদের কাছ থেকে পিপীলিকা হাইজ্যাক করে নিজেই ইনভেন্টর সেজে বসা এই শিক্ষকরূপী এই মেধাসত্ত্ব চোর শুধু পিপীলিকাকে ভোগ করে নি, মিথ্যা তথ্য সাজিয়ে সবাইকে বিভ্রান্ত করে গেছেন প্রায় এক যুগ। এই ন্যাক্কারজনক ইতিহাস আসল ইনভেন্টররা সকল প্রমাণাদি হাতে থাকার পরেও কখনো প্রকাশ করেন নি। 

বিশ্ববিদ্যালয় ও বিভাগের সুনাম রক্ষার্থে বিষয়টি কে গোপন রাখা হয়েছে প্রায় এক যুগ। অত্যন্ত দুঃখজনক ভাবে পিপীলিকার ভবিষ্যতের কথা চিন্তা করে গোপন রাখা হলেও সম্প্রতি দেখা যাচ্ছে 'রুহুল আমিন সজীব' শুধু মাত্র পিপীলিকা কেলেঙ্কারিতে থেমে নেই। প্রায়ই অনেকটা একই ধরণের গল্প আসল ইন্টভেন্টরদের কাছে আসতে থাকে। যেখানে 'রুহুল আমিন সজীব' পিপীলিকায় ঘটানো অপকীর্তির সাথে মিল পাওয়া যায়। ব্যাপারটি নিয়ে শাবিপ্রবি সি এস ই বিভাগে প্রমাণসহ লিখিত অভিযোগ জানানোর পরেও প্রায় দুই বছর সময়ে কোন সূরাহা পাওয়া যায় নি। যাকে সংশ্লিষ্ট ব্যক্তিদের সদিচ্ছার অভাব হিসেবে ধরে নেয়া যায়। 

সম্প্রতি 'রুহুল আমিন সজীব' এর একই রকম আরো কিছু অপকর্ম সম্পর্কে পোস্ট অরিজিনাল ইনভেন্টরদের নজরে আসে। যেহেতু তারা অনেক বছর একটা বঞ্চনার ভেতর দিয়ে গিয়েছেন তারা খুব সহজেই বুঝতে পারেন এমন কিছু যখন কোন শিক্ষার্থীর সাথে ঘটে তা তার মানুষিক সাস্থ্যের উপর কি পরিমাণ ভয়ঙ্কর বিপর্যয় ডেকে আনতে পারে। তাই ২০২৩ সালের জুনের ১৮ তারিখ থেকে ফেসবুকে পাব্লিক ধারাবাহিক পর্ব আকারে  পিপীলিকার মেধাস্বত্ব চুরির কালো ইতিহাসটি জনসম্মুক্ষে প্রকাশিত করা হয়। 

ফেসবুকে প্রকাশিত সেই ধারাবাহিক পর্ব ও প্রমানগুলোকে গুছিয়ে একসাথে রাখার জন্যই এই প্রচেষ্ঠা। আমাদের গল্প জেনে যদি একজন শিক্ষার্থীও ভবিষ্যতে কোনো একাডেমিক ম্যালপ্রাক্টিশিয়ান এর থেকে প্রতারিত হওয়া থেকে বেচে যায় তাহলে আমাদের এই প্রচেষ্ঠা সফল মনে করব।`


const DESC_EN = `Pipilika Search Engine, the first of its kind in Bangladesh and Bengali language, generated immense hype before its official unveiling in 2013. It received widespread media coverage, massive funding, and earned significant name recognition and branding. However, behind this facade of success lies a dark history kept concealed from the public eye. The true inventors, 'Burhan' and 'Chisty,' have been pushed into anonymity by a deceitful academic malpractitioner, Dr. Ruhul Amin Shajib, who shamelessly claimed credit for their genius creation. He single-handedly hijacked Pipilika, not only robbing its original creators but also deceiving everyone with false information for nearly a decade. Shockingly, this distressing story remained undisclosed, despite the inventors possessing concrete evidence.

To safeguard the university's and the department's reputation, the matter was kept hidden for nearly a decade. Unfortunately, this secrecy may have contributed to the ongoing predicament surrounding Pipilika. It appears that 'Ruhul Amin Shajib' is not confined to the Pipilika scandal alone. Similar tales of mischief have surfaced, strikingly reminiscent of what happened with Pipilika. Although a written complaint with evidence was filed with the SUST CSE department, no resolution was found in almost two years, reflecting a lack of goodwill from the concerned parties.

Recently, more revelations about 'Ruhul Amin Shajib's' misdeeds have come to the inventors' attention. Having endured years of deprivation, they understand the devastating impact such incidents can have on an individual's well-being. Thus, on June 18, 2023, Pipilika's dark history of intellectual property theft was made public through a series of posts on Facebook.

The aim of this effort is to compile the episodes and evidence published on Facebook. If sharing our story can prevent even one student from falling victim to academic malpractice in the future, we will consider this endeavor a success.`


function Footer(){
  const { locale } = useRouter()
  return (
    <span>
      '© ' + (locale == 'bn' ? TITLE_BN : TITLE_EN);
    </span>
  )
}


const config: DocsThemeConfig = {
  logo: (
    <>
      <PipilikaSmall />
    </>
  ),
  logoLink: '/',
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //    link: 'https://discord.com',
  // },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  navbar: {
    extraContent: LanguageNavbarSwitcher,
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://untold-story-of-pipilika.vercel.app' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    let title = frontMatter.title
    let desc = frontMatter.description

    if(locale == 'bn'){
      return (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content="রুহুল আমিন সজীব, পিপীলিকা সার্চ ইঞ্জিন, পিপীলিকা, সজীবসাস্ট, শাবিপ্রবি, সিএসই, থিসিস চুরি, মেধাস্বত্ত চোর" />
          <meta property="og:title" content={title || TITLE_BN} />
          <meta property="og:description" content={desc || DESC_BN} />
          <meta property="og:image" content="/static/pipilika/pipilika.png" />
          <link rel="icon" type="image/x-icon" href="/static/pipilika/favicon.ico"></link>
        </>
      )
    }

    return (
      <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content="Dr. Ruhul Amin Shajib, Pipilika Search Engine, Pipilika, shajibsust, Academic Malpractice, IP Fraud, SUST, CSE" />
          <meta property="og:title" content={title || TITLE_EN} />
          <meta property="og:description" content={desc || DESC_EN} />
          <meta property="og:image" content="/static/pipilika/pipilika.png" />
          <link rel="icon" type="image/x-icon" href="/static/pipilika/favicon.ico"></link>
        </>
    )
  },
  footer: {
    component: Footer
  },
  useNextSeoProps() {
    const { locale } = useRouter()
    return {
      titleTemplate: '%s | ' + (locale == 'bn' ? TITLE_BN : TITLE_EN),
    }
  },
  feedback:{ content: null }, 
  editLink: { 
    component: LanguageTextSwitcher
  },
  search: {
    placeholder: () => {
      const { locale } = useRouter()
      return locale == 'bn' ? 'অনুসন্ধান...': 'Search...';
    }
  },
  toc: {
    title: () => {
      const { locale } = useRouter()
      return locale == 'bn' ? 'এই পাতায়': 'On This Page';
    }
  },

  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'bn', text: 'বাংলা' }
  ]
}

export default config
