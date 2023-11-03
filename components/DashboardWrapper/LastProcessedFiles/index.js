import CardFile from '@/components/CardFile'
import Loader from '@/components/UI/Loader'
import useFilesList from '@/hooks/useFilesList'
import { Stack, Typography } from '@mui/joy'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { isEmpty } from 'ramda'

export default function LastProcessedFiles() {
  const { data, isLoading } = useFilesList()
  return (
    <Stack
      maxWidth={!isLoading ? 'fit-content' : 'none'}
      padding={2.8}
      borderRadius={6}
      border={1}
      borderColor="neutral.600"
      flexGrow={1}
    >
      <Typography level="h4">Latest processed files</Typography>

      <Stack
        maxWidth="900px"
        width="100%"
        gap={3}
        direction="row"
        flexWrap="wrap"
        marginTop={4}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {isEmpty(data?.images) ? (
              <Stack>
                <Typography>
                  You currently don&#39;t have any images.
                </Typography>
              </Stack>
            ) : (
              data?.images?.map((image, index) => (
                <CardFile
                  imageName={`${image?.name}.${image?.metadata?.format}`}
                  imageSizeSaved={
                    image?.rawMetadata?.size - image?.metadata?.size
                  }
                  imageUrl={image?.originUrl}
                  key={`${index}_${image?.name}`}
                />
              ))
            )}
          </>
        )}
      </Stack>

      {!isEmpty(data?.images) ? (
        <Link href="/images/files">
          <Stack marginTop={2} direction="row" alignItems="center" gap={1}>
            <Typography fontWeight="600" fontSize={14}>
              View More
            </Typography>
            <ChevronRight color="#fff" />
          </Stack>
        </Link>
      ) : null}
    </Stack>
  )
}
