import en_US from './en-US'
import zh_CN from './zh-CN'
import zh_HK from './zh-HK'

const languages = [{
  locale: 'zh-CN',
  text: '简体中文',
  symbol: "CNY",
},
{
  locale: 'zh-HK',
  text: '繁體中文',
  symbol: "HKD",
},
{
  locale: 'en-US',
  text: 'English',
  symbol: "USD",
},
  // {
  //   locale: 'ja-JP',
  //   text: '日本語',
  //   symbol: "JPY",
  // },
  // {
  //   locale: 'ko-KR',
  //   text: '한국인',
  //   symbol: "KRW",
  // }
]

export default {
  'en-US': en_US,
  'zh-CN': zh_CN,
  'zh-HK': zh_HK,
  languages
}