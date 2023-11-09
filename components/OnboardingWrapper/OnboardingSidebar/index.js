import { Stack, Typography } from '@mui/joy'
import Icon from '../../UI/Icon'
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
        paddingX={1.2}
        paddingY={2.5}
        borderRight={1}
        alignItems="center"
        justifyContent="space-between"
        borderColor="neutral.700"
      >
        <Image
          src="/images/logo-small.svg"
          alt="Logo voidr"
          width={37}
          height={37}
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
        <Stack gap={4} height="100%" maxHeight="95vh">
          <Typography
            textColor="neutral.200"
            fontWeight="600"
            fontSize={19}
            paddingTop={0.5}
            paddingBottom={3}
          >
            voidr | images
          </Typography>
          <Stack maxHeight="fit-content" position="relative" gap={5}>
            {onboardingSteps(t)?.map((onboardingStep) => {
              const passedStepsSuccefully =
                onboardingStep.number < steps.current + 1

              const actualOrFinishedStep =
                steps.current + 1 >= onboardingStep.number

              return (
                <Stack
                  key={onboardingStep.number}
                  direction="row"
                  alignItems="center"
                  zIndex={9}
                  gap={2}
                >
                  <Stack
                    padding={2.3}
                    borderRadius={100}
                    border={2}
                    borderColor={
                      actualOrFinishedStep ? 'neutral.100' : 'neutral.600'
                    }
                    width={30}
                    height={30}
                    justifyContent="center"
                    alignItems="center"
                    maxWidth="fit-content"
                    bgcolor="primary.500"
                  >
                    <Typography
                      textColor={
                        actualOrFinishedStep ? 'neutral.100' : 'neutral.600'
                      }
                      lineHeight={0}
                      level="body-lg"
                    >
                      {passedStepsSuccefully ? (
                        <Icon id="Check_Mark" width={17} height={17} />
                      ) : (
                        onboardingStep.number
                      )}
                    </Typography>
                  </Stack>
                  <Typography
                    textColor={
                      actualOrFinishedStep ? 'neutral.100' : 'neutral.600'
                    }
                  >
                    {onboardingStep.label}
                  </Typography>
                </Stack>
              )
            })}
            <Stack
              position="absolute"
              width="1.5px"
              left="20px"
              height="100%"
              bgcolor="neutral.600"
            />
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
