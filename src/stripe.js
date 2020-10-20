const stripe = require('stripe')('sk_test_51HdxovB6KrRuwHV6gjYobKMwj7PJV5OMzWELD5Y7gXW0vSYfoJ75iZPRIVNTYcTAUV62xBTKrMesMmSnMjrjGtm500y1Djh0MK')

async function postCharge(req, res) {
  try {
    const { amount, source, receipt_email } = req.body

    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source,
      receipt_email
    })

    if (!charge) throw new Error('charge unsuccessful')

    res.status(200).json({
      message: 'charge posted successfully',
      charge
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = postCharge
