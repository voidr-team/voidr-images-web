import { Stack, Typography } from '@mui/joy'
import Input from '../../../Form/Input'
import RadioButton from '../../../Form/RadioButton'
import Button from '../../../UI/Button'
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
    <Stack marginY={{ xs: 6, sm: 7, md: 15 }}>
      <Stack>
        <Typography fontWeight="600" fontSize={20}>
          Project name
        </Typography>

        <Stack marginTop={3} maxWidth="400px">
          <Input
            rules={{ required: 'The field is required' }}
            name="project_name"
            placeholder="Company XPTO Marketplace"
          />
        </Stack>
      </Stack>

      <Stack marginTop={5}>
        <Typography fontWeight="600" fontSize={20}>
          Domains
        </Typography>

        <Typography
          marginTop={1}
          marginBottom={2}
          fontWeight="500"
          fontSize={18}
          textColor="primary.100"
        >
          Connect with images on a Web Folder somewhere in the Internet.
        </Typography>

        <div ref={parentRef}>
          {fields.map((field, index) => (
            <Stack
              direction="row"
              alignItems="center"
              maxWidth="400px"
              gap={2}
              marginTop={1}
              key={field.id}
            >
              <Stack width="100%" maxWidth="350px">
                <Input
                  rules={{ required: 'The field is required' }}
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
        <Typography
          marginTop={2}
          marginBottom={3}
          textColor="primary.100"
          fontSize={18}
        >
          Select the type of platform your project runs on.
        </Typography>

        <Stack gap={2} maxWidth="400px">
          <Stack direction="row">
            <Stack justifyContent="center" gap={1} alignItems="center">
              <RadioButton
                icon="Image_Icon"
                rules={{ required: 'The field is required' }}
                className={styles.radioButton}
                name="platform"
                value="web"
              />
              <Typography
                textColor="primary.100"
                fontSize={16}
                fontWeight="600"
              >
                WEB
              </Typography>
            </Stack>

            <Stack justifyContent="center" gap={1} alignItems="center">
              <RadioButton
                icon="Image_Icon"
                rules={{ required: 'The field is required' }}
                className={styles.radioButton}
                name="platform"
                value="mobile"
              />

              <Typography
                textColor="primary.100"
                fontSize={16}
                fontWeight="600"
              >
                MOBILE
              </Typography>
            </Stack>
          </Stack>

          <ErrorMessage name="platform" errors={errors} />
        </Stack>
      </Stack>

      <Stack marginTop={6}>
        <Button type="submit">Next</Button>
      </Stack>
    </Stack>
  )
}
