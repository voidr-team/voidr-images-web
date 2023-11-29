import { FormProvider, useFieldArray } from 'react-hook-form'
import useChangeDomains from './useChangeDomains'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Input from '@/components/Form/Input'
import { Trash } from 'lucide-react'
import Button from '@/components/UI/Button'
import { useTranslation } from 'next-i18next'
import styles from './ChangeDomains.module.scss'

export default function ChangeDomains({ domains }) {
  const { t } = useTranslation(['translations', 'common'])
  const { formMethods, onSubmit, isLoading } = useChangeDomains({ domains })
  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: 'domains',
  })
  const [parentRef] = useAutoAnimate()

  return (
    <div>
      <h4>{t('change_domains.title')}</h4>
      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit}>
          <div ref={parentRef}>
            {fields.map((field, index) => (
              <div className={styles.fieldActionsWrapper} key={field.id}>
                <div className={styles.fieldWrapper}>
                  <Input
                    name={`domains.${index}.domain`}
                    placeholder="https://mywebsite.com"
                  />
                </div>

                {index === 0 ? null : (
                  <Trash
                    style={{ cursor: 'pointer' }}
                    onClick={() => remove(index)}
                  />
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              append({ domain: '' })
            }}
            type="button"
            className={styles.addDomainButton}
          >
            {t('change_domains.add_domain')}
          </button>

          <div className={styles.saveChangesWrapper}>
            <Button type="submit" inverted isLoading={isLoading}>
              {t('common:save_changes')}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
