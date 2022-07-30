import { generatePashword } from "../utils/pashword";

test("Password is always the same", () => {
  expect(
    generatePashword(
      `{"website":"reddit.com","username":"asda1111","password":"asdasd1"}`,
      20,
      "reddit.com",
      "asda1111"
    )
  ).toBe("&a3SZ5e$99m%ZK9rN*_T");
});

test("Contains a number, symbol and alphabets", () => {
  expect(
    generatePashword(
      `{"website":"a.com","username":"a","password":"a"}`,
      20,
      "a.com",
      "a"
    )
  ).toMatch(/[a-z]+[A-Z]+[0-9]+[@#$%&*\._!]+/);
});

test("Contains a number, symbol and alphabets", () => {
  expect(
    generatePashword(
      `{"website":"a.com","username":"a1","password":"a"}`,
      20,
      "a.com",
      "a"
    )
  ).toMatch(/[a-z]+[A-Z]+[0-9]+[@#$%&*\._!]+/);
});
