import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Autocomplete,
  CircularProgress,
} from '@mui/joy'
import PropTypes from 'prop-types'
import styles from './InviteMember.module.scss'
import useInviteMember from './useInviteMember'
import ErrorMessage from '@/components/UI/ErrorMessage'
import { Controller } from 'react-hook-form'
import Modal from '@/components/UI/Modal'

function InviteMember({ isOpen, setIsOpen }) {
  const { onSubmit, formMethods, isLoadingSendInvite, isLoadingRoles, roles } =
    useInviteMember(setIsOpen)

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputsWrapper}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="John Doe"
              {...formMethods.register('name', { required: true })}
            />
            <ErrorMessage name="name" errors={formMethods.formState.errors} />
          </FormControl>

          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
              placeholder="example@example.com"
              {...formMethods.register('email', { required: true })}
            />
            <ErrorMessage name="email" errors={formMethods.formState.errors} />
          </FormControl>
        </div>

        <div className={styles.autocompleteWrapper}>
          <FormControl>
            <FormLabel>Cargo</FormLabel>
            <Controller
              control={formMethods.control}
              name={'roles'}
              render={({ field: { onChange, name, onBlur, value } }) => (
                <Autocomplete
                  placeholder="Cargos do membro"
                  id="user-roles-invite"
                  multiple
                  value={value || []}
                  name={name}
                  onBlur={onBlur}
                  onChange={(_event, value) => {
                    return onChange(value ?? [])
                  }}
                  options={roles}
                  getOptionLabel={(option) => option?.name}
                  isOptionEqualToValue={(option, value) =>
                    option?.name === value?.name
                  }
                  loading={isLoadingRoles}
                  endDecorator={
                    isLoadingRoles ? (
                      <CircularProgress
                        size="sm"
                        sx={{ bgcolor: 'background.surface' }}
                      />
                    ) : null
                  }
                  sx={() => ({
                    paddingX: 0.5,
                  })}
                />
              )}
            />
          </FormControl>
        </div>

        <Stack marginY={2}>
          <Button loading={isLoadingSendInvite} type="submit">
            Enviar convite
          </Button>
        </Stack>
      </form>
    </Modal>
  )
}

InviteMember.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}

export default InviteMember
