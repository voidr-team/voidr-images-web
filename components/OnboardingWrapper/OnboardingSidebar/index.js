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
    <aside className={styles.sidebar}>
      <div className={styles.sidebarActions}>
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
      </div>

      <div
        className={cn(styles.sidebarContent, {
          [styles.sidebarContentActive]: isOpen,
        })}
      >
        <div className={styles.sidebarHolder}>
          <Image
            src="/images/logo-typo.svg"
            width="146"
            height="20"
            alt="Logo typo voidr"
          />
          <ul>
            {onboardingSteps(t)?.map((onboardingStep) => {
              const actualOrFinishedStep =
                steps.current + 1 >= onboardingStep.number

              return (
                <li key={onboardingStep.number}>
                  <p
                    className={cn(styles.paragraphContent, {
                      [styles.paragraphContentActive]: !actualOrFinishedStep,
                    })}
                  >
                    {onboardingStep.label}
                  </p>
                  <div
                    className={cn(styles.listFloatingBuble, {
                      [styles.listFloatingBubleActive]: actualOrFinishedStep,
                    })}
                  />
                </li>
              )
            })}
          </ul>
        </div>

        <SidebarItem
          link={logoutItem.link}
          key={logoutItem.id}
          Icon={logoutItem.icon}
          label={t(logoutItem.label)}
        />
      </div>
    </aside>
  )
}
