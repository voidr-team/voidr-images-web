import { Stack, Typography } from '@mui/joy'
import Input from '../../../Form/Input'
import RadioButton from '../../../Form/RadioButton'
import styles from './CreateProject.module.scss'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Trash } from 'lucide-react'
import ErrorMessage from '@/components/UI/ErrorMessage'
import Label from '@/components/Form/Input/Label'
import { useTranslation } from 'next-i18next'

export default function CreateProject({ userAlreadyCreateProject }) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const { fields, append, remove } = useFieldArray({ control, name: 'domains' })
  const [parentRef] = useAutoAnimate()
  const { t } = useTranslation(['translations', 'common'])

  return (
    <Stack marginTop={{ xs: '20px', sm: '30px', md: '50px' }}>
      <Typography level="h2" className={styles.title}>
        {t('onboarding.create_project.title')}
      </Typography>
      <Stack marginTop={{ xs: '20px', sm: '30px', md: '20px' }}>
        <Stack maxWidth="400px">
          <Input
            name="name"
            readOnly={userAlreadyCreateProject}
            placeholder={t(
              'onboarding.create_project.form.project.placeholder'
            )}
            label={t('onboarding.create_project.form.project.label')}
          />
        </Stack>

        <Stack marginTop={5}>
          <Label>{t('onboarding.create_project.form.domain.label')}</Label>

          <Typography fontWeight="500" fontSize={16} textColor="primary.100">
            {t('onboarding.create_project.form.domain.description')}
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
                    readOnly={userAlreadyCreateProject}
                    name={`domains.${index}.domain`}
                    placeholder={t(
                      'onboarding.create_project.form.domain.placeholder'
                    )}
                  />
                </Stack>

                {index === 0 || userAlreadyCreateProject ? null : (
                  <Trash
                    style={{ cursor: 'pointer' }}
                    onClick={() => remove(index)}
                  />
                )}
              </Stack>
            ))}
          </div>
          {!userAlreadyCreateProject && (
            <Typography
              onClick={() => append({ domain: '' })}
              sx={{ cursor: 'pointer' }}
              marginTop={1}
              textColor="helper.500"
              fontSize={16}
            >
              {t('change_domains.add_domain')}
            </Typography>
          )}
        </Stack>

        <Stack marginTop={5}>
          <Label>{t('onboarding.create_project.form.platform.label')}</Label>
          <Typography marginBottom={1} textColor="primary.100" fontSize={16}>
            {t('onboarding.create_project.form.platform.description')}
          </Typography>

          <Stack gap={2} maxWidth="300px">
            <Stack direction="row" gap={3}>
              <Stack justifyContent="center" alignItems="center">
                <RadioButton
                  icon="Web_Icon"
                  readOnly={userAlreadyCreateProject}
                  className={styles.radioButton}
                  name="platform"
                  value="web"
                />
                <Typography
                  textColor="primary.100"
                  fontSize={14}
                  marginTop="8px"
                >
                  {t('onboarding.create_project.form.platform.option_web')}
                </Typography>
              </Stack>

              <Stack justifyContent="center" alignItems="center">
                <RadioButton
                  icon="Mobile_Icon"
                  className={styles.radioButton}
                  readOnly={userAlreadyCreateProject}
                  name="platform"
                  value="mobile"
                />

                <Typography
                  textColor="primary.100"
                  fontSize={14}
                  marginTop="8px"
                >
                  {t('onboarding.create_project.form.platform.option_mobile')}
                </Typography>
              </Stack>
            </Stack>

            <ErrorMessage name="platform" errors={errors} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
