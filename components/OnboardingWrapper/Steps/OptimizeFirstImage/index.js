import Input from '@/components/Form/Input'
import styles from '../Steps.module.scss'
import { useFormContext } from 'react-hook-form'
import CodeSnippet from '@/components/OnboardingWrapper/Steps/Setup/CodeSnippet'
import getImageSource from '@/utils/getImageSource'
import Button from '@/components/UI/Button'
import useAuth from '@/context/auth/useAuth'
import ExternalLink from '@/components/UI/ExternalLink'
import cn from 'classnames'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useEffect, useState } from 'react'
import http from '@/services/http'
import Loader from '@/components/UI/Loader'
import imagesService from '@/services/images'
import formatBytes from '@/utils/formatBytes'
import { Trans, useTranslation } from 'next-i18next'

const OptimizeFirstImage = () => {
  const { user } = useAuth()
  const [step, setStep] = useState(0)
  const [imageIsLoading, setImageIsLoading] = useState(false)
  const [processedImage, setProcessedImage] = useState()
  const [parentStep1Ref] = useAutoAnimate()
  const [parentStep2Ref] = useAutoAnimate()
  const [parentStep3Ref] = useAutoAnimate()
  const { t } = useTranslation(['translations', 'common'])

  const [imageUrl, setImageUrl] = useState(
    'https://yourwebsite.com/images/awesome_img.jpeg'
  )
  const { formState, watch } = useFormContext()
  const projectName = user.currentProject.name

  const image = watch('imageUrl')

  const imageSource = getImageSource(
    `/${projectName}/resize:300x/convert:webp/compress:80/fetch/${imageUrl}`
  )
  const handleProcessImage = async () => {
    setStep(2)
    setImageIsLoading(true)

    await http.get(imageSource)
    const response = await imagesService.getImages()
    const images = response.data?.images
    const processedImage = images.find((img) => img.remote === imageUrl)
    setProcessedImage(processedImage)
    setImageIsLoading(false)
  }

  useEffect(() => {
    if (formState.submitCount > 0 && !formState.errors.imageUrl && image) {
      setImageUrl(image)
      setStep(1)
    }
  }, [formState.submitCount])

  return (
    <div className={styles.stepsHolder}>
      <h3>{t('onboarding.optimize_first_image.title')}</h3>
      <p>{t('onboarding.optimize_first_image.subtitle')}</p>
      <div className={styles.steps}>
        <div className={styles.step} ref={parentStep1Ref}>
          <h5>{t('onboarding.optimize_first_image.step_1.title')}</h5>
          <Input
            placeholder="https://yourwebsite.com/images/awesome_img.jpeg"
            name="imageUrl"
            readOnly={step > 0}
          />
          {step === 0 && (
            <Button
              className={styles.action}
              icon="Image_Icon"
              theme="light"
              size="small"
            >
              {t('onboarding.optimize_first_image.step_1.button')}
            </Button>
          )}
        </div>
        <div
          className={cn(styles.step, step === 0 ? styles.disabled : '')}
          ref={parentStep2Ref}
        >
          <h5>{t('onboarding.optimize_first_image.step_2.title')}</h5>
          <p>
            <Trans
              t={t}
              i18nKey={'onboarding.optimize_first_image.step_2.decription'}
              values={{ project: projectName }}
              components={{
                highlight: <span className={styles.projectNameWrapper} />,
              }}
            ></Trans>
          </p>
          <CodeSnippet imageSource={imageSource} />
          {step === 1 && (
            <Button
              className={styles.action}
              theme="light"
              size="small"
              type="button"
              icon="Thunder_Icon"
              onClick={() => handleProcessImage()}
            >
              {t('onboarding.optimize_first_image.step_2.button')}
            </Button>
          )}
        </div>
        <div
          className={cn(styles.step, step !== 2 ? styles.disabled : '')}
          ref={parentStep3Ref}
        >
          {step === 2 &&
            (imageIsLoading ? (
              <Loader />
            ) : (
              <>
                <img width="300" src={imageSource} />
                <p>
                  ⚡️{' '}
                  {formatBytes(
                    processedImage?.rawMetadata?.size -
                      processedImage?.metadata?.size
                  )}{' '}
                  {t('common:saved')}
                </p>
                <div className={styles.action}>
                  <Button
                    className={styles.action}
                    theme="light"
                    size="small"
                    type="button"
                    onClick={() => (window.location.href = '/images/dashboard')}
                  >
                    {t('onboarding.optimize_first_image.finish_button')}
                  </Button>
                </div>
              </>
            ))}
        </div>
        <div className={styles.step}>
          <div className={styles.docs}>
            <ExternalLink
              href="https://voidr-images.readme.io/reference/intro"
              target="_blank"
              rel="noreferrer"
              icon="Docs_Icon"
            >
              <h6>{t('onboarding.optimize_first_image.links.docs.title')}</h6>
              <p>
                {t('onboarding.optimize_first_image.links.docs.description')}
              </p>
            </ExternalLink>
            <ExternalLink
              href="https://chat.whatsapp.com/HGk47PecZXRFRgxJ32PKX0"
              target="_blank"
              rel="noreferrer"
              icon="Info_Icon"
            >
              <h6>{t('onboarding.optimize_first_image.links.help.title')}</h6>
              <p>
                {t('onboarding.optimize_first_image.links.help.description')}
              </p>
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OptimizeFirstImage
