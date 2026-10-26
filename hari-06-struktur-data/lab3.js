import { Stack } from "./structures.js";
export function kurungSeimbang(teks) {
  const pasangan = { ")": "(", "]": "[", "}": "{" };
  const tumpukan = new Stack();
  for (const karakter of teks) {
    if ("([{".includes(karakter)) {
      tumpukan.push(karakter);
    } else if (karakter in pasangan) {
      if (tumpukan.isEmpty() || tumpukan.pop() !== pasangan[karakter]) {
        return false;
      }
    }
  }
  return tumpukan.isEmpty();
}
// Uji dengan push tiga elemen, peek, pop sampai kosong, lalu pop pada stack kososng (tidak
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(kurungSeimbang("(a+b)*[c-d]")); // true
console.log(kurungSeimbang("(a+b]")); // false
console.log(kurungSeimbang("((a)")); // false
console.log(kurungSeimbang("")); // true

//mengimplementasikan validasi tanda kurung seimbang
console.log(kurungSeimbang(`(a+b)*(c-d)`));
console.log(kurungSeimbang(`(a+b)`));
console.log(kurungSeimbang(`(a)`));
console.log(kurungSeimbang(``))
console.log(kurungSeimbang(`({[a+-b]})`));

//balk sebuah string memakai stack, dan periksa palindrom
stack.clear();
const str = `katak`;
const reversedstr = str.split(``).reduce((acc, char) => {
    stack.push(char);
    return acc + char;
}, ``);
const isPalindrone = str === reversedstr.split(``).reverse().join;
console.log(`string: $(str), reversed: $(reversedStr), Is palindrome: $(IsPalindrome)`);
