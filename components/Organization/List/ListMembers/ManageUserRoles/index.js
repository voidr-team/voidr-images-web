import { Button, Modal, ModalDialog, Stack, Typography } from '@mui/joy'
import { FormProvider } from 'react-hook-form'
import PropTypes from 'prop-types'
import useManageUserRoles from './useManageUserRoles'
import Icon from '@/components/UI/Icon'
import styles from './ManageUserRoles.module.scss'
import Autocomplete from '@/components/Form/Autocomplete'

function ManageUserRoles({ isOpen, setIsOpen, user, setUser, title }) {
  const { roles, formMethods, onSubmit, isLoadingRoles, isLoadingUpdateRoles } =
    useManageUserRoles(user?.sub, setIsOpen)

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setIsOpen(false)
        setUser({})
      }}
    >
      <ModalDialog>
        <Stack>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Typography level="title-lg">{title}</Typography>
            <button
              className={styles.buttonCloseModal}
              onClick={() => {
                setIsOpen(false)
                setUser({})
              }}
            >
              <Icon id="Close_MD" width={25} height={25} />
            </button>
          </Stack>

          <Stack maxWidth={320} spacing={2} paddingY={2}>
            <FormProvider {...formMethods}>
              <form onSubmit={onSubmit}>
                <Autocomplete
                  label="Cargos"
                  name="userRoles"
                  placeholder="Cargos dos membros"
                  multiple
                  defaultValue={user?.roles}
                  id="user-roles-management"
                  isLoading={isLoadingRoles}
                  options={roles}
                />

                <Stack marginY={2}>
                  <Button loading={isLoadingUpdateRoles} type="submit">
                    Enviar
                  </Button>
                </Stack>
              </form>
            </FormProvider>
          </Stack>
        </Stack>
      </ModalDialog>
    </Modal>
  )
}

ManageUserRoles.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  setIsOpen: PropTypes.func,
  setUser: PropTypes.func,
  children: PropTypes.element,
  user: PropTypes.object,
}

export default ManageUserRoles
