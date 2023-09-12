import {
  Autocomplete,
  Button,
  Modal,
  ModalDialog,
  Stack,
  Typography,
  CircularProgress,
} from '@mui/joy'
import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import useManageUserRoles from './useManageUserRoles'
import Icon from '@/components/UI/Icon'
import styles from './ManageUserRoles.module.scss'

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
            <form onSubmit={onSubmit}>
              <Controller
                control={formMethods.control}
                name={'userRoles'}
                render={({ field: { onChange, name, onBlur, value } }) => (
                  <Autocomplete
                    placeholder="Cargos dos membros"
                    id="user-roles-management"
                    multiple
                    value={value}
                    defaultValue={user?.roles}
                    name={name}
                    onBlur={onBlur}
                    onChange={(_event, value) => {
                      return onChange(value ?? null)
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
                      paddingY: 1,
                    })}
                  />
                )}
              />
              <Stack marginY={2}>
                <Button loading={isLoadingUpdateRoles} type="submit">
                  Enviar
                </Button>
              </Stack>
            </form>
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
