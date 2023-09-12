import { Stack, Button } from '@mui/joy'
import PropTypes from 'prop-types'
import styles from './InviteMember.module.scss'
import useInviteMember from './useInviteMember'
import { FormProvider } from 'react-hook-form'
import Modal from '@/components/UI/Modal'
import Input from '@/components/Form/Input'
import Autocomplete from '@/components/Form/Autocomplete'

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

          <div className={styles.autocompleteWrapper}>
            <Autocomplete
              label="Cargo"
              id="user-roles-invite"
              placeholder="Cargos do membro"
              multiple
              isLoading={isLoadingRoles}
              name="roles"
              options={roles}
            />
          </div>

          <Stack marginY={2}>
            <Button loading={isLoadingSendInvite} type="submit">
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
