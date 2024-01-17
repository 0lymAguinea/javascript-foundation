export default function sum(a, b) {
  return a + b;
}
export function capitalize(text) {
  return text.charAt(0);
}
capitalize("Hello");

export function reverseString(string) {
  return string.split("").reverse().join("");
}
reverseString("Hello");

export const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  divide(num1, num2) {
    return num1 / num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },
};

export function caesarCipher(str, key, decrypt = false) {
  const s = decrypt ? (26 - key) % 26 : key;
  const n = s > 0 ? s : 26 + (s % 26);
  return [...str]
    .map((l, i) => {
      const c = str.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        return String.fromCharCode(((c - 65 + n) % 26) + 65);
      }
      if (c >= 97 && c <= 122) {
        return String.fromCharCode(((c - 97 + n) % 26) + 97);
      }
      return l;
    })
    .join("")
    .toUpperCase();
}
