import { ChevronsRight } from 'lucide-react'
import styles from './ModalDialog.module.scss'
import { Stack, Typography } from '@mui/joy'
import dayjs from 'dayjs'

const VOIDR_API_URL = process.env.NEXT_PUBLIC_VOIDR_API_URL

export default function ModalFileImage({
  isOpen,
  setIsOpen,
  currentImage,
  setCurrentImage,
}) {
  const closeModal = () => {
    setCurrentImage(null)
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      {isOpen ? (
        <div className={styles.modal}>
          <Stack sx={{ cursor: 'pointer' }} onClick={closeModal}>
            <ChevronsRight size={30} />
          </Stack>

          <article className={styles.wrapper}>
            <Typography fontSize={20} fontWeight="600">
              Detailed info
            </Typography>

            <Stack marginY={3}>
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
                    {dayjs(currentImage?.createdAt).format('DD/MM/YYYY HH:MM')}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack marginTop={5}>
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
          </article>
        </div>
      ) : null}
    </>
  )
}
