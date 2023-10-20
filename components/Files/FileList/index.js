import CardFile from '@/components/CardFile'
import { Stack, Typography } from '@mui/joy'

const MOCK_ITENS = [
  {
    imageName: 'land-banner-large.webp',
    imageUrl:
      'https://cdn.discordapp.com/attachments/1117898785125847241/1165015835878903869/image.png?ex=6545508c&is=6532db8c&hm=349d464d86036924d63ab1caa6dd7ae9e65ee2ccd5701c946ee1ba8d2bd6928d&',
    imageSizeSaved: '20',
  },
  {
    imageName: 'land-banner-large.webp',
    imageUrl:
      'https://cdn.discordapp.com/attachments/1117898785125847241/1165015835878903869/image.png?ex=6545508c&is=6532db8c&hm=349d464d86036924d63ab1caa6dd7ae9e65ee2ccd5701c946ee1ba8d2bd6928d&',
    imageSizeSaved: '20',
  },
  {
    imageName: 'land-banner-large.webp',
    imageUrl:
      'https://cdn.discordapp.com/attachments/1117898785125847241/1165015835878903869/image.png?ex=6545508c&is=6532db8c&hm=349d464d86036924d63ab1caa6dd7ae9e65ee2ccd5701c946ee1ba8d2bd6928d&',
    imageSizeSaved: '20',
  },
  {
    imageName: 'land-banner-large.webp',
    imageUrl:
      'https://cdn.discordapp.com/attachments/1117898785125847241/1165015835878903869/image.png?ex=6545508c&is=6532db8c&hm=349d464d86036924d63ab1caa6dd7ae9e65ee2ccd5701c946ee1ba8d2bd6928d&',
    imageSizeSaved: '20',
  },
  {
    imageName: 'land-banner-large.webp',
    imageUrl:
      'https://cdn.discordapp.com/attachments/1117898785125847241/1165015835878903869/image.png?ex=6545508c&is=6532db8c&hm=349d464d86036924d63ab1caa6dd7ae9e65ee2ccd5701c946ee1ba8d2bd6928d&',
    imageSizeSaved: '20',
  },
  {
    imageName: 'land-banner-large.webp',
    imageUrl:
      'https://cdn.discordapp.com/attachments/1117898785125847241/1165015835878903869/image.png?ex=6545508c&is=6532db8c&hm=349d464d86036924d63ab1caa6dd7ae9e65ee2ccd5701c946ee1ba8d2bd6928d&',
    imageSizeSaved: '20',
  },
  {
    imageName: 'land-banner-large.webp',
    imageUrl:
      'https://cdn.discordapp.com/attachments/1117898785125847241/1165015835878903869/image.png?ex=6545508c&is=6532db8c&hm=349d464d86036924d63ab1caa6dd7ae9e65ee2ccd5701c946ee1ba8d2bd6928d&',
    imageSizeSaved: '20',
  },
  {
    imageName: 'land-banner-large.webp',
    imageUrl:
      'https://cdn.discordapp.com/attachments/1117898785125847241/1165015835878903869/image.png?ex=6545508c&is=6532db8c&hm=349d464d86036924d63ab1caa6dd7ae9e65ee2ccd5701c946ee1ba8d2bd6928d&',
    imageSizeSaved: '20',
  },
]

export default function FileList() {
  return (
    <Stack>
      <Typography level="h4">Latest processed files</Typography>

      <Stack
        maxWidth="1000px"
        width="100%"
        gap={3}
        direction="row"
        flexWrap="wrap"
        marginTop={2}
      >
        {MOCK_ITENS.map((mock, index) => (
          <CardFile
            key={index}
            imageName={mock.imageName}
            imageSizeSaved={mock.imageSizeSaved}
            imageUrl={mock.imageUrl}
          />
        ))}
      </Stack>
    </Stack>
  )
}
