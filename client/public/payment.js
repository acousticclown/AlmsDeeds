const initPayButton = () => {
    $('.pay-button').click(() => {
      // paymentAddress is where funds will be send to
      const paymentAddress = document.getElementByClass('act').value;
      const amountEth = document.getElementByClass('amt').value;

      web3.eth.sendTransaction({
        to: paymentAddress,
        value: web3.toWei(amountEth, 'ether')
      }, (err, transactionId) => {
        if  (err) {
          console.log('Payment failed', err)
        } else {
          console.log('Payment successful', transactionId)
        }
      })
    })
  }

    