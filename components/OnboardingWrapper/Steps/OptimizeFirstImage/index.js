import Input from '@/components/Form/Input'
import styles from '../Steps.module.scss'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import CodeBlocks from '@/components/UI/CodeBlocks'
import getImageSource from '@/utils/getImageSource'
import Button from '@/components/UI/Button'
import useAuth from '@/context/auth/useAuth'
import ExternalLink from '@/components/UI/ExternalLink'
import cn from 'classnames'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import http from '@/services/http'
import Loader from '@/components/UI/Loader'
import imagesService from '@/services/images'
import formatBytes from '@/utils/formatBytes'
import { useTranslation } from 'next-i18next'

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
    `/${projectName}/resize:300x/convert:webp/compress:90/fetch/${imageUrl}`
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
      <h3>Envie sua primeira imagem</h3>
      <p>Siga os passos abaixo para começar a utilizar a API da voidr</p>
      <div className={styles.steps}>
        <div className={styles.step} ref={parentStep1Ref}>
          <h5>Adicione uma url de imagem</h5>
          <Input
            placeholder="https://yourwebsite.com/images/awesome_img.jpeg"
            name="imageUrl"
            readOnly={step > 0}
          />
          {step === 0 && (
            <Button className={styles.action} theme="light" size="small">
              Adicionar imagem
            </Button>
          )}
        </div>
        <div
          className={cn(styles.step, step === 0 ? styles.disabled : '')}
          ref={parentStep2Ref}
        >
          <h5>Adicione a tag img no seu projeto</h5>
          <p>
            Use o nome do seu projeto &quot;<strong>{projectName}</strong>&quot;
            para chamar a API
          </p>
          <CodeBlocks code={`<img src="${imageSource}" />`} language="html" />
          {step === 1 && (
            <Button
              className={styles.action}
              theme="light"
              size="small"
              type="button"
              onClick={() => handleProcessImage()}
            >
              Processar imagem
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
                    Continuar para dashboard
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
            >
              Para mais informações, consulte nossa documentação
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OptimizeFirstImage
