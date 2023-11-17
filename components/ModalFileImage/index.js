import { Check, ChevronsRight } from 'lucide-react'
import styles from './ModalFileImage.module.scss'
import dayjs from 'dayjs'
import useGetVariationsImage from '@/hooks/useGetVariationsImage'
import { useEffect, useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import 'react-indiana-drag-scroll/dist/style.css'
import Loader from '../UI/Loader'
import cn from 'classnames'
import CopyURL from '../CopyURL'
import getImageSource from '@/utils/getImageSource'
import CodeBlocks from '../UI/CodeBlocks'
import formatBytes from '@/utils/formatBytes'
import Icon from '../UI/Icon'
import { useTranslation } from 'next-i18next'

export default function ModalFileImage({
  isOpen,
  setIsOpen,
  currentImage,
  setCurrentImage,
}) {
  const {
    data: imageVariations,
    isLoading,
    fetch,
  } = useGetVariationsImage(currentImage?._id)
  const [selectedLanguage, setSelectedLanguage] = useState('html')
  const [copiedSnippet, setCopiedSnippet] = useState(false)
  const { t } = useTranslation(['translations', 'common'])

  const closeModal = () => {
    setCurrentImage(null)
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (currentImage?._id) {
      fetch()
    }
  }, [currentImage?._id])

  const copySnippetCode = async () => {
    setCopiedSnippet(true)

    setTimeout(() => {
      setCopiedSnippet(false)
    }, 2000)

    return await window.navigator.clipboard.writeText(
      `<img src="${getImageSource(currentImage?.originUrl)}" />`
    )
  }

  return (
    <>
      <section
        onClick={closeModal}
        className={cn(styles.modalOverlay, {
          [styles.modalOverlayActive]: isOpen,
        })}
      />
      <div className={cn(styles.modal, { [styles.modalActive]: isOpen })}>
        <div className={styles.insideSpace}>
          <ChevronsRight size={30} onClick={closeModal} cursor="pointer" />
        </div>

        <h4>{t('image_detail.title')}</h4>

        <article className={styles.imageInfo}>
          <span>{t('image_detail.source_img')}</span>

          <div className={styles.contentImageInfo}>
            <img
              className={styles.image}
              src={getImageSource(currentImage?.originUrl)}
              alt={currentImage?.name}
              height={100}
            />
            <div>
              <p className={styles.imageName}>{currentImage?.name}</p>

              <p>
                {`${currentImage?.rawMetadata?.width}x${currentImage?.rawMetadata?.height}`}
                , {`${formatBytes(currentImage?.rawMetadata?.size)}`}{' '}
                <span>{currentImage?.rawMetadata?.format}</span>
              </p>

              <span>
                {t('image_detail.uploaded')}{' '}
                {dayjs(currentImage?.createdAt).format('DD/MM/YYYY HH:MM')}
              </span>
            </div>
          </div>
        </article>

        {imageVariations?.length > 1 && !isLoading ? (
          <div className={styles.imageVariationsContainer}>
            <p>{t('image_detail.variations')}</p>

            <ScrollContainer className={styles.imageVariationsWrapper}>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {imageVariations?.map((imageVariation) => (
                    <div
                      key={imageVariation?._id}
                      className={cn(styles.scrollImageWrapper, {
                        [styles.scrollImageWrapperActive]:
                          imageVariation?._id === currentImage?._id,
                      })}
                    >
                      <img
                        onClick={() => {
                          setCurrentImage(imageVariation)
                        }}
                        key={imageVariation?._id}
                        src={getImageSource(imageVariation?.originUrl)}
                        className={cn({
                          [styles.imageActive]:
                            imageVariation?._id === currentImage?._id,
                        })}
                        alt="Image Variation"
                        width={80}
                        height={60}
                      />
                    </div>
                  ))}
                </>
              )}
            </ScrollContainer>
          </div>
        ) : null}

        <div className={styles.metadataWrapper}>
          <h5>{t('image_detail.metadata')}</h5>

          <img
            className={styles.image}
            src={getImageSource(currentImage?.originUrl)}
            alt={currentImage?.name}
            height={200}
          />

          <article>
            <div className={styles.infoWrapper}>
              <span>{t('image_detail.file_name')}</span>
              <p className={styles.imageName}>{currentImage?.name}</p>
            </div>

            <div className={styles.infoWrapper}>
              <span>{t('image_detail.dimensions')}</span>
              <p>
                {currentImage?.metadata?.width}x{currentImage?.metadata?.height}
              </p>
            </div>

            <div className={styles.infoWrapper}>
              <span>{t('image_detail.size')}</span>
              <p>{formatBytes(currentImage?.metadata?.size)}</p>
            </div>

            <div className={styles.infoWrapper}>
              <span>{t('image_detail.format')}</span>
              <p style={{ textTransform: 'uppercase' }}>
                {currentImage?.metadata?.format}
              </p>
            </div>

            {currentImage?.transformers?.compress?.quality ? (
              <div className={styles.infoWrapper}>
                <span>{t('image_detail.quality')}</span>
                <p>{currentImage?.transformers?.compress?.quality}</p>
              </div>
            ) : null}
          </article>
        </div>

        <div className={styles.containerWrapper}>
          <CopyURL url={getImageSource(currentImage?.originUrl)} />
        </div>

        <div className={styles.containerWrapper}>
          <div className={styles.snippetWrapper}>
            <div className={styles.selectLanguage}>
              <div className={styles.buttonGroup}>
                <button
                  className={cn({
                    [styles.buttonSelectLanguageActive]:
                      selectedLanguage === 'html',
                  })}
                  onClick={() => setSelectedLanguage('html')}
                >
                  <Icon id="Html_Icon" width={30} height={30} />
                  HTML
                </button>
              </div>

              <button onClick={copySnippetCode} className={styles.copyButton}>
                {copiedSnippet ? <Check /> : t('common:copy')}
              </button>
            </div>

            <div className={styles.content}>
              <CodeBlocks
                code={`<img src="${getImageSource(
                  currentImage?.originUrl
                )}" />`}
                language="html"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
