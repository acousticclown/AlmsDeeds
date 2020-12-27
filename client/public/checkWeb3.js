window.addEventListener("load", async function () {
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      await ethereum.enable();
      initPayButton();
    } catch (err) {
      console.log(err);
    }
  } else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    initPayButton();
  } else {
    console.log("error");
  }
});
