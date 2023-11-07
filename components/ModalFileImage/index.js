import { ChevronsRight } from 'lucide-react'
import styles from './ModalFileImage.module.scss'
import { Stack, Typography } from '@mui/joy'
import dayjs from 'dayjs'
import useGetVariationsImage from '@/hooks/useGetVariationsImage'
import Image from 'next/image'
import { useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import 'react-indiana-drag-scroll/dist/style.css'
import Loader from '../UI/Loader'
import cn from 'classnames'
import CopyURL from '../CopyURL'
import getImageSource from '@/utils/getImageSource'
import CodeBlocks from '../UI/CodeBlocks'

const VOIDR_API_URL = process.env.NEXT_PUBLIC_VOIDR_API_URL

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

  const closeModal = () => {
    setCurrentImage(null)
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (currentImage?._id) {
      fetch()
    }
  }, [currentImage?._id])

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
                Detailed info
              </Typography>

              <Stack paddingX={6} marginY={3}>
                <Typography marginY={1} fontSize={14} fontWeight="600">
                  Source image
                </Typography>

                <Stack direction="row" gap={3} alignItems="flex-end">
                  <img
                    className={styles.image}
                    src={`${VOIDR_API_URL}${currentImage.originUrl}`}
                    alt={currentImage.name}
                    height={100}
                  />
                  <Stack>
                    <Typography fontSize={14} fontWeight="500">
                      {currentImage.name}
                    </Typography>

                    <Stack direction="row" gap={2}>
                      <Typography
                        textColor="neutral.500"
                        fontSize={12}
                        fontWeight="600"
                      >
                        {`${currentImage.rawMetadata?.width}x${currentImage.rawMetadata?.height}`}
                        , {`${currentImage.rawMetadata?.size}kb`}{' '}
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
                      Uploaded{' '}
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
                    Variations
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
                            <Image
                              onClick={() => {
                                setCurrentImage(imageVariation)
                              }}
                              key={imageVariation?._id ?? imageVariation?.id}
                              src={imageVariation?.remote}
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
                  Metadata & Snippet
                </Typography>

                <Stack marginY={3}>
                  <img
                    className={styles.image}
                    src={`${VOIDR_API_URL}${currentImage.originUrl}`}
                    alt={currentImage.name}
                    height={200}
                  />
                </Stack>

                <Stack gap={3} maxWidth="400px">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={3}
                  >
                    <Typography textColor="neutral.500" fontWeight="600">
                      File name
                    </Typography>
                    <Typography>{currentImage.name}</Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={3}
                  >
                    <Typography textColor="neutral.500" fontWeight="600">
                      Dimensions
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
                      Size
                    </Typography>
                    <Typography>{currentImage.metadata?.size}kb</Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={3}
                  >
                    <Typography textColor="neutral.500" fontWeight="600">
                      Size
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
                        Quality
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
                  <CodeBlocks
                    code='<img src="https://img.voidr.co/compress:80/convert:webp/fetch/url" />'
                    language="html"
                  />
                </div>
              </Stack>
            </Stack>
          </div>
        </>
      ) : null}
    </>
  )
}
