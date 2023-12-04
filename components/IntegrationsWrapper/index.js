import Image from 'next/image'
import styles from './IntegrationsWrapper.module.scss'
import { useTranslation } from 'react-i18next'

const integrations = [
  {
    id: 1,
    imagePath: '/images/image-integrations/shopify.svg',
    isLauched: true,
    imageSize: 96,
    name: 'Shopify',
    docs: {
      'pt-BR':
        'https://voidr-images.readme.io/reference/integração-com-shopify',
      en: 'https://voidr-images-en.readme.io/reference/shopify-integration',
      es: 'https://voidr-images-en.readme.io/reference/shopify-integration',
    },
  },
  {
    id: 2,
    imagePath: '/images/image-integrations/wordpress.svg',
    isLauched: false,
    imageSize: 65,
    name: 'WordPress',
    docs: {
      'pt-BR': '#',
      en: '#',
      es: '#',
    },
  },
  {
    id: 3,
    imagePath: '/images/image-integrations/webflow.svg',
    isLauched: false,
    imageSize: 96,
    name: 'Webflow',
    docs: {
      'pt-BR': '#',
      en: '#',
      es: '#',
    },
  },
  {
    id: 4,
    imagePath: '/images/image-integrations/magento.svg',
    isLauched: false,
    imageSize: 84,
    name: 'Magento',
    docs: {
      'pt-BR': '#',
      en: '#',
      es: '#',
    },
  },
  {
    id: 5,
    imagePath: '/images/image-integrations/woocommerce.svg',
    isLauched: false,
    imageSize: 91,
    name: 'WooCommerce',
    docs: {
      'pt-BR': '#',
      en: '#',
      es: '#',
    },
  },
  {
    id: 6,
    imagePath: '/images/image-integrations/zapier.svg',
    isLauched: false,
    imageSize: 64,
    name: 'Zapier',
    docs: {
      'pt-BR': '#',
      en: '#',
      es: '#',
    },
  },
]

export default function IntegrationsWrapper() {
  const { t, i18n } = useTranslation('common')

  return (
    <section className={styles.container}>
      {integrations.map((integration) => {
        const documentationUrl = integration.docs[i18n.language]

        return (
          <a
            key={integration.id}
            target={documentationUrl !== '#' ? '_blank' : '_self'}
            href={documentationUrl}
            rel="noopener noreferrer"
          >
            <article className={styles.widgetIntegration}>
              <figure>
                <Image
                  src={integration.imagePath}
                  alt="Integration Logo"
                  width={integration.imageSize ?? 95}
                  height={integration.imageSize ?? 95}
                />
              </figure>

              {!integration.isLauched ? (
                <span className={styles.badge}>{t('common:soon')}</span>
              ) : null}

              <div className={styles.contentContainer}>
                <p>{integration.name}</p>
              </div>
            </article>
          </a>
        )
      })}
    </section>
  )
}
