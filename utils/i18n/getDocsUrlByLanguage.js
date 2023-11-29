/**
 * @param {String} language
 * @return {string}
 */
export default function getDocsUrlByLanguage(language) {
  if (language === 'en' || language === 'es') {
    return 'https://voidr-images-en.readme.io/reference/intro'
  }

  return 'https://voidr-images.readme.io/reference/intro'
}
