import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm'
import Modal from '@/components/UI/Modal'
import toastEz from '@/utils/toastEz'
import useAuth from '@/context/auth/useAuth'
import { useTranslation } from 'next-i18next'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

function Checkout({ setIsOpen, open }) {
  const { fetchUser } = useAuth()
  const { t } = useTranslation(['translations', 'common'])
  const handleSuccessfulCheckout = () => {
    setIsOpen(false)
    toastEz.success(t('checkout.toast.success'))
    setTimeout(() => {
      fetchUser()
    }, 10000)
  }

  return (
    <Modal open={open} setIsOpen={setIsOpen}>
      <Elements stripe={stripePromise}>
        <CheckoutForm onSuccessfulCheckout={handleSuccessfulCheckout} />
      </Elements>
    </Modal>
  )
}

export default Checkout
