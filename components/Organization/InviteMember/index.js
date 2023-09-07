import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalDialog,
  Stack,
  Typography,
  Button,
} from '@mui/joy'
import Icon from '@/components/UI/Icon'
import PropTypes from 'prop-types'
import styles from './InviteMember.module.scss'
import useInviteMember from './useInviteMember'
import ErrorMessage from '@/components/UI/ErrorMessage'

function InviteMember({ isOpen, setIsOpen }) {
  const { onSubmit, formMethods, isLoadingSendInvite } =
    useInviteMember(setIsOpen)

  return (
    <Modal open={isOpen} onClose={() => setIsOpen((prevState) => !prevState)}>
      <ModalDialog>
        <Stack>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Typography level="title-lg">Convidar novo membro</Typography>
            <button
              className={styles.buttonCloseModal}
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <Icon id="Close_MD" width={25} height={25} />
            </button>
          </Stack>
          <form onSubmit={onSubmit}>
            <Stack marginY={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input {...formMethods.register('name', { required: true })} />
                <ErrorMessage
                  name="name"
                  errors={formMethods.formState.errors}
                />
              </FormControl>
            </Stack>

            <Stack marginY={2}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input {...formMethods.register('email', { required: true })} />
                <ErrorMessage
                  name="email"
                  errors={formMethods.formState.errors}
                />
              </FormControl>
            </Stack>
            <Stack marginY={2}>
              <Button loading={isLoadingSendInvite} type="submit">
                Enviar convite
              </Button>
            </Stack>
          </form>
        </Stack>
      </ModalDialog>
    </Modal>
  )
}

InviteMember.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}

export default InviteMember
