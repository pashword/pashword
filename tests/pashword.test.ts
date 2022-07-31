import PASSWORD_LENGTH from "../constants/passwordLength";
import { generatePashword } from "../utils/pashword";

test("Password is always the same", () => {
  expect(
    generatePashword(
      `{"website":"reddit.com","username":"asda1111","password":"asdasd1"}`,
      PASSWORD_LENGTH.LARGE,
      "reddit.com",
      "asda1111"
    )
  ).toBe("&a3SZ5e$99m%ZK9rN*_T");

  expect(
    generatePashword(
      `{"website":"reddit.com","username":"asdasda","password":"asasdasd"}`,
      PASSWORD_LENGTH.SMALL,
      "reddit.com",
      "asdasda"
    )
  ).toBe("fAp.&5Ri82#");

  expect(
    generatePashword(
      `{"website":"asjdajsd.com","username":"asdiuhas9h321940u23u9rb2i230","password":"sdihjc8sydc 23474 8234 90-24"}`,
      PASSWORD_LENGTH.SMALL,
      "asjdajsd.com",
      "asdiuhas9h321940u23u9rb2i230"
    )
  ).toBe("2_Rz_W8iseA");

  expect(
    generatePashword(
      `{"website":"asjdajsd.com","username":"asdiuhas9h321940u23u9rb2i230","password":"sdihjc8sydc 23474 8234 90-24"}`,
      PASSWORD_LENGTH.MEDIUM,
      "asjdajsd.com",
      "asdiuhas9h321940u23u9rb2i230"
    )
  ).toBe("H_ex3WOq*eA2a_T");

  expect(
    generatePashword(
      `{"website":"asjdajsd.com","username":"asdiuhas9h321940u23u9rb2i230","password":"sdihjc8sydc 23474 8234 90-24"}`,
      PASSWORD_LENGTH.LARGE,
      "asjdajsd.com",
      "asdiuhas9h321940u23u9rb2i230"
    )
  ).toBe("20_xMWOiseA2a_TdvpZL");
});

test("Contains a number, symbol and alphabets", () => {
  expect(
    generatePashword(
      `{"website":"a.com","username":"a","password":"a"}`,
      20,
      "a.com",
      "a"
    )
  ).toMatch(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&*\._!])/);

  expect(
    generatePashword(
      `{"website":"a.com","username":"a1","password":"a"}`,
      20,
      "a.com",
      "a"
    )
  ).toMatch(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&*\._!])/);

  expect("aBca1.").toMatch(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*@#$%&*\._!)/);
});
