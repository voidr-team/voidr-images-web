import { Check, ChevronsRight } from 'lucide-react'
import styles from './ModalFileImage.module.scss'
import { Stack, Typography } from '@mui/joy'
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
      {isOpen ? (
        <>
          <section onClick={closeModal} className={styles.modalOverlay} />
          <div className={styles.modal}>
            <Stack padding={3}>
              <ChevronsRight size={30} onClick={closeModal} cursor="pointer" />
            </Stack>

            <Stack>
              <Typography paddingX={6} fontSize={20} fontWeight="600">
                {t('image_detail.title')}
              </Typography>

              <Stack paddingX={6} marginY={3}>
                <Typography marginY={1} fontSize={14} fontWeight="600">
                  {t('image_detail.source_img')}
                </Typography>

                <Stack direction="row" gap={3} alignItems="flex-start">
                  <img
                    className={styles.image}
                    src={getImageSource(currentImage.originUrl)}
                    alt={currentImage.name}
                    height={100}
                  />
                  <Stack>
                    <Typography
                      className={styles.imageName}
                      fontSize={14}
                      fontWeight="500"
                    >
                      {currentImage.name}
                    </Typography>

                    <Stack direction="row" gap={2}>
                      <Typography
                        textColor="neutral.500"
                        fontSize={12}
                        fontWeight="600"
                      >
                        {`${currentImage.rawMetadata?.width}x${currentImage.rawMetadata?.height}`}
                        , {`${formatBytes(currentImage.rawMetadata?.size)}`}{' '}
                        <Typography
                          textColor="neutral.500"
                          textTransform="uppercase"
                        >
                          {currentImage.rawMetadata?.format}
                        </Typography>
                      </Typography>
                    </Stack>

                    <Typography
                      fontSize={14}
                      fontWeight="600"
                      textColor="neutral.500"
                    >
                      {t('image_detail.uploaded')}{' '}
                      {dayjs(currentImage?.createdAt).format(
                        'DD/MM/YYYY HH:MM'
                      )}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              {imageVariations?.length > 1 && !isLoading ? (
                <Stack marginY={3}>
                  <Typography
                    paddingX={6}
                    marginY={1}
                    fontSize={14}
                    fontWeight="600"
                  >
                    {t('image_detail.variations')}
                  </Typography>

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
                </Stack>
              ) : null}

              <Stack paddingX={6} marginY={3}>
                <Typography fontSize={20} fontWeight="600">
                  {t('image_detail.metadata')}
                </Typography>

                <Stack marginY={3}>
                  <img
                    className={styles.image}
                    src={getImageSource(currentImage.originUrl)}
                    alt={currentImage.name}
                    height={200}
                  />
                </Stack>

                <Stack gap={3}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={3}
                  >
                    <Typography textColor="neutral.500" fontWeight="600">
                      {t('image_detail.file_name')}
                    </Typography>
                    <Typography className={styles.imageName}>
                      {currentImage.name}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={3}
                  >
                    <Typography textColor="neutral.500" fontWeight="600">
                      {t('image_detail.dimensions')}
                    </Typography>
                    <Typography>
                      {currentImage.metadata?.width}x
                      {currentImage.metadata?.height}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={3}
                  >
                    <Typography textColor="neutral.500" fontWeight="600">
                      {t('image_detail.size')}
                    </Typography>
                    <Typography>
                      {formatBytes(currentImage.metadata?.size)}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={3}
                  >
                    <Typography textColor="neutral.500" fontWeight="600">
                      {t('image_detail.format')}
                    </Typography>
                    <Typography textTransform="uppercase">
                      {currentImage.metadata?.format}
                    </Typography>
                  </Stack>

                  {currentImage?.transformers?.compress?.quality ? (
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      gap={3}
                    >
                      <Typography textColor="neutral.500" fontWeight="600">
                        {t('image_detail.quality')}
                      </Typography>
                      <Typography>
                        {currentImage?.transformers?.compress?.quality}
                      </Typography>
                    </Stack>
                  ) : null}
                </Stack>
              </Stack>

              <Stack paddingX={6} marginY={3}>
                <CopyURL url={getImageSource(currentImage?.originUrl)} />
              </Stack>

              <Stack paddingX={6} marginY={3}>
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

                    <button
                      onClick={copySnippetCode}
                      className={styles.copyButton}
                    >
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
              </Stack>
            </Stack>
          </div>
        </>
      ) : null}
    </>
  )
}
