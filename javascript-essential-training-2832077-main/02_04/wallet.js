const updateWallet = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(wallet);
  console.info(update);
};

const wallet = {
  name: "Everyday Wallet",
  cash: 25,
  color: "black",
  isOpen:false, 
  cards: {cardslot1 :"debit card", cardslot2 : "credit card", cardslot3: "empty", cardslot4: "empty" },
  toggleOpen: function (openStatus){
    this.isOpen=openStatus;
    updateWallet('Open status changed');
  },
 takeOrGiveCash: function (cashAmount,take) {
    if (take==true){
      this.cash-= cashAmount;
    }
    else {
      this.cash+= cashAmount;
    }
    updateWallet('cashAmount changed');
 }
  
};

export default wallet;
