import { Stack } from '@mui/joy'
import PropTypes from 'prop-types'
import styles from './InviteMember.module.scss'
import useInviteMember from './useInviteMember'
import { FormProvider } from 'react-hook-form'
import Modal from '../../UI/Modal'
import Input from '../../Form/Input'
import Autocomplete from '../../Form/Autocomplete'
import Button from '../../UI/Button'

function InviteMember({ isOpen, setIsOpen }) {
  const { onSubmit, formMethods, isLoadingSendInvite, isLoadingRoles, roles } =
    useInviteMember(setIsOpen)

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <FormProvider {...formMethods}>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.inputsWrapper}>
            <Input
              label="Name"
              placeholder="John Doe"
              name="name"
              rules={{ required: true }}
            />

            <Input
              label="E-mail"
              placeholder="example@example.com"
              name="email"
              rules={{ required: true }}
            />
          </div>

          <Stack marginTop={5}>
            <Button isLoading={isLoadingSendInvite} type="submit">
              Enviar convite
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </Modal>
  )
}

InviteMember.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}

export default InviteMember
