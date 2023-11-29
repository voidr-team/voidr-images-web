import { useTranslation } from 'next-i18next'
import MenuDropdown from '../UI/MenuDropdown'
import Icon from '../UI/Icon'
import { useRouter } from 'next/router'
import styles from './LanguageSwitcher.module.scss'

function MenuList({ langs = ['en', 'es', 'pt-BR'] }) {
  const router = useRouter()
  const { t } = useTranslation('translations')

  const textMap = {
    en: 'translations.change_language.en',
    es: 'translations.change_language.es',
    'pt-BR': 'translations.change_language.pt',
  }

  const changeLanguage = (language) =>
    router.push(
      { pathname: router.pathname, query: router.query },
      router.asPath,
      {
        locale: language,
      }
    )

  return (
    <ul className={styles.menuListWrapper}>
      {langs.map((lang, index) => {
        return (
          <li
            className={styles.listItem}
            key={`${lang}_${index}`}
            onClick={() => changeLanguage(lang)}
          >
            {t(textMap[lang])}
          </li>
        )
      })}
    </ul>
  )
}

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className={styles.languageSwitcherWrapper}>
      <MenuDropdown menuBody={<MenuList />}>
        {(_) => {
          return (
            <div className={styles.menuActivatorWrapper}>
              <p>{i18n?.language}</p>
              <Icon height={18} width={18} id="World" />
            </div>
          )
        }}
      </MenuDropdown>
    </div>
  )
}
