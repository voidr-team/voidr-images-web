import { Stack, Typography } from '@mui/joy'
import Image from 'next/image'
import SidebarItem from '@/components/Sidebar/SidebarItem'
import sidebarItems from '@/components/Sidebar/sidebarItems'
import { ChevronsRight } from 'lucide-react'
import styles from './OnboardingSidebar.module.scss'
import { useState } from 'react'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'

const onboardingSteps = (t) => [
  { number: 1, label: t('onboarding.steps.create_project') },
  { number: 2, label: t('onboarding.steps.setup') },
  { number: 3, label: t('onboarding.steps.start') },
]

const logoutItem = sidebarItems.common.find(({ id }) => id === 2)

export default function OnboardingSidebar({ steps }) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation(['translations', 'common'])

  return (
    <Stack
      display="flex"
      direction="row"
      minHeight="100vh"
      bgcolor="primary.500"
      className={styles.sidebar}
    >
      <Stack
        minHeight="100vh"
        paddingX={'14px'}
        paddingY={'20px'}
        borderRight={1}
        alignItems="center"
        justifyContent="space-between"
        borderColor="var(--neutral-700)"
      >
        <Image
          src="/images/logo-small.svg"
          alt="Logo voidr"
          width={40}
          height={40}
        />

        <figure
          onClick={() => setIsOpen((prevState) => !prevState)}
          className={cn(styles.chevron, { [styles.chevronActive]: !isOpen })}
        >
          <ChevronsRight />
        </figure>
      </Stack>

      <div
        className={cn(styles.sidebarContent, {
          [styles.sidebarContentActive]: isOpen,
        })}
      >
        <Stack gap={10} height="100%" maxHeight="95vh">
          <Image
            src="/images/logo-typo.svg"
            width="146"
            height="20"
            alt="Logo typo voidr"
          />
          <Stack maxHeight="fit-content" position="relative" gap={10}>
            {onboardingSteps(t)?.map((onboardingStep) => {
              const actualOrFinishedStep =
                steps.current + 1 >= onboardingStep.number

              return (
                <Stack
                  key={onboardingStep.number}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width={'150px'}
                  position={'relative'}
                  left={'86px'}
                  zIndex={9}
                  gap={2}
                >
                  <Typography
                    textColor={
                      actualOrFinishedStep ? 'neutral.100' : 'neutral.600'
                    }
                  >
                    {onboardingStep.label}
                  </Typography>
                  <Stack
                    borderRadius={100}
                    border={2}
                    marginLeft={'14px'}
                    borderColor={
                      actualOrFinishedStep ? 'helper.500' : 'neutral.700'
                    }
                    width={14}
                    height={14}
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="primary.500"
                  ></Stack>
                </Stack>
              )
            })}
          </Stack>
        </Stack>
        <SidebarItem
          link={logoutItem.link}
          key={logoutItem.id}
          Icon={logoutItem.icon}
          label={t(logoutItem.label)}
        />
      </div>
    </Stack>
  )
}
