import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const loadPageTranslation = async ({ locale }) => {
  const fs = require('fs-extra')
  const path = require('path')
  const directoryPath = path.join('public', 'locales', 'en')
  const files = await fs.readdir(directoryPath)
  const translations = files
    .filter((file) => path.extname(file) === '.json')
    .map((file) => path.parse(file).name)

  return {
    props: {
      ...(await serverSideTranslations(locale, [...translations])),
    },
  }
}
export default loadPageTranslation
