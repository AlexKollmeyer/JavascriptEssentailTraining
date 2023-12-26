/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Wallet {
  constructor(
    // Defines parameters:
    name,
    cash,
    color,
    pocketNum,
    isOpen
  ) {
    // Define properties:
    this.name = name;
    this.cash= cash;
    this.color = color;
    this.pocketNum = pocketNum;
    this.isOpen = isOpen;
  }
  // Add methods like normal functions:
  toggleOpen(openStatus) {
    this.isOpen = openStatus;
  }
  addOrRemoveCash(amount, addOrRemove){
    if(addOrRemove== "add"){
      this.cash+= amount;
    }
    else{
      this.cash-= amount;
    }
  }
}

export default Wallet;
