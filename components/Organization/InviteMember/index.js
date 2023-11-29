import PropTypes from 'prop-types'
import styles from './InviteMember.module.scss'
import useInviteMember from './useInviteMember'
import { FormProvider } from 'react-hook-form'
import InviteMemberModal from './InviteMemberModal'
import Input from '../../Form/Input'
import Button from '../../UI/Button'
import { useTranslation } from 'next-i18next'

function InviteMember({ isOpen, setIsOpen }) {
  const { onSubmit, formMethods, isLoadingSendInvite } =
    useInviteMember(setIsOpen)
  const { t } = useTranslation(['translations', 'common'])

  return (
    <InviteMemberModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <FormProvider {...formMethods}>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.inputsWrapper}>
            <Input
              label={t('common:name')}
              placeholder="John Doe"
              name="name"
              rules={{ required: true }}
            />

            <Input
              label={t('common:email')}
              placeholder="example@example.com"
              name="email"
              rules={{ required: true }}
            />
          </div>

          <Button isLoading={isLoadingSendInvite} type="submit">
            {t('invite_member.button')}
          </Button>
        </form>
      </FormProvider>
    </InviteMemberModal>
  )
}

InviteMember.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}

export default InviteMember
