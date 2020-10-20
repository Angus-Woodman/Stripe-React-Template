import React, { useEffect } from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

const Checkout = ({ selectedProduct, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <StripeProvider apiKey="pk_test_51HdxovB6KrRuwHV6JVCl9dlIU2E4mXA1sdLM6roIZM7o7yaLe5LGniJSyI6qB51eXMq31yz9zPt7SxNHL3Znq5Ak00UBH32TB2">
      <Elements>
        <CheckoutForm selectedProduct={selectedProduct} history={history} />
      </Elements>
    </StripeProvider>
  )
}

export default Checkout
