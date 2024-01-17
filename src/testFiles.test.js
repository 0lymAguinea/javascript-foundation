import sum, {
  reverseString,
  capitalize,
  calculator,
  caesarCipher,
} from "./testFiles";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalize", () => {
  expect(capitalize("Hello")).toMatch(/H/);
});

test("reverse", () => {
  expect(reverseString("Hello")).toBe("olleH");
});
test("calculator", () => {
  expect(calculator.add(5, 5)).toBe(10);
  expect(calculator.subtract(5, 5)).toBe(0);
  expect(calculator.divide(10, 5)).toBe(2);
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("caesar", () => {
  expect(caesarCipher("napakaganda mo, namang babae.", 24)).toBe(
    "LYNYIYEYLBY KM, LYKYLE ZYZYC."
  );
});
