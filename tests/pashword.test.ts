import PASSWORD_LENGTH from "../constants/passwordLength";
import { generatePashword } from "@pashword/pashword-lib";

test("Password is always the same", async () => {
  const t1 = await generatePashword(
    `{"website":"reddit.com","username":"asda1111","password":"asdasd1"}`,
    PASSWORD_LENGTH.LARGE,
    "reddit.com",
    "asda1111"
  );
  expect(t1).toBe("&a3SZ5e$99m%ZK9rN*_T");

  const t2 = await generatePashword(
    `{"website":"reddit.com","username":"asdasda","password":"asasdasd"}`,
    PASSWORD_LENGTH.SMALL,
    "reddit.com",
    "asdasda"
  );

  expect(t2).toBe("fAp.&5Ri82#");

  const t3 = await generatePashword(
    `{"website":"asjdajsd.com","username":"asdiuhas9h321940u23u9rb2i230","password":"sdihjc8sydc 23474 8234 90-24"}`,
    PASSWORD_LENGTH.SMALL,
    "asjdajsd.com",
    "asdiuhas9h321940u23u9rb2i230"
  );
  expect(t3).toBe("2_Rz_W8iseA");

  const t4 = await generatePashword(
    `{"website":"asjdajsd.com","username":"asdiuhas9h321940u23u9rb2i230","password":"sdihjc8sydc 23474 8234 90-24"}`,
    PASSWORD_LENGTH.MEDIUM,
    "asjdajsd.com",
    "asdiuhas9h321940u23u9rb2i230"
  );
  expect(t4).toBe("H_ex3WOq*eA2a_T");

  const t5 = await generatePashword(
    `{"website":"asjdajsd.com","username":"asdiuhas9h321940u23u9rb2i230","password":"sdihjc8sydc 23474 8234 90-24"}`,
    PASSWORD_LENGTH.LARGE,
    "asjdajsd.com",
    "asdiuhas9h321940u23u9rb2i230"
  );
  expect(t5).toBe("20_xMWOiseA2a_TdvpZL");
});

test("Contains a number, symbol and alphabets", async () => {
  const t1 = await generatePashword(
    `{"website":"a.com","username":"a","password":"a"}`,
    20,
    "a.com",
    "a"
  );
  expect(t1).toMatch(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&*\._!])/);

  const t2 = await generatePashword(
    `{"website":"a.com","username":"a1","password":"a"}`,
    20,
    "a.com",
    "a"
  );
  expect(t2).toMatch(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&*\._!])/);

  // This test doesn't work, the regex may need to be reworked
  // TODO: fix this test
  // expect("aBca1.").toMatch(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*@#$%&*\._!)/);
});
