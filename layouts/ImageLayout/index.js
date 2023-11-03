import Sidebar from '@/components/Sidebar'
import sidebarStyles from '@/components/Sidebar/Sidebar.module.scss'
import sidebarItems from '@/components/Sidebar/sidebarItems'
import { Stack, Typography } from '@mui/joy'
import BaseLayout from '../BaseLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import useAuth from '@/context/auth/useAuth'

function ImageLayout({ children }) {
  const router = useRouter()
  const { user } = useAuth()

  return (
    <BaseLayout currentPage="dashboard">
      <Stack direction="row">
        <Sidebar.Root>
          <Sidebar.Content>
            <div>
              <Typography
                textColor="neutral.200"
                fontWeight="600"
                fontSize={19}
                paddingTop={0.5}
                paddingBottom={3}
              >
                voidr | images
              </Typography>

              <Typography
                fontSize={18}
                fontWeight="600"
                marginY={1}
                marginBottom={2}
              >
                {user?.currentProject?.name}
              </Typography>

              <ul className={sidebarStyles.listWrapper}>
                {sidebarItems.images.map((item) => (
                  <Link href={item.link} key={item.id}>
                    <li
                      className={cn(sidebarStyles.listItem, {
                        [sidebarStyles.listItemActive]:
                          router.pathname === item.link,
                      })}
                    >
                      <item.icon />
                      {item.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </Sidebar.Content>
        </Sidebar.Root>

        <Stack minHeight="100vh" marginLeft="360px" flex="1">
          {children}
        </Stack>
      </Stack>
    </BaseLayout>
  )
}

export default ImageLayout
