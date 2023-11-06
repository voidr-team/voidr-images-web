import { Stack, Typography } from '@mui/joy'
import Input from '../../../Form/Input'
import RadioButton from '../../../Form/RadioButton'
import styles from './CreateProject.module.scss'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Trash } from 'lucide-react'
import ErrorMessage from '@/components/UI/ErrorMessage'

export default function CreateProject() {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const { fields, append, remove } = useFieldArray({ control, name: 'domains' })
  const [parentRef] = useAutoAnimate()

  return (
    <Stack marginTop={{ xs: 6, sm: 7, md: 15 }}>
      <Stack maxWidth="400px">
        <Input
          name="name"
          placeholder="Company XPTO Marketplace"
          label="Project name"
        />
      </Stack>

      <Stack marginTop={5}>
        <Typography fontWeight="600" fontSize={20}>
          Domains
        </Typography>

        <Typography fontWeight="500" fontSize={16} textColor="primary.100">
          Connect with images on a Web Folder somewhere in the Internet.
        </Typography>

        <div ref={parentRef}>
          {fields.map((field, index) => (
            <Stack
              direction="row"
              alignItems="center"
              maxWidth="450px"
              gap={2}
              key={field.id}
            >
              <Stack width="100%" maxWidth="400px">
                <Input
                  name={`domains.${index}.domain`}
                  placeholder="https://mywebsite.com"
                />
              </Stack>

              {index === 0 ? null : (
                <Trash
                  style={{ cursor: 'pointer' }}
                  onClick={() => remove(index)}
                />
              )}
            </Stack>
          ))}
        </div>

        <Typography
          onClick={() => append({ domain: '' })}
          sx={{ cursor: 'pointer' }}
          marginTop={1}
          textColor="helper.600"
          fontSize={16}
        >
          + Add domain
        </Typography>
      </Stack>

      <Stack marginTop={5}>
        <Typography fontWeight="600" fontSize={20}>
          Platform
        </Typography>
        <Typography marginBottom={1} textColor="primary.100" fontSize={16}>
          Select the type of platform your project runs on.
        </Typography>

        <Stack gap={2} maxWidth="400px">
          <Stack direction="row" gap={5}>
            <Stack justifyContent="center" alignItems="center">
              <RadioButton
                icon="Web_Icon"
                className={styles.radioButton}
                name="platform"
                value="web"
              />
              <Typography
                textColor="primary.100"
                fontSize={16}
                fontWeight="600"
                marginTop="8px"
              >
                WEB
              </Typography>
            </Stack>

            <Stack justifyContent="center" alignItems="center">
              <RadioButton
                icon="Mobile_Icon"
                className={styles.radioButton}
                name="platform"
                value="mobile"
              />

              <Typography
                textColor="primary.100"
                fontSize={16}
                fontWeight="600"
                marginTop="8px"
              >
                MOBILE
              </Typography>
            </Stack>
          </Stack>

          <ErrorMessage name="platform" errors={errors} />
        </Stack>
      </Stack>
    </Stack>
  )
}
