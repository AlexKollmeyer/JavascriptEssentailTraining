/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";
import Wallet from "./Wallet.js";


const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const myWallet = new Wallet (
  "My Wallet",
  20,
  "black",
  5,
  false
);
console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("My wallet:", myWallet);
console.log("Amount of cash in wallet:", myWallet.cash);
