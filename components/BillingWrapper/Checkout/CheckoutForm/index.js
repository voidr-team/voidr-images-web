// CheckoutForm.js
import React, { useState } from 'react'
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js'
import http from '@/services/http'
import Input from '@/components/Form/Input'
import { useTranslation } from 'next-i18next'
import { FormProvider, useForm } from 'react-hook-form'
import useAuth from '@/context/auth/useAuth'
import styles from './CheckoutForm.module.scss'
import Label from '@/components/Form/Input/Label'
import { Typography } from '@mui/joy'
import { Column, Row } from '@/components/UI/Grid'
import Button from '@/components/UI/Button'
import toastEz from '@/utils/toastEz'
import EmailField from '@/components/Form/EmailField'
import projectService from '@/services/project'

const inputStyles = {
  base: {
    iconColor: '#d4d5d7',
    color: '#d4d5d7',
    fontWeight: 500,
    fontFamily: 'Work Sans, Roboto, Open Sans, Segoe UI, sans-serif',
    fontSize: '16px',
    fontSmoothing: 'antialiased',
    lineHeight: '20px',
    '::placeholder': {
      color: '#d4d5d780',
    },
  },
  invalid: {
    color: '#ec2d30',
    iconColor: '#ec2d30',
  },
}
const CheckoutForm = ({ onSuccessfulCheckout }) => {
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useAuth()
  const { t } = useTranslation(['translations', 'common'])
  const [isLoading, setIsLoading] = useState(false)

  const formMethods = useForm({
    name: user.name,
  })

  const onSubmit = formMethods.handleSubmit(async (data) => {
    setIsLoading(true)
    if (!stripe || !elements) {
      return
    }

    const cardElm = elements.getElement(CardNumberElement)
    const { error, token } = await stripe.createToken(cardElm)

    if (error) {
      console.error('[error]', error)
      toastEz.error(t('checkout.toast.error'))
    } else {
      const response = await projectService
        .postCheckout({
          token,
          name: data.name,
          email: data.email,
        })
        .catch((err) => {
          console.error(err)
          toastEz.error(t('checkout.toast.error'))
        })
      onSuccessfulCheckout(response)
    }
    setIsLoading(false)
  })

  return (
    <div className={styles.modalHolder}>
      <Typography level="h2">{t('checkout.title')}</Typography>
      <Typography level="body-md" lineHeight={1.2} marginTop="8px">
        {t('checkout.description')}
      </Typography>
      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit}>
          <Row>
            <Column className={styles.formHolder}>
              <EmailField
                label={t('common:email')}
                placeholder="your@email.com"
                name="email"
                defaultValue={user.email}
              />
            </Column>
            <Column className={styles.formHolder}>
              <Input
                label={t('common:card_name')}
                placeholder="John Doe"
                name="name"
                defaultValue={user.name === user.email ? undefined : user.name}
              />
            </Column>

            <Column className={styles.formHolder}>
              <Label>{t('checkout.card_number')}</Label>
              <CardNumberElement
                className={styles.checkoutInput}
                options={{ style: inputStyles }}
              />
            </Column>

            <Column className={styles.formHolder} size="7">
              <Label>{t('checkout.expiration_date')}</Label>
              <CardExpiryElement
                className={styles.checkoutInput}
                options={{ style: inputStyles }}
              />
            </Column>

            <Column className={styles.formHolder} size="5">
              <Label>{t('checkout.cvc')}</Label>
              <CardCvcElement
                className={styles.checkoutInput}
                options={{ style: inputStyles }}
              />
            </Column>
            <Column className={styles.action} size="12">
              <Button
                className={styles.submit}
                type="submit"
                disabled={!stripe}
                isLoading={isLoading}
              >
                {t('common:add_card')}
              </Button>
            </Column>
          </Row>
        </form>
      </FormProvider>
    </div>
  )
}

export default CheckoutForm
